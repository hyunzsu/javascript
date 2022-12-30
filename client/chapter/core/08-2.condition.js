/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;
if (age >= 14 && age <= 90) {
  console.log('내 나이가 어때서');
} else {
  console.log('난 애기다');
}

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && '' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

let userName = prompt('사용자 아이디를 입력해주세요.', '');

if (userName.toLowerCase() === 'admin') {
  let pw = prompt('비밀번호를 입력해 주세요.', '');
  if (pw.toLowerCase() === 'themaster') {
    console.log('환영합니다.');
  } else {
    console.log('취소되었습니다.');
  }
} else if (userName.replace(/\s*/g, '') === '' || userName === null) {
  console.log('취소했습니다.');
} else {
  console.log('인증되지 않은 사용자 입니다.');
}
