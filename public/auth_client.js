// Auth Client Logic
const Auth = {
    getToken: () => localStorage.getItem('authToken'),
    getUser: () => ({
        role: localStorage.getItem('userRole'),
        name: localStorage.getItem('userName')
    }),
    isAuthenticated: () => true, // Always true for no-login mode
    logout: () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userName');
        location.reload(); // Just refresh instead of login page
    },
    checkAuth: () => {
        // Automatically set admin session if missing
        if (!localStorage.getItem('authToken')) {
            localStorage.setItem('authToken', 'auto-login-token');
            localStorage.setItem('userRole', 'ADMIN');
            localStorage.setItem('userName', '최팀장');
        }
    },
    // 권한에 따른 메뉴 제어
    applyRoleBasedUI: () => {
        const user = Auth.getUser();
        if (!user.role) return;

        // 사용자 이름 표시
        const userNameEl = document.getElementById('auth-user-name');
        if (userNameEl) userNameEl.innerText = `${user.name} 님`;

        // TRANSPORT(운송사) 권한일 때 숨길 메뉴들
        if (user.role === 'TRANSPORT') {
            const hiddenMenus = [
                'menu-affiliations',     // 운송업체등록
                'menu-contracts',        // 용차단가계약
                'menu-fee-entry',        // 용차단가입력
                'menu-batch-settle',     // 자동 정산
                // 'menu-drivers'        // 기사 등록은 자사 기사만 등록 가능하므로 유지 (내부 로직에서 처리)
            ];

            hiddenMenus.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('hidden');
            });
        }
    }
};

// 페이지 로드 시 인증 체크
if (window.location.pathname === '/login.html' || window.location.pathname === '/login') {
    Auth.checkAuth();
    window.location.href = '/';
} else {
    Auth.checkAuth();
    document.addEventListener('DOMContentLoaded', Auth.applyRoleBasedUI);
}

    // [Global Fetch Interceptor] 모든 API 요청에 토큰 자동 주입
    const originalFetch = window.fetch;
    window.fetch = async function (url, options = {}) {
        // API 요청인 경우에만 토큰 추가 (또는 모든 요청)
        const token = Auth.getToken();
        if (token) {
            options.headers = options.headers || {};
            // Headers 객체인 경우와 일반 객체인 경우 구분 처리
            if (options.headers instanceof Headers) {
                options.headers.set('Authorization', `Bearer ${token}`);
            } else {
                options.headers['Authorization'] = `Bearer ${token}`;
            }
        }

        const response = await originalFetch(url, options);

        // 401 Unauthorized or 403 Forbidden 시 로그아웃 처리
        if (response.status === 401 || response.status === 403) {
            // 로그인 페이지가 아닐 때만 리다이렉트
            if (window.location.pathname !== '/login.html') {
                console.warn('Unauthorized access. Redirecting to login.');
                Auth.logout();
            }
        }

        return response;
    };
}
