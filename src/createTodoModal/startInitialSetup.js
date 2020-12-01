import { addTodo } from './addTodo.js';
import { get } from './getElements.js';
import { closeModal, isOutsideModalContentClicked } from './closeModal.js';
import { isTitleTextareaEmpty } from './isTitleTextareaEmpty.js';

// Add Todo Btn enable
const enableAddTodoBtnToAddTodo = () => {
  const addTodoBtn = get.addTodoBtn();

  addTodoBtn.addEventListener('click', () => {
    if (!isTitleTextareaEmpty()) {
      addTodo();
    }
  });
}

const enableAddTodoBtnToCloseModal = () => {
  const addTodoBtn = get.addTodoBtn();

  addTodoBtn.addEventListener('click', () => {
    if (!isTitleTextareaEmpty()) {
      closeModal();
    }
  })
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
  enableAddTodoBtnToCloseModal();
  enableWindowToCloseModal();
  enableCategoryBtnToOpenCategorySelectionModal();
}


export { startInitialSetup };