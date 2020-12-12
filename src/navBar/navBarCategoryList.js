import { makeNavBarCategoryList } from './elements/makeNavBarCategoryList.js';
import { get } from './get.js';
import { todoList } from '../TodoList/todolist.js';
import { navBar } from './navBar.js';


const enableNavBarCategoryList = (navBarCategoryList) => {
  const categoryItems = navBarCategoryList.children;
  Array.from(categoryItems).forEach(category => {
    console.log(category);
  });
}

const addCategories = (navBarCategoryList) => {
  const navBarCategory = get.navBarCategory();
  navBarCategory.appendChild(navBarCategoryList);
}

const showCategories = () => {
  const categories = todoList.getAllCategories();
  const navBarCategoryList = makeNavBarCategoryList(categories);
  enableNavBarCategoryList(navBarCategoryList);
  
  addCategories(navBarCategoryList);
}

export { showCategories };