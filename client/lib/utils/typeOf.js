
export function isNumericString(data){
  data = Number(data);
  return !isNaN(data)
}



export function isElement(node) {
  return node.nodeType === document.ELEMENT_NODE
}
















