/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */
/* 
let arr = [1,2,3,4];
function sum(...args){
  console.log(args);
}
 */

// sum(1,2,3,4,)
// rest parameter
const calculateTotal = (...args) => {
  let total = 0;

  args.forEach((item) => {
    total += item;
  });

  // args.reduce((acc,item)=> acc + item )
  // console.log();

  return total;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => {
  return a + b + c + d;
};

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result += numeric;
  }
  return result;
};

let powExpression = (numeric, powerCount) => {
  return Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);
};

// let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numeric, 1)
let result = powExpression(2, 53);

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

let repeatExpression = (text, repeatCount) => {
  return Array(repeatExpression)
    .fill(null)
    .reduce((acc) => (acc + text, ''));
};

// repeat('hello', 3) // 'hellohellohello'
