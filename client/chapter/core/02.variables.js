/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

/* eslint no-unused-vars: 0 */
let admin;
let name;

name = 'John';

admin = name;

console.log(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'kindtiger';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcProductQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365;

// - 구매 결제 여부
let isPayment = false;
let hasClassName = false;

// - 구매 결제 내역
let paymentHistory;

// - 브랜드 접두사
const BRAND_PREFIX = 'EUID';

// - 오늘의 운세
let fortuneOfToday;

// - 상품 정보
const productInfomation = '';

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

// Redux

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';

/* -------------------------------------------------------------------------- */
/* Lexical Environment                                                        */
/* -------------------------------------------------------------------------- */

var nickName = 'tiger';

let nickName2 = 'tiger'; // Temporal Dead Zone  (임시 사망 지역, 임시 사각 지역)
