import { makeTodoListMainRows } from './todoListMainRows.js';

const makeTodoListMain = (todos) => {
  const todoListMain = document.createElement('div');
  todoListMain.classList.add('TodoList-CardView-main');

  todos.forEach((todo, todoNumber) => {
    todoListMain.appendChild(makeTodoListMainRows(todo, todoNumber));
  })
  
  return todoListMain;
}

export { makeTodoListMain };