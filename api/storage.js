const { PrismaClient: MySQLClient } = require('@prisma/client');
const mysql = new MySQLClient();

// [로컬 테스트용] Neon 대신 로컬 SQLite 사용 여부 결정
const isLocal = process.env.USE_LOCAL_DB === 'true';
let neon;

if (isLocal) {
    const { PrismaClient: LocalClient } = require('../prisma/generated/local');
    neon = new LocalClient();
    console.log("[Storage] 로컬 SQLite DB를 사용합니다. (Neon 데이터 영향 없음)");
} else {
    const { PrismaClient: NeonClient } = require('../prisma/generated/neon');
    neon = new NeonClient();
    console.log("[Storage] 실제 Neon PostgreSQL DB를 사용 중입니다.");
}

// --- Fee Master Functions ---

// 실제 DB에 FeeMaster 모델이 없으므로, 용차 단가(YongchaRateDetail)를 조회하도록 수정
async function getFees() {
    try {
        // YongchaRateDetail과 YongchaContract를 조인하여 조회
        const fees = await neon.yongchaRateDetail.findMany({
            include: { YongchaContract: { include: { Affiliation: true } } },
            orderBy: { createdAt: 'desc' }
        });
        return fees.map(f => ({
            idx: f.id,
            contractId: f.contractId,
            region: f.region,
            price: f.price,
            memo: f.memo || '',
            year: f.YongchaContract?.year,
            affiliation: f.YongchaContract?.Affiliation?.name || '미소속',
            tonnage: f.tonnage || '-',
            status: f.YongchaContract?.status
        }));
    } catch (e) {
        console.error("Neon getFees error (YongchaRateDetail 대체 조회 시도):", e);
        return [];
    }
}

async function saveFee(fee) {
    try {
        // [주의] 실제 DB 구조가 복잡하므로 (Contract -> RateDetail), 
        // 최팀장님 지시 전까지는 단순 저장을 제한하거나 에러 방지 처리
        console.warn("단가 저장은 실제 DB 구조(Contract-Rate) 연동이 필요하여 현재는 조회를 우선합니다.");
        return false;
    } catch (e) {
        console.error("Neon saveFee error:", e);
        return false;
    }
}

// [NEW] 계약 헤더와 상세 단가를 트랜잭션으로 일괄 저장/업데이트
async function saveContract(payload) {
    const { id, year, affiliationId, startDate, endDate, status, memo, details } = payload;
    console.log(`[saveContract] ID: ${id}, Details Count: ${details ? details.length : 'N/A'}`);

    const newStartDate = startDate ? new Date(startDate) : new Date();
    const prevDay = new Date(newStartDate);
    prevDay.setDate(prevDay.getDate() - 1);

    try {
        return await neon.$transaction(async (tx) => {
            let contract;

            if (id) {
                // 1. 기존 계약 업데이트 (부분 업데이트 대응)
                const updateData = {};
                if (year && !isNaN(parseInt(year))) updateData.year = parseInt(year);
                if (startDate) updateData.startDate = new Date(startDate);
                if (endDate) updateData.endDate = new Date(endDate);
                if (status) updateData.status = status;
                if (memo !== undefined) updateData.memo = memo || '';

                contract = await tx.yongchaContract.update({
                    where: { id: parseInt(id) },
                    data: updateData
                });
            } else {
                // 2. 신규 계약 생성
                if (!affiliationId) throw new Error("신규 계약 시 affiliationId는 필수입니다.");

                // 기존 ACTIVE 계약 자동 마감 처리
                await tx.yongchaContract.updateMany({
                    where: {
                        affiliationId: parseInt(affiliationId),
                        status: 'ACTIVE'
                    },
                    data: {
                        endDate: prevDay,
                        status: 'INACTIVE'
                    }
                });

                contract = await tx.yongchaContract.create({
                    data: {
                        year: parseInt(year || new Date().getFullYear()),
                        affiliationId: parseInt(affiliationId),
                        startDate: newStartDate,
                        endDate: endDate ? new Date(endDate) : new Date('2099-12-31'),
                        status: status || 'ACTIVE',
                        memo: memo || ''
                    }
                });
            }

            // 3. 상세 단가들 갱신
            let savedCount = 0;
            if (details) {
                // 기존 상세 단가 삭제
                await tx.yongchaRateDetail.deleteMany({
                    where: { contractId: contract.id }
                });

                // 루프를 돌며 개별 생성 (신뢰도 향상)
                if (details.length > 0) {
                    for (const d of details) {
                        await tx.yongchaRateDetail.create({
                            data: {
                                contractId: contract.id,
                                tonnage: d.tonnage || null,
                                region: d.region,
                                price: parseInt(d.price || 0),
                                memo: d.memo || ''
                            }
                        });
                        savedCount++;
                    }
                }
            }
            return { ...contract, _savedCount: savedCount };
        });
    } catch (e) {
        console.error("Neon saveContract error:", e);
        throw e;
    }
}

// [NEW] 계약 목록 조회 (헤더 전용)
async function getContracts(affiliationId = null) {
    try {
        const where = {};
        if (affiliationId) {
            where.affiliationId = parseInt(affiliationId);
        }

        const contracts = await neon.yongchaContract.findMany({
            where,
            include: {
                Affiliation: true,
                YongchaRateDetail: {
                    orderBy: { region: 'asc' }
                }
            },
            orderBy: [
                { status: 'asc' }, // ACTIVE가 먼저 오게 (보통 ACTIVE가 앞글자상 빠름)
                { startDate: 'desc' }
            ]
        });

        console.log(`[getContracts] Fetched ${contracts.length} contracts.`);
        if (contracts.length > 0) {
            const firstContract = contracts[0];
            const detailCount = firstContract.YongchaRateDetail ? firstContract.YongchaRateDetail.length : 'undefined';
            console.log(`[getContracts] First contract (ID ${firstContract.id}) has ${detailCount} details.`);
        }

        return contracts;
    } catch (e) {
        console.error("Neon getContracts error:", e);
        return [];
    }
}

// [NEW] 계약 삭제
async function deleteContract(id) {
    try {
        return await neon.yongchaContract.delete({
            where: { id: parseInt(id) }
        });
    } catch (e) {
        console.error("Neon deleteContract error:", e);
        return false;
    }
}

async function deleteFee(idx) {
    try {
        await neon.feeMaster.delete({ where: { id: parseInt(idx) } });
        return true;
    } catch (e) {
        console.error("Neon deleteFee error:", e);
        return false;
    }
}

// --- Settlement History Functions ---

async function getHistory(affiliationId = null) {
    try {
        const where = {};

        // 권한 필터링: 특정 운송사 ID가 주어지면 해당 운송사의 기록만 조회
        if (affiliationId) {
            // 1. 해당 ID의 운송사 명칭 조회 (문자열 매칭을 위해)
            const aff = await neon.affiliation.findUnique({ where: { id: parseInt(affiliationId) } });
            const affName = aff ? aff.name : '###NON_EXISTENT###';

            where.OR = [
                // A. 계약이 연결된 경우: 계약의 운송사 ID로 필터링
                { YongchaContract: { affiliationId: parseInt(affiliationId) } },
                // B. 계약이 없는 경우: 업체명 문자열로 필터링 (정확 일치)
                { affiliation: affName }
            ];
        }

        const history = await neon.settlementHistory.findMany({
            where,
            orderBy: { date: 'desc' },
            include: { YongchaContract: true } // 계약 정보도 같이 로드
        });

        return history.map(h => {
            const d = h.date;
            const dateStr = d ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` : '';
            return {
                ...h,
                idx: h.id,
                driverName: h.driverName,
                date: dateStr,
                // 계약 정보가 있으면 그것을 우선시
                affiliation: h.YongchaContract?.Affiliation?.name || h.affiliation
            };
        });
    } catch (e) {
        console.error("Neon getHistory error:", e);
        return [];
    }
}

async function saveHistory(record) {
    try {
        const dateObj = record.date ? new Date(record.date) : new Date();
        dateObj.setHours(0, 0, 0, 0); // 날짜 정규화 (시간 제거)

        const data = {
            date: dateObj,
            driverName: record.driverName || record.name,
            affiliation: record.affiliation || record.driverDiv || '-',
            tonnage: record.tonnage || record.appliedTonnage,
            destCount: parseInt(record.destCount || 0),
            totalWeight: parseInt(record.totalWeight || 0),
            fee: parseInt(record.fee || 0),
            memo: record.memo || '',
            appliedTonnage: record.appliedTonnage || null,
            status: record.status || 'NEW',
            isPbox: record.isPbox === true || record.isPbox === 'true',
            isReturn: record.isReturn === true || record.isReturn === 'true',
            gwon: parseInt(record.gwon || 0),
            nap: record.nap || null,
            so: record.so || null
        };

        if (record.idx) {
            return await neon.settlementHistory.update({
                where: { id: parseInt(record.idx) },
                data
            });
        } else {
            // [중복 방지] 날짜와 기사명이 같은 기록이 이미 있으면 업데이트 시도
            const existing = await neon.settlementHistory.findFirst({
                where: {
                    date: data.date,
                    driverName: data.driverName
                }
            });

            if (existing) {
                return await neon.settlementHistory.update({
                    where: { id: existing.id },
                    data
                });
            }

            return await neon.settlementHistory.create({ data });
        }
    } catch (e) {
        console.error("Neon saveHistory error:", e);
        return false;
    }
}

async function deleteHistory(idx) {
    try {
        await neon.settlementHistory.delete({ where: { id: parseInt(idx) } });
        return true;
    } catch (e) {
        console.error("Neon deleteHistory error:", e);
        return false;
    }
}

// --- Driver Master Functions ---

async function getDrivers(affiliationId = null) {
    try {
        const where = {};
        if (affiliationId) {
            where.affiliationId = parseInt(affiliationId);
        }

        const drivers = await neon.driver.findMany({
            where,
            include: { Affiliation: true }, // 관계된 소속 정보 포함
            orderBy: { name: 'asc' }
        });
        return drivers.map(d => ({
            ...d,
            idx: d.id,
            affiliation: d.Affiliation ? d.Affiliation.name : '' // affiliation 필드 대신 관계 정보 사용
        }));
    } catch (e) {
        console.error("Neon getDrivers error:", e);
        return [];
    }
}

async function saveDriver(driver) {
    try {
        const data = {
            name: driver.name,
            affiliationId: driver.affiliationId ? parseInt(driver.affiliationId) : null,
            carNo: driver.carNo || '',
            tonnage: driver.tonnage || '',
            regDate: driver.regDate ? new Date(driver.regDate) : null,
            address: driver.address || '',
            memo: driver.memo || ''
        };

        if (driver.idx) {
            return await neon.driver.update({
                where: { id: parseInt(driver.idx) },
                data
            });
        } else {
            return await neon.driver.create({ data });
        }
    } catch (e) {
        console.error("Neon saveDriver error:", e);
        return false;
    }
}

async function deleteDriver(idx) {
    try {
        await neon.driver.delete({ where: { id: parseInt(idx) } });
        return true;
    } catch (e) {
        console.error("Neon deleteDriver error:", e);
        return false;
    }
}

// --- Affiliation Master Functions ---

async function getAffiliations(affiliationId = null) {
    try {
        const where = {};
        if (affiliationId) {
            where.id = parseInt(affiliationId);
        }

        const list = await neon.affiliation.findMany({
            where,
            orderBy: { name: 'asc' }
        });
        return list.map(a => ({
            ...a,
            idx: a.id
        }));
    } catch (e) {
        console.error("Neon getAffiliations error:", e);
        return [];
    }
}

async function saveAffiliation(aff) {
    try {
        const data = {
            name: aff.name,
            bizNo: aff.bizNo,
            ceo: aff.ceo,
            address: aff.address,
            manager: aff.manager,
            contact: aff.contact,
            email: aff.email,
            memo: aff.memo
        };

        if (aff.idx) {
            return await neon.affiliation.update({
                where: { id: parseInt(aff.idx) },
                data: data
            });
        } else {
            return await neon.affiliation.create({
                data: data
            });
        }
    } catch (e) {
        console.error("Neon saveAffiliation error:", e);
        // 에러 정보를 객체로 반환하여 API 계층에서 처리할 수 있게 함
        if (e.code === 'P2002') {
            return { error: true, code: 'DUPLICATE', message: "이미 동일한 이름의 운송업체가 등록되어 있습니다." };
        }
        return { error: true, code: 'UNKNOWN', message: e.message || "데이터베이스 저장 중 오류가 발생했습니다." };
    }
}

async function deleteAffiliation(idx) {
    try {
        await neon.affiliation.delete({ where: { id: parseInt(idx) } });
        return true;
    } catch (e) {
        console.error("Neon deleteAffiliation error:", e);
        return false;
    }
}

// --- User Functions ---

async function getUser(loginId) {
    try {
        return await neon.user.findUnique({
            where: { loginId },
            include: { Affiliation: true }
        });
    } catch (e) {
        console.error("Neon getUser error:", e);
        return null;
    }
}

async function createUser(user) {
    try {
        return await neon.user.create({
            data: {
                loginId: user.loginId,
                password: user.password,
                name: user.name,
                role: user.role || 'TRANSPORT',
                affiliationId: user.affiliationId ? parseInt(user.affiliationId) : null
            }
        });
    } catch (e) {
        console.error("Neon createUser error:", e);
        return null;
    }
}

async function updateUser(id, data) {
    try {
        return await neon.user.update({
            where: { id: parseInt(id) },
            data
        });
    } catch (e) {
        console.error("Neon updateUser error:", e);
        return null;
    }
}

module.exports = {
    getFees,
    saveFee,
    deleteFee,
    getHistory,
    saveHistory,
    deleteHistory,
    getDrivers,
    saveDriver,
    deleteDriver,
    getAffiliations,
    saveAffiliation,
    deleteAffiliation,
    saveContract,
    getContracts,
    deleteContract,
    getUser,
    createUser,
    updateUser,
    mysql,
    neon
};
