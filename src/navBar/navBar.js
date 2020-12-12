import { enableCreateTodoBtn } from './createTodoButton.js';
import { enableAllCategoryBtns, showBtn } from './header.js';
import { showCategories } from './navBarCategoryList.js';
import { get } from './get.js';
import { makeCategoryItem } from './categoryItem.js';

const startInitialSetup = () => {
  showCategories();
  showBtn(get.foldCategoryBtn());
  showBtn(get.addCategoryBtn());
  
  enableCreateTodoBtn();
  enableAllCategoryBtns();

}

const addNewCategory = (category) => {
  const categoryItem = makeCategoryItem(category);
  const container = get.navBarCategoryList();
  container.appendChild(categoryItem);
}

const NavBar = () => {
  
  return {
    startInitialSetup,
    showCategories,
    addNewCategory
  }
}

const navBar = NavBar();

export { navBar };