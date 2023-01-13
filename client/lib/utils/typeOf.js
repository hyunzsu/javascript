
// 숫자형문자가 맞아? 물어보는 함수

export function isNumericString(data) {

  data = Number(data);
  return !isNaN(data);
}
