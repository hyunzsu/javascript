/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');

// handler
// first.addEventListener('click', function () {})
function handler() {
  console.log('hit!');

  // css('.second', 'display', 'none');
}
first.addEventListener('click', handler);

// 클릭할 때마다 이벤트객체보임
// x좌표 y좌표 보임
ground.addEventListener('click', function (e) {
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, ${e.offsetY - ball.offsetHeight / 2}px)`;
});

ground.addEventListener('mousemove', function (e) {
  // console.log(e.offsetX, e.offsetY);
});

// bindEvent.js 이사

// - addEventListener

// - removeEventListener
