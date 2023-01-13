

import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString } from './lib/index.js';

import { jujeobData } from "./data/data.js";

const submit = getNode('#submit');
const resultArea = getNode('.result')

// console.log(submit);

// console.log(isNaN('dd123'));


function clickSubmitHandler(e) {
 e.preventDefault(); 

 let name = getInputValue('#nameField');
 let list = jujeobData(name);
 let pick = list[getRandom(list.length-1)];

//  console.log(pick);

// 이름 입력하지 않으면 작동 안함
if(!name) {
 console.log('이름을 입력해 주세요.');
 return;
}

if (isNumericString(name)) {
  console.log('제대로 된 이름을 입력해주세요.');
  return;
}


clearContents(resultArea); 

insertLast(resultArea, pick);

}

submit.addEventListener('click', clickSubmitHandler)