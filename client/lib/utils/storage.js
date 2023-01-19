import { isString } from './typeOf.js';

const {
  localStorage: storage,
  JSON: { srtingify: serialize, parse: deserialize }, // srtingify 귀찮으니까 serialize 이렇게 쓰겠다 ㅋㅋ
} = globalThis;

const albums = [
  {
    id: 'album_0zie',
    title: 'Nightmare',
    artist: '오월오일 ( 五月五日 )',
    'release-date': '2022.10.08',
    like: 147,
    'song-count': 5,
    cover: {
      size: 640,
      quality: 100,
      src: 'https://cdnimg.melon.co.kr/cm2/album/images/110/73/494/11073494_20221007160706_500.jpg/melon/resize/640/quality/100/optimize',
    },
  },
  {
    id: 'album_9ipw',
    title: '흔들리지 않아 (Feat. 폴킴)',
    artist: 'TRADE L',
    'release-date': '2022.10.07',
    like: 306,
    'song-count': 1,
    cover: {
      size: 640,
      quality: 100,
      src: 'https://cdnimg.melon.co.kr/cm2/album/images/110/72/305/11072305_20221006135934_500.jpg/melon/resize/640/quality/100/optimize',
    },
  },
];


// console.log(storage);

// JSON.stringify()
// serialize()
// deserialize()

export function saveStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value)); // 문자화시켜야 값이 들어감
      resolve();
    } else {
      reject({ message: 'key는 문자 타입이어야 합니다.'});
    }
  });
}
// saveStorage('name', albums)

export function loadStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(deserialize(storage.getItem(key)));
    } else {
      reject({ message: 'key는 문자 타입이어야 합니다.'});
    }
  });
}
loadStorage('name').then((res)=>{
  // console.log(res);
})

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    if (!key) {
      storage.clear()
    } else{
      storage.removeItem(key)
    }
  })
}


// localstorage 만든 이유 -> 알고리즘 기억해둘라고

// 이제 함수로 만들자....
// storage.setItem('name', 'tiger'); // 생성
// console.log(storage.getItem('name')); // 가져옴
// storage.clear(); // 모든거 제거
// storage.removeItem('name') // 제거

// 함수만들기.....
// saveStorage('name', 'tiger')
// loadStorage('name')
// deleteStorage('name')

