import { makeCategoryItem } from '../categoryItem.js';
import { todoList } from '../../TodoList/todolist.js';

const makeNavBarCategoryList = () => {
  const navBarCategoryList = document.createElement('ul');
  navBarCategoryList.classList.add('navbar-category-list');

  const categories = todoList.getAllCategories();
  categories.forEach(category => {
    const categoryItem = makeCategoryItem(category);
    navBarCategoryList.appendChild(categoryItem);
  })

  return navBarCategoryList;
}

export { makeNavBarCategoryList };