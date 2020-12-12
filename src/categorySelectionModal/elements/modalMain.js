import { makeIndividualCategory } from './individualCategory.js';
import { todoList } from '../../TodoList/todolist.js';

// makes modal main
const makeModalMain = () => {
  const categorySelectionModalMain = document.createElement('div');
  categorySelectionModalMain.classList.add('categorySelection-modal-main');


  // Get categories from Todolist and add it to modal
  const categoryList = todoList.getAllCategories();
  categoryList.forEach(category => {
    const item = makeIndividualCategory(category);
    categorySelectionModalMain.appendChild(item);
  })

  return categorySelectionModalMain;  
}

export { makeModalMain };
