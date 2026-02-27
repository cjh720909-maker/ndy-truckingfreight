/**
 * 용차 단가 계약(헤더) 관리 로직
 */

async function fetchContracts() {
    console.log("[안팀장] 용차 단가 계약 리스트 로딩 시작...");

    // [Fix] UI 초기화를 먼저 수행 (데이터 로딩 실패해도 폼은 정상 동작하도록)
    try {
        resetContractHeaderForm(true);
    } catch (e) {
        console.error("Contract Form Reset Error:", e);
    }

    // [Fix] 연도 자동 연동 이벤트도 안전하게 등록
    try {
        const yearSelect = document.getElementById('contract-year');
        if (yearSelect && !yearSelect.dataset.listenerAdded) {
            yearSelect.addEventListener('change', (e) => {
                const selectedYear = e.target.value;
                const dateEl = document.getElementById('contract-startDate');
                if (dateEl) dateEl.value = `${selectedYear}-01-01`;
            });
            yearSelect.dataset.listenerAdded = 'true';
        }
    } catch (e) { console.error("Event Listener Error:", e); }

    try {
        // 업체 목록 먼저 로드 (실패해도 계약 리스트는 보여야 함)
        await fetchAffiliationListForContracts().catch(e => console.error("Affiliation List Error:", e));

        const res = await fetch('/api/contracts');
        const { data } = await res.json();
        renderContracts(data || []);

    } catch (e) {
        console.error('Contracts Load Error:', e);
    }
}

async function fetchAffiliationListForContracts() {
    try {
        const res = await fetch('/api/affiliations');
        const { data } = await res.json();
        const select = document.getElementById('contract-affiliation-select');
        if (!select) return;

        select.innerHTML = '<option value="">업체 선택</option>' + (data || []).map(aff =>
            `<option value="${aff.idx}">${aff.name}</option>`
        ).join('');
    } catch (e) {
        console.error('Affiliations Load Error:', e);
    }
}

function renderContracts(data) {
    const tbody = document.getElementById('contracts-tableBody');
    const countEl = document.getElementById('contracts-count');
    if (!tbody) return;

    if (countEl) countEl.innerText = data.length;

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="py-20 text-center text-slate-400 italic">등록된 계약 정보가 없습니다. 🧐</td></tr>';
        return;
    }

    tbody.innerHTML = data.map((item, idx) => {
        const startDate = item.startDate ? item.startDate.split('T')[0] : '-';
        const endDate = item.endDate ? item.endDate.split('T')[0] : '-';
        const isInactive = item.status === 'INACTIVE';

        return `
            <tr class="hover:bg-slate-50 border-b group">
                <td class="px-4 py-2 text-center text-slate-400">${idx + 1}</td>
                <td class="px-4 py-2">
                    <div class="font-bold text-slate-800">${item.Affiliation?.name || '알수없음'}</div>
                    <div class="text-[9px] text-slate-400">${item.memo || ''}</div>
                </td>
                <td class="px-4 py-2 text-center font-bold text-slate-700">${item.year}년</td>
                <td class="px-4 py-2 text-center text-slate-500">
                    <span class="text-[10px]">${startDate} ~ ${endDate}</span>
                </td>
                <td class="px-4 py-2 text-center">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isInactive ? 'bg-slate-100 text-slate-400' : 'bg-emerald-100 text-emerald-700'}">
                        ${item.status}
                    </span>
                </td>
                <td class="px-4 py-2 text-center">
                    <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onclick="editContractHeader(${JSON.stringify(item).replace(/"/g, '&quot;')})" class="text-indigo-500 hover:text-indigo-700 p-1">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteContractHeader(${item.id})" class="text-red-400 hover:text-red-600 p-1">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    // [Debug] 렌더링 확인
    console.log(`[안팀장] 계약 리스트 렌더링 완료: ${data.length}건`);
}

async function saveContractHeader() {
    const affiliationId = document.getElementById('contract-affiliation-select').value;
    const year = document.getElementById('contract-year').value;
    const startDate = document.getElementById('contract-startDate').value;
    const endDate = document.getElementById('contract-endDate').value;
    const status = document.getElementById('contract-status').value;
    const memo = document.getElementById('contract-memo').value;
    const id = document.getElementById('contract-id').value;

    if (!affiliationId) return alert("운송 업체를 선택해 주세요.");
    if (!startDate) return alert("계약 시작일을 입력해 주세요.");

    const payload = {
        id: id || undefined,
        affiliationId,
        year,
        startDate,
        endDate: endDate || '2099-12-31',
        status,
        memo,
        details: [] // 헤더만 저장할 때는 빈 배열
    };

    try {
        const res = await fetch('/api/contracts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await res.json();
        if (result.success) {
            alert("계약 정보가 저장되었습니다.");
            resetContractHeaderForm();
            fetchContracts();
        } else {
            alert("저장 실패: " + result.message);
        }
    } catch (e) {
        console.error('Contract Save Error:', e);
        alert("계약 저장 중 오류가 발생했습니다.");
    }
}

function editContractHeader(item) {
    document.getElementById('contract-id').value = item.id;
    document.getElementById('contract-affiliation-select').value = item.affiliationId;
    document.getElementById('contract-year').value = item.year;
    document.getElementById('contract-startDate').value = item.startDate ? item.startDate.split('T')[0] : '';
    document.getElementById('contract-endDate').value = item.endDate ? item.endDate.split('T')[0] : '';
    document.getElementById('contract-status').value = item.status;
    document.getElementById('contract-memo').value = item.memo || '';

    const badgeEl = document.getElementById('contract-edit-badge');
    const btnTextEl = document.getElementById('btn-contract-header-text');
    const affSelectEl = document.getElementById('contract-affiliation-select');

    if (badgeEl) badgeEl.classList.remove('hidden');
    if (btnTextEl) btnTextEl.innerText = '계약 정보 수정하기';

    // 업체 선택은 수정 불가 (계약의 본질이므로)
    if (affSelectEl) affSelectEl.disabled = true;
}

function resetContractHeaderForm(isForce = false) {
    if (!isForce && !confirm("입력 중인 내용을 초기화하시겠습니까?")) return;

    document.getElementById('contract-id').value = '';
    document.getElementById('contract-affiliation-select').value = '';
    document.getElementById('contract-affiliation-select').disabled = false;

    const defaultYear = '2026';
    document.getElementById('contract-year').value = defaultYear;
    document.getElementById('contract-status').value = 'ACTIVE';
    document.getElementById('contract-memo').value = '';

    // [개선] 최팀장님 요청: 시작일은 선택 연도의 1월 1일로, 종료일은 무기한으로 자동 설정
    document.getElementById('contract-startDate').value = `${defaultYear}-01-01`;
    document.getElementById('contract-endDate').value = '2099-12-31';

    const badgeEl = document.getElementById('contract-edit-badge');
    const btnTextEl = document.getElementById('btn-contract-header-text');

    if (badgeEl) badgeEl.classList.add('hidden');
    if (btnTextEl) btnTextEl.innerText = '계약 저장하기';
}

async function deleteContractHeader(id) {
    if (!confirm("정말 이 계약을 삭제하시겠습니까?\n계약에 속한 상세 단가 정보도 함께 삭제될 수 있습니다.")) return;

    try {
        const res = await fetch(`/api/contracts?id=${id}`, { method: 'DELETE' });
        const result = await res.json();
        if (result.success) {
            alert("삭제되었습니다.");
            fetchContracts();
        } else {
            alert("삭제 실패: " + result.message);
        }
    } catch (e) {
        console.error('Contract Delete Error:', e);
    }
}
