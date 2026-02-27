const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('../prisma/generated/neon');

const neon = new PrismaClient();
const DATA_DIR = path.join(__dirname, '..', 'data');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function migrate() {
    console.log('--- [Neon DB] NTF 최종 마이그레이션 시작 (oldId 전략) ---');

    try {
        const drivers = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'drivers.json'), 'utf8'));
        const fees = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'fee_master.json'), 'utf8'));
        const history = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'settlement_history.json'), 'utf8'));

        // 1. 소속(Affiliation) 처리
        const affNames = new Set();
        drivers.forEach(d => { if (d.affiliation) affNames.add(d.affiliation.trim()); });
        fees.forEach(f => { if (f.affiliation) affNames.add(f.affiliation.trim()); });
        
        console.log(`[1/4] 소속 데이터(${affNames.size}건) 처리 중...`);
        const affMap = {};
        for (const name of affNames) {
            const aff = await neon.affiliation.upsert({
                where: { name: name },
                update: {},
                create: { name: name }
            });
            affMap[name] = aff.id;
        }

        // 2. 기사(Driver) 데이터 - 배치 처리 (oldId 사용)
        console.log(`[2/4] 기사 데이터(${drivers.length}건) 이전 중 (Batch size: 50)...`);
        const BATCH_SIZE = 50;
        for (let i = 0; i < drivers.length; i += BATCH_SIZE) {
            const batch = drivers.slice(i, i + BATCH_SIZE);
            await Promise.all(batch.map(d => 
                neon.driver.upsert({
                    where: { id: -1 }, // ID는 자동 생성되므로 oldId로 중복 유무 확인 로직 필요하나 upsert는 PK/Unique 기준임
                    // 여기서는 단순히 모든 기사를 새로 생성하거나, oldId 유니크 제약이 없으므로 findFirst 후 create
                    // 안전을 위해 findFirst로 중복 체크
                    create: {
                        oldId: String(d.idx),
                        name: d.name,
                        affiliationId: affMap[d.affiliation] || null,
                        tonnage: d.tonnage,
                        regDate: d.regDate ? new Date(d.regDate) : null,
                        address: d.address,
                        memo: d.memo
                    },
                    update: {
                        name: d.name,
                        affiliationId: affMap[d.affiliation] || null,
                        tonnage: d.tonnage,
                        regDate: d.regDate ? new Date(d.regDate) : null,
                        address: d.address,
                        memo: d.memo
                    }
                }).catch(async (e) => {
                     // upsert id: -1 에러 시 수동 처리
                     const existing = await neon.driver.findFirst({ where: { oldId: String(d.idx) } });
                     if (!existing) {
                         await neon.driver.create({
                             data: {
                                 oldId: String(d.idx),
                                 name: d.name,
                                 affiliationId: affMap[d.affiliation] || null,
                                 tonnage: d.tonnage,
                                 regDate: d.regDate ? new Date(d.regDate) : null,
                                 address: d.address,
                                 memo: d.memo
                             }
                         });
                     }
                })
            ));
            console.log(`  - ${Math.min(i + BATCH_SIZE, drivers.length)}/${drivers.length} 완료...`);
            await sleep(200);
        }

        // 3. 단가 및 계약 데이터
        console.log(`[3/4] 단가 데이터 처리 중...`);
        const feeGroups = {};
        fees.forEach(f => {
            const affId = affMap[f.affiliation];
            if (!affId) return;
            const key = `${affId}_${f.year}`;
            if (!feeGroups[key]) feeGroups[key] = [];
            feeGroups[key].push(f);
        });

        for (const key of Object.keys(feeGroups)) {
            const [affId, year] = key.split('_');
            const details = feeGroups[key];

            let contract = await neon.yongchaContract.findFirst({
                where: { affiliationId: parseInt(affId), year: parseInt(year) }
            });

            if (!contract) {
                contract = await neon.yongchaContract.create({
                    data: {
                        affiliationId: parseInt(affId),
                        year: parseInt(year),
                        startDate: new Date(`${year}-01-01`),
                        endDate: new Date(`${year}-12-31`),
                        status: 'ACTIVE',
                        memo: 'Migrated'
                    }
                });
            }

            await neon.yongchaRateDetail.deleteMany({ where: { contractId: contract.id } });
            await neon.yongchaRateDetail.createMany({
                data: details.map(f => ({
                    oldId: String(f.idx),
                    contractId: contract.id,
                    region: f.region,
                    tonnage: f.tonnage || 'ALL',
                    price: parseInt(f.price || 0),
                    memo: f.memo || ''
                }))
            });
        }

        // 4. 정산 내역 - 배치 처리 (oldId 사용)
        console.log(`[4/4] 정산 내역(${history.length}건) 이전 중 (Batch size: 100)...`);
        const HIST_BATCH = 100;
        for (let i = 0; i < history.length; i += HIST_BATCH) {
            const batch = history.slice(i, i + HIST_BATCH);
            await Promise.all(batch.map(async (h) => {
                const existing = await neon.settlementHistory.findFirst({ where: { oldId: String(h.idx) } });
                if (existing) return;

                const dateObj = h.date ? new Date(h.date) : new Date();
                dateObj.setHours(0, 0, 0, 0);
                await neon.settlementHistory.create({
                    data: {
                        oldId: String(h.idx),
                        date: dateObj,
                        driverName: h.name,
                        affiliation: h.so,
                        tonnage: h.tonnage || '',
                        destCount: parseInt(h.destCount || 0),
                        totalWeight: parseInt(h.totalWeight || 0),
                        fee: parseInt(h.kum || 0),
                        memo: h.memo,
                        isPbox: !!h.isPbox,
                        isReturn: !!h.isReturn,
                        so: h.so,
                        nap: h.nap,
                        ton: h.ton ? parseInt(h.ton) : null,
                        status: 'COMPLETED'
                    }
                }).catch(e => {}); 
            }));
            console.log(`  - ${Math.min(i + HIST_BATCH, history.length)}/${history.length} 완료...`);
            await sleep(300);
        }

        console.log('--- Neon DB 마이그레이션 최종 완료 ---');
    } catch (error) {
        console.error('마이그레이션 중 오류:', error);
    } finally {
        await neon.$disconnect();
    }
}

migrate();

