import { makeTodoListMainRows } from './todoListMainRows.js';

const makeTodoListMain = (todos) => {
  const todoListMain = document.createElement('div');
  todoListMain.classList.add('TodoList-CardView-main');

  todos.forEach(todo => {
    todoListMain.appendChild(makeTodoListMainRows(todo));
  })
  
  return todoListMain;
}

export { makeTodoListMain };