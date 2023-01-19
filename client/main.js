
/* global gsap */

import { insertLast, xhrData, xhrPromise ,tiger, delayP, createUserCard, getNode as $, renderUserCard, changeColor, renderSpinner, renderEmptyCard, attr} from "./lib/index.js";

// rendingUserList 함수
// ajax get uesr List

// 유저 카드 생성
// 생성된 카드로 렌더링 -> 이거 또한 함수로 만들고 싶다. renderUserCard
// userList.js -> renderUserCard 함수 만들기
// 만들어진 함수 안에 createUserCard를 던지고, renderUserCard함수를 사용했을 때 렌더링이 잘 될 수 있도록

const userCardContainer = $('.user-card-inner')

async function rendingUserList() {
 
  renderSpinner(userCardContainer)

  try {
    await delayP(2000) // 2초뒤에 렌더링 됨


    $('.loadingSpinner').remove()

    let response = await tiger.get('http://localhost:3000/users')

    let userData = response.data;

    // console.log(userData); // 내가 찍은 배열이 뭔지
    
    // console.log(createUserCard(userData))
    // insertLast(userCardContainer, createUserCard(data))
    
    // 배열 순환, 카드 모두 보이게
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data) 
    })

    // user-card 몽땅 가져옴
    // console.log(gsap.utils.toArray('.user-card'))

    changeColor('.user-card')

    // 애니메이션 넣고심
    gsap.to(gsap.utils.toArray('.user-card'), {
      x:0,
      opacity:1, 
      // rotation:360, 
      duration:1.5,
      stagger: 0.2,
    })
  } catch(err) {
    // console.log(err);
    renderEmptyCard(userCardContainer)
}

}

rendingUserList();


function handler(e) {
    // console.log(e.target.closest('button')); // 버블링, e.target -> 현재 클릭된거 가져옴, e.target.closest('button') -> 버튼만
    let deleteButton = e.target.closest('button')
    let article = e.target.closest('article')
    
    if(!deleteButton || !article) return; // 버튼아니면 종료, || 둘 중에 하나만 없어도 멈춰야해서, null로 나오는거 막아준거

    let id = attr(article, 'data-index').slice(5) // data-index의 절삭한 값을 가져와

    // delete 통신, 네트워크탭에서 확인
    tiger.delete(`http://localhost:3000/users${id}`).then(()=>{
      userCardContainer.innerHTML = '';
      rendingUserList();
    }) 

    
    // console.log(deleteButton); // 버튼만 출력
    // console.log(article);
    // console.log(id);
  }

userCardContainer.addEventListener('click', handler) // delete 개별 말고 부모한테 위임



/*
버튼만 클릭했을때 article 수집, 다른거 클릭할때는 동작 안하게
article의 data-index값을 수집! 결과는 user-1, user-2 ,...
여기서 우리가 필요한것은 숫자만 필요
나중에 delete수집할때 넘겨줘야함 숫자로 예를들어, 3번 삭제 누르면 삭제되게. 그걸 위해 데이터값을 수집

closest
아티클 부분 = 아티클만 있음
삭제부분 = 삭제 + 아티클 (둘다포함)
*/
