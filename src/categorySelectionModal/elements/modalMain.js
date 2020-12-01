import { makeIndividualCategory } from './individualCategory.js';

// makes modal main
const makeModalMain = () => {
  const categorySelectionModalMain = document.createElement('div');
  categorySelectionModalMain.classList.add('categorySelection-modal-main');


  // Get categories from Todolist and add it to modal
  const categoryList = ['The Odin Project', 'GYM', 'School', 'WORK', 'a', 'b', 'c'];
  categoryList.forEach(category => {
    const item = makeIndividualCategory(category);
    categorySelectionModalMain.appendChild(item);
  })

  return categorySelectionModalMain;  
}

export { makeModalMain };
