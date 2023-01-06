/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';
console.log(message);

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ', stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log('extractCharacter : ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// message = 'more' + message[5]; // 문자를 새로 만드는 것은 가능

// message[3] = 'i'; // 기존 문자를 바꾸는 것은 불가능
// console.log(message);

// 부분 문자열 추출
// let slice = message.slice();
// console.log('slice : ', slice);

let slice = message.slice(0, 3);
console.log('slice : ', slice);

let subString = message.substring(0, 3);
console.log('subString : ', subString);
// let subStr;

// 문자열 포함 여부 확인
// 해당 문자가 여러개 들어있을 경우 가장 앞에 있는 인덱스를 반환시켜줌
let indexOf = message.indexOf('i');
console.log('indexOf : ', indexOf);

// 뒤에서부터 찾음
let lastIndexOf = message.lastIndexOf();
console.log('lastIndexOf : ', lastIndexOf);

let includes = message.includes('Less');
console.log('includes : ', includes);

let startsWith = message.startsWith('L');
console.log('startsWith : ', startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith : ', endsWith);

// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log('trimLeft : ', trimLeft);

let trimRight = message.trimRight();
console.log('trimRight : ', trimRight);

let trim = message.trim(); // 띄어쓰기는 안없어짐
console.log('trim : ', trim);

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ', toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;
