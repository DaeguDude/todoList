import { enableCategoryItemToShowTodos } from '../categoryItem.js';

const makeCategoryItem = (category) => {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category-items');
  categoryItem.innerText = category;

  return categoryItem;
}

const makeNavBarCategoryList = (categories) => {
  const navBarCategoryList = document.createElement('ul');
  navBarCategoryList.classList.add('navbar-category-list');

  categories.forEach(category => {
    const categoryItem = makeCategoryItem(category);
    enableCategoryItemToShowTodos(categoryItem);
    navBarCategoryList.appendChild(categoryItem);
  })

  return navBarCategoryList;
}

export { makeNavBarCategoryList };