import { enableCreateTodoBtn } from './createTodoButton.js';
import { makeNavBarCategoryList } from './elements/makeNavBarCategoryList.js';
import { todoList } from '../TodoList/todolist.js';

const getNavBarCategory = () => {
  return document.querySelector('.navbar-category');
}

const startInitialSetup = () => {
  enableCreateTodoBtn();
}

const showCategories = () => {
  const categories = todoList.getAllCategories();
  const navBarCategoryList = makeNavBarCategoryList(categories);
  const navBarCategory = getNavBarCategory();
  navBarCategory.appendChild(navBarCategoryList);
}

const NavBar = () => {
  
  return {
    startInitialSetup,
    showCategories
  }
}

const navBar = NavBar();

export { navBar };