/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

/* let i = 0;
while (i < 10) {
  console.log('안녕');
  i++;
} */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let i = 0;
while (i < frontEndDev.length) {
  console.log(frontEndDev[i]);
  i++;
}

// while 문 (역순환 : 역방향)
let i = frontEndDev.length - 1;
while (i >= 0) {
  console.log(frontEndDev[i]);
  i--;
}

// 성능 진단 : 순환 vs. 역순환

// 배열 반환
// .slice() 이용
let copyArray = frontEndDev.slice();

// .pop() 이용 -> 배열 파괴
while (frontEndDev.length) {
  console.log(frontEndDev.pop());
}

// 전개연산자 (Spread Operator) 이용
// 전개 연산자 전개 구문 spread operator -> 전개 연산자 안쓰면 pop()이 배열을 파괴시킴, 전개 연산자가 복사해서 파괴되어도 살아있음
let copyArray = [...frontEndDev];
