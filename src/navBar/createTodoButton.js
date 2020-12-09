import { createTodoModal } from '../createTodoModal/CreateTodoModal.js';

const getCreateTodoBtn = () => {
  return document.querySelector('#createTodoBtn');
}

const enableCreateTodoBtn = () => {
  const createTodoBtn = getCreateTodoBtn();
  createTodoBtn.addEventListener('click', () => {
    createTodoModal.openModal();
    createTodoModal.startInitialSetup();
  });
}

export { enableCreateTodoBtn };