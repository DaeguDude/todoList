import { todoListCardView } from '../todoListCardView/todoListCardView.js';
import { todoDetailsCardView } from '../todoDetailsCardView/todoDetailsCardView.js';

const showTodoList = (categoryItem) => {
  const category = categoryItem.innerText;
  todoListCardView.showTodoListCardView(category);
}

const enableCategoryItem = (categoryItem) => {
  categoryItem.addEventListener('click', () => {
    if (todoDetailsCardView.isCardViewExist()) {
      todoDetailsCardView.removeTodoDetailsCardView();
    }
    showTodoList(categoryItem);
  })
}

const makeCategoryItem = (category) => {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category-items');
  categoryItem.innerText = category;

  enableCategoryItem(categoryItem);
  return categoryItem;
}

export { makeCategoryItem };