import { get } from './getElements.js';

const changeCategory = (category) => {
  const categoryBtn = get.categoryBtn();
  categoryBtn.innerText = category;
}

export { changeCategory };