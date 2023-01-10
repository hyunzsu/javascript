let data = JSON.stringify({
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
});

try {
  let user = JSON.parse(data);

  if (!user.value) {
    throw new ReferenceError('해당 키 값은 존재하지 않습니다.');
  }
} catch (e) {
  console.log('JSON Error : ' + e.message);
} finally {
  console.log('일단 임무 완료..!');
}
