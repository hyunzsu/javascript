/* ---------------------------------------------------------------------- */
/* DOM Node Class                                                         */
/* ---------------------------------------------------------------------- */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

/* 노드 정보 ------------------------------------------------------------- */

let first = getNode('.first');

// - nodeType
console.log(first.nodeType === document.ELEMENT_NODE); // true
console.log(first.nodeType === 1); // true

// - nodeName (vs. tagName)
console.log(first.nodeName === 'SPAN'); // true
console.log(first.tagName !== 'SPAN'); // false

/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML
first.innerHTML = 'like lion';

// * 기존 내용 삭제
first.innerHTML = ''; // 다 날라가버림

// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML += '<strong>like lion</strong>';

// - textContent
console.log(first.textContent); // get

// * 요소 내의 텍스트에 접근
// * 태그는 제외하고 오로지 텍스트만 추출
first.textContent = '멋쟁이 사자처럼'; // set

/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

// js에서 접근, html에 hidden넣는것은 html로 접근
// getNode('h1').hidden = true;
getNode('h1').hidden = false;
