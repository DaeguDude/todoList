import { closeModal } from '../closeModal.js';

// Makes individual category item
const makeIndividualCategory = (categoryTitle) => {
  const modalItem = document.createElement('button');
  modalItem.classList.add('categorySelection-modal-items');
  
  const itemTitle = document.createElement('div');
  itemTitle.classList.add('categorySelection-modal-items-title');
  itemTitle.innerText = categoryTitle;
  
  modalItem.appendChild(itemTitle);

  return modalItem;
}

export { makeIndividualCategory };