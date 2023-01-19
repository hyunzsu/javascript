import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from "./typeOf.js";

const first = getNode('.first');

// js는 위에서 아래로 읽는데 같이 움직임, 콜백이 필요한 순간
// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';


// 콜백함수 이용 -> 함수가 함수 호출할 때 다시 delay 줘서 다시 호출, ...
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// 콜백지옥
/* delay(()=>{
  first.style.top = '-100px'
  delay(()=>{
    first.style.transform = 'rotate(360deg)'
    delay(()=>{
      first.style.top = '0px';
    })
  })
}) */

/* delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
}) */


// 프라미스 이용: 콜백함수의 가독성을 위해

// 매개변수 자리마다 맞추기 힘드니까 구조분해할당 말고 다른 형태 시도~!
// 내가 원하는 값만 넣어주고 다른것들은 기본값 하고싶어 -> 기본값은 깔고 우리가 쓴 값만 새롭게 반영
// 아규먼트 일일히 다 넘기기 싫어 필요한거만 넘길거. 다른것들은 기본값

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}


export function delayP(options = {}) {

  let config = {...defaultOptions} // 복사, 새롭게 담김

  if (isNumber(options)) { // delayP(3000) 매개변수가 숫자니까 합성은 하지 않고 대체!
    config.timeout = options;
  }

  // 객체 합성 mixin -> 아규먼트와 위에 객체가 합쳐진? 새롭게 던진 값을 대체해야되니까! 객체 합성해야 함 기본값과 options에 던져준 값 더해라
  // 앞에 있는 값에 뒤에있는 값이 덮어짐 
  if (isObject(options)) { // 안전하게. 객체가 맞아? 합성해
    config = {...config, ...options};
  }

  const {shouldReject,data,errMessage,timeout} = config;

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      !shouldReject ? resolve('성공!') : reject(errMessage)
    }, timeout);
  })
}

// delayP(3000).then((res)=>{
//   console.log(res);
// })
// delayP()


// promise는 자신의 값을 내놓기 때문에 프로미스 체인?
// delayP()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })



// async : promise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기
//        2. 코드 실행 흐름 제어            


// async await
async function delayA() {
  return '완료'
}

let result = await delayA(); // 값이 담김 .then 안써줘도 됨

// console.log(result);


