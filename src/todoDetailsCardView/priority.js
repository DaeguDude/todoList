import { get } from './get.js';

const isSameButton = (buttonOne, buttonTwo) => {
  if (buttonOne === buttonTwo) {
    return true;
  }

  return false;
}

const enableButtonsToBeSelected = () => {
  const buttons = get.allPriorityBtns();
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedBtn = get.selectedPriorityBtn();
      const clickedBtn = button;

      console.log({selectedBtn});
      console.log({clickedBtn});
      if (isSameButton(selectedBtn, clickedBtn)) {
        const priority = selectedBtn.innerText;
        console.log(priority + '-selected');
        selectedBtn.classList.remove(priority + '-selected');
      }

      clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
   })
  })
}



export { enableButtonsToBeSelected }