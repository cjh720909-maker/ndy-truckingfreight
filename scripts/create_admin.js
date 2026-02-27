require('dotenv').config();
const storage = require('../api/storage');
const bcrypt = require('bcrypt');

async function createAdmin() {
    const loginId = 'admin';
    const password = 'admin1234'; // 초기 비밀번호
    const name = '관리자';
    const role = 'ADMIN';

    try {
        // 기존 계정 확인
        const existing = await storage.getUser(loginId);
        if (existing) {
            console.log(`User '${loginId}' already exists.`);
            return;
        }

        // 비밀번호 해싱
        const hashedPassword = await bcrypt.hash(password, 10);

        // 계정 생성
        const result = await storage.createUser({
            loginId,
            password: hashedPassword,
            name,
            role,
            affiliationId: null
        });

        if (result) {
            console.log(`Admin user created successfully: ${loginId} / ${password}`);
        } else {
            console.error('Failed to create admin user.');
        }

    } catch (e) {
        console.error('Error creating admin user:', e);
    } finally {
        // 연결 종료 (필요시)
        process.exit();
    }
}

createAdmin();
