
import { getNode, loadStorage, saveStorage } from "./lib/index.js";


const textField = getNode('#textField')
const deleteButton = getNode('input[value="삭제"]')


loadStorage('area').then((res)=>{
  textField.value = res; // 새로고침해도 데이터가 살아있음
})




function inputHandler() {
  saveStorage('area', textField.value) // 값을 가져옴
}




textField.addEventListener('input', inputHandler) // input 실행해서 inputHandler 작동시킬 수 있게

// 삭제버튼 누르면 스토리지가 다 날라가게 공부해봐라~