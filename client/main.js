// [ 주사위 굴리기]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기



import { diceAnimation, getNode } from './lib/index.js';

const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)'); // (1) 버튼 그룹안에있는 친자식 첫번째


// (2) 이벤트핸들러 연결
const handlerRollingDice = (() => {
  
  let stopAnimation; // (4) 갖다쓸 수 있게 변수 선언, 오류생길 때 대비
  let isRolling = false; // (6) 갖다쓸 수 있게 변수 선언

  return () => { // (7) 보호하기 위해 클로저 사용
    if(!isRolling) {
      stopAnimation = setInterval(diceAnimation,100) // (3) 애니메이션 구현해놓은거 연결
    } else{
      clearInterval(stopAnimation); // (5) 지울 수 있음. 아이디 값 받아서, 그 아이디 값을 받아서 필요할 때 종료시킬 수 있음
    }
  
    isRolling = !isRolling; // 현재 false 그러고 true로 바뀜, 다시 클릭하면 else문 실행, 또 반전 false

  }


})() // (8) IIFE 사용


rollingDiceButton.addEventListener('click', handlerRollingDice); // (2) (8)
