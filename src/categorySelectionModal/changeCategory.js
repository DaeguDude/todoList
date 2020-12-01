import { createTodoModal } from '../createTodoModal/CreateTodoModal.js';

// To change the category
const changeCategory = (category) => {
  createTodoModal.changeCategory(category);
}

export { changeCategory }