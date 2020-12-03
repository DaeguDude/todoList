import { makeLabelText } from './labelText.js';

const makeTitleRow = () => {
  const titleRow = document.createElement('div');
  titleRow.classList.add('TodoEdit-main-titleRow', 'TodoEdit-padder');
  
  const labelText = makeLabelText('TITLE');
  
  const titleTextArea = document.createElement('textarea');
  titleTextArea.classList.add('textField', 'TodoEdit-title-textfield');
  titleTextArea.setAttribute('rows', '1');


  titleRow.appendChild(labelText);
  titleRow.appendChild(titleTextArea);

  return titleRow;
}

export { makeTitleRow };