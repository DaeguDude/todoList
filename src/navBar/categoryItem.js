import { todoListCardView } from '../todoListCardView/todoListCardView.js';



const enableCategoryItemToShowTodos = (categoryItem) => {
  categoryItem.addEventListener('click', () => {
    const category = categoryItem.innerText;
    todoListCardView.showTodoListCardView(category);
  })
}

export { enableCategoryItemToShowTodos };