/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded // 로딩이 완료된
3:interative // 인터렉티브
4:complete // 완료
 */


import { typeError } from "../error/typeError.js";


// xhrData 함수 만들기 method, url
// 아규먼트 받는 즉시 구조분해 할당
export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // 에러방지
  },
} = {}) {
  // const {method, url, body} = options
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  // console.log(Object.entries(headers)); // 키 밸류 반환됨

  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value); // 배열 구조 분해 할당
  // });

  // readystate가 change 됬을 때 발생하는 이벤트
  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr; // 객체 구조 분해 할당

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        // console.log('통신 성공');
        onSuccess(JSON.parse(response));
      }
    } else {
      // console.error('통신 실패');
      onFail('통신 실패');
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

/* xhrData({
  url: 'https://jsonplaceholder.typicode.com/users/1',
  onSuccess: (result) => {
    console.log(result);
  }
  onFail:(err) => {
    console.log(err);
  }
}); */

// shorthand property

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail
  });
};

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  });
};






// promise API
// xhrData  -> promise

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: null,
};

export function xhrPromise(options = {}) { // options의 기본값은 객체로 하겠다
  const xhr = new XMLHttpRequest();

  // {...defaultOptions, ...options};랑 Object.assign({}, defaultOptions, options);랑 같은 거, 얕복 후 구조분해할당
  const { method, url, body, headers } = Object.assign({},defaultOptions,options); // {}는 새로운 객체를 만들겠다 {}에 다 때려박음

  // if (!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.')

  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null) // body가 있으면 ~, 없으면 null,  밑에거 대신

  // xhr.send(body); // return 밑에 넣으면 종료니까 올려줌

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response)); // onSuccess
        } else {
          reject('에러입니다.');
        }
      }
    });
  });
}

// 비동기통신에서 성공된 값을 가져와야 함
// xhrPromise({
//   url:'https://jsonplaceholder.typicode.com/users/1'
// })
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })


// promise 조금 더 쉽게 
// 함수지만 객체로 활용할 수 있게

xhrPromise.get = (url) => {
  return xhrPromise({
    url
  })
}

xhrPromise.post = (url,body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST'
  })
}

xhrPromise.put = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}

// xhrPromise
// .get('www.naver.com') // promise
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   // console.log(err);
// })

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method:'DELETE'
  })
}

