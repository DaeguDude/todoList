import { enableCreateTodoBtn } from './createTodoButton.js';
import { enableAllCategoryBtns, showBtn } from './header.js';
import { showCategories } from './navBarCategoryList.js';
import { get } from './get.js';

const startInitialSetup = () => {
  showCategories();
  showBtn(get.foldCategoryBtn());
  showBtn(get.addCategoryBtn());
  
  enableCreateTodoBtn();
  enableAllCategoryBtns();

}

const NavBar = () => {
  
  return {
    startInitialSetup,
    showCategories
  }
}

const navBar = NavBar();

export { navBar };