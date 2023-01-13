// 1. 인풋 밸류값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더주기
// 5. 화면에 출력하기

const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');
const result = getNode('.result')

// value값 나오는 함수
function getInputValue(node) {
  if (typeof node === 'string') node = getNode(node);
  if (node.tagName !== 'INPUT')
    refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.');
  return node.value;
}

// firstValue, secondValue 더하기
const sum = (vlaueA, valueB) => vlaueA + valueB;

// - 불편해서 없애는 함수, 지우는
function clearContents(node) {
  if (typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

function handler(e) {
  e.preventDefault(); // 새로고침 안되게, 정보입력하고 done누르면 증발되는거 막기위해, 기본동작 차단

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  console.log(total);

  clearContents(result);

  insertLast(result, total); // 위치조정 함수
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);

  insertLast(result, total);
}

done.addEventListener('click', handler);

firstInput.addEventListener('change', inputHandler);
secondInput.addEventListener('change', inputHandler);
