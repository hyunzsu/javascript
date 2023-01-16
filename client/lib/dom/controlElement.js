

// 2. disable 활성 유틸 함수 만들기
import { typeError } from '../error/typeError.js';
import { isElement } from '../utils/typeOf.js';


// JSDoc - 밑에있는 함수에 대한 설명
/**
 * @function isElement checkElement
 * @parm {HTMLElement} node
 * @return {disabled} set disabled
 */

export function disableElement(node) {
  if(!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = true;
}

export function enableElement(node) {
  if(!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = false;
}

// disableElement()


// 4. visible 활성 유틸 함수 만들기
// 기록 버튼을 누르면 리스트가 등장해야 함
export function visibleElement(node) { // 보이는
  if (!isElement(node)) {
    typeError('visibleElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.hidden = false;
}

export function invisibleElement(node){ // 안보여야함 
  if(!isElement(node)){
    typeError('invisibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
  }
  node.hidden = true;
}