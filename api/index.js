// dispatch_server.js
// [SME 개발 사수] 배차 요약 화면 (기사별 납품처/중량 집계)
require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
// const open = require('open'); // 브라우저 자동 실행용 (선택 사항, 없으면 생략 가능)

const app = express();
const port = 3011; // 기존 3010과 충돌 방지
const cors = require('cors'); // CORS 미들웨어 추가 (필요시)
const auth = require('./auth'); // Import auth module
const storage = require('./storage');
const prisma = storage.mysql; // 기존 MySQL 클라이언트
const neon = storage.neon;     // 새로 추가된 Neon 클라이언트

// [Fix] BigInt JSON 직렬화 지원 (Prisma + Neon 사용 시 필수)
BigInt.prototype.toJSON = function() { return this.toString(); };

// 정적 파일 제공 (혹시 필요할 경우를 대비)
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// [Fix] Express JSON 직렬화 시 BigInt 처리 지원
app.set('json replacer', (key, value) => 
    typeof value === 'bigint' ? value.toString() : value
);


app.use('/api/auth', auth.router); // Register auth router


const iconv = require('iconv-lite');

// ------------------------------------------------------------------
// [핵심] 깨진 한글 복구 함수 (EUC-KR)
// ------------------------------------------------------------------
function fixEncoding(str) {
    if (typeof str !== 'string') return str;
    try {
        // DB에서 binary로 읽어서 EUC-KR로 디코딩
        return iconv.decode(Buffer.from(str, 'binary'), 'euc-kr');
    } catch (e) {
        return str;
    }
}

// ------------------------------------------------------------------
// API: 배차 요약 정보 조회
// ------------------------------------------------------------------
app.get('/api/summary', auth.verifyToken, async (req, res) => {
    try {
        const { startDate, endDate, drivers, affiliations, custName } = req.query;
        const user = req.user; // Token에서 파싱된 사용자 정보

        if (!startDate || !endDate) {
            return res.status(400).json({ error: "시작일과 종료일을 입력해주세요." });
        }

        const isNdyStaff = user.role === 'ADMIN' || user.role === 'MANAGER';
        console.log(`[API] 배차 요약 조회 요청: ${startDate} ~ ${endDate}, User: ${user.name}(${user.role}), NDY Staff: ${isNdyStaff}`);

        // 고객사 필터링 조건
        let customerCondition = "";
        if (custName && custName !== "") {
            customerCondition = ` AND TRIM(CONVERT(CAST(b.CB_DIV_CUST AS BINARY) USING euckr)) = CONVERT('${custName}' USING euckr)`;
        }

        const query = `
        SELECT
            b.B_DATE,
            c.CA_NAME,
            c.CA_NO,
            c.CA_KG,
            c.CA_GUN,
            GROUP_CONCAT(DISTINCT b.B_C_NAME SEPARATOR ', ') as dest_list,
            GROUP_CONCAT(DISTINCT b.CB_ADDRESS SEPARATOR '||') as addr_list,
            COUNT(DISTINCT b.B_C_NAME) as delivery_dest_count,
            COUNT(*) as total_count,
            SUM(b.B_KG) as total_weight
        FROM t_balju b
        LEFT JOIN t_car c ON b.CB_DRIVER = c.CB_DRIVER
        WHERE b.B_DATE >= '${startDate}' AND b.B_DATE <= '${endDate}'
        ${customerCondition}
        AND b.CB_DRIVER IS NOT NULL AND b.CB_DRIVER <> ''
        GROUP BY b.B_DATE, c.CA_NAME, c.CA_NO, c.CA_KG, c.CA_GUN
        ORDER BY b.B_DATE ASC, c.CA_NAME ASC
        `;

        const result = await prisma.$queryRawUnsafe(query);

        // [보안] 등록된 기사 및 업체 목록 로드 (권한별 필터링 적용)
        let [registeredDrivers, allAffiliations] = await Promise.all([
            storage.getDrivers(),
            storage.getAffiliations()
        ]);

        const masterDrivers = [...registeredDrivers]; // [추가] 검증을 위한 전체 기사 목록 보존

        // TRANSPORT 권한이면 자사 소속 정보만 활용
        if (user.role === 'TRANSPORT') {
            if (!user.affiliationId) {
                registeredDrivers = [];
                allAffiliations = allAffiliations.filter(a => a.id === -1);
            } else {
                registeredDrivers = registeredDrivers.filter(d => d.affiliationId === user.affiliationId);
                allAffiliations = allAffiliations.filter(a => a.id === user.affiliationId);
            }
        }

        const registeredNames = new Set(registeredDrivers.map(d => (d.name || '').replace(/\s/g, '').trim()));

        // BigInt 처리 + 한글 인코딩 변환 + 이름 조합
        const serializedResult = result.map(row => {
            // [개선] 날짜 형식을 YYYY-MM-DD로 고정 (중복 정산 방지 필터링 정확도 향상)
            const rawDate = row.B_DATE || '';
            const date = (typeof rawDate === 'string') ? rawDate.substring(0, 10) : new Date(rawDate).toISOString().split('T')[0];
            const realName = fixEncoding(row.CA_NAME) || '미지정';
            const carNo = fixEncoding(row.CA_NO) || '';
            const destList = fixEncoding(row.dest_list) || '';
            const addrList = fixEncoding(row.addr_list) || '';
            const driverDiv = fixEncoding(row.CA_GUN) || '-';

            const rawKg = parseFloat(row.CA_KG || 0);
            let normalizedTonnage = "1T";
            if (rawKg >= 3.5) normalizedTonnage = "3.5T";
            else if (rawKg >= 2.5) normalizedTonnage = "2.5T";
            else normalizedTonnage = "1T";

            return {
                date: date,
                driverName: realName.trim(), // [수정] 미세한 공백 제거
                driverDiv: driverDiv.trim(),
                carNo: carNo.trim(),
                destList: destList,
                addrDetail: addrList,
                maxWeight: rawKg * 1000,
                tonnage: normalizedTonnage,
                destCount: Number(row.delivery_dest_count || 0),
                totalCount: Number(row.total_count || 0),
                totalWeight: Number(row.total_weight || 0)
            };
        });

        // [필터링] 기사명 또는 소속사명 검색 조건 추출
        const searchDrivers = req.query.drivers ? req.query.drivers.split(',').map(d => d.trim()).filter(d => d) : [];
        const searchAffiliations = req.query.affiliations ? req.query.affiliations.split(',').map(a => a.trim()).filter(a => a) : [];

        console.log(`[API] 필터: Drivers=[${searchDrivers}], Affiliations=[${searchAffiliations}]`);

        // [핵심] 날짜 + 기사명 기준 통합
        const consolidatedMap = new Map();

        serializedResult.forEach(row => {
            const cleanDriverName = (row.driverName || '').replace(/\s/g, '').trim();

            // 0. 기사 마스터 정보 매칭 (없더라도 데이터 유지)
            const registeredDriver = registeredDrivers.find(d => (d.name || '').replace(/\s/g, '').trim() === cleanDriverName);

            // 1. 업체 마스터 기반 소속 추론 (최팀장님 요청: 이름에 업체명이 들어있으면 해당 소속으로 간주)
            const guessedAffiliation = allAffiliations.find(a => cleanDriverName.toLowerCase().includes((a.name || '').replace(/\s/g, '').trim().toLowerCase()));
            
            // [중요 필터링] 등록된 기사이거나, 이름이 등록된 업체명을 포함하고 있는 경우만 노출 (자사 기사 등 노이즈 제거)
            // NDY 직원이 조회를 하더라도 정산 시스템의 본질인 '용차 전용' 조회를 유지하기 위해 필터를 복구합니다.
            if (!registeredDriver && !guessedAffiliation) return;

            // 2. 최종 소속 정보 결정
            const finalAffiliation = registeredDriver ? (registeredDriver.affiliation || '') : (guessedAffiliation ? guessedAffiliation.name : row.driverDiv);
            const cleanAffiliation = (finalAffiliation || '').replace(/\s/g, '').trim();

            // 3. 통합 검색 필터링 (소속사명 또는 기사명에 검색어가 걸리면 모두 표시)
            if (searchAffiliations.length > 0) {
                const isMatch = searchAffiliations.some(an => 
                    cleanAffiliation.toLowerCase().includes(an.replace(/\s/g, '').toLowerCase()) ||
                    cleanDriverName.toLowerCase().includes(an.replace(/\s/g, '').toLowerCase())
                );
                if (!isMatch) return;
            }

            const key = `${row.date}_${cleanDriverName}`;
            if (!consolidatedMap.has(key)) {
                consolidatedMap.set(key, {
                    date: row.date,
                    driverName: row.driverName,
                    // [개선] 기사 마스터 또는 추론된 소속 우선 사용
                    driverDiv: finalAffiliation || '-',
                    tonnage: row.tonnage,
                    destDetail: '',
                    addrDetail: '',
                    destCount: 0,
                    totalCount: 0,
                    totalWeight: 0,
                    destSet: new Set(),
                    addrSet: new Set()
                });
            }

            const target = consolidatedMap.get(key);
            if ((!target.driverDiv || target.driverDiv === '-') && (row.driverDiv && row.driverDiv !== '-')) {
                target.driverDiv = row.driverDiv.replace(/[\r\n]/g, ' ').trim();
            }

            // target.destCount += row.destCount; // 단순 합산 대신 고유 주소 카운트로 대체 (최팀장님 요청)
            target.totalCount += row.totalCount;
            target.totalWeight += row.totalWeight;

            // 납품처 및 주소 리스트 합치기
            if (row.destList) {
                row.destList.split(',').forEach(d => {
                    const trimmed = d.replace(/[\r\n]/g, ' ').trim();
                    if (trimmed) target.destSet.add(trimmed);
                });
            }
            if (row.addrDetail) {
                row.addrDetail.split('||').forEach(a => {
                    const trimmed = a.replace(/[\r\n]/g, ' ').trim();
                    if (trimmed) target.addrSet.add(trimmed);
                });
            }
        });

        const history = await storage.getHistory();
        const settledKeys = new Set(
            history.map(h => `${h.date}_${(h.driverName || h.name || '').replace(/\s/g, '').trim()}`)
        );

        const finalResult = Array.from(consolidatedMap.values())
            .map(item => {
                const cleanName = (item.driverName || '').replace(/\s/g, '').trim();
                const key = `${item.date}_${cleanName}`;

                item.destDetail = Array.from(item.destSet).join(', ') || '-';
                item.addrDetail = Array.from(item.addrSet).join('||') || '-';
                item.destCount = item.addrSet.size;
                item.totalWeight = Math.ceil(item.totalWeight || 0);

                // 정산 여부 및 기존 정산 정보 매칭
                const settledItem = history.find(h => `${h.date}_${(h.driverName || h.name || '').replace(/\s/g, '').trim()}` === key);
                item.isSettled = !!settledItem;
                item.settledAmount = settledItem ? (settledItem.kum || settledItem.fee || 0) : 0;
                item.settledStatus = settledItem ? (settledItem.status || 'SETTLED') : 'READY';

                delete item.destSet;
                delete item.addrSet;
                return item;
            });

        // 전체 합계 계산 (통합된 결과 기준)
        const summary = {
            totalDrivers: finalResult.length,
            totalDestinations: finalResult.reduce((acc, cur) => acc + cur.destCount, 0),
            totalShipments: finalResult.reduce((acc, cur) => acc + cur.totalCount, 0),
            totalWeight: Number(finalResult.reduce((acc, cur) => acc + cur.totalWeight, 0).toFixed(2))
        };

        // [추가] 타사 기사 검색 시 경고 메시지 생성
        let warning = null;
        if (user.role === 'TRANSPORT' && searchAffiliations.length > 0) {
            for (const term of searchAffiliations) {
                const cleanTerm = term.replace(/\s/g, '').toLowerCase();
                const existsInSystem = masterDrivers.some(d => (d.name || '').replace(/\s/g, '').toLowerCase() === cleanTerm);
                const isMyDriver = registeredDrivers.some(d => (d.name || '').replace(/\s/g, '').toLowerCase() === cleanTerm);
                
                if (existsInSystem && !isMyDriver) {
                    warning = `'${term}'님은 소속된 기사가 아닙니다.`;
                    break;
                }
            }
        }

        res.json({
            data: finalResult,
            summary: summary,
            warning: warning
        });

    } catch (e) {
        console.error("API 에러:", e);
        if (!res.headersSent) {
            res.status(500).json({ error: e.message });
        }
    }
});

// ------------------------------------------------------------------
// API: 용차 비용 목록 조회
// ------------------------------------------------------------------
app.get('/api/yongcha-costs', async (req, res) => {
    try {
        const { startDate, endDate, driverName } = req.query;
        let whereClause = "WHERE 1=1";

        if (startDate && endDate) {
            whereClause += ` AND IC_DATE >= '${startDate}' AND IC_DATE <= '${endDate}'`;
        }

        if (driverName && driverName !== '') {
            whereClause += ` AND TRIM(CONVERT(CAST(IC_NAME AS BINARY) USING euckr)) LIKE CONVERT('%${driverName}%' USING euckr)`;
        }

        const query = `
            SELECT 
                IC_IDX, IC_DATE, IC_NAME, IC_SO, IC_NAP, IC_TON, IC_KUM, IC_YO, IC_CHUNG, IC_UN, IC_MEMO, IC_DONE, IC_MAGAM
            FROM t_il_car
            ${whereClause}
            ORDER BY IC_DATE DESC, IC_IDX DESC
        `;

        const result = await prisma.$queryRawUnsafe(query);

        const safeResult = result.map(row => ({
            idx: Number(row.IC_IDX),
            date: row.IC_DATE,
            name: fixEncoding(row.IC_NAME),
            so: fixEncoding(row.IC_SO),
            nap: fixEncoding(row.IC_NAP),
            ton: fixEncoding(row.IC_TON),
            kum: Number(row.IC_KUM || 0),
            yo: fixEncoding(row.IC_YO),
            chung: fixEncoding(row.IC_CHUNG),
            un: Number(row.IC_UN || 0),
            memo: fixEncoding(row.IC_MEMO),
            done: row.IC_DONE,
            magam: row.IC_MAGAM
        }));

        res.json({ data: safeResult });

    } catch (e) {
        console.error("Yongcha GET Error:", e);
        res.status(500).json({ error: e.message });
    }
});

// ------------------------------------------------------------------
// API: 용차 비용 저장/수정 (JSON Storage 전환)
// ------------------------------------------------------------------
app.post('/api/yongcha-costs', async (req, res) => {
    try {
        const success = await storage.saveHistory(req.body);
        res.json({ success: !!success, message: success ? "저장되었습니다." : "저장 실패" });
    } catch (e) {
        console.error("Yongcha POST Error:", e);
        res.status(500).json({ error: e.message });
    }
});

// ------------------------------------------------------------------
// API: 용차 비용 삭제 (JSON Storage 전환)
// ------------------------------------------------------------------
app.delete('/api/yongcha-costs', async (req, res) => {
    try {
        const { idx } = req.query;
        if (!idx) return res.status(400).json({ error: "ID가 없습니다." });

        const success = await storage.deleteHistory(idx);
        res.json({ success: !!success, message: success ? "삭제되었습니다." : "삭제 실패" });
    } catch (e) {
        console.error("Yongcha DELETE Error:", e);
        res.status(500).json({ error: e.message });
    }
});

// ------------------------------------------------------------------
// API: 피킹 분석 정보 조회 (배차명별 상세 집계 - t_code_340 매칭 적용)


// ------------------------------------------------------------------
// API: 고객사 목록 조회 (t_cust 기준)
// ------------------------------------------------------------------
app.get('/api/customers', async (req, res) => {
    try {
        const query = `SELECT DISTINCT CB_DIV_CUST FROM t_cust WHERE CB_DIV_CUST IS NOT NULL AND CB_DIV_CUST <> '' ORDER BY CB_DIV_CUST ASC`;
        const result = await prisma.$queryRawUnsafe(query);
        const customers = result.map(row => fixEncoding(row.CB_DIV_CUST)).filter(name => name);
        console.log(`[API] 고객사 목록 로드 성공: ${customers.length}개`);
        res.json({ data: customers });
    } catch (e) {
        console.error("Customers API Error:", e);
        res.status(500).json({ error: e.message });
    }
});

// ------------------------------------------------------------------
// API: 비용 단가 마스터 (JSON Storage)
// ------------------------------------------------------------------
app.get('/api/fees', async (req, res) => {
    res.json({ data: await storage.getFees() });
});

app.post('/api/fees/archive', async (req, res) => {
    const { idx } = req.body;
    if (!idx) return res.status(400).json({ success: false, message: "ID가 필요합니다." });
    const success = await storage.saveFee({ idx, isActive: false }); // archive는 isActive=false로 처리
    res.json({ success: !!success, message: success ? "이력으로 전환되었습니다." : "전환 실패" });
});

app.post('/api/fees', async (req, res) => {
    const success = await storage.saveFee(req.body);
    res.json({ success: !!success, message: success ? "저장되었습니다." : "저장 실패" });
});

app.delete('/api/fees', async (req, res) => {
    const success = await storage.deleteFee(req.query.idx);
    res.json({ success, message: success ? "삭제되었습니다." : "삭제 실패" });
});

app.post('/api/fees/bulk', async (req, res) => {
    try {
        const { fees } = req.body;
        console.log(`[bulk] 요청 수신: ${fees ? fees.length : 0}건`);
        if (!fees || !Array.isArray(fees)) {
            return res.status(400).json({ success: false, message: "올바른 데이터 형식이 아닙니다." });
        }
        const success = await storage.saveFeesBulk(fees);
        console.log(`[bulk] 저장 성공 여부: ${success}`);
        res.json({ success: !!success, message: success ? `${fees.length}건의 단가가 처리되었습니다.` : "일괄 저장 실패" });
    } catch (e) {
        console.error("[bulk] 에러 발생:", e);
        res.status(500).json({ success: false, message: "서버 처리 중 오류가 발생했습니다: " + e.message });
    }
});

app.get('/api/ping', (req, res) => res.json({ status: 'ok', time: new Date() }));

// ------------------------------------------------------------------
// API: 정산 결과 저장 및 히스토리 조회
// ------------------------------------------------------------------
// API: 정산 결과 저장 및 히스토리 조회
// ------------------------------------------------------------------
app.get('/api/settlement-history', auth.verifyToken, async (req, res) => {
    const { startDate, endDate, name, driverName, affiliation } = req.query;
    const searchTarget = (driverName || name || affiliation || '').trim();
    const user = req.user;

    // TRANSPORT 권한이면 affiliationId 전달, NDY 직원이면 null (전체 조회)
    const isAdminOrManager = user.role === 'ADMIN' || user.role === 'MANAGER';
    const affiliationId = (user.role === 'TRANSPORT') ? user.affiliationId : null;
    let list = await storage.getHistory(affiliationId);

    // 백엔드 필터링 적용
    if (startDate || endDate || searchTarget) {
        list = list.filter(row => {
            if (startDate && row.date < startDate) return false;
            if (endDate && row.date > endDate) return false;

            if (searchTarget) {
                const s = searchTarget.replace(/\s/g, '').toLowerCase();
                const dName = (row.driverName || row.name || '').replace(/\s/g, '').toLowerCase();
                const affName = (row.affiliation || '').replace(/\s/g, '').toLowerCase();
                // 기사명 또는 소속사명에 포함되면 노출
                if (!dName.includes(s) && !affName.includes(s)) return false;
            }
            return true;
        });
    }

    // 최신순 정렬
    list.sort((a, b) => {
        if (a.date !== b.date) return b.date.localeCompare(a.date);
        return (b.idx || 0) - (a.idx || 0);
    });

    res.json({ data: list });
});

app.post('/api/save-settlement', auth.verifyToken, async (req, res) => {
    // [중요] TRANSPORT 권한은 자신의 소속 기사/내역만 저장 가능하도록 검증 필요
    // 현재는 MVP 단계라 클라이언트 신뢰 + affiliationId 있다면 강제 주입 고려
    const user = req.user;
    const payload = { ...req.body };

    if (user.role === 'TRANSPORT') {
        // 운송사는 자신의 affiliationName을 강제로 사용하거나, 
        // 입력된 affiliation이 자신의 것과 일치하는지 확인해야 함.
        // 여기서는 간단하게 로깅만 하고 허용 (추후 강화 필요)
        console.log(`Warning: Settlement save by TRANSPORT user ${user.loginId}`);
    }

    const success = await storage.saveHistory(payload);
    res.json({ success: !!success, message: success ? "정산 기록이 전송되었습니다." : "전송 실패" });
});

app.delete('/api/settlement-history', auth.verifyToken, async (req, res) => {
    // [중요] 삭제 권한 검증 필요
    const success = await storage.deleteHistory(req.query.idx);
    res.json({ success, message: success ? "삭제되었습니다." : "삭제 실패" });
});

// ------------------------------------------------------------------
// API: 용차 기사 마스터
// ------------------------------------------------------------------
app.get('/api/drivers', auth.verifyToken, async (req, res) => {
    const user = req.user;
    const affiliationId = (user.role === 'TRANSPORT') ? user.affiliationId : null;
    res.json({ data: await storage.getDrivers(affiliationId) });
});

app.post('/api/drivers', auth.verifyToken, async (req, res) => {
    const user = req.user;
    const payload = { ...req.body };

    if (user.role === 'TRANSPORT') {
        if (!user.affiliationId) return res.status(403).json({ success: false, message: "권한이 없습니다." });
        // 강제로 소속 ID 주입
        payload.affiliationId = user.affiliationId;
    }

    const success = await storage.saveDriver(payload);
    res.json({ success: !!success, message: success ? "저장되었습니다." : "저장 실패" });
});

app.delete('/api/drivers', auth.verifyToken, async (req, res) => {
    // [중요] 삭제 권한 검증 필요 (자사 기사인지)
    const success = await storage.deleteDriver(req.query.idx);
    res.json({ success, message: success ? "삭제되었습니다." : "삭제 실패" });
});

// ------------------------------------------------------------------
// API: 소속 마스터
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// API: 소속 마스터
// ------------------------------------------------------------------
app.get('/api/affiliations', auth.verifyToken, async (req, res) => {
    const user = req.user;
    try {
        const affiliationId = (user.role === 'TRANSPORT') ? user.affiliationId : null;
        const data = await storage.getAffiliations(affiliationId);
        res.json({ data });
    } catch (e) {
        console.error("API Affiliation GET Error:", e);
        res.status(500).json({ success: false, message: "업체 목록 조회 중 오류 발생: " + e.message });
    }
});

app.post('/api/affiliations', auth.verifyToken, async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: "관리자만 가능합니다." });
    
    try {
        const result = await storage.saveAffiliation(req.body);
        
        // 에러 객체가 반환된 경우 처리 (Prisma 수준 에러 등)
        if (result && result.error) {
            return res.status(400).json({ 
                success: false, 
                code: result.code,
                message: result.message 
            });
        }
        
        res.json({ success: !!result, message: result ? "저장되었습니다." : "저장 실패" });
    } catch (e) {
        console.error("API Affiliation POST Error:", e);
        res.status(500).json({ success: false, message: e.message || "서버 저장 중 오류 발생" });
    }
});

app.delete('/api/affiliations', auth.verifyToken, async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: "관리자만 가능합니다." });
    const success = await storage.deleteAffiliation(req.query.idx);
    res.json({ success, message: success ? "삭제되었습니다." : "삭제 실패" });
});

// ------------------------------------------------------------------
// API: 헬스체크 및 버전 확인
// ------------------------------------------------------------------
app.get('/api/ping', (req, res) => {
    res.json({ status: 'ok', version: '1.3.2', time: new Date() });
});

// ------------------------------------------------------------------
// API: 용차 계약 관리 (3단계 프로세스 중 2단계: 계약 헤더)
// ------------------------------------------------------------------
app.get('/api/contracts', auth.verifyToken, async (req, res) => {
    try {
        const user = req.user;
        const affiliationId = (user.role === 'TRANSPORT') ? user.affiliationId : null;
        const data = await storage.getContracts(affiliationId);
        res.json({ success: true, data });
    } catch (e) {
        console.error("API Contract GET Error:", e);
        res.status(500).json({ success: false, message: e.message });
    }
});

app.post('/api/contracts', auth.verifyToken, async (req, res) => {
    try {
        if (req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: "관리자만 가능합니다." });
        const payload = req.body;
        const result = await storage.saveContract(payload);
        res.json({ success: true, data: result });
    } catch (e) {
        console.error("API Contract POST Error:", e);
        res.status(500).json({ success: false, message: e.message });
    }
});

app.delete('/api/contracts', auth.verifyToken, async (req, res) => {
    try {
        if (req.user.role !== 'ADMIN') return res.status(403).json({ success: false, message: "관리자만 가능합니다." });
        const success = await storage.deleteContract(req.query.id);
        res.json({ success: !!success, message: success ? "삭제되었습니다." : "삭제 실패" });
    } catch (e) {
        console.error("API Contract DELETE Error:", e);
        res.status(500).json({ success: false, message: e.message });
    }
});

// [개선] SPA Fallback: 모든 API 이외의 경로는 index.html을 반환하여 클라이언트 라우팅 지원
app.use((req, res, next) => {
    if (req.path.startsWith('/api') || req.path.includes('.')) {
        return next();
    }
    const fs = require('fs');
    const indexPath = path.join(__dirname, '..', 'public', 'index.html');

    if (fs.existsSync(indexPath)) {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(indexPath).pipe(res);
    } else {
        console.error("[SPA Fallback] 파일을 찾을 수 없음:", indexPath);
        res.status(404).send("메인 페이지를 찾을 수 없습니다.");
    }
});

// 글로벌 에러 핸들러 (최하단에 위치)
app.use((err, req, res, next) => {
    console.error("[Global Error]", err);
    res.status(err.status || 500).json({
        success: false,
        message: "서버 오류가 발생했습니다.",
        error: err.message
    });
});

// ------------------------------------------------------------------
// API: 사용자(User) 관리 (ADMIN 전용)
// ------------------------------------------------------------------
app.get('/api/users', auth.verifyToken, async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.status(403).json({ error: '권한이 없습니다.' });
    try {
        const users = await neon.user.findMany({
            include: { Affiliation: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json({ success: true, data: users });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/users', auth.verifyToken, async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.status(403).json({ error: '권한이 없습니다.' });
    const { id, loginId, password, name, role, affiliationId } = req.body;
    try {
        const data = {
            loginId,
            name,
            role,
            affiliationId: affiliationId ? parseInt(affiliationId) : null
        };

        if (password) {
            const bcrypt = require('bcrypt');
            data.password = await bcrypt.hash(password, 10);
        }

        let user;
        if (id) {
            user = await neon.user.update({ where: { id: parseInt(id) }, data });
        } else {
            user = await neon.user.create({ data });
        }
        res.json({ success: true, data: user });
    } catch (e) {
        if (e.code === 'P2002') return res.status(400).json({ error: '이미 사용 중인 아이디입니다.' });
        res.status(500).json({ error: e.message });
    }
});

app.delete('/api/users/:id', auth.verifyToken, async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.status(403).json({ error: '권한이 없습니다.' });
    try {
        await neon.user.delete({ where: { id: parseInt(req.params.id) } });
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(port, () => {
    console.log(`[NDY Dispatch] Server running at http://localhost:${port}`);
});

module.exports = app;
