import { enableCategoryItemToShowTodos } from '../categoryItem.js';
import { todoList } from '../../TodoList/todolist.js';

const makeCategoryItem = (category) => {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category-items');
  categoryItem.innerText = category;

  return categoryItem;
}

const makeNavBarCategoryList = () => {
  const navBarCategoryList = document.createElement('ul');
  navBarCategoryList.classList.add('navbar-category-list');

  const categories = todoList.getAllCategories();
  categories.forEach(category => {
    const categoryItem = makeCategoryItem(category);
    enableCategoryItemToShowTodos(categoryItem);
    navBarCategoryList.appendChild(categoryItem);
  })

  return navBarCategoryList;
}

export { makeNavBarCategoryList };