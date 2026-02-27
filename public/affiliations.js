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
            <td class="px-4 py-3 text-[10px] truncate" title="${aff.address} | ${aff.memo || ''}">
                <div class="truncate">${aff.address || '-'}</div>
                <div class="text-[9px] text-slate-400 italic">${aff.memo || ''}</div>
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
        memo: document.getElementById('aff-memo').value.trim()
    };

    try {
        const btn = document.getElementById('btn-aff-save');
        btn.disabled = true;
        btn.innerHTML = `<i class="fas fa-spinner animate-spin"></i> 저장 중...`;

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

            // 용차 단가 입력 폼의 업체 목록도 갱신하도록 유도 (함수가 있다면)
            if (typeof fetchAffiliationList === 'function') fetchAffiliationList();
        } else {
            alert("저장 실패: " + result.message);
        }
    } catch (e) {
        console.error('Save Affiliation Error:', e);
        alert("서버 통신 중 오류가 발생했습니다.");
    } finally {
        const btn = document.getElementById('btn-aff-save');
        btn.disabled = false;
        btn.innerHTML = `<i class="fas fa-save"></i> <span id="btn-aff-text">${editAffIdx ? '정보 업데이트' : '운송 업체 저장'}</span>`;
    }
}

/**
 * 수정 모드 진입
 */
function editAffiliation(idx) {
    const aff = affiliationList.find(a => a.idx === idx);
    if (!aff) return;

    editAffIdx = idx;
    document.getElementById('aff-idx').value = idx;
    document.getElementById('aff-name').value = aff.name;
    document.getElementById('aff-bizNo').value = aff.bizNo || '';
    document.getElementById('aff-ceo').value = aff.ceo || '';
    document.getElementById('aff-contact').value = aff.contact || '';
    document.getElementById('aff-address').value = aff.address || '';
    document.getElementById('aff-manager').value = aff.manager || '';
    document.getElementById('aff-memo').value = aff.memo || '';

    // UI 변경
    document.getElementById('aff-form-title').innerText = "운송 업체 수정";
    document.getElementById('btn-aff-text').innerText = "정보 업데이트";
    document.getElementById('btn-aff-save').classList.replace('bg-indigo-600', 'bg-amber-600');
    document.getElementById('aff-edit-mode-badge').classList.remove('hidden');
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
    document.getElementById('aff-idx').value = '';
    document.getElementById('aff-name').value = '';
    document.getElementById('aff-bizNo').value = '';
    document.getElementById('aff-ceo').value = '';
    document.getElementById('aff-contact').value = '';
    document.getElementById('aff-address').value = '';
    document.getElementById('aff-manager').value = '';
    document.getElementById('aff-memo').value = '';

    document.getElementById('aff-form-title').innerText = "운송 업체 마스터";
    document.getElementById('btn-aff-text').innerText = "운송 업체 저장";
    document.getElementById('btn-aff-save').classList.replace('bg-amber-600', 'bg-indigo-600');
    document.getElementById('aff-edit-mode-badge').classList.add('hidden');
}
