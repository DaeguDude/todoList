import { makeLabelText } from '../labelText.js';

const isDueDateSet = (dueDate) => {
  if (dueDate === '') {
    return false;
  }

  return true;
}

const makeDateInput = (dueDate) => {
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'TodoEdit-DueDate');
  dateInput.setAttribute('name', 'DueDate');
  
  if (isDueDateSet(dueDate)) {
    dateInput.setAttribute('value', dueDate);
  } 

  return dateInput;
}

const makeDueDateInputBox = (dueDate) => {
  const dueDateInputBox = document.createElement('div');
  dueDateInputBox.classList.add('TodoEdit-DueDateBox');

  const dateInput = makeDateInput(dueDate);
  dueDateInputBox.appendChild(dateInput);

  return dueDateInputBox;
}

const makeDueDateRow = (dueDate) => {
  const dueDateRow = document.createElement('div');
  dueDateRow.classList.add('TodoEdit-main-DueDateRow', 'TodoEdit-padder');

  const labelText = makeLabelText('DUE DATE');
  const dueDateInputBox = makeDueDateInputBox(dueDate);

  dueDateRow.appendChild(labelText);
  dueDateRow.appendChild(dueDateInputBox);
  
  return dueDateRow;
}

export { makeDueDateRow };