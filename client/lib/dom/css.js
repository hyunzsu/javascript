// add - 추가
function addClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof className !== 'string') {
    TypeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  }
  node.classList.add(className);
}

// remove - 제거
// 변경하기: 대상의 클래스를 지운다.
// 지운 값을 받아서 뭘 처리해야하나? ㄴㄴ 세팅만하니까 return 없어도 돼
function removeClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (!className) {
    node.className = '';
    return;
  }
  if (typeof className !== 'string') {
    TypeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  }
  node.classList.remove(className);
}

// toggle
function toggleClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof className !== 'string') {
    TypeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  }
  node.classList.toggle(className);
}

// console.log(addClass('.first', 'aaa'));

// 인자를 전달하지 않고 모든 클래스를 제거
// console.log(removeClass('.first')); // 전부 지우기
// console.log(removeClass('.first', 'aaa')); // 특정 'aaa'만 지우기

// getCss 유틸함수 - 가져오기
// 자바스크립트에서는 객체의 key, value 값을 변수로 받기 위해서는 . 사용 X
// [ ] 대괄호 표기법 사용!
// 대상에게 속성을 받아서 이 속성 값이 뭐야~? 라는걸 보여줘야 함
function getCss(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    syntaxError(
      'getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }
  return getComputedStyle(node)[prop];
}

// setCss 유틸함수 - 대상에게 원하는 css 속성을 추가, 세팅하는 것
// 한 다음에 그 값을 받아서 뭘 처리해야해? ㄴㄴ 추가까지, 그러니 return 사용 X
function setCss(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    syntaxError(
      'setCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }
  if (!value) {
    syntaxError('setCSS 함수의 세 번째 인자는 함수값 입니다.');
  }
  node.style[prop] = value;
}

// get + set 합치는 css 유틸함수

const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);

// css('.first', 'font-size', '100px'); // set
// css('.first', 'font-size'); // get - value 없음
