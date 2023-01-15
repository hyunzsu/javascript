/* eslint no-undef :'warn' */ 
/* eslint no-unused-vars :'off' */ 

// 1. input value 값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더하기
// 5. 화면에 출력하기

const firstInput = getNode('#firstNumber'); // getNode 값 확인하고 값 담기
const secondInput = getNode('#secondNumber');
const done = getNode('#done'); // (1) 이벤트핸들러 연결
const result = getNode('.result');

// 노드의 value값 가져오는 유틸함수
// 1. input value 값 가져오기
function getInputValue(node) { // (4) value 값 가져오는 유틸함수
  if (typeof node === 'string') node = getNode(node);
  if (node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.');
  return node.value;
  // let firstValue = firstInput.value;
}

// firstValue, secondValue 더하기
// 4. 두 수의 합을 더하기
const sum = (vlaueA, valueB) => vlaueA + valueB;

// (6) - 불편해서 없애는 함수
function clearContents(node) {
  if (typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

// 2. 이벤트 핸들러 연결하기
function handler(e) { // (3) done의 클릭이벤트 연결
	// 3. 이벤트 기본동작 차단하기
  e.preventDefault(); // 새로고침 안되게, 정보입력하고 done누르면 증발되는거 막기위해, 기본동작 차단
	// 3-1. getInputValue에 형변환
  let firstValue = +getInputValue(firstInput); // input으로 받으면 문자니까 형변환 해라
  let secondValue = +getInputValue(secondInput); // 형변환 해라
	// 4-1. firstValue, secondValue를 sum 함수에 넣어줌
  let total = sum(firstValue,secondValue);

	// 5. 화면에 출력하기 (5) 
  console.log(total);

	// (6) 기존 -(하이픈)을 html넣어둔게 붙으니까 얘를 없애주고 넣어라
  // getNode('.result').textContent = '';
	clearContents(result);

  // html가서 insert.js 추가
  // insertLast > 문자열 끝에 위치해라 
  insertLast(result,total); // (7) 위치조정 함수
}

// (8) 실시간으로 값 넣었을때 변하게끔 하는 함수
function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);

  insertLast(result, total);
}

done.addEventListener('click', handler); // (2) 클릭했을 때 handler 작동
firstInput.addEventListener('change', inputHandler); // (9) 값 변하는 함수 결과
secondInput.addEventListener('change', inputHandler); 