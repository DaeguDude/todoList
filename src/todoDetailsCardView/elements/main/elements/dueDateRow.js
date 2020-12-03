import { makeLabelText } from './labelText.js';

const makeDueDateRow = () => {
  const dueDateRow = document.createElement('div');
  dueDateRow.classList.add('TodoEdit-main-DueDateRow', 'TodoEdit-padder');

  const labelText = makeLabelText('DUE DATE');

  const dueDateInputBox = document.createElement('div');
  dueDateInputBox.classList.add('TodoEdit-DueDateBox');

  // Should be its own module later
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'TodoEdit-DueDate');
  dateInput.setAttribute('name', 'DueDate');
  dateInput.setAttribute('value', '2020-11-03');
  dateInput.setAttribute('min', '2020-11-03');

  // Appending Child
  dueDateRow.appendChild(labelText);
  dueDateRow.appendChild(dueDateInputBox);
  
  dueDateInputBox.appendChild(dateInput);

  return dueDateRow;
}

export { makeDueDateRow };