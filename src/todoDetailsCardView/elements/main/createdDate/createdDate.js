import { makeLabelText } from '../labelText.js';

const makeCreatedDateRow = (date) => {
  const createdDateRow = document.createElement('div');
  createdDateRow.classList.add('TodoEdit-main-CreatedDateRow', 'TodoEdit-padder');

  const labelText = makeLabelText('CREATED DATE');

  const createdDate = document.createElement('div');
  createdDate.classList.add('TodoEdit-CreatedDate');
  
  createdDate.innerText = date;

  createdDateRow.appendChild(labelText);
  createdDateRow.appendChild(createdDate);

  return createdDateRow;
}

export { makeCreatedDateRow };