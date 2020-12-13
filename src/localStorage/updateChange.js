import { todoList } from '../TodoList/todolist.js';
import { addTodo } from './addTodo.js';

const updateChange = () => {
  localStorage.clear();
  const allTodos = todoList.getAllTodos();
  
  allTodos.forEach(todo => {
    addTodo(todo);
  })
}

export { updateChange };