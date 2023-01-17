/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded // 로딩이 완료된
3:interative // 인터렉티브
4:complete // 완료
 */

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
}) {
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

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

/* xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
    "name": "kindtiger",
    "username": "seonbeom",
    "email": "tiger@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }); */
