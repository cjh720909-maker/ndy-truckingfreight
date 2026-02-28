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
 * 당월(이번 달 1일 ~ 오늘) 자동 세팅 - history.js에서 이관
 */
function setCurrentMonth() {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');
    
    if (startInput) startInput.value = toDateStr(firstDay);
    if (endInput) endInput.value = toDateStr(today);

    if (typeof fetchData === 'function') fetchData();
}

/**
 * 전월(지난 달 1일 ~ 말일) 자동 세팅 - history.js에서 이관
 */
function setLastMonth() {
    const today = new Date();
    const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');

    if (startInput) startInput.value = toDateStr(firstDayLastMonth);
    if (endInput) endInput.value = toDateStr(lastDayLastMonth);

    if (typeof fetchData === 'function') fetchData();
}

/**
 * 월 선택 시 해당 월의 1일~말일 자동 세팅
 */
function onMonthChange(val) {
    if (!val) return;
    const [year, month] = val.split('-').map(Number);
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);

    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');
    
    if (startInput) startInput.value = toDateStr(firstDay);
    if (endInput) endInput.value = toDateStr(lastDay);

    if (typeof fetchData === 'function') fetchData();
}

// Initialization for common elements
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const todayStr = toDateStr(today);
    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');
    const monthInput = document.getElementById('monthPicker');
    const dateDisplay = document.getElementById('currentDate');

    // 초기값: 당월 세팅
    const currentMonthStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    if (monthInput) {
        monthInput.value = currentMonthStr;
        // 초기 로딩 시 해당 월의 1일~오늘까지가 아닌, 1일~말일까지로 세팅 (최팀장님 요청 기반)
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        if (startInput) startInput.value = toDateStr(firstDay);
        if (endInput) endInput.value = toDateStr(lastDay);
    } else {
        if (startInput) startInput.value = todayStr;
        if (endInput) endInput.value = todayStr;
    }

    if (dateDisplay) {
        dateDisplay.innerText = today.toLocaleDateString('ko-KR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
});
