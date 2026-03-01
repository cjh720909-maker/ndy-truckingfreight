/**
 * 운송 업체 관리 로직 (affiliations.js)
 */

let affiliationList = [];
let editAffIdx = null;

/**
 * 업체 목록 조회
 */
async function fetchAffiliations() {
    const tbody = document.getElementById('aff-tableBody');
    const countEl = document.getElementById('aff-count');

    try {
        const res = await fetch('/api/affiliations');
        const { data } = await res.json();
        affiliationList = data || [];

        if (countEl) countEl.innerText = affiliationList.length;
        renderAffiliationList();
    } catch (e) {
        console.error('Fetch Affiliations Error:', e);
        if (tbody) tbody.innerHTML = '<tr><td colspan="6" class="py-10 text-center text-red-500">데이터를 불러오는 중 오류가 발생했습니다.</td></tr>';
    }
}

/**
 * 업체 목록 렌더링
 */
function renderAffiliationList() {
    const tbody = document.getElementById('aff-tableBody');
    if (!tbody) return;

    if (affiliationList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="py-20 text-center text-slate-400 italic">등록된 업체가 없습니다.</td></tr>';
        return;
    }

    tbody.innerHTML = affiliationList.map((aff, i) => `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center text-slate-400 font-medium border-r">${i + 1}</td>
            <td class="px-4 py-3 font-bold text-slate-800">${aff.name}</td>
            <td class="px-4 py-3 text-[11px]">${aff.bizNo || '-'}</td>
            <td class="px-4 py-3">
                <div class="flex flex-col">
                    <span class="font-bold text-slate-700">${aff.manager || '-'}</span>
                    <span class="text-[9px] text-slate-400">${aff.contact || '-'}</span>
                </div>
            </td>
            <td class="px-4 py-3 text-[10px] truncate" title="${aff.address}">
                <div class="truncate">${aff.address || '-'}</div>
            </td>
            <td class="px-4 py-3 text-center border-l">
                <div class="flex items-center justify-center gap-2">
                    <button onclick="editAffiliation(${aff.idx})" class="text-indigo-600 hover:text-indigo-900 font-bold text-[10px]">
                        수정
                    </button>
                    <button onclick="deleteAffiliation(${aff.idx})" class="text-red-400 hover:text-red-600 font-bold text-[10px]">
                        삭제
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

/**
 * 업체 저장/업데이트
 */
async function saveAffiliationMaster() {
    const name = document.getElementById('aff-name').value.trim();
    if (!name) {
        alert("업체명을 입력해 주세요! 🧐");
        document.getElementById('aff-name').focus();
        return;
    }

    const payload = {
        idx: editAffIdx,
        name: name,
        bizNo: document.getElementById('aff-bizNo').value.trim(),
        ceo: document.getElementById('aff-ceo').value.trim(),
        contact: document.getElementById('aff-contact').value.trim(),
        address: document.getElementById('aff-address').value.trim(),
        manager: document.getElementById('aff-manager').value.trim(),
        loginId: document.getElementById('aff-loginId').value.trim(),
        password: document.getElementById('aff-password').value
    };

    try {
        const btn = document.getElementById('btn-aff-save');
        const btnText = document.getElementById('btn-aff-text');
        
        if (btn) btn.disabled = true;
        // [Fix] innerHTML을 직접 바꾸면 내부 요소(btn-aff-text)가 날아가므로 개별 처리
        if (btnText) btnText.innerText = "저장 중...";
        else if (btn) btn.innerText = "저장 중...";

        const res = await fetch('/api/affiliations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await res.json();

        if (result.success) {
            alert(editAffIdx ? "업체 정보가 수정되었습니다! 🎉" : "새로운 업체가 등록되었습니다! 🏢");
            resetAffiliationForm();
            fetchAffiliations();

            // 타 화면의 업체 목록(드롭다운 등) 갱신 시도
            try {
                if (typeof fetchAffiliationListForDrivers === 'function') fetchAffiliationListForDrivers();
                if (typeof fetchAffiliationListForContracts === 'function') fetchAffiliationListForContracts();
                if (typeof fetchAffiliationList === 'function') fetchAffiliationList();
                if (typeof fetchAffiliationListForFees === 'function') fetchAffiliationListForFees();
            } catch (err) {
                console.warn('Silent refresh error:', err);
            }
        } else {
            alert("저장 실패: " + (result.message || "알 수 없는 오류"));
        }
    } catch (e) {
        console.error('Save Affiliation Error Details:', e);
        alert("서버 통신 중 오류가 발생했습니다.\n상세 사유: " + (e.message || "알 수 없는 브라우저/네트워크 에러"));
    } finally {
        const btn = document.getElementById('btn-aff-save');
        const btnText = document.getElementById('btn-aff-text');
        if (btn) btn.disabled = false;
        if (btnText) btnText.innerText = editAffIdx ? '정보 업데이트' : '운송 업체 저장';
        else if (btn) btn.innerText = editAffIdx ? '정보 업데이트' : '운송 업체 저장';
    }
}

/**
 * 수정 모드 진입
 */
function editAffiliation(idx) {
    const aff = affiliationList.find(a => a.idx === idx);
    if (!aff) return;

    editAffIdx = aff.idx;
    document.getElementById('aff-idx').value = aff.idx;
    document.getElementById('aff-name').value = aff.name || '';
    document.getElementById('aff-bizNo').value = aff.bizNo || '';
    document.getElementById('aff-ceo').value = aff.ceo || '';
    document.getElementById('aff-manager').value = aff.manager || '';
    document.getElementById('aff-contact').value = aff.contact || '';
    document.getElementById('aff-address').value = aff.address || '';
    
    // 계정 정보 (User 테이블 연동)
    document.getElementById('aff-loginId').value = aff.loginId || '';
    document.getElementById('aff-password').value = ''; // 비밀번호는 항상 비움

    document.getElementById('aff-form-title').innerText = "업체 정보 수정";
    document.getElementById('aff-edit-mode-badge').classList.remove('hidden');
    document.getElementById('btn-aff-text').innerText = "정보 수정 완료";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 업체 삭제
 */
async function deleteAffiliation(idx) {
    if (!confirm("정말 이 업체를 삭제하시겠습니까?\n삭제 후에는 복구가 불가능할 수 있습니다. 🧐")) return;

    try {
        const res = await fetch(`/api/affiliations?idx=${idx}`, { method: 'DELETE' });
        const result = await res.json();

        if (result.success) {
            alert("업체가 성공적으로 삭제되었습니다.");
            fetchAffiliations();
            if (typeof fetchAffiliationList === 'function') fetchAffiliationList();
        } else {
            alert("삭제 실패: " + result.message);
        }
    } catch (e) {
        console.error('Delete Affiliation Error:', e);
    }
}

/**
 * 폼 초기화
 */
function resetAffiliationForm() {
    editAffIdx = null;
    const fields = ['aff-idx', 'aff-name', 'aff-bizNo', 'aff-ceo', 'aff-contact', 'aff-address', 'aff-manager', 'aff-loginId', 'aff-password'];
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const titleEl = document.getElementById('aff-form-title');
    const textEl = document.getElementById('btn-aff-text');
    const btnEl = document.getElementById('btn-aff-save');
    const badgeEl = document.getElementById('aff-edit-mode-badge');

    if (titleEl) titleEl.innerText = "운송 업체 마스터";
    if (textEl) textEl.innerText = "운송 업체 저장";
    if (btnEl) {
        btnEl.classList.replace('bg-amber-600', 'bg-indigo-600');
        btnEl.classList.replace('hover:bg-amber-600', 'hover:bg-indigo-700');
    }
    if (badgeEl) badgeEl.classList.add('hidden');
}
