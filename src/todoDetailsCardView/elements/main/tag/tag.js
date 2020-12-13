import { makeLabelText } from '../labelText.js';

import { get } from '../../../get.js';

const isSameButton = (buttonOne, buttonTwo) => {
  if (buttonOne === buttonTwo) {
    return true;
  }

  return false;
}

const isPriorityAlreadySet = () => {
  const priorityBtns = get.allPriorityBtns();

  for(let i = 0; i < priorityBtns.length; i++) {
    if (priorityBtns[i].className.includes('selected')) {
      return true;
    }
  }

  return false;
}

const selectPriorityBtn = (event) => {
  
  const clickedBtn = event.target;
  console.log(clickedBtn.innerText);

  // If it passes this line, it means priority is set
  if (!isPriorityAlreadySet()) {
    console.log('set?');
    return clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
  }

  // If it passes this line, it means they are same button
  const selectedBtn = get.selectedPriorityBtn();
  if (!isSameButton(clickedBtn, selectedBtn)) {
    selectedBtn.classList.remove(selectedBtn.innerText + '-selected');
    clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
    return;
  }

  clickedBtn.classList.toggle(clickedBtn.innerText + '-selected');
}

const makePriorityBtn = (importance, selected) => {
  const priorityBtn = document.createElement('button');
  const id = `priority-${importance}-btn`;
  priorityBtn.setAttribute('id', id);
  
  priorityBtn.innerText = importance;

  priorityBtn.classList.add('priority-tag');

  if (selected === true) {
    priorityBtn.classList.add(importance + '-selected');
  }

  priorityBtn.addEventListener('click', selectPriorityBtn);
  return priorityBtn;
}

const makeTagRow = (priority) => {
  const tagRow = document.createElement('div');
  tagRow.classList.add('TodoEdit-main-tagRow', 'TodoEdit-padder');

  const labelText = makeLabelText('TAGS');
  const tags = document.createElement('div');
  tags.classList.add('TodoEdit-Tags');
  
  tagRow.appendChild(labelText);
  tagRow.appendChild(tags);

  const priorities = ['important', 'high', 'middle', 'low'];
    // when making a button, give that button color
  priorities.forEach(eachPriority => {
    if (eachPriority === priority) {
      tags.appendChild(makePriorityBtn(eachPriority, true));
    } else {
      tags.appendChild(makePriorityBtn(eachPriority));
    } 
  })
  
  return tagRow;
}

export { makeTagRow };