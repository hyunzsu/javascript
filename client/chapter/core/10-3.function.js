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
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
