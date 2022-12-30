/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

/* for (let j = 0; j < 10; j++) {
  console.log(j);
} */

// 2 ~ 10까지의 짝수 출력하기

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  // console.log(i);
}

// 문자에 포함되어있는 단어를 제거하고 배열로 반환시켜 줌
const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

/* for (let i = 0; i < frontEndDev.length; i++) {
  if (i === 2 || i === 4) {
    continue;
  }
  console.log(frontEndDev[i]);
} */

// 조건이 맞을 경우, 이어서(continue) 순환
// - 조건: SVG, jQuery는 출력하지 마세요.
for (let i = 0; i < frontEndDev.length; i++) {
  let result = frontEndDev[i];
  if (result.includes('SVG') || result.includes('jQuery')) {
    continue;
  }
  // console.log(result);
}

// 조건이 맞을 경우, 순환 중단(break)
// 조건: JavaScript 까지만 출력하세요.
for (let i = 0; i < frontEndDev.length; i++) {
  if (frontEndDev[i].includes('JavaScript')) {
    console.log(frontEndDev[i]);
    break;
  }
  console.log(frontEndDev[i]);
}

/* let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
} */

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환

// - 성능 향상에 도움이 되는 팁
//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
