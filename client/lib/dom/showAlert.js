

import { getNode } from './getNode.js';
import { addClass, removeClass } from './css.js';

function showAlert(node, text = '에러입니다.', timeout = 1500) {
  if (typeof node === 'string') node = getNode(node);

  node.textContent = text;

  // 일정시간 후에 추가하기, 제거하기
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}

showAlert('.alert', '올바른 정보를 입력해주세요.', 3000);
