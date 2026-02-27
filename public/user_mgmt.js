/**
 * public/user_mgmt.js
 * 내부 직원 및 통합 계정 관리 로직
 */

let userList = [];
let editUserId = null;

/**
 * 사용자 목록 조회
 */
async function fetchUsers() {
    const tbody = document.getElementById('user-tableBody');
    const countEl = document.getElementById('user-count');

    try {
        const res = await fetch('/api/users');
        const { data } = await res.json();
        userList = data || [];

        if (countEl) countEl.innerText = userList.length;
        renderUserList();
    } catch (e) {
        console.error('Fetch Users Error:', e);
        if (tbody) tbody.innerHTML = '<tr><td colspan="6" class="py-10 text-center text-red-500">데이터를 불러오는 중 오류가 발생했습니다. (관리자 권한 필요)</td></tr>';
    }
}

/**
 * 사용자 목록 렌더링
 */
function renderUserList() {
    const tbody = document.getElementById('user-tableBody');
    if (!tbody) return;

    if (userList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="py-20 text-center text-slate-400 italic">등록된 사용자가 없습니다.</td></tr>';
        return;
    }

    tbody.innerHTML = userList.map((user, i) => `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center text-slate-400 font-medium border-r">${i + 1}</td>
            <td class="px-4 py-3 font-bold text-slate-800">${user.name}</td>
            <td class="px-4 py-3 text-center text-indigo-600 font-mono">${user.loginId}</td>
            <td class="px-4 py-3 text-center">
                <span class="px-2 py-0.5 rounded-full text-[9px] font-bold ${user.role === 'ADMIN' ? 'bg-red-100 text-red-600' : user.role === 'MANAGER' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'}">
                    ${user.role}
                </span>
            </td>
            <td class="px-4 py-3 text-[10px] text-slate-500">
                ${user.Affiliation ? `<i class="fas fa-building mr-1"></i>${user.Affiliation.name}` : '<i class="fas fa-user-shield mr-1"></i>NDY 본사'}
            </td>
            <td class="px-4 py-3 text-center border-l">
                <div class="flex items-center justify-center gap-2">
                    <button onclick="editUser(${user.id})" class="text-indigo-600 hover:text-indigo-900 font-bold text-[10px]">수정</button>
                    ${user.loginId !== 'admin' ? `<button onclick="deleteUser(${user.id})" class="text-red-400 hover:text-red-600 font-bold text-[10px]">삭제</button>` : ''}
                </div>
            </td>
        </tr>
    `).join('');
}

/**
 * 사용자 저장/수정
 */
async function saveUserMaster() {
    const name = document.getElementById('user-name').value.trim();
    const loginId = document.getElementById('user-loginId').value.trim();
    const role = document.getElementById('user-role').value;
    const password = document.getElementById('user-password').value.trim();

    if (!name || !loginId) {
        alert("이름과 아이디를 입력해 주세요! 🧐");
        return;
    }

    const payload = {
        id: editUserId,
        name,
        loginId,
        role,
        password
    };

    try {
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await res.json();
        if (result.success) {
            alert('사용자 정보가 성공적으로 저장되었습니다. 🎉');
            resetUserForm();
            fetchUsers();
        } else {
            alert('오류 발생: ' + result.error);
        }
    } catch (e) {
        alert('서버 통신 중 오류가 발생했습니다.');
    }
}

/**
 * 수정 모드 활성화
 */
function editUser(id) {
    const user = userList.find(u => u.id === id);
    if (!user) return;

    editUserId = user.id;
    document.getElementById('user-id').value = user.id;
    document.getElementById('user-name').value = user.name;
    document.getElementById('user-loginId').value = user.loginId;
    document.getElementById('user-role').value = user.role;
    document.getElementById('user-password').value = ''; // 비밀번호는 수정 시에만 입력

    document.getElementById('btn-user-text').innerText = "사용자 정보 수정";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 삭제 처리
 */
async function deleteUser(id) {
    if (!confirm('정말로 이 계정을 삭제하시겠습니까? 관련 데이터 접근이 차단될 수 있습니다.')) return;

    try {
        const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
        const result = await res.json();
        if (result.success) {
            alert('계정이 삭제되었습니다.');
            fetchUsers();
        }
    } catch (e) {
        alert('삭제 중 오류가 발생했습니다.');
    }
}

/**
 * 폼 초기화
 */
function resetUserForm() {
    editUserId = null;
    document.getElementById('user-id').value = '';
    document.getElementById('user-name').value = '';
    document.getElementById('user-loginId').value = '';
    document.getElementById('user-role').value = 'MANAGER';
    document.getElementById('user-password').value = '';
    document.getElementById('btn-user-text').innerText = "계정 저장/수정";
}
