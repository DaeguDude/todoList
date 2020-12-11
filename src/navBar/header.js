import { get } from './get.js';
import { showCategories } from './navBar.js';
import { createListModal } from '../createListModal/CreateListModal.js';

const hideBtn = (btn) => {
  btn.style.display = "none";
}
const showBtn = (btn) => {
  btn.style.display = "inline-block";
}

const deleteAllCategories = () => {
  const navBarCategories = get.navBarCategoryList();
  navBarCategories.remove();
}

const enableFoldCategoryBtn = () => {
  const foldCategoryBtn = get.foldCategoryBtn();
  foldCategoryBtn.addEventListener('click', () => {
    deleteAllCategories();
    hideBtn(get.addCategoryBtn());
    hideBtn(get.foldCategoryBtn());
    showBtn(get.unfoldCategoryBtn());
  })
}

const enableUnfoldCategoryBtn = () => {
  const unfoldCategoryBtn = get.unfoldCategoryBtn();
  unfoldCategoryBtn.addEventListener('click', () => {
    showCategories();
    hideBtn(get.unfoldCategoryBtn());
    showBtn(get.foldCategoryBtn());
    showBtn(get.addCategoryBtn());
  })
}

const enableAddCategoryBtn = () => {
  const addCategoryBtn = get.addCategoryBtn();
  addCategoryBtn.addEventListener('click', () => {
    createListModal.openModal();
  })
}



export { showFoldCategoryBtn,showAddCategoryBtn,
  enableFoldCategoryBtn, enableUnfoldCategoryBtn, enableAddCategoryBtn }