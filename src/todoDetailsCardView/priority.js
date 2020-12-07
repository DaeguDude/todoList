import { get } from './get.js';

const isSameButton = (buttonOne, buttonTwo) => {
  if (buttonOne === buttonTwo) {
    return true;
  }

  return false;
}

const isPriorityAlreadySet = () => {
  
  const priorityBtns = get.allPriorityBtns();
  const classNames = [];

  for(let i = 0; i < priorityBtns.length; i++) {
    if (priorityBtns[i].className.includes('selected')) {
      return true;
    }
  }

  return false;
}

const selectPriorityBtn = (event) => {
  const clickedBtn = event.target;
  
  if (isPriorityAlreadySet()) {
    const selectedBtn = get.selectedPriorityBtn();
    if (isSameButton(clickedBtn, selectedBtn)) {
      clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
    } else {
      selectedBtn.classList.remove(selectedBtn.innerText + '-selected');
      clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
    }
  } else {
    clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
  }
}

const enableButtonsToBeSelected = () => {
  const priorityBtns = get.allPriorityBtns();
  
  priorityBtns.forEach(priorityBtn => {
    priorityBtn.addEventListener('click', selectPriorityBtn);
  });
}

export { enableButtonsToBeSelected }