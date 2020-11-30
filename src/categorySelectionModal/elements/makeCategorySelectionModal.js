import '../css/categorySelectionModal.css'

import { makeModalMain } from './modalMain.js';
import { makeModalHeader } from './modalHeader.js';

const makeCategorySelectionModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'categorySelection');

  const categorySelectionModal = document.createElement('div');
  categorySelectionModal.classList.add('categorySelection-modal');
  categorySelectionModal.classList.add('modal-content');

  
  const categorySelectionModalMain = makeModalMain();
  const categorySelectionModalHeader = makeModalHeader();
  
  categorySelectionModal.appendChild(categorySelectionModalHeader);
  categorySelectionModal.appendChild(categorySelectionModalMain);
  

  modal.appendChild(categorySelectionModal);
  
  return modal;
}

export { makeCategorySelectionModal };
