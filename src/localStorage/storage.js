import { addTodo, getAllTodos } from './addTodo.js';
import { updateChange } from './updateChange.js';

const Storage = () => {
  return {
    addTodo,
    getAllTodos,
    updateChange
  }
}

const storage = Storage();

export { storage };