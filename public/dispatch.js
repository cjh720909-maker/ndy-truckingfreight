/**
 * Dispatch Summary Logic
 */

async function fetchDispatchData() {
    const sDate = document.getElementById('startDate').value;
    const eDate = document.getElementById('endDate').value;
    const driverVal = document.getElementById('driverInput').value;
    const custName = ''; // 고객사 필드 제거됨

    const tbody = document.getElementById('dispatch-tableBody');
    const cards = document.getElementById('dispatch-summaryCards');

    if (!sDate || !eDate) return alert("날짜를 선택해주세요.");
    if (!validateDateRange(sDate, eDate)) return;

    // Loading State
    tbody.innerHTML = '<tr><td colspan="12" class="p-12 text-center"><div class="animate-spin inline-block w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full mb-2"></div><div class="text-indigo-600 font-bold">배차 데이터 분석 중...</div></td></tr>';

    try {
        const url = `/api/summary?startDate=${sDate}&endDate=${eDate}&affiliations=${encodeURIComponent(driverVal)}&custName=${encodeURIComponent(custName)}`;
        const res = await fetch(url);
        const json = await res.json();

        if (json.warning) {
            alert(json.warning);
        }

        if (json.error) {
            alert('배차 데이터 에러: ' + json.error);
            tbody.innerHTML = '<tr><td colspan="12" class="p-8 text-center text-red-500">조회 실패</td></tr>';
            return;
        }

        renderDispatchData(json, tbody, cards);
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="12" class="p-8 text-center text-red-500">서버 통신 오류</td></tr>';
    }
}

// ------------------------------------------------------------------
// 자동 정산 엔진 (Auto Settle Engine)
// ------------------------------------------------------------------
let feeMaster = [];

async function loadFeeMaster() {
    try {
        const res = await fetch('/api/fees');
        const json = await res.json();
        feeMaster = json.data || [];
        console.log(`[AutoSettle] 단가 마스터 ${feeMaster.length}건 로드 완료`);
    } catch (e) {
        console.error('단가 마스터 로드 실패:', e);
    }
}

// 목적지 및 상세 정보를 기반으로 예상 단가 산출
function calculateExpectedPrice(destList, tonnage) {
    if (!feeMaster.length) return { price: 0, reason: '' };

    let matchedFee = null;
    let matchReason = '';

    // 1. 톤수 + 지역 키워드 매칭 (가장 긴 키워드 우선)
    const sortedMaster = [...feeMaster].sort((a, b) => b.region.length - a.region.length);

    // 1순위: 톤수 일치 + 지역 포함
    for (const fee of sortedMaster) {
        if (fee.tonnage === tonnage && destList.includes(fee.region)) {
            matchedFee = fee;
            matchReason = `[${tonnage}] [${fee.region}] 매칭`;
            break;
        }
    }

    // 2순위: 톤수 무관 지역 포함 (톤수가 정확히 안 맞을 때 대비)
    if (!matchedFee) {
        for (const fee of sortedMaster) {
            if (destList.includes(fee.region)) {
                matchedFee = fee;
                matchReason = `[${fee.region}] 매칭 (톤수미일치)`;
                break;
            }
        }
    }

    if (!matchedFee) return { price: 0, reason: '매칭 지역 없음' };

    let finalPrice = matchedFee.basePrice;

    // 2. 특수 할증 규칙 (컬리 등)
    if (destList.includes('컬리')) {
        finalPrice += 10000;
        matchReason += ' + 컬리할증(1만)';
    }

    return { price: finalPrice, reason: matchReason };
}

function renderDispatchData(json, tbody, cards) {
    const { data, summary } = json;

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="12" class="p-8 text-center text-slate-400">해당 기간에 배차 데이터가 없습니다.</td></tr>';
        cards.innerHTML = '';
        return;
    }

    // 0. Calculate Total Amount (Settled + Expected)
    let totalAmount = 0;
    data.forEach(row => {
        const autoPrice = calculateExpectedPrice(row.destDetail, row.tonnage);
        totalAmount += (row.isSettled ? row.settledAmount : (autoPrice.price || 0));
    });

    // 1. Cards (Ultra Slim Chips)
    cards.innerHTML = `
        <div class="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span class="text-[11px] font-bold text-slate-400 uppercase">기사</span>
            <span class="text-sm font-bold text-slate-800">${formatNumber(summary.totalDrivers)}</span>
        </div>
        <div class="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
            <span class="text-[11px] font-bold text-slate-400 uppercase">배차</span>
            <span class="text-sm font-bold text-slate-800">${formatNumber(data.length)}</span>
        </div>
        <div class="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span class="text-[11px] font-bold text-slate-400 uppercase">거래처</span>
            <span class="text-sm font-bold text-slate-800">${formatNumber(summary.totalDestinations)}</span>
        </div>
        <div class="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
            <span class="text-[11px] font-bold text-slate-400 uppercase">피킹</span>
            <span class="text-sm font-bold text-slate-800">${formatNumber(summary.totalShipments)}</span>
        </div>
        <div class="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
            <span class="text-[11px] font-bold text-slate-400 uppercase">총중량</span>
            <span class="text-sm font-bold text-slate-800">${formatNumber(summary.totalWeight)}<span class="text-[10px] ml-0.5 font-normal">kg</span></span>
        </div>
        <div class="bg-white px-3 py-1.5 rounded-full shadow-sm border border-rose-200 bg-rose-50/30 flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
            <span class="text-[11px] font-bold text-rose-500 uppercase">총금액</span>
            <span class="text-sm font-black text-rose-700">${formatNumber(totalAmount)}<span class="text-[10px] ml-0.5 font-normal">원</span></span>
        </div>
    `;

    // 2. Table Body (Must match header widths)
    tbody.innerHTML = data.map((row, i) => {
        const autoPrice = calculateExpectedPrice(row.destDetail, row.tonnage);
        const isSettled = row.isSettled;
        
        let statusText = '<span class="px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-full font-bold text-[9px]">미정산</span>';
        if (isSettled) {
            // batch_settle.js의 STATUS_LABELS 규격 활용 (또는 유사하게 구현)
            const statusMap = {
                'REQUESTED': { text: '1차전송🚩', color: 'bg-blue-100 text-blue-700' },
                'CHECKED': { text: '운수사확인✅', color: 'bg-amber-100 text-amber-700' },
                'FINALIZED': { text: '최종확정🏁', color: 'bg-emerald-100 text-emerald-700' },
                'COMPLETED': { text: '최종확정🏁', color: 'bg-emerald-100 text-emerald-700' },
                'SETTLED': { text: '정산완료', color: 'bg-green-100 text-green-700' }
            };
            const s = statusMap[row.settledStatus] || statusMap['SETTLED'];
            statusText = `<span class="px-1.5 py-0.5 ${s.color} rounded-full font-bold text-[9px]">${s.text}</span>`;
        }

        // 정산된 금액이 있으면 그것을 우선 표시, 없으면 자동 산출 금액 표시
        const displayPrice = isSettled ? row.settledAmount : autoPrice.price;

        return `
        <tr class="hover:bg-slate-50 border-b border-slate-50 last:border-0 flex px-2 items-center h-6 ${isSettled ? 'bg-green-50/10' : ''}">
            <td class="text-center text-slate-400 w-[40px] shrink-0 text-[10px]">${i + 1}</td>
            <td class="py-0.5 text-slate-600 w-[90px] shrink-0 text-[10px] font-medium">${row.date || '-'}</td>
            <td class="py-0.5 font-bold text-slate-800 w-[110px] shrink-0 truncate text-[11px]">${row.driverName || '-'}</td>
            <td class="py-0.5 w-[100px] shrink-0 px-1 text-[10px] text-slate-600 truncate">${row.driverDiv || '-'}</td>
            <td class="py-0.5 w-[70px] shrink-0 text-center">${statusText}</td>
            <td class="py-0.5 text-right w-[60px] shrink-0 text-[10px] font-medium">${formatNumber(row.destCount)}</td>
            <td class="py-0.5 text-right w-[80px] shrink-0 text-indigo-700 font-bold text-[11px]">${formatNumber(row.totalWeight)}</td>
            <td class="py-0.5 w-[200px] shrink-0 px-4 text-[10px] text-slate-500 truncate" title="${row.destDetail || ''}">${row.destDetail || '-'}</td>
            <td class="py-0.5 w-[100px] shrink-0 px-2 text-right text-[11px] font-bold ${isSettled ? 'text-green-600' : 'text-indigo-600'}">${formatNumber(displayPrice)}</td>
            <td class="py-0.5 flex-grow px-2 text-[10px] text-slate-400 truncate">${row.memo || ''}</td>
        </tr>
        `;
    }).join('');
}

async function sendToSettlement(i, row) {
    const tr = document.querySelector(`#dispatch-tableBody tr:nth-child(${i + 1})`);
    const data = {
        date: row.date,
        name: row.driverName,
        so: tr.querySelector('td:nth-child(4) input').value,
        nap: row.destCount + '곳',
        ton: row.totalWeight,
        yo: tr.querySelector('td:nth-child(8) textarea').value, // 납품처 상세
        kum: parseInt(tr.querySelector('td:nth-child(9) input').value) || 0, // 정산금액
        un: parseInt(tr.querySelector('td:nth-child(10) input').value) || 0, // 청구금액
        memo: tr.querySelector(`#memo-${i}`).value,
        isPbox: false,
        isReturn: false
    };

    try {
        const res = await fetch('/api/save-settlement', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (result.success) {
            alert("정산 화면으로 전송되었습니다.");
            // 선택된 행 표시 (성공 강조)
            document.querySelector(`#dispatch-tableBody tr:nth-child(${i + 1})`).classList.add('bg-green-50');
        } else {
            alert("전송 실패: " + result.message);
        }
    } catch (e) {
        console.error(e);
        alert("전송 중 오류 발생");
    }
}

// 초기 로드 시 단가 마스터 로드
document.addEventListener('DOMContentLoaded', loadFeeMaster);
