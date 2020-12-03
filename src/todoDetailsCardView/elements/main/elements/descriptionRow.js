import { makeLabelText } from './labelText.js';

const makeDescriptionRow = () => {
  const descriptionRow = document.createElement('div');
  descriptionRow.classList.add('TodoEdit-main-DescriptionRow', 'TodoEdit-padder');

  const labelText = makeLabelText('DESCRIPTION');

  const descriptionTextArea = document.createElement('textarea');
  descriptionTextArea.classList.add('textField', 'textField-description');
  descriptionTextArea.setAttribute('rows', '7');

  descriptionRow.appendChild(labelText);
  descriptionRow.appendChild(descriptionTextArea);

  return descriptionRow;
}

export { makeDescriptionRow };