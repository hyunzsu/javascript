/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */
/* String() */
// number
const YEAR = 2022;
console.log(YEAR);
console.log(String(YEAR));

// undefined, null
console.log(String(undefined));
console.log(String(null));

// boolean -> 'true' or 'false'
let isKind = true;
console.log(String(isKind));

/* 데이터 → 숫자 ----------------------------------------------------------- */
/* Number() */
// undeinfed -> NaN
console.log(Number(undefined)); // NaN

// null -> 0
let memory = null;
console.log(Number(memory)); // 0

// boolean -> true: 1 / false: 0
let cutie = false;
console.log(cutie * 1); // 0
console.log(cutie / 1); // 0
console.log(+cutie); // 0

// string 숫자형 문자
let num = '123';
console.log(Number(num)); // 123
console.log(num * 1); // 123

let num2 = '       123';
console.log(Number(num2)); // 123

// numeric string
let width = '320px';
console.log(Number(width)); // NaN
console.log(parseInt(width, 10)); // 320, 10 -> 10진수

let width2 = '32.2132434px';
console.log(parseFloat(width2, 10)); // 32.2132434

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean('0')); // true
console.log(Boolean('')); // false
console.log(Boolean(!!null)); // false, 부정의 부정 = 긍정
