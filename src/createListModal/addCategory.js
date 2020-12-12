import { todoList } from '../TodoList/todolist.js';
import { navBar} from '../navBar/navBar.js';

const isExistingCategory = (category) => {
  const categories = todoList.getAllCategories();
  return categories.includes(category)
}

const addCategory = (category) => {
  if (!isExistingCategory(category)) {
    todoList.addNewCategory(category);
    navBar.addNewCategory(category);
  }
}

export { addCategory };