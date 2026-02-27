# NDY 용차 관리 시스템 테이블 구조 정의서

본 문서는 프로젝트에서 사용되는 주요 데이터베이스 테이블 구조와 각 필드에 대한 설명을 담고 있습니다. (Prisma Schema 기준)

---

## 1. Driver (용차 기사 마스터)
용차 기사의 기본 인적 사항과 차량 정보를 관리합니다.

| 필드명 | 타입 | 설명 |
|:---|:---|:---|
| id | Int (PK) | 고유 식별자 (자동 증가) |
| name | String | 기사 성함 |
| affiliationId | Int (FK) | 소속 업체 ID (Affiliation 테이블 참조) |
| carNo | String | 차량 번호 |
| tonnage | String | 차량 톤수 (예: 1T, 2.5T, 3.5T) |
| phone | String | 연락처 |
| regDate | DateTime | 기사 등록일 |
| address | String | 거주지/지역 |
| memo | String | 기타 비고 사항 |
| createdAt | DateTime | 데이터 생성 일시 |
| updatedAt | DateTime | 데이터 수정 일시 |

---

## 2. Affiliation (운송 업체 마스터)
기사가 소속되거나 계약 체결 대상인 운송사 정보를 관리합니다.

| 필드명 | 타입 | 설명 |
|:---|:---|:---|
| id | Int (PK) | 고유 식별자 (자동 증가) |
| name | String | 업체명 (UNIQUE) |
| bizNo | String | 사업자 등록 번호 |
| ceo | String | 대표자 성함 |
| address | String | 업체 주소 |
| manager | String | 담당자 성함 |
| contact | String | 담당자 연락처 |
| email | String | 담당자 이메일 |
| memo | String | 업체 관련 비고 |
| createdAt | DateTime | 데이터 생성 일시 |

---

## 3. YongchaContract (용차 단가 계약 헤더)
운송 업체와의 연도별/기간별 단가 계약 정보를 관리합니다.

| 필드명 | 타입 | 설명 |
|:---|:---|:---|
| id | Int (PK) | 고유 식별자 (자동 증가) |
| year | Int | 계약 연도 (예: 2026) |
| affiliationId | Int (FK) | 운송 업체 ID (Affiliation 테이블 참조) |
| startDate | DateTime | 계약 시작일 |
| endDate | DateTime | 계약 종료일 |
| status | String | 계약 상태 (ACTIVE: 활성, INACTIVE: 비활성) |
| memo | String | 계약 특이 사항 |
| createdAt | DateTime | 데이터 생성 일시 |
| updatedAt | DateTime | 데이터 수정 일시 |

---

## 4. YongchaRateDetail (용차 단가 상세 내역)
계약(YongchaContract)에 종속된 지역별 상세 운송 단가를 관리합니다.

| 필드명 | 타입 | 설명 |
|:---|:---|:---|
| id | Int (PK) | 고유 식별자 (자동 증가) |
| contractId | Int (FK) | 연결된 계약 ID (YongchaContract 테이블 참조) |
| tonnage | String | 차종 톤수 (1T, 2.5T, 3.5T 등) |
| region | String | 배송 지역명 |
| price | Int | 운송 단가 (원) |
| memo | String | 단가 관련 비고 |
| createdAt | DateTime | 데이터 생성 일시 |
| updatedAt | DateTime | 데이터 수정 일시 |

---

## 5. SettlementHistory (정산 이력)
확정된 용차 배차 및 비용 정산 내역을 보관합니다.

| 필드명 | 타입 | 설명 |
|:---|:---|:---|
| id | Int (PK) | 고유 식별자 (자동 증가) |
| date | DateTime | 운행/정산 일자 |
| driverName | String | 기사명 |
| affiliation | String | 소속 업체명 (문자열) |
| tonnage | String | 차량 톤수 |
| destCount | Int | 배송지 수 |
| totalWeight | Int | 총 중량 |
| fee | Int | 최종 확정 정산 금액 |
| memo | String | 정산 관련 비고 |
| status | String | 정산 상태 (기본값: COMPLETED) |
| isPbox | Boolean | P박스 여부 |
| isReturn | Boolean | 회송 여부 |
| so | String | 소속(상세) |
| nap | String | 납품처(상세) |
| ton | Int | 중량(상세) |
| contractId | Int (FK) | 적용된 계약 ID (선택 사항) |
| appliedTonnage | String | [추가] 실제 정산 시 적용된 차종 톤수 |
| createdAt | DateTime | 데이터 생성 일시 |
