import { createTodoModal } from '../createTodoModal/CreateTodoModal.js';
import { get } from './get.js'

const openCreateTodoModal = (event) => {
  createTodoModal.openModal();
}

const enableCreateTodoBtn = () => {
  const createTodoBtn = get.createTodoBtn();
  createTodoBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    openCreateTodoModal();
  });
}

export { enableCreateTodoBtn };