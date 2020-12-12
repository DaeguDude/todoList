import { enableDeleteButton } from './deleteButton.js';
import { makeDeleteBtn } from './deleteButton.js';


const strikeThroughTitle = (todoItem) => {
  const todoTitle = todoItem.querySelector('.TodoItem-title');
  todoTitle.classList.add('TodoItem-title-checked');
}

const changeToCompletedMarker = (todoItem) => {
  const checkMarker = todoItem.querySelector('.check-marker');
  checkMarker.className = 'far fa-check-circle check-marker';
  checkMarker.id = 'completedMarker';
}

const addDeleteBtn = (todoItem) => {
  const deleteBtn = makeDeleteBtn();
  todoItem.appendChild(deleteBtn);
}

const darkenTodoItem = (todoItem) => {
  todoItem.classList.add('TodoItem-checked');
}

const markCompletedDisplay = (todoItem) => {
  darkenTodoItem(todoItem);
  changeToCompletedMarker(todoItem);
  strikeThroughTitle(todoItem);
  addDeleteBtn(todoItem);
}

export { markCompletedDisplay };