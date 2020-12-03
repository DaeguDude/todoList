import { makeLabelText } from './labelText.js';

const capitalizeFirstLetter = (str) => {
  const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalizedStr;
}

const makePriorityBtn = (importance) => {
  const priorityBtn = document.createElement('button');
  const id = `priority-${importance}-btn`;
  priorityBtn.setAttribute('id', id);
  // innertext of btn has 'Importance', not 'impmortance'
  priorityBtn.innerText = capitalizeFirstLetter(importance);

  priorityBtn.classList.add('priority-tag', 'priority-btns-not-selected');

  return priorityBtn;
}

const makeTagRow = () => {
  const tagRow = document.createElement('div');
  tagRow.classList.add('TodoEdit-main-tagRow', 'TodoEdit-padder');

  const labelText = makeLabelText('TAGS');
  const tags = document.createElement('div');
  tags.classList.add('TodoEdit-Tags');
  
  tagRow.appendChild(labelText);
  tagRow.appendChild(tags);

  tags.appendChild(makePriorityBtn('important'));
  tags.appendChild(makePriorityBtn('high'));
  tags.appendChild(makePriorityBtn('middle'));
  tags.appendChild(makePriorityBtn('low'));

  return tagRow;
}

export { makeTagRow };