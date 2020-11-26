import { makeLabelTextContainer } from './labelTextContainer.js';
import { makeTextFieldContainer } from './textFieldContainer.js';

const makeContentContainer = () => {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('createList-modal-content-container');

  const lableTextContainer = makeLabelTextContainer();
  const textFieldContainer = makeTextFieldContainer();

  contentContainer.appendChild(lableTextContainer);
  contentContainer.appendChild(textFieldContainer);

  return contentContainer;
} 

export { makeContentContainer };




  


