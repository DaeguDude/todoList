import { makeCategorySelectionModal } from './elements/makeCategorySelectionModal.js';
import { startInitialSetup } from './startInitialSetup.js';

const openModal = () => {
  const categorySelectionModal = makeCategorySelectionModal();
  const container = document.querySelector('.container');
  container.appendChild(categorySelectionModal);

  startInitialSetup();
}

// categorySelectionModal factory function
const CategorySelectionModal = () => {

  return {
    openModal
  }
}

const categorySelectionModal = CategorySelectionModal();

export { categorySelectionModal };