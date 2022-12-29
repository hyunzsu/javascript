/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console.log('디스코드를 켠다.');
    break;
  case LUNCH:
    console.log('점심을 맛있게 먹는다.');
    break;
  case DINNER:
    console.log('멘토링 수업 준비를 한다.');
    break;
  case NIGHT:
    console.log('스터디 발표 준비를 한다..');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('꿈속에서 배웠던 코드를 생각한다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('디스코드를 켠다.');
} else if (thisTime === LUNCH) {
  console.log('점심을 맛있게 먹는다');
} else if (thisTime === DINNER) {
  console.log('멘토링 수업 준비를 한다.');
} else if (thisTime === NIGHT) {
  console.log('스터디 발표 준비를 한다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('드림 코딩');
}

/* switch vs. if -------------------------------------------------------- */
let number = 5;
switch (number) {
  case 0:
    console.log('일');
    break;
  case 1:
    console.log('월');
    break;
  case 2:
    console.log('화');
    break;
  case 3:
    console.log('수');
    break;
  case 4:
    console.log('목');
    break;
  case 5:
    console.log('금');
    break;
  case 6:
    console.log('토');
    break;
}

// 임의 숫자를 넣어서 무슨 요일인지를 알려주는 함수를 만들어보자
function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}
let result = getDay(4);
console.log(result);

function getRandom(n) {
  return Math.round(Math.random() * n);
}
