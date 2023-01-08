/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty: function () {
    return '헤헤';
  },
};

let key = 'valueOf';
// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(javaScript.hasOwnProperty(key));
Object.prototype.nickName = 'tiger';

// 객체 자신의(own) 속성(property)인지 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

let a = {};

// Object.prototype === {}

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// Function.prototype.call() 예시
const user = {
  name: 'tiger',
  age: 32,
};

function hello(a, b, c) {
  console.log(a, b, c); // 1 2 3
  console.log(this); // {name: 'tiger', age: 32}
}

// hello가 가리키는 대상은 user라는 객체로 하고, hello 함수에는 1,2,3을 차례대로 넘기겠다.
hello.call(user, 1, 2, 3);

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
// 객체에 양보하세요..

let tens = [10, 100, 1000, 10000];
for (let value in tens) {
  if ({}.hasOwnProperty.call(tens, value)) {
    console.log(tens[value]);
  }
}
