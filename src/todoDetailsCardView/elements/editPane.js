import { makeTodoEditHeader } from './header/header.js';
import { makeTodoEditMain } from './main/main.js';

const makeTodoEditPane = (todo) => {
  const todoEditPane = document.createElement('div');
  todoEditPane.classList.add('TodoEdit-Pane');

  todoEditPane.appendChild(makeTodoEditHeader());
  todoEditPane.appendChild(makeTodoEditMain(todo));

  return todoEditPane;
}

export { makeTodoEditPane };