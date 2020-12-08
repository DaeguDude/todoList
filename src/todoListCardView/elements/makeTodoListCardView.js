import { makeTodoListHeader } from './todoListHeader.js';
import { makeTodoListMain } from './todoListMain.js';
import '../css/todoListCardView.css';

import { todoList } from '../../TodoList/todolist.js';
const makeTodoListCardView = (category) => {
  const todoListCardView = document.createElement('div');
  todoListCardView.classList.add('TodoList-CardView');

  todoListCardView.appendChild(makeTodoListHeader(category));

  const todos = todoList.getTodosByCategory(category);
  todoListCardView.appendChild(makeTodoListMain(todos));
  
  return todoListCardView;
}

export { makeTodoListCardView };