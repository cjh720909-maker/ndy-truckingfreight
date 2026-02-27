/**
 * 용차단가조회 및 관리 로직 - 매트릭스 방식 엑셀 연동 버전
 */

document.addEventListener('DOMContentLoaded', () => {
    // 공통 초기화 로직은 index.html의 switchView에서 관리하지만,
    // 초기 로딩 시 필요한 경우 호출
    if (document.getElementById('view-fees') && !document.getElementById('view-fees').classList.contains('hidden')) {
        fetchFeeMaster();
    }
    if (document.getElementById('view-fee-entry') && !document.getElementById('view-fee-entry').classList.contains('hidden')) {
        fetchContractListForFeeEntry();
    }
});

let feeEditIdx = null;
let entryDataList = []; // 현재 조회된 단가 리스트
let addedDetails = []; // 현재 선택된 계약의 상세 단가 리스트 (DB 구조와 동일하게 region, tonnage, price, memo 유지)
let bulkUploadData = []; // 조회를 위한 캐시 (필요 시)
let feeViewMode = 'list'; // 'list' or 'matrix'

async function fetchFeeMaster() {
    const container = document.getElementById('fees-matrix-body');
    const yearEl = document.getElementById('report-fee-year');
    const year = yearEl ? yearEl.value : new Date().getFullYear().toString();
    const affiliationEl = document.getElementById('report-fee-affiliation');
    const affiliation = affiliationEl ? affiliationEl.value.trim() : '';

    try {
        const res = await fetch('/api/fees');
        const { data } = await res.json();

        // 필터링 (타입 안전성 확보 및 디버깅 로그 추가)
        let filtered = (data || []).filter(row => {
            const targetYear = parseInt(year);
            const rowYear = parseInt(row.year);

            if (year && rowYear !== targetYear) return false;
            if (affiliation && !row.affiliation.toLowerCase().includes(affiliation.toLowerCase())) return false;
            return true;
        });

        renderFeeMatrix(filtered);
    } catch (e) {
        console.error('Fees Load Error:', e);
        container.innerHTML = '<div class="p-8 text-center text-red-500">데이터 로드 오류가 발생했습니다.</div>';
    }
}

/**
 * 리스트 형태로 렌더링
 */
/**
 * 엑셀 매트릭스 스타일로 렌더링 (행: 지역, 열: 소속사)
 */
function renderFeeMatrix(data) {
    const tbody = document.getElementById('fees-matrix-body');
    const thead = document.getElementById('fees-matrix-header');

    if (!data || data.length === 0) {
        thead.innerHTML = '';
        tbody.innerHTML = '<tr><td class="p-12 text-center text-slate-400 font-medium">조회된 단가 정보가 없습니다. 🧐</td></tr>';
        return;
    }

    // 1. 유니크한 소속사(Col)와 지역(Row) 추출
    const affiliationsMap = new Set();
    const regionsMap = new Set();
    data.forEach(row => {
        if (row.affiliation) affiliationsMap.add(row.affiliation);
        if (row.region) regionsMap.add(row.region);
    });

    // 2. 소속사 정렬 (최팀장님 요청: '이룸'을 가장 앞으로)
    const sortedAffs = Array.from(affiliationsMap).sort((a, b) => {
        if (a === '이룸') return -1;
        if (b === '이룸') return 1;
        return a.localeCompare(b);
    });
    const sortedRegions = Array.from(regionsMap).sort();

    // 3. 데이터 맵핑 (지역 + 소속사 조합)
    const feeLookup = {};
    data.forEach(row => {
        const key = `${row.region}|${row.affiliation}`;
        // 최신 데이터(readonly가 아닌 것 우선) 저장
        if (!feeLookup[key] || !row.readonly) {
            feeLookup[key] = row;
        }
    });

    // 4. 헤더 렌더링 (밝은 배경에 검정 글씨로 반전 - 시인성 확보)
    const colWidth = 110;
    thead.innerHTML = `
        <tr class="divide-x divide-slate-300 border-b border-slate-300 bg-slate-100">
            <th class="w-[160px] min-w-[160px] px-4 py-1.5 bg-slate-200 text-slate-900 sticky top-0 left-0 z-[100] border-r border-slate-300 shadow-[2px_2px_5px_rgba(0,0,0,0.1)] text-[10px]">지역 / 소속사</th>
            ${sortedAffs.map(aff => {
        // 해당 소속사의 첫 번째 데이터에서 contractId 추출 (동일 필터 내에서는 같음)
        const sampleRow = data.find(d => d.affiliation === aff);
        const cid = sampleRow ? sampleRow.contractId : null;
        return `
                <th class="min-w-[${colWidth}px] px-3 py-1.5 text-center bg-slate-100 text-slate-900 sticky top-0 z-[80] shadow-[0_2px_3px_rgba(0,0,0,0.05)] border-b border-slate-300">
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-[10px] font-black tracking-tighter truncate w-full px-1" title="${aff}">${aff}</span>
                        ${cid ? `
                            <button onclick="jumpToFeeEntry(${cid})" class="bg-indigo-600 hover:bg-indigo-700 text-white text-[9px] px-2 py-0.5 rounded shadow-sm transition-all active:scale-95">
                                <i class="fas fa-edit"></i> 관리
                            </button>
                        ` : ''}
                    </div>
                </th>`;
    }).join('')}
            <th class="w-full bg-slate-100 text-slate-900 sticky top-0 z-[75] border-b border-slate-300"></th>
        </tr>
    `;

    // 5. 바디 렌더링 (높이 대폭 축소)
    tbody.innerHTML = sortedRegions.map(region => {
        return `
            <tr class="divide-x divide-slate-200 hover:bg-indigo-50/40 transition-colors border-b border-slate-200 h-7">
                <td class="w-[160px] min-w-[160px] font-bold text-slate-800 px-4 py-1 bg-white sticky left-0 z-[50] border-r border-slate-200 shadow-[2px_0_5px_rgba(0,0,0,0.02)] truncate text-[10px]">${region}</td>
                ${sortedAffs.map(aff => {
            const row = feeLookup[`${region}|${aff}`];
            const price = row ? formatNumber(row.price) : '-';
            const isReadonly = row && row.readonly;
            return `
                        <td class="min-w-[${colWidth}px] px-3 py-1 text-right text-[11px] ${isReadonly ? 'text-slate-300 font-normal' : 'font-black text-indigo-700'}">
                            ${price}
                        </td>
                    `;
        }).join('')}
                <td class="w-full"></td>
            </tr>
        `;
    }).join('');
}

/**
 * 업체별/연도별 매트릭스 방식 엑셀 양식 다운로드
 * 가로: 소속사(업체명), 세로: 지역
 */
function downloadFeeTemplate() {
    const yearEl = document.getElementById('report-fee-year');
    const year = yearEl ? yearEl.value : new Date().getFullYear().toString();

    // [개선] 최상단에 연도 정보 배치 (최팀장님 제안)
    const headerRow1 = [["적용연도", year]];
    const headerRow2 = [[]]; // 빈 줄
    const matrixHeader = [["지역명(필수)", "신동철", "이룸", "심철환", "김태호", "박기사", "최기사"]];

    // 샘플 데이터
    const sampleRows = [
        ["창원, 밀양", 9, 9, 9, 9.5, 9, 9],
        ["울산, 거제", 12.5, 12.5, 13, 12, 12.5, 12.5],
        ["함안, 남해", 10.5, 10, 11, 10.5, 10, 10],
        ["납품처추가", 1, 1, 1.5, 1, 1, 1],
        ["P박스", 1, 1, 1, 1, 1, 1],
        ["회송", 10, 10, 12, 10, 10, 10]
    ];

    const finalAoa = headerRow1.concat(headerRow2).concat(matrixHeader).concat(sampleRows);
    const ws = XLSX.utils.aoa_to_sheet(finalAoa);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "단가입력_매트릭스");

    // 컬럼 너비 설정
    ws['!cols'] = [
        { wch: 20 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 30 }
    ];

    const fileName = `전업체_단가표_양식_${year}년.xlsx`;
    XLSX.writeFile(wb, fileName);
}

/**
 * [신설] 상세 단가 입력용 톤수 매트릭스 양식 다운로드
 */
function downloadDetailTemplate() {
    const affName = document.getElementById('info-aff-name').innerText || '업체';
    const year = document.getElementById('fee-year').value || '2026';

    const matrixHeader = [["지역명(필수)", "1T", "2.5T", "3.5T", "5T", "기타"]];
    const sampleRows = [
        ["서울 전체", 5.5, 7.5, 9.5, 12, 0],
        ["경기 수원", 6, 8, 10, 13, 0],
        ["용인/오산", 6.5, 8.5, 10.5, 14, 0]
    ];

    const finalAoa = matrixHeader.concat(sampleRows);
    const ws = XLSX.utils.aoa_to_sheet(finalAoa);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "단가입력_톤수매트릭스");

    const fileName = `단가입력양식_${affName}_${year}년.xlsx`;
    XLSX.writeFile(wb, fileName);
}

/**
 * [핵심] 엑셀 파일 처리 핸들러
 */
function handleFeeExcel(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            if (rows.length < 2) {
                alert("데이터가 없습니다. 양식에 맞게 작성해 주세요.");
                return;
            }

            processMatrixExcelRows(rows);
        } catch (err) {
            console.error("Excel Read Error:", err);
            alert("엑셀 파일을 읽는 중 오류가 발생했습니다.");
        }
    };
    reader.readAsArrayBuffer(file);
    event.target.value = '';
}

/**
 * [핵심] 매트릭스 행/열 분해 로직 - 철저한 예외 처리
 */
function processMatrixExcelRows(rows) {
    try {
        if (!rows || rows.length < 1) {
            alert("엑셀 파일에 데이터가 없습니다. 🧐");
            return;
        }

        // 0. 연도 자동 인식 (1행에서 추출, 없으면 화면 설정값 사용)
        let year = null;
        const firstRow = rows[0];
        if (firstRow && (String(firstRow[0]).includes('연도') || String(firstRow[0]).includes('Year'))) {
            year = parseInt(firstRow[1]);
        }

        if (!year || isNaN(year)) {
            const yearEl = document.getElementById('report-fee-year');
            year = yearEl ? parseInt(yearEl.value) : new Date().getFullYear();
            console.log("Excel Year not found, using UI value:", year);
        } else {
            console.log("Excel Year auto-detected:", year);
        }

        // 1. 헤더 행(업체명 리스트) 찾기
        // 연도 행과 빈 줄이 있을 수 있으므로 '지역명' 키워드가 있는 행을 헤더로 간주
        let headerIdx = 0;
        for (let idx = 0; idx < rows.length; idx++) {
            if (rows[idx] && String(rows[idx][0]).includes('지역명')) {
                headerIdx = idx;
                break;
            }
        }

        const header = rows[headerIdx];
        const data = [];

        // 업체명 리스트 추출
        const affiliations = [];
        for (let j = 1; j < header.length; j++) {
            const aff = String(header[j] || '').trim();
            if (aff && !aff.includes('비고') && !aff.includes('기타')) {
                affiliations.push({ name: aff, colIdx: j });
            }
        }

        if (affiliations.length === 0) {
            alert("엑셀에서 업체명 헤더를 찾을 수 없습니다. \n'지역명(필수)' 행의 2번째 칸부터 업체명을 적어주세요. 🧐");
            return;
        }

        // 2. 데이터 행 파싱 (헤더 이후부터 끝까지)
        for (let i = headerIdx + 1; i < rows.length; i++) {
            const row = rows[i];
            if (!row || !Array.isArray(row)) continue;

            const regionFull = String(row[0] || '').trim();
            if (!regionFull || regionFull === 'undefined' || regionFull === '-' || regionFull.includes('연도')) continue;

            // [최팀장님 요청] 콤마(,)로 구분된 다중 지역 처리 로직 추가
            const regions = regionFull.split(',').map(r => r.trim()).filter(r => r !== '');

            regions.forEach(region => {
                affiliations.forEach(aff => {
                    try {
                        const rawVal = row[aff.colIdx];
                        if (rawVal === undefined || rawVal === null || rawVal === '') return;

                        const priceVal = parseFloat(rawVal);
                        if (!isNaN(priceVal) && priceVal > 0) {
                            data.push({
                                affiliation: aff.name,
                                tonnage: 'ALL',
                                year: year,
                                region: region,
                                price: Math.round(priceVal * 10000),
                                memo: '',
                                isNew: true
                            });
                        }
                    } catch (innerErr) {
                        console.warn(`Row ${i}, Col ${aff.name} skip:`, innerErr);
                    }
                });
            });
        }

        if (data.length === 0) {
            alert("엑셀에서 읽어온 단가 정보가 없습니다. \n금액이 숫자로 적혀 있는지 확인해 주세요. 🧐");
            return;
        }

        bulkUploadData = data;
        renderMatrixPreview();

    } catch (err) {
        console.error("Matrix Parse Global Error:", err);
        alert("엑셀 처리 중 예상치 못한 오류가 발생했습니다: " + err.message);
    }
}

/**
 * 미리보기 렌더링 (업체별 그룹화)
 */
function renderMatrixPreview() {
    const previewArea = document.getElementById('fee-bulk-preview');
    const countEl = document.getElementById('preview-count');
    const tbody = document.getElementById('preview-body');

    if (!previewArea || !countEl || !tbody) return;

    // [수정] 삭제된 bulk-fee-year 대신 통합 ID 사용 및 안전 처리
    const yearEl = document.getElementById('report-fee-year');
    const displayYear = bulkUploadData.length > 0 ? bulkUploadData[0].year : (yearEl ? yearEl.value : new Date().getFullYear());

    const affNames = [...new Set(bulkUploadData.map(d => d.affiliation))];
    const affCount = affNames.size || affNames.length;

    countEl.innerHTML = `<span class="text-indigo-600 font-bold">${displayYear}년 [${affCount}개 업체]</span> 총 ${bulkUploadData.length}개 단가`;
    previewArea.classList.remove('hidden');

    tbody.innerHTML = bulkUploadData.map(g => `
        <tr class="hover:bg-emerald-50/50 transition-colors border-b last:border-0 border-emerald-50 text-[11px]">
            <td class="px-3 py-1.5 text-center text-slate-500">${g.year}년</td>
            <td class="px-3 py-1.5 font-bold text-indigo-700">${g.affiliation}</td>
            <td class="px-3 py-1.5 font-medium text-slate-700">${g.region}</td>
            <td class="px-3 py-1.5 text-right font-bold text-blue-600">${formatNumber(g.price)}</td>
            <td class="px-4 py-1.5 text-slate-400 italic truncate max-w-[200px]" title="${g.memo}">${g.memo || '-'}</td>
        </tr>
    `).join('');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelBulkUpload() {
    if (!confirm("업로드를 취소하시겠습니까?")) return;
    bulkUploadData = [];
    document.getElementById('fee-bulk-preview').classList.add('hidden');
}

async function submitBulkFees() {
    if (bulkUploadData.length === 0) return;

    if (!confirm(`${bulkUploadData.length}건의 단가를 일괄 등록하시겠습니까?\n이미 해당 업체/연도에 등록된 기존 단가는 모두 이력으로 보관됩니다.`)) return;

    try {
        const res = await fetch('/api/fees/bulk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fees: bulkUploadData })
        });
        const result = await res.json();

        if (result.success) {
            alert(`성공적으로 처리되었습니다. (${bulkUploadData.length}건)`);
            bulkUploadData = [];
            document.getElementById('fee-bulk-preview').classList.add('hidden');
            fetchFeeMaster();
        } else {
            alert("저장 실패: " + result.message);
        }
    } catch (e) {
        console.error("Bulk Upload Error:", e);
        alert("서버 전송 중 오류가 발생했습니다.");
    }
}

// 폼 초기화 및 정산 화면 연동용 함수 (필요 시 보강)
// [핵심] 개별 단가 조회 (필터 적용)
async function fetchFeeEntry() {
    const tbody = document.getElementById('fee-entry-tableBody');
    if (!tbody) return; // 요소가 없으면 중단 (안전장치)

    const yearEl = document.getElementById('entry-filter-year');
    const affEl = document.getElementById('entry-filter-affiliation');
    const regEl = document.getElementById('entry-filter-region');

    const year = yearEl ? yearEl.value : '';
    const aff = affEl ? affEl.value.trim().toLowerCase() : '';
    const reg = regEl ? regEl.value.trim().toLowerCase() : '';

    try {
        const res = await fetch('/api/fees');
        const { data } = await res.json();

        entryDataList = (data || []).filter(row => {
            if (year && row.year != year) return false;
            if (aff && !row.affiliation.toLowerCase().includes(aff)) return false;
            if (reg && !row.region.toLowerCase().includes(reg)) return false;
            return true;
        });

        renderFeeEntryList();
    } catch (e) {
        console.error('Fetch Fee Entry Error:', e);
        if (tbody) tbody.innerHTML = '<tr><td colspan="7" class="p-8 text-center text-red-500">조회 중 오류가 발생했습니다.</td></tr>';
    }
}

function renderFeeEntryList() {
    const tbody = document.getElementById('fee-entry-tableBody');
    if (!tbody) return; // 요소가 없으면 중단 (안전장치)

    if (entryDataList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="p-12 text-center text-slate-400 italic">조회된 단가가 없습니다. 🧐</td></tr>';
        return;
    }

    tbody.innerHTML = entryDataList.map((row, i) => {
        const isReadonly = row.readonly === true;
        return `
            <tr class="${isReadonly ? 'bg-slate-50 opacity-60' : 'hover:bg-slate-50'} transition-colors border-b flex items-center">
                <td class="w-[40px] shrink-0 py-2 text-center text-slate-400">${i + 1}</td>
                <td class="w-[60px] shrink-0 py-2 text-center">${row.year}</td>
                <td class="w-[120px] shrink-0 py-2 px-4 font-medium truncate">${row.affiliation}</td>
                <td class="w-[150px] shrink-0 py-2 px-4 font-bold text-slate-700 truncate">${row.region}</td>
                <td class="w-[120px] shrink-0 py-2 text-right pr-4 font-bold text-indigo-600">${formatNumber(row.price)}</td>
                <td class="flex-grow py-2 px-4 text-slate-400 italic truncate" title="${row.memo}">${row.memo || '-'}</td>
                <td class="w-[60px] shrink-0 py-2 text-center">
                    <div class="flex items-center justify-center gap-2">
                        ${!isReadonly ? `
                            <button onclick="editFee(${row.idx})" class="text-indigo-600 hover:text-indigo-900 font-bold">수정</button>
                            <button onclick="deleteFee(${row.idx})" class="text-red-400 hover:text-red-600">삭제</button>
                        ` : '<span class="text-[9px] bg-slate-200 px-1 rounded">이력</span>'}
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// 수정 모드 진입
function editFee(idx) {
    const item = entryDataList.find(d => d.idx === idx);
    if (!item) return;

    feeEditIdx = idx;
    document.getElementById('fee-affiliation').value = item.affiliation;
    document.getElementById('fee-year').value = item.year;
    document.getElementById('fee-region').value = item.region;
    document.getElementById('fee-price').value = item.price;
    document.getElementById('fee-memo').value = item.memo || '';

    // UI 변경
    document.getElementById('fee-edit-indicator').classList.remove('hidden');
    document.getElementById('btn-fee-save').innerText = '단가 업데이트';
    document.getElementById('btn-fee-save').classList.replace('bg-indigo-600', 'bg-amber-600');
    document.getElementById('btn-fee-archive').classList.remove('hidden');
    document.getElementById('btn-fee-archive').onclick = () => archiveFee(idx);

    document.getElementById('fee-price').focus();
}

async function saveFeeMaster() {
    const aff = document.getElementById('fee-affiliation').value.trim();
    const year = document.getElementById('fee-year').value;
    const region = document.getElementById('fee-region').value.trim();
    const price = document.getElementById('fee-price').value;

    if (!aff || !region || !price) {
        alert("소속사, 지역, 단가를 모두 입력해 주세요. 🧐");
        return;
    }

    const payload = {
        idx: feeEditIdx,
        affiliation: aff,
        year: parseInt(year),
        region: region,
        price: parseInt(price),
        memo: document.getElementById('fee-memo').value.trim(),
        tonnage: 'ALL' // 신규 구조에 따라 ALL로 고정
    };

    try {
        const res = await fetch('/api/fees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await res.json();

        if (result.success) {
            alert(feeEditIdx ? "수정되었습니다." : "등록되었습니다.");
            resetFeeForm();
            fetchFeeEntry();
        } else {
            alert("저장 실패: " + result.message);
        }
    } catch (e) {
        console.error('Save Fee Error:', e);
        alert("서버 통신 중 오류가 발생했습니다.");
    }
}

async function archiveFee(idx) {
    if (!confirm("해당 단가를 이력으로 전환하시겠습니까?\n이후에는 수정할 수 없으며, 새로운 단가를 등록해야 합니다.")) return;

    try {
        const res = await fetch('/api/fees/archive', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idx })
        });
        const result = await res.json();
        if (result.success) {
            alert("이력으로 전환되었습니다.");
            resetFeeForm();
            fetchFeeEntry();
        }
    } catch (e) {
        console.error('Archive Fee Error:', e);
    }
}

async function deleteFee(idx) {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
        const res = await fetch(`/api/fees?idx=${idx}`, { method: 'DELETE' });
        const result = await res.json();
        if (result.success) {
            fetchFeeEntry();
        }
    } catch (e) {
        console.error('Delete Fee Error:', e);
    }
}

function resetFeeForm() {
    feeEditIdx = null;
    document.getElementById('fee-affiliation').value = '';
    document.getElementById('fee-region').value = '';
    document.getElementById('fee-price').value = '';
    document.getElementById('fee-memo').value = '';

    document.getElementById('fee-edit-indicator').classList.add('hidden');
    document.getElementById('btn-fee-save').innerText = '단가 저장';
    document.getElementById('btn-fee-save').classList.replace('bg-amber-600', 'bg-indigo-600');
    document.getElementById('btn-fee-archive').classList.add('hidden');

    if (currentView === 'fees') fetchFeeMaster();
}

// --- [NEW] 3단계 프로세스 기반 단가 관리 (3단계: 상세 단가 입력) ---

// --- [NEW] 3단계 프로세스 기반 단가 관리 (3단계: 상세 단가 입력 - 날짜 기반 개편) ---

let globalContracts = []; // 전체 계약 캐시

/**
 * 단가 입력 초기 진입 시 계약 목록 가져오기
 */
async function fetchContractListForFeeEntry() {
    try {
        // 캐시 방지를 위해 타임스탬프 추가
        const res = await fetch(`/api/contracts?t=${new Date().getTime()}`);
        const { data } = await res.json();
        globalContracts = data || [];

        // 기준 날짜가 비어있으면 오늘 날짜로 세팅
        const dateInput = document.getElementById('fee-entry-base-date');
        if (dateInput && !dateInput.value) {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            dateInput.value = `${yyyy}-${mm}-${dd}`;
        }

        onFeeBaseDateChanged(); // 초기 렌더링
    } catch (e) {
        console.error('Contract List Load Error:', e);
    }
}

/**
 * 날짜 변경 시 호출되는 필터 로직
 */
function onFeeBaseDateChanged() {
    const baseDateStr = document.getElementById('fee-entry-base-date').value;
    if (!baseDateStr) return;

    const baseDate = new Date(baseDateStr);

    // [최팀장님 요청] 입력한 날짜보다 뒤에 종료되는 계약 (유효 계약)
    // 시간값 간섭을 배제하기 위해 YYYY-MM-DD 문자열로 비교하거나, 날짜 객체의 시간을 0으로 맞춤
    const filtered = globalContracts.filter(c => {
        if (!c.endDate) return true; // 종료일 없으면 무기한으로 간주
        const endDateStr = new Date(c.endDate).toISOString().split('T')[0];
        return endDateStr >= baseDateStr;
    });

    // 정렬: ACTIVE 우선, 그 다음 시작일 내림차순
    filtered.sort((a, b) => {
        if (a.status !== b.status) return a.status === 'ACTIVE' ? -1 : 1;
        return new Date(b.startDate) - new Date(a.startDate);
    });

    renderContractList(filtered);
}

/**
 * 왼쪽 사이드바에 계약 카드 리스트 렌더링
 */
function renderContractList(contracts) {
    const listArea = document.getElementById('fee-contract-list');
    if (!listArea) return;

    if (contracts.length === 0) {
        listArea.innerHTML = '<div class="p-8 text-center text-slate-400 text-[11px]">조건에 맞는 계약이 없습니다.</div>';
        return;
    }

    listArea.innerHTML = contracts.map(c => {
        const start = (c.startDate || '').split('T')[0];
        const end = (c.endDate || '').split('T')[0];
        const isActive = c.status === 'ACTIVE';
        const feeCount = c.YongchaRateDetail ? c.YongchaRateDetail.length : 0;

        return `
            <div onclick="onContractCardClicked(${c.id})" 
                 class="contract-card bg-white border border-slate-200 rounded-lg p-3 cursor-pointer hover:border-indigo-400 hover:shadow-md transition-all group relative overflow-hidden">
                <div class="absolute top-0 left-0 w-1 h-full ${isActive ? 'bg-emerald-500' : 'bg-slate-300'}"></div>
                <div class="flex justify-between items-start mb-1">
                    <span class="text-[12px] font-black text-slate-800 truncate pr-2">${c.Affiliation?.name || '알수없음'}</span>
                    <span class="px-1.5 py-0.5 rounded text-[8px] font-bold ${isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}">
                        ${c.status}
                    </span>
                </div>
                <div class="text-[10px] text-slate-500 flex items-center gap-1 mb-2">
                    <i class="far fa-calendar-alt text-slate-300"></i>
                    ${start} ~ ${end}
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-[9px] text-slate-400 font-bold">${c.year}년 계약</span>
                    <span class="text-[9px] px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 font-black">
                        ${feeCount}건 등록됨
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * 리스트에서 카드 클릭 시 상세 영역 활성화
 */
function onContractCardClicked(contractId) {
    // 0. 활성 상태 표시 (UI) - 인자 기반으로 더 정확하게 처리
    document.querySelectorAll('.contract-card').forEach(el => {
        el.classList.remove('border-indigo-500', 'ring-2', 'ring-indigo-100', 'bg-indigo-50/10');
        // 카드 자체에 부여된 onclick 인자나 데이터를 통해 매칭
        if (el.getAttribute('onclick')?.includes(String(contractId))) {
            el.classList.add('border-indigo-500', 'ring-2', 'ring-indigo-100', 'bg-indigo-50/10');
        }
    });

    const contract = globalContracts.find(c => Number(c.id) === Number(contractId));
    if (!contract) return;

    const placeholder = document.getElementById('fee-entry-placeholder');
    const entryArea = document.getElementById('contract-detail-entry-area');

    // 0. 안내 문구 숨기고 입력 영역 노출
    if (placeholder) placeholder.classList.add('hidden');
    if (entryArea) {
        entryArea.classList.remove('hidden');
    }

    // 1. 헤더 정보 바인딩
    const startStr = (contract.startDate || '').split('T')[0] || '-';
    const endStr = (contract.endDate || '').split('T')[0] || '-';

    document.getElementById('info-aff-name').innerText = contract.Affiliation?.name || '알수없음';
    document.getElementById('info-contract-period').innerText = `${startStr} ~ ${endStr}`;

    // document.getElementById('info-contract-status') 제거됨

    // 2. 내부 상태(히든 필드) 동기화
    document.getElementById('fee-contract-id').value = contract.id;
    // [Year Fix] year가 없으면 시작일에서 추출
    const contractYear = contract.year || (startStr !== '-' ? startStr.split('-')[0] : new Date().getFullYear());
    document.getElementById('fee-year').value = contractYear;
    document.getElementById('fee-affiliation-select').value = contract.affiliationId || '';
    document.getElementById('fee-startDate').value = startStr;
    document.getElementById('fee-endDate').value = endStr;
    document.getElementById('fee-status').value = contract.status || '';

    // 3. 기존 데이터 로드
    // 3. 기존 데이터 로드
    const feeCount = contract.YongchaRateDetail ? contract.YongchaRateDetail.length : 0;

    // [UI Simplified] 상태 뱃지 제거됨
    if (feeCount > 0) {
        addedDetails = contract.YongchaRateDetail.map(d => ({
            region: d.region,
            tonnage: d.tonnage || '1T', // 기본값 1T
            price: d.price,
            memo: d.memo || ''
        }));
    } else {
        addedDetails = [];
    }
    renderAddedDetails();
}

/**
 * 상세 영역 닫기
 */
function closeFeeEntry() {
    const placeholder = document.getElementById('fee-entry-placeholder');
    const entryArea = document.getElementById('contract-detail-entry-area');

    if (placeholder) placeholder.classList.remove('hidden');
    if (entryArea) entryArea.classList.add('hidden');

    // 카드 활성 상태 해제
    document.querySelectorAll('.contract-card').forEach(el => el.classList.remove('border-indigo-500', 'ring-2', 'ring-indigo-100', 'bg-indigo-50/10'));
}

/**
 * 상세 단가 수동 추가 (UI에서 제거되어 사용되지 않음)
 */
/**
 * 상세 단가 수동 추가 (복구됨)
 */
function addFeeDetailRow() {
    // [Simple Mode] prompt로 심플하게 입력받기
    const inputs = prompt("추가할 단가 정보를 입력하세요.\n형식: 지역명, 톤수, 단가, 비고 (쉼표로 구분)\n예: 서울 강남, 1T, 150000, 기본단가");
    if (!inputs) return;

    const parts = inputs.split(',').map(s => s.trim());
    if (parts.length < 3) {
        alert("지역명, 톤수, 단가는 필수 입력 항목입니다.\n예: 서울 강남, 1T, 150000");
        return;
    }

    const region = parts[0];
    const tonnage = parts[1];
    const price = parseFloat(parts[2]);
    const memo = parts[3] || '';

    if (!region || !tonnage || isNaN(price)) {
        alert("입력 정보가 올바르지 않습니다.");
        return;
    }

    addedDetails.push({ region, tonnage, price, memo });
    renderAddedDetails();
}

function renderAddedDetails() {
    const tableArea = document.getElementById('fee-detail-list-area'); // index.html에 이 영역이 감싸고 있다고 가정하거나 tbody를 직접 제어
    const tbody = document.getElementById('fee-detail-list-body');
    const thead = document.querySelector('#contract-detail-entry-area thead');

    if (!tbody || !thead) return;

    if (addedDetails.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="py-12 text-center text-slate-300 italic">등록된 단가 정보가 없습니다. <br><span class="text-[10px] text-slate-400">엑셀 양식을 업로드해 주세요.</span></td></tr>';
        return;
    }

    if (feeViewMode === 'matrix') {
        renderAddedDetailsMatrix(thead, tbody);
    } else {
        renderAddedDetailsList(thead, tbody);
    }
}

/**
 * 리스트 모드 렌더링
 */
function renderAddedDetailsList(thead, tbody) {
    thead.innerHTML = `
        <tr class="text-[11px] font-bold text-slate-500 border-b border-slate-200 bg-slate-50">
            <th class="px-2 py-1.5">지역명</th>
            <th class="px-2 py-1.5">톤수</th>
            <th class="px-2 py-1.5 text-right">단가 (원)</th>
            <th class="px-2 py-1.5">비고</th>
            <th class="px-2 py-1.5 text-center w-[50px]">관리</th>
        </tr>
    `;

    tbody.innerHTML = addedDetails.map((item, idx) => `
        <tr class="hover:bg-slate-50 border-b last:border-b-0">
            <td class="px-2 py-1 font-medium text-[11px] text-slate-700">${item.region}</td>
            <td class="px-2 py-1 text-[11px] text-indigo-600 font-bold">${item.tonnage || '-'}</td>
            <td class="px-2 py-1 text-right font-bold text-blue-600 font-mono text-[11px]">${formatNumber(item.price)}</td>
            <td class="px-2 py-1 text-slate-500 text-[10px]">${item.memo || '-'}</td>
            <td class="px-2 py-1 text-center text-red-300 hover:text-red-500 cursor-pointer" onclick="removeDetailRow(${idx})">
                <i class="fas fa-times"></i>
            </td>
        </tr>
    `).join('');
}

/**
 * [핵심] 엑셀 스타일 매트릭스 모드 렌더링
 */
function renderAddedDetailsMatrix(thead, tbody) {
    // 1. 데이터에서 존재하는 모든 유니크한 톤수 추출 및 정렬
    const uniqueTonnages = [...new Set(addedDetails.map(d => (d.tonnage || '기타').toUpperCase()))];

    // 톤수 정렬 (숫자 크기순으로 정렬하되 '기타'는 맨 뒤로)
    uniqueTonnages.sort((a, b) => {
        if (a === '기타') return 1;
        if (b === '기타') return -1;
        const aNum = parseFloat(a.replace(/[^0-9.]/g, '')) || 999;
        const bNum = parseFloat(b.replace(/[^0-9.]/g, '')) || 999;
        return aNum - bNum;
    });

    const targetTonnages = uniqueTonnages.length > 0 ? uniqueTonnages : ['1T', '2.5T', '3.5T', '5T'];

    // 2. 헤더 생성
    thead.innerHTML = `
        <tr class="text-[10px] font-bold text-slate-500 border-b border-slate-200 bg-slate-100">
            <th class="px-2 py-1 sticky left-0 bg-slate-100 z-20 shadow-[1px_0_0_rgba(0,0,0,0.1)]">지역명</th>
            ${targetTonnages.map(t => `<th class="px-2 py-1 text-center border-l border-slate-200">${t}</th>`).join('')}
            <th class="px-2 py-1 text-center border-l border-slate-200 w-[40px]">관리</th>
        </tr>
    `;

    // 3. 지역별 그룹화
    const regions = [...new Set(addedDetails.map(d => d.region))].sort();

    tbody.innerHTML = regions.map(region => {
        const rowData = addedDetails.filter(d => d.region === region);

        return `
            <tr class="hover:bg-indigo-50 border-b last:border-b-0 text-[11px]">
                <td class="px-2 py-1 font-bold text-slate-700 sticky left-0 bg-white z-10 shadow-[1px_0_0_rgba(0,0,0,0.05)]">${region}</td>
                ${targetTonnages.map(t => {
            const match = rowData.find(d => (d.tonnage || '기타').toUpperCase() === t.toUpperCase());
            return `
                        <td class="px-2 py-1 text-right border-l border-slate-100 font-mono ${match ? 'text-blue-600 font-bold' : 'text-slate-200'}">
                            ${match ? formatNumber(match.price) : '-'}
                        </td>
                    `;
        }).join('')}
                <td class="px-2 py-1 text-center border-l border-slate-100 text-red-200 hover:text-red-500 cursor-pointer" onclick="removeRegionDetails('${region}')">
                    <i class="fas fa-trash-alt"></i>
                </td>
            </tr>
        `;
    }).join('');
}

/**
 * 보기 방식 전환 토글
 */
function changeFeeViewMode(mode) {
    feeViewMode = mode;

    // 버튼 UI 업데이트
    const btnList = document.getElementById('btn-view-list');
    const btnMatrix = document.getElementById('btn-view-matrix');

    if (mode === 'matrix') {
        btnMatrix.classList.add('bg-white', 'text-indigo-600', 'shadow-sm');
        btnMatrix.classList.remove('text-slate-500');
        btnList.classList.remove('bg-white', 'text-indigo-600', 'shadow-sm');
        btnList.classList.add('text-slate-500');
    } else {
        btnList.classList.add('bg-white', 'text-indigo-600', 'shadow-sm');
        btnList.classList.remove('text-slate-500');
        btnMatrix.classList.remove('bg-white', 'text-indigo-600', 'shadow-sm');
        btnMatrix.classList.add('text-slate-500');
    }

    renderAddedDetails();
}

/**
 * 지역 기준 전체 삭제 (매트릭스 뷰용)
 */
function removeRegionDetails(region) {
    if (!confirm(`'${region}' 지역의 모든 톤수 단가를 삭제하시겠습니까?`)) return;
    addedDetails = addedDetails.filter(d => d.region !== region);
    renderAddedDetails();
}

function removeDetailRow(index) {
    addedDetails.splice(index, 1);
    renderAddedDetails();
}

function handleDetailExcelUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            if (rows.length < 1) {
                alert("엑셀 파일에 데이터가 없습니다. 🧐");
                return;
            }

            const newDetails = [];

            // 1. 헤더에서 톤수 추출 (B열부터 끝까지)
            const headerRow = rows[0];
            const tonnageColumns = []; // { tonnage: '1T', colIdx: 1 }
            for (let j = 1; j < headerRow.length; j++) {
                const val = String(headerRow[j] || '').trim().toUpperCase();
                if (val && (val.includes('T') || val === '기타')) {
                    tonnageColumns.push({ tonnage: val, colIdx: j });
                }
            }

            if (tonnageColumns.length === 0) {
                // 기존 방식 (B열이 단가, C열이 비고인 경우) 호환
                for (let i = 1; i < rows.length; i++) {
                    const row = rows[i];
                    if (!row || row.length === 0) continue;
                    const region = String(row[0] || '').trim();
                    const price = parseFloat(row[1]);
                    const memo = String(row[2] || '').trim();
                    if (region && !isNaN(price)) {
                        newDetails.push({ region, tonnage: '1T', price, memo: memo === 'undefined' ? '' : memo });
                    }
                }
            } else {
                // 매트릭스 방식 (행: 지역, 열: 톤수별 단가)
                for (let i = 1; i < rows.length; i++) {
                    const row = rows[i];
                    if (!row || row.length === 0) continue;
                    const regionFull = String(row[0] || '').trim();
                    if (!regionFull) continue;

                    // [최팀장님 요청] 콤마(,)로 구분된 다중 지역 처리 로직 추가
                    const regions = regionFull.split(',').map(r => r.trim()).filter(r => r !== '');

                    regions.forEach(region => {
                        tonnageColumns.forEach(tc => {
                            const price = parseFloat(row[tc.colIdx]);
                            if (!isNaN(price) && price > 0) {
                                newDetails.push({
                                    region,
                                    tonnage: tc.tonnage,
                                    price: price < 1000 ? price * 10000 : price, // 9.5 -> 95000 보정
                                    memo: ''
                                });
                            }
                        });
                    });
                }
            }

            if (newDetails.length === 0) {
                alert("유효한 단가 정보를 찾을 수 없습니다. (지역명과 숫자로 된 단가를 확인해 주세요) 🧐");
                return;
            }

            if (addedDetails.length > 0) {
                // [최팀장님 요청] 취소 시 기존 데이터 유지 (업로드 중단)
                const mode = confirm(`현재 ${addedDetails.length}건의 리스트가 있습니다.\n'확인'을 누르면 기존 리스트에 추가(Merge)하고,\n'취소'를 누르면 업로드를 중단합니다. (기존 데이터 유지)`);
                if (!mode) return;
            }


            addedDetails = addedDetails.concat(newDetails);
            renderAddedDetails();

            // [자동 저장] 엑셀 업로드 즉시 저장 시도
            // 사용자 확인 없이 바로 저장하려면 saveRateDetails 내부의 confirm을 제거하거나 별도 파라미터 필요
            // 여기서는 사용자 흐름상 확인창이 뜨는 saveRateDetails를 호출
            setTimeout(() => {
                saveRateDetails();
            }, 100);

        } catch (err) {
            console.error("Detail Excel Read Error:", err);
            alert("엑셀 파일을 읽는 중 오류가 발생했습니다.");
        }
    };
    reader.readAsArrayBuffer(file);
    event.target.value = '';
}

/**
 * 상세 단가 저장 (최종)
 */
async function saveRateDetails() {
    const contractId = document.getElementById('fee-contract-id').value;
    if (!contractId) return alert("계약을 먼저 선택해 주세요.");
    if (addedDetails.length === 0) return alert("입력된 단가 정보가 없습니다. 엑셀 업로드를 먼저 해주세요.");

    if (!confirm(`총 ${addedDetails.length}건의 단가를 이 계약에 저장하시겠습니까?`)) return;

    const yearVal = document.getElementById('fee-year').value;
    const startDateVal = document.getElementById('fee-startDate').value;

    const payload = {
        id: contractId,
        year: yearVal || (startDateVal ? startDateVal.split('-')[0] : new Date().getFullYear()), // 마지막 안전장치
        affiliationId: document.getElementById('fee-affiliation-select').value,
        startDate: startDateVal,
        endDate: document.getElementById('fee-endDate').value,
        status: document.getElementById('fee-status').value,
        details: addedDetails
    };

    try {
        const res = await fetch('/api/contracts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await res.json();

        if (result.success) {
            const savedCount = result.data?._savedCount || 0;
            alert(`총 ${savedCount}건의 단가가 성공적으로 저장되었습니다! 🚚✨`);

            // 1. 전체 목록을 다시 불러와 캐시(globalContracts) 업데이트
            await fetchContractListForFeeEntry();

            // 2. 현재 선택된 계약 카드를 다시 클릭한 것처럼 처리하여 UI 갱신 (ID 기반)
            onContractCardClicked(contractId);
        } else {
            alert("저장 실패: " + result.message);
        }
    } catch (e) {
        console.error('Save error:', e);
        alert("저장 중 오류가 발생했습니다.");
    }
}

function formatNumber(num) {
    return new Intl.NumberFormat('ko-KR').format(num || 0);
}

/**
 * 조회 화면(Matrix)에서 특정 계약의 입력 화면으로 바로가기
 */
async function jumpToFeeEntry(contractId) {
    if (!contractId) return;

    // 1. 단가 입력 뷰로 전환
    if (typeof switchView === 'function') {
        switchView('fee-entry');
    }

    // 2. 계약 목록을 최신화 (이미 로드되었을 수 있지만 최신성 보장)
    await fetchContractListForFeeEntry();

    // 3. 해당 계약을 카드 클릭 기능으로 호출
    onContractCardClicked(parseInt(contractId));
}
