import { getNode } from '../dom/getNode.js';

const first = getNode('.first');

// js는 위에서 아래로 읽는데 같이 움직임, 콜백이 필요한 순간
first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';


// 콜백함수 이용 -> 함수가 함수 호출할 때 다시 delay 줘서 다시 호출, ...
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

delay(()=>{
  first.style.top = '-100px'
  delay(()=>{
    first.style.transform = 'rotate(360deg)'
    delay(()=>{
      first.style.top = '0px';
    })
  })
})

// 프라미스 이용: 콜백함수의 가독성을 위해
