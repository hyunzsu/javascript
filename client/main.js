import {
  addClass,
  clearContents,
  copy,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  removeClass,
  showAlert,
} from './lib/index.js';

import { jujeobData } from './data/data.js';

const submit = getNode('#submit');
const resultArea = getNode('.result');

// console.log(submit);

// console.log(isNaN('dd123'));

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  //  console.log(pick);

  // 이름 입력하지 않으면 작동 안함
  if (!name) {
    console.log('이름을 입력해 주세요!');
    showAlert('.alert-error', '잘못된 정보입니다!', 2000);
    // GSAP 사용해보기 - removeClass 안넣어줘도 됨
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    /* addClass(resultArea, 'shake');
    setTimeout(() => {
      removeClass(resultArea,'shake')
    }, 1000); */
    return;
  }

  if (isNumericString(name)) {
    console.log('제대로 된 이름을 입력해주세요.');
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    showAlert('.alert-error', '정확한 이름을 입력해주세요!', 2000);
    return;
  }

  clearContents(resultArea);

  insertLast(resultArea, pick);
}

function clickCopyHandler() {
  let text = resultArea.textContent; // resultArea에 있는 text를 넣음
  // navigator.clipboard.writeText(text); // copy 유틸함수 만들기
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사가 완료됐습니다.', 2000);
  });
  // 약속구문 (promise then 구문)
  // 약속
  // 다음 해야 할 일, 프라미스 = 복사가 완료되었다라는 거 약속
}

submit.addEventListener('click', clickSubmitHandler);
resultArea.addEventListener('click', clickCopyHandler);
