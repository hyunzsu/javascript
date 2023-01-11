/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className); // first
// console.log((first.className = 'hola')); // hola
// first.classList.add('hello'); // 추가
// first.classList.remove('hello'); // 제거
// console.log(first.classList.toggle('is-active'));

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = 'red';
// first.style.marginLeft = '30px';
// first.style.transform = 'rotate(360deg)';

/* 계산된 스타일 읽기 ------------------------------------------------------- */

console.log(first.style.fontSize); // 이거 안돼!

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
let size = getComputedStyle(first).fontSize;
console.log(size);

// classList 유틸함수 이동 css.js

// css 유틸함수 이동 css.js
