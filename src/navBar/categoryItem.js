import { todoListCardView } from '../todoListCardView/todoListCardView.js';

const showTodoList = (categoryItem) => {
  const category = categoryItem.innerText;
  todoListCardView.showTodoListCardView(category);
}

const enableCategoryItemToShowTodos = (categoryItem) => {
  categoryItem.addEventListener('click', () => {
    showTodoList(categoryItem);
  })
}

export { enableCategoryItemToShowTodos };