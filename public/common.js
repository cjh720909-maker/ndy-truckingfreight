/**
 * Common Utilities for Dispatch/Picking System
 */

function toDateStr(d) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function formatNumber(n) {
    return n ? n.toLocaleString('ko-KR') : '0';
}

function validateDateRange(s, e) {
    if (!s || !e) return false;
    const start = new Date(s);
    const end = new Date(e);
    const diff = Math.abs(end - start) / (1000 * 60 * 60 * 24);
    if (diff > 31) {
        alert("최대 1개월(31일)까지만 한 번에 조회가 가능합니다.\n데이터량이 많아 시스템이 느려질 수 있으니 기간을 짧게 조정해 주세요.");
        return false;
    }
    return true;
}

function setDateRange(minusStart, minusEnd, btnId) {
    const s = new Date(); s.setDate(s.getDate() - minusStart);
    const e = new Date(); e.setDate(e.getDate() - minusEnd);
    document.getElementById('startDate').value = toDateStr(s);
    document.getElementById('endDate').value = toDateStr(e);

    // 버튼 하이라이트 처리
    document.querySelectorAll('.date-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md', 'scale-105');
        btn.classList.add('bg-slate-100', 'text-slate-600');
    });

    if (btnId) {
        const activeBtn = document.getElementById(btnId);
        if (activeBtn) {
            activeBtn.classList.remove('bg-slate-100', 'text-slate-600');
            activeBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-md', 'scale-105');
        }
    }
}

function setLastMonth() { setDateRange(30, 0, 'btn-last-month'); } // 기존 레거시 대응용 (필요시)

/**
 * 월별 조회 드롭다운 초기화 (현재 달 포함 과거 12개월)
 */
function initMonthPicker() {
    const picker = document.getElementById('monthPicker');
    if (!picker) return;

    const today = new Date();
    picker.innerHTML = '';

    for (let i = 0; i < 12; i++) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const val = `${year}-${String(month).padStart(2, '0')}`;
        const text = `${year}년 ${month}월`;
        
        const opt = new Option(text, val);
        picker.add(opt);
    }

    // 초기값 설정 (현재 월)
    const currentVal = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    picker.value = currentVal;
    
    // 초기 날짜 범위 설정 (조회는 하지 않음, DOMContentLoaded에서 주관)
    updateDateRangeByMonth(currentVal, false);
}

/**
 * 월 선택 시 처리
 */
function onMonthPickerChange(val) {
    updateDateRangeByMonth(val, true);
}

/**
 * 선택된 월(YYYY-MM)에 따라 시작일/종료일 설정
 */
function updateDateRangeByMonth(val, autoFetch = true) {
    const [year, month] = val.split('-').map(Number);
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);

    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');
    
    if (startInput) startInput.value = toDateStr(firstDay);
    if (endInput) endInput.value = toDateStr(lastDay);

    if (autoFetch && typeof fetchData === 'function') fetchData();
}

// Initialization for common elements
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    
    // 월별 조회 초기화
    initMonthPicker();

    const dateDisplay = document.getElementById('currentDate');
    if (dateDisplay) {
        dateDisplay.innerText = today.toLocaleDateString('ko-KR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
});
