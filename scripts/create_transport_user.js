const { PrismaClient: LocalClient } = require('../prisma/generated/local'); // 로컬용
// const { PrismaClient: NeonClient } = require('../prisma/generated/neon'); // Neon용

const prisma = new LocalClient(); // 로컬 DB 사용 시
// const prisma = new NeonClient(); // Neon DB 사용 시

const bcrypt = require('bcrypt');

async function createTransportUser() {
    const loginId = 'user_transport';
    const password = 'user1234';
    const name = '테스트운송사';
    const affiliationName = '이룸물류'; // 실제 존재하는 운송사 명칭이어야 함 (또는 새로 생성)

    try {
        console.log(`[Script] 운송사 계정 생성 시작: ${loginId}`);

        // 1. 운송사 정보 확인 또는 생성
        let affiliation = await prisma.affiliation.findUnique({
            where: { name: affiliationName }
        });

        if (!affiliation) {
            console.log(`[Script] '${affiliationName}' 운송사 정보가 없어 새로 생성합니다.`);
            affiliation = await prisma.affiliation.create({
                data: {
                    name: affiliationName,
                    memo: '테스트용 자동 생성'
                }
            });
        }
        console.log(`[Script] 소속 운송사 ID: ${affiliation.id} (${affiliation.name})`);

        // 2. 비밀번호 해싱
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. 사용자 생성 (기존에 있으면 업데이트)
        const user = await prisma.user.upsert({
            where: { loginId },
            update: {
                password: hashedPassword,
                name,
                role: 'TRANSPORT',
                affiliationId: affiliation.id
            },
            create: {
                loginId,
                password: hashedPassword,
                name,
                role: 'TRANSPORT',
                affiliationId: affiliation.id
            }
        });

        console.log(`[Success] 계정이 생성/업데이트 되었습니다.`);
        console.log(`-------------------------------------------`);
        console.log(`ID: ${user.loginId}`);
        console.log(`PW: ${password}`);
        console.log(`Role: ${user.role}`);
        console.log(`Affiliation: ${affiliation.name}`);
        console.log(`-------------------------------------------`);

    } catch (e) {
        console.error("[Error] 계정 생성 실패:", e);
    } finally {
        await prisma.$disconnect();
    }
}

createTransportUser();
