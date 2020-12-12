import { changeCategory } from './changeCategory.js';
import { makeCreateTodoModal } from './elements/makeCreateTodoModal.js';
import { startInitialSetup } from './startInitialSetup.js';
import { get } from './getElements.js';

const openModal = () => {
  const container = get.container();
  container.appendChild(makeCreateTodoModal());

  startInitialSetup();
}

const CreateTodoModal = () => {
  
  return {
    changeCategory,
    openModal,
  }
}

const createTodoModal = CreateTodoModal();

export { createTodoModal };
