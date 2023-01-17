// [ 주사위 굴리기] [1 ~ 8]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ] [9 ~ 18]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 

// [ 레코드 템플릿 뿌리기] [19 ~ 28]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기 

import { attr, clearContents, diceAnimation, disableElement, enableElement, getNode, getNodes, insertLast, invisibleElement, visibleElement } from './lib/index.js';

// (11) 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

/* const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)'); // (1) 버튼 그룹안에있는 친자식 첫번째
const recordButton = getNode('.buttonGroup > button:nth-child(2)'); // (9) 기록 버튼 변수설정
const resetButton = getNode('.buttonGroup > button:nth-child(3)'); */

const recordListWrapper = getNode('.recordListWrapper') // (14) .recordListWrapper getNode 한 것 변수에 담아줌


/* -------------------------------------------------------------------------- */
/* render                                                                     */
/* -------------------------------------------------------------------------- */

// 특정 대상의 속성값을 가져오거나 / 설정할 수 있는 함수
let count = 0; // (23)
let total = 0; // (25)

function renderRecordListItem() { // (19) 레코드 리스트에 회차, 기록, 합계 가져오는 함수

  let diceValue = attr('#cube', 'data-dice'); // (24)

  // (20)
  let template = /* html */ `
  <tr>
    <td>${++count}</td> <!-- (23) 처음부터 1 나오게 전위연산자 사용 -->
    <td>${diceValue}</td> <!-- (24) -->
    <td>${total += +diceValue}</td> <!-- (25) diceValue 문자이므로 형변환 -->
  </tr> 
`
  insertLast('.recordListWrapper tbody', template) // (21) tbody의 마지막 자식요소 바로 다음에 template 삽입
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight; // (26)스크롤 길이만큼 찍어줌, 알아서 스크롤바로 내려가는
}


/* -------------------------------------------------------------------------- */
/* event                                                                      */
/* -------------------------------------------------------------------------- */

// (2) rollingDiceButton 이벤트핸들러 연결
const handlerRollingDice = (() => {
  
  let stopAnimation; // (4) 갖다쓸 수 있게 변수 선언, 오류생길 때 대비
  let isRolling = false; // (6) 갖다쓸 수 있게 변수 선언

  return () => { // (7) 클로저로 보호해야 실행됨.
    if(!isRolling) {
      stopAnimation = setInterval(diceAnimation,100) // (3) 시간간격 두고 반복실행 (연결시켜 놓은 애니메이션으로)
      disableElement(recordButton) // (12) disable 유틸함수 사용, 비활성화, 주사위버튼 실행중이면 기록버튼 누를 수 없음
      disableElement(resetButton) // (17) 비활성화, 주사위버튼 실행중이면 초기화버튼 누를 수 없음
    } else{
      clearInterval(stopAnimation); // (5) 지울 수 있음. 아이디 값 받아서, 그 아이디 값을 받아서 필요할 때 종료시킬 수 있음
      enableElement(recordButton) // (12) enable 유틸함수 사용, 활성화, 주사위버튼 멈추면 기록버튼 누를 수 있음
      enableElement(resetButton) // (17) 활성화, 주사위버튼 멈추면 기록버튼 누를 수 있음
    }
  
    isRolling = !isRolling; // 현재 false 그러고 true로 바뀜, 다시 클릭하면 else문 실행, 또 반전 false => true, false 토글 됨

  }


})() // (8) IIFE 사용



// (13) recordButton 이벤트핸들러 연결
const handelRecord = () => {
  visibleElement(recordListWrapper) // (15) 기록버튼 누르면 레코드리스트 보임
  renderRecordListItem(); // (22) 빼먹지마라...
}

// (16) resetButton 이벤트핸들러 연결
const handleReset = () => {

  count = 0; // (27) 초기화버튼 누르면 전에 기록 모두 제거
  total = 0; // (27) 초기화버튼 누르면 전에 기록 모두 제거

  invisibleElement(recordListWrapper) // (18) 초기화버튼 누르면 레코드리스트 사라짐
  clearContents('.recordListWrapper tbody') // (28) 전에 기록 지우기

}

// rollingDiceButton.addEventListener('click', handlerRollingDice()); // IFFE 사용하지 않고 클로저라면 뒤에 () 붙여야 함
rollingDiceButton.addEventListener('click', handlerRollingDice); // (2) 주사위버튼 눌렀을 때 
recordButton.addEventListener('click', handelRecord); // (13) 기록버튼 눌렀을 때
resetButton.addEventListener('click', handleReset) // (16) 초기화버튼 눌렀을 때 이벤트핸들러 실행