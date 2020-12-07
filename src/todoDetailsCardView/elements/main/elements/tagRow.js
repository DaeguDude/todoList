import { makeLabelText } from './labelText.js';

const isEmpty = (str) => {
  if (str === '') {
    return true;
  }

  return false;
}

const isPrioritySet = (priority) => {
  if (isEmpty(priority)) {
    return false;
  }

  return true;
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
  if (isPrioritySet(priority)) {
    // when making a button, give that button color
    priorities.forEach(eachPriority => {
      if (eachPriority === priority) {
        tags.appendChild(makePriorityBtn(eachPriority, true));
      } else {
        tags.appendChild(makePriorityBtn(eachPriority));
      } 
    })
  }

  return tagRow;
}

export { makeTagRow };