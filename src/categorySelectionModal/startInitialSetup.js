import { closeModal, isOutsideModalContentClicked } from './closeModal.js';
import { get } from './getElements.js';
import { changeCategory } from './changeCategory.js';

// Receive event object and return the innertext value of it.
const getCategoryTitle = (e) => {
  return e.target.innerText;
}

// enable category items to change category
const enableCategoryItemsToChangeCategory = () => {
  const categoryItems = get.modalCategoryItems();

  categoryItems.forEach(categoryItem => {
    categoryItem.addEventListener('click', (e) => {
      changeCategory(getCategoryTitle(e));
    })
  });
}

// enable category items to close modal
const enableCategoryItemsToCloseModal = () => {
  const categoryItems = get.modalCategoryItems();

  categoryItems.forEach(categoryItem => {
    categoryItem.addEventListener('click', closeModal);
  });
}

// To close the modal when outside modal is clicked.
const enableWindowToCloseModal = () => {
  window.addEventListener('click', function closeModalOrNot(event) {
    if (isOutsideModalContentClicked(event)) {
      closeModal();
      window.removeEventListener('click', closeModalOrNot);
    }
  });
}

// Start all setups needed
const startInitialSetup = () => {
  enableWindowToCloseModal();
  enableCategoryItemsToChangeCategory();
  enableCategoryItemsToCloseModal();
}

export { startInitialSetup };