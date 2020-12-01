import { makeCategorySelectionModal } from './elements/makeCategorySelectionModal.js';
import { startInitialSetup } from './startInitialSetup.js';

// categorySelectionModal factory function
const CategorySelectionModal = () => {

  return {
    makeCategorySelectionModal,
    startInitialSetup
  }
}

const categorySelectionModal = CategorySelectionModal();

export { categorySelectionModal };