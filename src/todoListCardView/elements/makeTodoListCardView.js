import { makeTodoListHeader } from './todoListHeader.js';
import { makeTodoListMain } from './todoListMain.js';
import '../css/todoListCardView.css';

import { todoList } from '../../TodoList/todolist.js';

const isEmpty = (category) => {
  if (category === undefined) {
    return true;
  }

  return false;
}

const makeTodoListCardView = (category) => {
  if (isEmpty(category)) {
    category = 'default';
  }

  const todoListCardView = document.createElement('div');
  todoListCardView.classList.add('TodoList-CardView');

  todoListCardView.appendChild(makeTodoListHeader(category));

  const todos = todoList.getTodosByCategory(category);
  todoListCardView.appendChild(makeTodoListMain(todos));
  
  return todoListCardView;
}

export { makeTodoListCardView };