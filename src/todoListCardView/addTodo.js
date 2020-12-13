import { updateDataTodoNumber } from './deleteButton/deleteButton.js';
import { makeTodoListMainRows } from './elements/todoListMainRows.js';
import { get } from './get.js';

const addTodo = (todo) => {
  const todoListMainRows = makeTodoListMainRows(todo);
  // get todoList CardView Main
  const todoContainer = get.todoListMain();
  todoContainer.appendChild(todoListMainRows);

  updateDataTodoNumber(get.allTodoListMainRows());
}

export { addTodo };