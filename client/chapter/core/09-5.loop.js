/* ---------------------------------------------------------------------- */
/* For Of Loop                                                            */
/* ---------------------------------------------------------------------- */

// String, Array, Array-like = iterable

/* const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
};

for (let value of arrayLike) {
  console.log(value);
} */

// console.log(str);

for (let value of str) {
  console.log(value);
}

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for ~ of 문
// - 특정 조건에서 건너띄기
for (let value of languages) {
  if (value.name === 'Java') continue;
  console.table(value);
}

// - 특정 조건에서 중단하기
for (let value of languages) {
  let name = value.name;
  if (name.includes('C#')) break;
  console.table(value);
}

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

for (let value in randomUser) {
  if (Object.prototype.hasOwnProperty.call(randomUser, value)) {
    const L1 = randomUser[value];
    console.log('Level 1 : ' + value);

    if (typeof L1 === 'object') {
      for (let value in L1) {
        if (Object.prototype.hasOwnProperty.call(L1, value)) {
          const L2 = L1[value];
          console.log('\tLevel 2 : ' + value);
          if (typeof L2 === 'object') {
            for (let value in L2) {
              if (Object.prototype.hasOwnProperty.call(L2, value)) {
                const L3 = L2[value];
                console.log('\t\tLevel 3 : ' + value);
              }
            }
          }
        }
      }
    }
  }
}
/* 
Object.keys
Object.values
Object.entries
 */

// console.log(Object.values(randomUser));
/* 
for(let key of Object.keys(randomUser)){
  console.log(key);
}
for(let values of Object.values(randomUser)){
  console.log(values);
}
 */

for (let keyValue of Object.entries(randomUser)) {
  let key = keyValue[0];
  let value = keyValue[1];

  console.log('L1 : ', key);

  if (typeof value === 'object') {
    for (let keyValue of Object.entries(value)) {
      let key = keyValue[0];
      let value = keyValue[1];

      console.log('\t L2 : ', key);
    }
  }
}
