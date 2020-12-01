import '../css/categorySelectionModal.css'

import { makeModalMain } from './modalMain.js';
import { makeModalHeader } from './modalHeader.js';

// Make category selection modal HTML element
const makeCategorySelectionModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'categorySelection');

  const categorySelectionModal = document.createElement('div');
  categorySelectionModal.classList.add('categorySelection-modal');
  categorySelectionModal.classList.add('modal-content');

  categorySelectionModal.appendChild(makeModalHeader());
  categorySelectionModal.appendChild(makeModalMain());
  
  modal.appendChild(categorySelectionModal);
  
  return modal;
}

export { makeCategorySelectionModal };
