/**
 * Settlement History Management (Replaces Picking)
 * Handles display and management of Yongcha settlement history.
 */

let settlementHistoryData = [];

// Initialize the view
function initSettlementHistoryView() {
    // Set default date range (Current Month)
    setCurrentMonth();
    fetchSettlementHistory();
}

// Fetch data from API
async function fetchSettlementHistory() {
    const sDate = document.getElementById('startDate').value;
    const eDate = document.getElementById('endDate').value;
    const driverVal = document.getElementById('driverInput').value;
    const tbody = document.getElementById('settlement-tableBody');
    const tableContainer = document.getElementById('settlement-table-container');

    if (!tbody) {
        console.error("Table body not found!");
        return;
    }

    // Show Loading
    tbody.innerHTML = '<tr><td colspan="19" class="p-12 text-center text-indigo-600 font-bold bg-white"><i class="fas fa-spinner fa-spin mr-2"></i>조회 중입니다...</td></tr>';

    try {
        const url = `/api/settlement-history?startDate=${sDate}&endDate=${eDate}&driverName=${encodeURIComponent(driverVal || '')}`;
        const res = await fetch(url);
        const json = await res.json();

        if (json.error) throw new Error(json.error);

        settlementHistoryData = json.data || [];
        // Sort by Date Descending
        settlementHistoryData.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

        renderSettlementTable(settlementHistoryData);
    } catch (e) {
        console.error("Fetch Error:", e);
        tbody.innerHTML = `<tr><td colspan="19" class="p-8 text-center text-red-500 font-bold">데이터 로드 실패: ${e.message}</td></tr>`;
    }
}

// Render Table
function renderSettlementTable(data) {
    const tbody = document.getElementById('settlement-tableBody');
    if (!tbody) return;

    if (!data || data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="19" class="p-16 text-center text-slate-500 font-bold bg-white text-lg">기간 내 조회된 데이터가 없습니다.</td></tr>';
        updateSettlementSummary(0, 0);
        return;
    }

    tbody.innerHTML = data.map((row, i) => {
        const dDate = row.date ? row.date.substring(0, 10) : '-';
        const dCreated = row.createdAt ? new Date(row.createdAt).toLocaleString() : '-';

        // Helper to format currency
        const fmtNum = (n) => (n || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Status Badge
        let statusHtml = `<span class="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] border border-gray-200">${row.status || '-'}</span>`;
        if (row.status === 'FINALIZED') statusHtml = `<span class="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold border border-green-200">확정</span>`;
        if (row.status === 'CHECKED') statusHtml = `<span class="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold border border-blue-200">검수</span>`;

        return `
            <tr class="hover:bg-white border-b border-slate-200 transition-colors h-7 text-[9px] divide-x divide-slate-100 whitespace-nowrap">
                <td class="px-2 py-1 text-center text-gray-500">${i + 1}</td>
                <td class="px-2 py-1 text-center font-bold text-gray-900">${dDate}</td>
                <td class="px-2 py-1 text-center font-bold text-indigo-700">${row.driverName}</td>
                <td class="px-2 py-1 text-center text-gray-600">${row.affiliation || '-'}</td>
                <td class="px-2 py-1 text-center text-gray-600">${row.tonnage || '-'}</td>
                <td class="px-2 py-1 text-center font-bold">${row.destCount || 0}</td>
                <td class="px-2 py-1 text-left text-gray-500 truncate max-w-[150px]" title="${row.nap || ''}">${row.nap || '-'}</td>
                <td class="px-2 py-1 text-right font-medium">${fmtNum(row.totalWeight)} kg</td>
                <td class="px-2 py-1 text-right font-bold text-blue-600 bg-blue-50/30">${fmtNum(row.fee)} 원</td>
                <td class="px-2 py-1 text-center">${statusHtml}</td>
                <td class="px-2 py-1 text-left text-gray-600 truncate max-w-[150px]" title="${row.memo}">${row.memo || ''}</td>
                <td class="px-2 py-1 text-center text-[10px] text-gray-400">${dCreated}</td>
            </tr>
        `;
    }).join('');

    const totalCount = data.length;
    const totalFee = data.reduce((sum, row) => sum + (parseInt(row.fee || 0)), 0);
    updateSettlementSummary(totalCount, totalFee);
}

function updateSettlementSummary(count, fee) {
    const countEl = document.getElementById('hist-total-count');
    const feeEl = document.getElementById('hist-total-kum');
    if (countEl) countEl.innerText = `${count}건`;
    if (feeEl) feeEl.innerText = `${(fee || 0).toLocaleString()}원`;
}

// Expose functions globally for HTML access
window.fetchSettlementHistory = fetchSettlementHistory;
window.initSettlementHistoryView = initSettlementHistoryView;
