import { changeCategory } from './changeCategory.js';
import { makeCreateTodoModal } from './elements/makeCreateTodoModal.js';
import { startInitialSetup } from './startInitialSetup.js';

const CreateTodoModal = () => {
  
  return {
    changeCategory,
    makeCreateTodoModal,
    startInitialSetup
  }
}

const createTodoModal = CreateTodoModal();

export { createTodoModal };
