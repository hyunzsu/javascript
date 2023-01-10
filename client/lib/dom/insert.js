// insertBefore 함수
function insertBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE)
    typeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.'); // typeError 적용
  node.insertAdjacentHTML('beforebegin', text);
}

// insertFirst 함수
function insertFirst(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE)
    typeError('insertFirst 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('afterbegin', text);
}

// insertLast 함수
function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE)
    typeError('insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('beforeend', text);
}

// insertAfter 함수
function insertAfter(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE)
    typeError('insertAfter 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('afterend', text);
}
