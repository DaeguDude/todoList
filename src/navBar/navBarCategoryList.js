import { add } from 'date-fns';
import { makeNavBarCategoryList } from './categoryItem/navBarCategoryList.js';
import { get } from './get.js';


const enableNavBarCategoryList = (categoryList) => {
  categoryList.forEach(category => {
    console.log(category);
  })
}

const addNavBarCategoryList = () => {
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