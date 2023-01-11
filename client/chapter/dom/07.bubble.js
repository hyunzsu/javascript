/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', function (e) {
  let elem = e.currentTarget;
  // console.log("target : ", e.target);
  // console.log("currentTarget : ", e.currentTarget);
  // console.log(this === e.currentTarget);
  // console.log(this);
  console.log('%c visual', 'background:dodgerblue');
  css('.pop', 'display', 'block');
});

// 없앰과 동시에 부모의 버블링때문에 다시 보임 -> stopPropagation로 해결
getNode('.pop').addEventListener('click', (e) => {
  e.stopPropagation();
  css('.pop', 'display', 'none');
});

news.addEventListener('click', function () {
  // console.log('%c news', 'background-color:orange');
});

desc.addEventListener('click', function () {
  // console.log('%c desc', 'background-color:hotpink');
});

// 어떻게 내가 원하는 p만 찍을거냐?
desc.addEventListener('click', function (e) {
  e.stopPropagation();
  // console.log('%c desc', 'background-color:hotpink');
});

/* 캡처링 ----------------------------------------------------------------- */
