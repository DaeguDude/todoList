import { makeTodoItem } from '../todoItem/todoItem.js';

const makeTodoListMainRows = (todo, todoNumber) => {
  // We need to insert the row, todoitem is in the row
  const todoListMainRows = document.createElement('div');
  todoListMainRows.classList.add('TodoList-main-rows');
  todoListMainRows.setAttribute('data-todo-number', todoNumber);

  todoListMainRows.appendChild(makeTodoItem(todo));
  return todoListMainRows;
}

export { makeTodoListMainRows };

