/**
 * public/auth_client.js
 * 프론트엔드 인증 및 세션 관리 모듈
 */

const Auth = {
    TOKEN_KEY: 'ndy_token',
    USER_KEY: 'ndy_user',

    /**
     * 초기화: 세션 확인 및 메뉴 필터링
     */
    async init() {
        const token = localStorage.getItem(this.TOKEN_KEY);
        const user = this.getUser();

        // 1. 로그인 여부 확인 (메인 페이지에서만)
        const isLoginPage = window.location.pathname.endsWith('login.html');
        if (!token && !isLoginPage) {
            console.warn("[Auth] 토큰이 없습니다. 로그인 페이지로 이동합니다.");
            window.location.href = '/login.html';
            return;
        }

        if (user) {
            this.applyRoleUI(user.role);
        }
    },

    /**
     * 로그인 시도
     */
    async login(loginId, password) {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ loginId, password })
            });

            const data = await res.json();
            if (res.ok) {
                localStorage.setItem(this.TOKEN_KEY, data.token);
                localStorage.setItem(this.USER_KEY, JSON.stringify(data.user));
                return { success: true };
            } else {
                return { success: false, error: data.error || '로그인 실패' };
            }
        } catch (e) {
            return { success: false, error: '서버 통신 오류' };
        }
    },

    /**
     * 로그아웃
     */
    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        window.location.href = '/login.html';
    },

    /**
     * 현재 사용자 정보 가져오기
     */
    getUser() {
        const userStr = localStorage.getItem(this.USER_KEY);
        return userStr ? JSON.parse(userStr) : { name: '시스템 관리자', role: 'ADMIN' }; // 인증 없을 시 기본값
    },

    /**
     * 권한에 따른 UI 요소 제어
     */
    applyRoleUI(role) {
        console.log(`[Auth] 권한 적용: ${role}`);
        
        // 권한별 숨김 처리할 메뉴 IDs
        const permissions = {
            'TRANSPORT': ['menu-drivers', 'menu-affiliations', 'menu-contracts', 'menu-user-mgmt'], // 운수사가 못 보는 메뉴
            'MANAGER': ['menu-affiliations', 'menu-user-mgmt'], // 담당자가 못 보는 메뉴 (예시)
            'ADMIN': [] // 관리자는 다 봄
        };

        const hiddenMenus = permissions[role] || [];
        hiddenMenus.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });

        // 사용자 이름 표시
        const userEl = document.getElementById('current-user-name');
        if (userEl) userEl.innerText = this.getUser().name;

        // [추가] 권한별 검색 필터(driverInput) 제어
        const driverInput = document.getElementById('driverInput');
        if (driverInput) {
            const user = this.getUser();
            if (user.role === 'TRANSPORT') {
                // 운송사: 자신의 소속명으로 초기값 세팅 (하지만 기사명 검색을 위해 입력은 허용)
                driverInput.value = user.affiliationName || '';
                driverInput.title = "소속명 또는 기사명으로 검색하세요.";
                driverInput.classList.add('bg-slate-50');
            } else {
                // NDY 직원: 전체 조회를 위해 기본값 비움 (자유로운 검색 가능)
                // 브라우저 자동 완성을 이기기 위해 즉시 실행 및 지연 실행 병행
                const clearInput = () => {
                    driverInput.value = '';
                    driverInput.readOnly = false;
                    driverInput.title = "소속명 또는 기사명으로 검색하세요 (공백 시 전체 조회)";
                    driverInput.classList.remove('bg-slate-50', 'text-slate-500');
                };
                clearInput();
                setTimeout(clearInput, 100); // 0.1초 뒤 한 번 더 강제 초기화
                setTimeout(clearInput, 500); // 0.5초 뒤 한 번 더 강제 초기화 (확실하게)
            }
        }

        // [추가] 단가 관리 관련 버튼들 (운수사는 조회만 가능)
        if (role === 'TRANSPORT') {
            const forbiddenBtnIds = [
                'btn-fee-save', 'btn-fee-archive', 'fee-detail-excel-upload', 
                'btn-contract-header-save', 'btn-contract-header-text'
            ];
            forbiddenBtnIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = 'none';
            });
            
            // 행 추가 버튼 등 클래스로 제어되는 요소들 숨김 (필요 시)
            document.querySelectorAll('.btn-admin-only').forEach(el => el.style.display = 'none');
        }
    },

    /**
     * 모든 fetch 요청에 토큰 자동 주입 (인터셉터)
     */
    setupFetchInterceptor() {
        const originalFetch = window.fetch;
        window.fetch = async (...args) => {
            let [resource, config] = args;
            if (!config) config = {};
            if (!config.headers) config.headers = {};

            const token = localStorage.getItem(this.TOKEN_KEY);
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            return originalFetch(resource, config);
        };
    }
};

// 즉시 실행
Auth.setupFetchInterceptor();
window.Auth = Auth;
