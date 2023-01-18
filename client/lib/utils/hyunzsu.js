
// fetch

const defaultOptions = { // 입력하지 않아도되는 기본옵션
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}


export const tiger = async (options = {}) => { // 새롭게 받는 값들?
  
  // 객체합성과 동시에 url, ...restOptions(url을 제외한 나머지 객체?) 만 뽑음
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...defaultOptions.headers, ...options.headers} // 깊은 복사
  }

  // console.log(restOptions);

  let response = await fetch(url, restOptions); // url만 뽑겠다, restOptions는 url이 존재하지 않는 객체
  
  if (response.ok) { // fetch가 완료되었다면 
    response.data = await response.json() // data 추가, response 안에있는 json값을 가져옴 -> await는 값을 가져오는거니깐
  }

  // console.log(response);

  return response;
};

// console.log(await tiger());

// tiger()


tiger.get = async (url,options) => {
  return tiger({
    url,
    ...options // 객체자체를 일단 열거하고 tiger의 매개변수로 전달하기 위해
  })
}

tiger.post = (url,body,options) =>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body), // 다시 문자화를 통해 보내줘야하기 때문에
    ...options
  })
}

tiger.put = (url,body,options) =>{
  return tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url,options) =>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}