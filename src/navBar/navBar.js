import { enableCreateTodoBtn } from './createTodoButton.js';
import { makeNavBarCategoryList } from './elements/makeNavBarCategoryList.js';
import { todoList } from '../TodoList/todolist.js';
import { showFoldCategoryBtn, showAddCategoryBtn, enableFoldCategoryBtn, enableUnfoldCategoryBtn, enableAddCategoryBtn } from './header.js';

const getNavBarCategory = () => {
  return document.querySelector('.navbar-category');
}



const startInitialSetup = () => {
  enableCreateTodoBtn();

  showCategories();
  showFoldCategoryBtn();
  enableFoldCategoryBtn();
  enableAddCategoryBtn();
  enableUnfoldCategoryBtn();
  showAddCategoryBtn();
}

const enableNavBarCategoryList = (categoryList) => {
  categoryList.forEach(category => {
    console.log(category);
  })
}

const showCategories = () => {
  const categories = todoList.getAllCategories();
  const navBarCategoryList = makeNavBarCategoryList(categories);
  enableNavBarCategoryList(navBarCategoryList);
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

export { navBar, showCategories };