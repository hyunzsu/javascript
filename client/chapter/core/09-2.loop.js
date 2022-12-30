/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// false여도 1번은 무조건 실행함
/* let i = 10;
do {
  console.log('최초 선언');
  i++;
} while (i < 5); */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

/* let count = prompt('몇 번 순환할까요?', '');

do {
  console.log(count);
  if (count <= 0 || !count) {
    console.log(
      '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
    );
    break;
  }
  count--;
} while (count); */

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector('.first');
let second = document.querySelector('.second');

function next(node) {
  //한바퀴 돌때마다 node.nextSibling에 .nextSibling이 한개씩 추가
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);

  return node;
}

next(first); // second 찾음

prev(second); // first 반환하게끔

function prev(node) {
  do {
    node = node.previousSibiling;
  } while (node.nodeType !== document.ELEMENT_NODE);

  return node;
}

console.log(prev(second));

// console.log(first.nextSibling); // #text(밑에 span태그가기전에 공백처리한 구간), first가 가지고있는 너의 다음(형제)이 누구야?
