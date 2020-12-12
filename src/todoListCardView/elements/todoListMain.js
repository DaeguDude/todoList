import { makeTodoListMainRows } from './todoListMainRows.js';

const areTodosEmpty = (todos) => {
  if (todos === undefined) {
    return true;
  }

  return false;
}

const makeTodoListMain = (todos) => {
  const todoListMain = document.createElement('div');
  todoListMain.classList.add('TodoList-CardView-main');

  if (areTodosEmpty(todos)) {
    return todoListMain;
  }

  todos.forEach((todo, todoNumber) => {
    todoListMain.appendChild(makeTodoListMainRows(todo, todoNumber));
  })
  
  return todoListMain;
}

export { makeTodoListMain };