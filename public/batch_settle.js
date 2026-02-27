const STATUS_LABELS = {
    'REQUESTED': { text: '1차전송🚩', color: 'bg-blue-100 text-blue-700', step: 1 },
    'CHECKED': { text: '운수사확인✅', color: 'bg-amber-100 text-amber-700', step: 2 },
    'FINALIZED': { text: '최종확정🏁', color: 'bg-emerald-100 text-emerald-700', step: 3 },
    'COMPLETED': { text: '최종확정🏁', color: 'bg-emerald-100 text-emerald-700', step: 3 } // 레거시 대응
};

let batchData = [];
let localFeeMaster = [];
let userRole = 'NDY'; // 기본값 (Auth.init() 이후 동기화됨)
let isSystemAdmin = false; // ADMIN 대행 권한용 플래그

/**
 * 사용자 권한 동기화 (Auth 모듈 연동)
 */
function syncUserRole() {
    const user = typeof Auth !== 'undefined' ? Auth.getUser() : null;
    if (user) {
        const role = (user.role || '').toUpperCase();
        isSystemAdmin = (role === 'ADMIN' || user.loginId === 'admin'); // ADMIN 역할 또는 admin 계정 대행 허용
        console.log(`[syncUserRole] Role: ${role}, isSystemAdmin: ${isSystemAdmin}`);
        if (role === 'TRANSPORT') userRole = 'TRANSPORT';
        else userRole = 'NDY'; 
    }
}
syncUserRole();

/**
 * 뷰 전환 시 자동 데이터 로드 리스너
 */
async function loadBatchSettleData() {
    syncUserRole(); // 데이터 로드 시마다 권한 동기화
    const sDate = document.getElementById('startDate').value;
    const eDate = document.getElementById('endDate').value;
    const affiliationVal = document.getElementById('driverInput').value; // UI상 '소속'으로 변경됨

    if (!sDate || !eDate) return;
    if (!validateDateRange(sDate, eDate)) return;

    const tbody = document.getElementById('batch-settle-tableBody');
    if (!tbody) return;

    tbody.innerHTML = '<tr><td colspan="15" class="p-12 text-center text-indigo-500 font-bold"><i class="fas fa-spinner fa-spin mr-2"></i>정산 데이터 동기화 중...</td></tr>';

    try {
        // 1. 단가 마스터 로드
        if (!localFeeMaster || localFeeMaster.length === 0) {
            const feeRes = await fetch('/api/fees');
            const feeJson = await feeRes.json();
            localFeeMaster = feeJson.data || [];
        }

        // 2. 배차 실적 로드 (기사명 검색 대신 소속사명 검색으로 파라미터 전달)
        const summaryUrl = `/api/summary?startDate=${sDate}&endDate=${eDate}&affiliations=${encodeURIComponent(affiliationVal)}`;
        const summaryRes = await fetch(summaryUrl);
        const summaryJson = await summaryRes.json();
        const dailyRecords = summaryJson.data || [];

        // 3. 기존 정산 기록 로드
        const historyUrl = `/api/settlement-history?startDate=${sDate}&endDate=${eDate}`;
        const historyRes = await fetch(historyUrl);
        const historyJson = await historyRes.json();
        const historyRecords = historyJson.data || [];

        // 4. 데이터 병합
        batchData = dailyRecords.map(daily => {
            const dailyName = (daily.driverName || '').replace(/\s/g, '').trim();
            const dailyDate = daily.date;
            
            const history = historyRecords.find(h => {
                // [개선] 백역사 데이터가 이미 YYYY-MM-DD 문자열임
                const hDate = (h.date || '').substring(0, 10);
                const hName = (h.driverName || h.name || '').replace(/\s/g, '').trim();
                return hDate === dailyDate && hName === dailyName;
            });

            if (history) {
                let status = history.status || 'REQUESTED';
                if (status === 'COMPLETED') status = 'FINALIZED'; // 레거시 상태 매핑
                return {
                    ...daily,
                    idx: history.id || history.idx,
                    status: status,
                    isPbox: history.isPbox || false,
                    isReturn: history.isReturn || false,
                    gwon: history.gwon || 0,
                    memo: history.memo || daily.memo,
                    fee: history.fee || daily.fee,
                    appliedTonnage: history.appliedTonnage || daily.tonnage,
                    selectedTonnage: history.appliedTonnage || daily.tonnage
                };
            }
            return { ...daily, status: 'NEW', isInHistory: false, gwon: 0, selectedTonnage: daily.tonnage || '1T' };
        });

        if (batchData.length === 0) {
            tbody.innerHTML = '<tr><td colspan="15" class="p-16 text-center text-slate-400">대상 데이터가 없습니다. (확정된 내역은 [용차 비용 정산] 메뉴에서 확인 가능)</td></tr>';
        } else {
            renderBatchSettleTable();
        }
    } catch (e) {
        console.error('Batch Load Error:', e);
        tbody.innerHTML = '<tr><td colspan="15" class="p-8 text-center text-red-500 font-bold">오류가 발생했습니다.</td></tr>';
    }
}

/**
 * 주소 기반 권역 분석 (최팀장님 룰 반영)
 */
function parseRegionFromAddress(address) {
    if (!address) return '';
    const parts = address.split(' ').map(p => p.trim()).filter(p => p);
    if (parts.length === 0) return '';
    const first = parts[0];
    const second = parts[1] || '';

    // 부산, 울산, 대구, 광주 등 광역시는 '첫 단어'가 권역
    if (first.includes('부산') || first.includes('울산') || first.includes('대구') || first.includes('광주')) {
        return first.substring(0, 2);
    }
    // 경남, 경북 등은 '두 번째 단어(시/군)'가 권역 (단, 두 번째가 구(ex. 북구)인 경우는 무시하고 첫단어 혹은 다른 로직 필요할 수 있으나 현재 단가표 기준 시/군 단위)
    if (first.includes('경남') || first.includes('경상남도') || first.includes('경북') || first.includes('경상북도')) {
        // '시' 혹은 '군'을 포함하는 두번째 단어 추출
        return second ? second.replace('시', '').replace('군', '') : first.substring(0, 2);
    }
    return first.replace('시', '').replace('군', '').replace(/[0-9]/g, '');
}

/**
 * 단가 기반 지능형 정산 로직 (최팀장님 룰 v4: 권역 추가금 엄격 적용)
 */
function calculateSmartPrice(row, isPbox = false, isReturn = false, gwon = 0, selectedTonnage = '') {
    const rawAddr = row.addrDetail || '';
    const stopCount = parseInt(row.destCount) || 1;
    const addrs = rawAddr.split('||').map(s => s.trim()).filter(s => s);

    // 실제 방문한 '물리적 권역' 목록 추출 (예: ['부산', '양산'])
    const regionsInAddr = [...new Set(addrs.map(addr => parseRegionFromAddress(addr)).filter(r => r))];

    // 1. 기본 단가 찾기
    let basePrice = 0;
    regionsInAddr.forEach(reg => {
        // (A) 먼저 지역이 맞는 모든 단가를 필터링
        const allMatchingFees = localFeeMaster.filter(f => {
            if (f.status !== 'ACTIVE') return false;
            
            const fRegs = f.region.split(',').map(s => s.trim());
            return fRegs.some(fr => fr === reg || fr.includes(reg) || reg.includes(fr));
        });

        if (allMatchingFees.length > 0) {
            const cleanRowDiv = (row.driverDiv || '').replace(/\s/g, '');
            // (B) 그 중 소속사까지 일치하는 단가가 있는지 확인
            const specificFees = allMatchingFees.filter(f => (f.affiliation || '').replace(/\s/g, '') === cleanRowDiv);
            
            // (C) 소속사 일치 단가가 있으면 그것을 사용, 없으면 전체(지역 일치) 중에서 사용
            const targetFees = specificFees.length > 0 ? specificFees : allMatchingFees;
            
            const maxForThisReg = Math.max(...targetFees.map(f => parseInt(f.price)));
            if (maxForThisReg > basePrice) basePrice = maxForThisReg;
        }
    });

    // 2. 추가 요금 산출
    function getExtraFee(name) {
        const cleanRowDiv = (row.driverDiv || '').replace(/\s/g, '');
        
        // [수정] 추가 요금도 톤수 'ALL' 허용 및 공백 무시 비교 적용
        function isMatch(f) {
            return f.status === 'ACTIVE' && f.region === name;
        }

        const fee = localFeeMaster.find(f => isMatch(f) && (f.affiliation || '').replace(/\s/g, '') === cleanRowDiv) ||
            localFeeMaster.find(f => isMatch(f));
            
        return parseInt(fee?.price || 0);
    }

    const regionExtraStepSize = getExtraFee('권역추가') || 10000;
    const stopExtraStepSize = getExtraFee('납품처추가') || 10000;
    const pboxFeeValue = getExtraFee('피박스') || 0;
    const returnFeeValue = getExtraFee('회송') || 0;
    
    // [추가] 톤수별 가산금 (예: 2.5T, 3.5T 항목 대응)
    const tonnageFeeValue = (selectedTonnage !== '1T' && selectedTonnage !== '-') ? getExtraFee(selectedTonnage) : 0;

    let extraAmount = 0;
    let reasonParts = [];

    if (basePrice > 0) {
        reasonParts.push(`${formatNumber(basePrice)}원`);

        // (1) 권역 추가: 방문한 '물리적 권역'이 2개 이상일 때 (최팀장님 핵심 요청)
        // 예: 부산+양산 방문 시 1개 추가
        if (regionsInAddr.length > 1) {
            const zoneAddCount = regionsInAddr.length - 1;
            const zoneAddTotal = zoneAddCount * regionExtraStepSize;
            extraAmount += zoneAddTotal;
            reasonParts.push(`+권역추가${zoneAddCount}곳(${formatNumber(zoneAddTotal)})`);
        }

        // (2) 납품처 추가: 콜수 - 1
        if (stopCount > 1) {
            const addStopTotal = (stopCount - 1) * stopExtraStepSize;
            extraAmount += addStopTotal;
            reasonParts.push(`+추가${stopCount - 1}곳(${formatNumber(addStopTotal)})`);
        }

        // (3) 기타 옵션
        if (tonnageFeeValue > 0) { extraAmount += tonnageFeeValue; reasonParts.push(`+${selectedTonnage}(${formatNumber(tonnageFeeValue)})`); }
        if (isPbox) { extraAmount += pboxFeeValue; reasonParts.push(`+P박스(${formatNumber(pboxFeeValue)})`); }
        if (isReturn) { extraAmount += returnFeeValue; reasonParts.push(`+회송(${formatNumber(returnFeeValue)})`); }

        // (4) 기타 조정
        const gwonVal = parseInt(gwon) || 0;
        if (gwonVal !== 0) {
            extraAmount += gwonVal;
            reasonParts.push(`${gwonVal > 0 ? '+' : ''}기타(${formatNumber(gwonVal)})`);
        }
    } else {
        reasonParts.push(`[!] 단가표 매칭 실패`);
    }

    const finalPrice = basePrice + extraAmount;
    const reason = reasonParts.join(' ');

    return { basePrice, extraAmount, finalPrice, reason, isSuccess: basePrice > 0 };
}

/**
 * 주소 목록 요약
 */
function summarizeRegions(addrDetail) {
    if (!addrDetail || addrDetail === '-') return '-';
    const addrs = addrDetail.split('||').map(a => a.trim()).filter(a => a);
    const countMap = {};
    addrs.forEach(addr => {
        const region = parseRegionFromAddress(addr);
        if (region && region !== '?' && region !== '-') countMap[region] = (countMap[region] || 0) + 1;
    });
    return Object.entries(countMap).map(([reg, count]) => `${reg} ${count}`).join(', ') || '-';
}

/**
 * 권역/역할별 잠금 로직
 */
function getIsEditable(row) {
    if (row.status === 'FINALIZED') return false; 
    
    const user = typeof Auth !== 'undefined' ? Auth.getUser() : null;
    const isNdyAdmin = user && (['ADMIN', 'MANAGER'].includes((user.role || '').toUpperCase()));

    if (userRole === 'NDY') {
        // NDY 차례: 미전송(NEW) 건 혹은 운수사 검토 완료(CHECKED) 건
        // 단, 관리자/담당자는 이미 전송된(REQUESTED) 건도 재수정 전송 가능
        return row.status === 'NEW' || row.status === 'CHECKED' || (isNdyAdmin && row.status === 'REQUESTED');
    } else if (userRole === 'TRANSPORT') {
        return row.status === 'REQUESTED';
    }
    return false;
}

/**
 * 결과 렌더링
 */
function renderBatchSettleTable() {
    const tbody = document.getElementById('batch-settle-tableBody');
    if (!tbody) return;

    const roleBadge = document.getElementById('current-role-badge');
    if (roleBadge) {
        roleBadge.innerText = userRole === 'NDY' ? 'NDY 담당자 모드' : '운수사 담당자 모드';
        roleBadge.className = `px-3 py-1 rounded-full text-[10px] font-bold ${userRole === 'NDY' ? 'bg-indigo-600 text-white' : 'bg-amber-500 text-white'}`;
    }

    if (batchData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="15" class="p-16 text-center text-slate-400">데이터가 없습니다.</td></tr>';
        return;
    }

    const isAllChecked = document.getElementById('batch-select-all')?.checked || false;

    const rowsHtml = batchData.map((row, i) => {
        row.isPbox = row.isPbox || false;
        row.isReturn = row.isReturn || false;
        row.selectedTonnage = row.selectedTonnage || '1T';
        row.gwon = row.gwon || 0;

        const isEditable = getIsEditable(row);
        const isLocked = !isEditable;

        // [개선] 렌더링 시 현재 '전체 선택' 상태인 경우, 오직 'NEW'(미전송) 상태만 자동으로 체크함
        // (사용자 요청: 이미 전송된 건이 자동 선택되어 발생하는 모순 해결)
        const isChecked = isAllChecked && row.status === 'NEW' && isEditable;

        const calc = calculateSmartPrice(row, row.isPbox, row.isReturn, row.gwon, row.selectedTonnage);
        row.calc = calc;

        const addrSummary = summarizeRegions(row.addrDetail);
        const statusCfg = STATUS_LABELS[row.status] || { text: '정산대기', color: 'bg-slate-100 text-slate-500', step: 0 };

        const tooltipText = `[거래처명]\n${row.destDetail || '-'}\n\n[상세 주소]\n${(row.addrDetail || '-').split('||').map(a => a.trim()).join('\n')}`;

        return `
            <tr id="batch-row-${i}" class="hover:bg-slate-50 border-b border-gray-200 last:border-0 transition-colors ${isLocked ? 'bg-slate-50/50' : ''} text-[10px] divide-x divide-gray-100 whitespace-nowrap h-9">
                <td class="px-1 text-center font-medium text-slate-400">
                    <div class="flex flex-col items-center justify-center">
                        <input type="checkbox" class="batch-row-checkbox w-3 h-3 mb-0.5" data-idx="${i}" ${isLocked ? 'disabled' : ''} ${isChecked ? 'checked' : ''}>
                        <span>${i + 1}</span>
                    </div>
                </td>
                <td class="px-1 text-center text-slate-600">${row.date || '-'}</td>
                <td class="px-1 text-center font-bold text-indigo-700">${row.driverName || '-'}</td>
                <td class="px-1 text-center text-slate-500 truncate" title="${row.driverDiv}">${row.driverDiv || '-'}</td>
                <td class="px-2 text-left truncate relative group cursor-help" title="${tooltipText}">
                    <div class="font-bold text-indigo-700 truncate">${addrSummary}</div>
                    <div class="text-[9px] text-slate-400 truncate">${row.destDetail || '-'}</div>
                    <!-- Detailed Tooltip UI (Hidden in some environments, native title covers it) -->
                    <div class="hidden group-hover:block absolute left-0 top-full mt-1 bg-slate-900 text-white text-[10px] p-3 rounded-lg shadow-2xl z-[100] whitespace-normal min-w-[300px] border border-slate-700 backdrop-blur-sm bg-opacity-95 pointer-events-none">
                        <div class="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-slate-700/50">
                            <i class="fas fa-map-marker-alt text-amber-400 text-[11px]"></i>
                            <span class="font-bold text-slate-200">배송처 상세 내역</span>
                        </div>
                        <div class="space-y-2">
                            <div>
                                <div class="text-[9px] text-slate-400 font-bold mb-0.5">거래처명</div>
                                <div class="text-indigo-300 font-bold leading-relaxed">${row.destDetail || '-'}</div>
                            </div>
                            <div>
                                <div class="text-[9px] text-slate-400 font-bold mb-0.5">상세 주소</div>
                                <div class="text-slate-300 leading-relaxed">${row.addrDetail || '주소 정보 없음'}</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td class="px-1 text-center font-bold text-slate-700">${row.destCount}</td>
                <td class="px-1 text-center">
                    <input type="checkbox" onchange="toggleBatchDetail(${i}, 'isPbox', this.checked)" ${row.isPbox ? 'checked' : ''} ${isLocked ? 'disabled' : ''} class="w-3 h-3 accent-indigo-600">
                </td>
                <td class="px-1 text-center">
                    <input type="checkbox" onchange="toggleBatchDetail(${i}, 'isReturn', this.checked)" ${row.isReturn ? 'checked' : ''} ${isLocked ? 'disabled' : ''} class="w-3 h-3 accent-red-500">
                </td>
                <td class="px-1 text-center">
                    <input type="number" step="1000" id="batch-gwon-input-${i}" value="${row.gwon}" ${isLocked ? 'disabled' : ''}
                        class="w-full text-right px-1 py-0.5 border border-slate-200 rounded font-bold text-amber-600 bg-white text-[10px] focus:ring-1 focus:ring-amber-500 outline-none"
                        onchange="toggleBatchDetail(${i}, 'gwon', this.value)">
                </td>
                <td class="px-1 text-center">
                    <select onchange="toggleBatchDetail(${i}, 'selectedTonnage', this.value)" ${isLocked ? 'disabled' : ''}
                        class="w-full px-1 py-0.5 border border-slate-200 rounded text-[9px] font-bold bg-slate-50 focus:bg-white outline-none">
                        <option value="1T" ${row.selectedTonnage === '1T' ? 'selected' : ''}>1T</option>
                        <option value="2.5T" ${row.selectedTonnage === '2.5T' ? 'selected' : ''}>2.5T</option>
                        <option value="3.5T" ${row.selectedTonnage === '3.5T' ? 'selected' : ''}>3.5T</option>
                        <option value="기타" ${row.selectedTonnage === '기타' ? 'selected' : ''}>기타</option>
                    </select>
                </td>
                <td id="batch-price-display-${i}" class="px-1 text-right font-bold text-blue-600 bg-blue-50/20">
                    ${formatNumber(calc.finalPrice)}
                </td>
                <td class="px-1">
                    <input type="text" id="batch-reason-${i}" value="${calc.reason}" ${isLocked ? 'disabled' : ''}
                        class="w-full px-1 py-0.5 border border-transparent rounded text-[9px] text-slate-500 bg-transparent focus:bg-white focus:border-indigo-300 transition-colors"
                        onchange="batchData[${i}].calc.reason = this.value">
                </td>
                <td class="px-1 text-center">
                    <div class="flex justify-center gap-1">
                        ${renderStatusButtons(row, i)}
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    const totalCount = batchData.length;
    const totalFee = batchData.reduce((sum, row) => sum + (row.calc?.finalPrice || 0), 0);

    const summaryHtml = `
        <tr class="bg-slate-800 text-white font-bold sticky bottom-0 z-10 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
            <td colspan="2" class="py-2.5 text-center text-[10px] bg-slate-700">TOTAL</td>
            <td colspan="5" class="py-2.5 px-4 text-[11px]">조회 내역 총 ${totalCount}건</td>
            <td colspan="4" class="py-2.5 text-right px-4 text-[10px] text-slate-400">최종 확정 합계:</td>
            <td id="batch-total-fee" class="py-2.5 text-right px-2 text-[13px] text-amber-400">${formatNumber(totalFee)}</td>
            <td colspan="2" class="py-2.5 bg-slate-900/50"></td>
        </tr>
        `;

    tbody.innerHTML = rowsHtml + summaryHtml;
}

/**
 * 상태별 액션 버튼
 */
function renderStatusButtons(row, i) {
    const statusCfg = STATUS_LABELS[row.status] || { text: '정산대기', color: 'bg-slate-100 text-slate-500', step: 0 };
    const statusHtml = `<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold border ${statusCfg.color.replace('bg-', 'bg-opacity-20 border-').replace('text-', 'text-')} mr-1.5">${statusCfg.text}</span>`;

    if (userRole === 'NDY') {
        if (row.status === 'NEW') return `${statusHtml}<button onclick="updateRowStatus(${i}, 'REQUESTED')" class="bg-indigo-600 text-white px-2 py-1 rounded text-[9px] font-bold shadow-sm hover:scale-105 transition-transform">전송🚩</button>`;
        if (row.status === 'CHECKED') return `${statusHtml}<button onclick="updateRowStatus(${i}, 'FINALIZED')" class="bg-emerald-600 text-white px-2 py-1 rounded text-[9px] font-bold shadow-sm hover:scale-105 transition-transform">확정🏁</button>`;
        if (row.status === 'REQUESTED') {
            const btnHtml = isSystemAdmin ? `<button onclick="updateRowStatus(${i}, 'CHECKED')" class="bg-amber-500 text-white px-2 py-1 rounded text-[9px] font-bold shadow-sm hover:scale-105 transition-transform ml-1">검토완료(대행)✅</button>` : '';
            return `${statusHtml}<span class="text-blue-500 text-[9px] font-bold animate-pulse italic">[운수사 확인중]</span>${btnHtml}`;
        }
    } else if (userRole === 'TRANSPORT') {
        if (row.status === 'REQUESTED') return `${statusHtml}<button onclick="updateRowStatus(${i}, 'CHECKED')" class="bg-amber-500 text-white px-2 py-1 rounded text-[9px] font-bold shadow-sm hover:scale-105 transition-transform">검토완료✅</button>`;
        if (row.status === 'CHECKED') return `${statusHtml}<span class="text-amber-600 text-[9px] font-bold italic">[확인완료]</span>`;
        if (row.status === 'NEW') return `${statusHtml}<span class="text-slate-300 text-[9px] italic">[NDY 대기중]</span>`;
    }
    if (row.status === 'FINALIZED' || row.status === 'COMPLETED' || row.status === 'DONE') return `<span class="text-emerald-600 font-bold text-[9px]"><i class="fas fa-check-double mr-1"></i>최종완료</span>`;
    
    // 이외에 정의되지 않은 상태가 들어온 경우 (예외 방어)
    if (row.status !== 'NEW' && !isSystemAdmin) {
        return `${statusHtml}<span class="text-slate-400 text-[9px] italic">[이력 데이터]</span>`;
    }
    
    return statusHtml;
}

/**
 * 역할 전환
 */
function switchUserRole(role) {
    userRole = role;
    renderBatchSettleTable();
}

/**
 * 상태 변경 처리
 */
async function updateRowStatus(i, nextStatus) {
    syncUserRole();
    const row = batchData[i];

    console.log(`[updateRowStatus] Index: ${i}, nextStatus: ${nextStatus}, userRole: ${userRole}, isSystemAdmin: ${isSystemAdmin}`);
    if (nextStatus === 'REQUESTED' && userRole !== 'NDY' && !isSystemAdmin) return alert('NDY 담당자만 전송할 수 있습니다.');
    if (nextStatus === 'CHECKED' && userRole !== 'TRANSPORT' && !isSystemAdmin) return alert('운수사 담당자만 완료할 수 있습니다.');
    if (nextStatus === 'FINALIZED' && userRole !== 'NDY' && !isSystemAdmin) return alert('NDY 담당자로 최종 확정해 주세요.');

    const confirmMsg = {
        'REQUESTED': '운수사로 정산 내역을 전송하시겠습니까? (운수사 검토 단계로 진입)',
        'CHECKED': isSystemAdmin ? '운수사를 대행하여 검토를 완료하시겠습니까?' : '검토를 완료하고 NDY로 회신하시겠습니까?',
        'FINALIZED': '정산 내역을 최종 확정하시겠습니까? (확정 후 이력에서 조회 가능)'
    };

    if (!confirm(confirmMsg[nextStatus])) return;

    const payload = {
        idx: row.idx,
        date: row.date,
        driverName: row.driverName,
        affiliation: row.driverDiv || '-',
        destCount: row.destCount,
        totalWeight: row.totalWeight,
        fee: row.calc.finalPrice,
        memo: row.calc.reason,
        appliedTonnage: row.selectedTonnage,
        isPbox: row.isPbox,
        isReturn: row.isReturn,
        gwon: row.gwon || 0,
        status: nextStatus,
        nap: row.destDetail, // 상세 납품처 저장 (NAP -> 납품처 상세)
        so: summarizeRegions(row.addrDetail) // 권역 요약 저장 (참고용)
    };

    try {
        const res = await fetch('/api/save-settlement', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await res.json();
        if (result.success) {
            alert('처리가 완료되었습니다. ✅');
            loadBatchSettleData();
        } else alert('처리에 실패했습니다: ' + result.message);
    } catch (e) { alert('서버 통신 오류가 발생했습니다.'); }
}

/**
 * 개별 옵션 변경 핸들러
 */
function toggleBatchDetail(i, field, value) {
    const row = batchData[i];
    if (!row) return;
    if (field === 'gwon') row.gwon = parseInt(value) || 0;
    else if (field === 'selectedTonnage') row.selectedTonnage = value;
    else row[field] = value;
    const newCalc = calculateSmartPrice(row, row.isPbox, row.isReturn, row.gwon, row.selectedTonnage);
    row.calc = newCalc;
    const priceDisplay = document.getElementById(`batch-price-display-${i}`);
    const reasonInput = document.getElementById(`batch-reason-${i}`);
    if (priceDisplay) priceDisplay.innerText = formatNumber(newCalc.finalPrice);
    if (reasonInput) reasonInput.value = newCalc.reason;
    updateTotalSummaryText();
}

/**
 * 하단 합계 실시간 업데이트
 */
function updateTotalSummaryText() {
    const totalFee = batchData.reduce((sum, row) => sum + (row.calc?.finalPrice || 0), 0);
    const totalFeeEl = document.getElementById('batch-total-fee');
    if (totalFeeEl) totalFeeEl.innerText = formatNumber(totalFee);
}

/**
 * 일괄 전송
 */
async function sendBatchToHistory() {
    syncUserRole(); // 전송 직전 최신 권한 강제 동기화
    console.log(`[BatchSettle] 일괄 전송 시작. 현재 역할: ${userRole}`);
    
    const checkboxes = document.querySelectorAll('.batch-row-checkbox:checked');
    if (checkboxes.length === 0) return alert('전송할 항목을 선택해 주세요.');
    if (!confirm(`${checkboxes.length}건을 일괄 정산 처리하시겠습니까?`)) return;

    let successCount = 0;
    let skipReasons = {}; // 제외 사유별 카운트

    const user = typeof Auth !== 'undefined' ? Auth.getUser() : null;
    const isNdyAdmin = user && (['ADMIN', 'MANAGER'].includes((user.role || '').toUpperCase()));

    for (const cb of checkboxes) {
        const i = parseInt(cb.getAttribute('data-idx'));
        const row = batchData[i];
        if (!row) continue;

        let nextStatus = '';
        const isTransport = userRole === 'TRANSPORT';

        // 정산 프로세스 상태 전이
        if (isTransport) {
             if (row.status === 'REQUESTED') nextStatus = 'CHECKED';
        } else {
             if (row.status === 'NEW') nextStatus = 'REQUESTED';
             else if (row.status === 'CHECKED') nextStatus = 'FINALIZED';
             // [ADMIN 대행] 운수사 확인 단계(REQUESTED)에서 바로 확인(CHECKED)으로 전이 허용
             else if (isSystemAdmin && row.status === 'REQUESTED') nextStatus = 'CHECKED'; 
        }
        
        if (!nextStatus) {
            const reason = isTransport ? 
                `운수사 대기 항목 아님` : 
                (row.status === 'REQUESTED' ? (isSystemAdmin ? '상태 전이 오류' : '이미 전송됨(관리자 권한 필요)') : '순차적 절차(NEW/CHECKED) 아님');
            
            skipReasons[reason] = (skipReasons[reason] || 0) + 1;
            console.warn(`[BatchSettle] ${row.driverName} 건너뜀: ${reason} (현재상태: ${row.status})`);
            continue;
        }

        // 데이터 정규화: 날짜 형식을 안전한 문자열로 변환
        let safeDate = row.date;
        try {
            const d = new Date(row.date);
            if (!isNaN(d.getTime())) {
                safeDate = d.toISOString().split('T')[0];
            }
        } catch(e) {}

        const payload = {
            idx: row.idx,
            date: row.date,
            driverName: row.driverName,
            affiliation: row.driverDiv || row.affiliation || '-',
            tonnage: row.tonnage || '1T',
            destCount: parseInt(row.destCount) || 0,
            totalWeight: parseInt(row.totalWeight) || 0,
            fee: parseInt(row.calc?.finalPrice || row.fee || 0), // [수정] totalFee -> finalPrice
            memo: row.memo || '',
            status: nextStatus,
            isPbox: !!row.isPbox,
            isReturn: !!row.isReturn,
            contractId: row.contractId || null,
            appliedTonnage: row.selectedTonnage || row.tonnage || '1T'
        };
        try {
            const res = await fetch('/api/save-settlement', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            const result = await res.json();
            if (result.success) {
                successCount++;
                console.log(`[BatchSettle] ${row.driverName} (${row.date}) 전송 성공 -> ${nextStatus}`);
            } else {
                const errMsg = result.message || '서버 거부';
                skipReasons[`전송 실패: ${errMsg}`] = (skipReasons[`전송 실패: ${errMsg}`] || 0) + 1;
                console.error(`[BatchSettle] ${row.driverName} 전송 실패: ${errMsg}`);
            }
        } catch (e) {
            const commErr = '통신 장애';
            skipReasons[commErr] = (skipReasons[commErr] || 0) + 1;
            console.error(`[BatchSettle] ${row.driverName} 통신 오류:`, e);
        }
    }
    const totalSelected = checkboxes.length;
    const skippedCount = totalSelected - successCount;
    
    console.log(`[BatchSettle] 전송 완료. 총 ${totalSelected}건 중 ${successCount}건 성공, ${skippedCount}건 제외됨.`);
    
    if (successCount === 0 && totalSelected > 0) {
        let reasonStr = Object.entries(skipReasons).map(([r, c]) => `- ${r}: ${c}건`).join('\n');
        alert(`전송 가능한 규격의 데이터가 없습니다. (선택 ${totalSelected}건 중 0건 처리)\n\n[상세 사유]\n${reasonStr || '권한 또는 상태 불일치'}`);
    } else {
        alert(`${successCount}건이 처리되었습니다.` + (skippedCount > 0 ? ` (${skippedCount}건 제외)` : ''));
    }
    loadBatchSettleData();
}

function toggleAllBatchRows(checked) {
    document.querySelectorAll('.batch-row-checkbox').forEach(cb => { if (!cb.disabled) cb.checked = checked; });
}

async function applyAutoSettlement() {
    const feeRes = await fetch('/api/fees');
    const feeJson = await feeRes.json();
    localFeeMaster = feeJson.data || [];
    if (batchData.length === 0) loadBatchSettleData();
    else renderBatchSettleTable();
    alert('지능형 재계산이 완료되었습니다.');
}
