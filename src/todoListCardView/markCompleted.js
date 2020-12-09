import { enableDeleteButton } from './deleteButton.js';

const makeDeleteBtn = () => {
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');
  
  return deleteBtn;
}

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
  enableDeleteButton(deleteBtn);
  todoItem.appendChild(deleteBtn);
}

const darkenTodoItem = (todoItem) => {
  todoItem.classList.add('TodoItem-checked');
}

const markCompleted = (todoItem) => {
  darkenTodoItem(todoItem);
  changeToCompletedMarker(todoItem);
  strikeThroughTitle(todoItem);
  addDeleteBtn(todoItem);
}

export { markCompleted };