import { addTodo } from './addTodo.js';
import { get } from './getElements.js';
import { closeModal, isOutsideModalContentClicked } from './closeModal.js';

// Add Todo Btn enable
const enableAddTodoBtnToAddTodo = () => {
  const addTodoBtn = get.addTodoBtn();

  addTodoBtn.addEventListener('click', addTodo);
}

// Category Selection Btn enable
const enableCategoryBtnToOpenCategorySelectionModal = () => {
  const categoryBtn = get.categoryBtn();

  categoryBtn.addEventListener('click', () => {
    console.log('open category selection modal');
  });
}

const enableWindowToCloseModal = () => {
  window.addEventListener('click', (event) => {
    if (isOutsideModalContentClicked(event)) {
      closeModal();
    }
  }, { once: true });
}

const startInitialSetup = () => {
  enableAddTodoBtnToAddTodo();
  enableCategoryBtnToOpenCategorySelectionModal();
  enableWindowToCloseModal();
}


export { startInitialSetup };