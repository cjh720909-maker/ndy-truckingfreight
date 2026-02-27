/**
 * scripts/seed_admin.js
 * 초기 관리자 계정 및 샘플 데이터를 생성하는 스크립트
 */
const { PrismaClient: NeonClient } = require('../prisma/generated/neon');
const neon = new NeonClient();
const bcrypt = require('bcrypt');

async function seed() {
    console.log("🚀 초기 계정 생성 스크립트 시작...");

    try {
        // 1. 초기 관리자 계정 (Admin)
        const adminId = 'admin';
        const adminPw = 'admin1234';
        const hashedAdminPw = await bcrypt.hash(adminPw, 10);

        const admin = await neon.user.upsert({
            where: { loginId: adminId },
            update: {
                password: hashedAdminPw,
                name: '시스템 관리자',
                role: 'ADMIN'
            },
            create: {
                loginId: adminId,
                password: hashedAdminPw,
                name: '시스템 관리자',
                role: 'ADMIN'
            }
        });
        console.log(`✅ 관리자 계정 생성 완료: ${admin.loginId} (PW: ${adminPw})`);

        // 2. 샘플 담당자 계정 (Manager)
        const managerId = 'ndy_mgr';
        const managerPw = 'mgr1234';
        const hashedManagerPw = await bcrypt.hash(managerPw, 10);

        const manager = await neon.user.upsert({
            where: { loginId: managerId },
            update: {
                password: hashedManagerPw,
                name: '정산 담당자',
                role: 'MANAGER'
            },
            create: {
                loginId: managerId,
                password: hashedManagerPw,
                name: '정산 담당자',
                role: 'MANAGER'
            }
        });
        console.log(`✅ 담당자 계정 생성 완료: ${manager.loginId} (PW: ${managerPw})`);

        // 3. 샘플 운수사 및 계정 연동 (Transport)
        // 기존에 등록된 '테스트운송' 업체가 있다면 연결, 없으면 생성
        let aff = await neon.affiliation.findUnique({ where: { name: '테스트운송' } });
        if (!aff) {
            aff = await neon.affiliation.create({
                data: {
                    name: '테스트운송',
                    bizNo: '123-45-67890',
                    ceo: '이운송',
                    manager: '이사원'
                }
            });
            console.log(`✅ 샘플 운수사 생성 완료: ${aff.name}`);
        }

        const transportId = 'test_aff';
        const transportPw = 'aff1234';
        const hashedTransportPw = await bcrypt.hash(transportPw, 10);

        const transportUser = await neon.user.upsert({
            where: { loginId: transportId },
            update: {
                password: hashedTransportPw,
                name: '테스트운송 관리자',
                role: 'TRANSPORT',
                affiliationId: aff.id
            },
            create: {
                loginId: transportId,
                password: hashedTransportPw,
                name: '테스트운송 관리자',
                role: 'TRANSPORT',
                affiliationId: aff.id
            }
        });
        console.log(`✅ 운수사 계정 생성 완료: ${transportUser.loginId} (PW: ${transportPw}, 소속: ${aff.name})`);

        console.log("\n✨ 모든 초기 작업이 성공적으로 완료되었습니다.");
    } catch (e) {
        console.error("❌ 작업 중 오류 발생:", e);
    } finally {
        await neon.$disconnect();
    }
}

seed();
