const unStrikeThroughTitle = (todoItem) => {
  const todoTitle = todoItem.querySelector('.TodoItem-title');
  todoTitle.classList.remove('TodoItem-title-checked');
}

const changeToNotCompletedMarker = (todoItem) => {
  const checkMarker = todoItem.querySelector('.check-marker');
  checkMarker.className = 'far fa-circle check-marker';
  checkMarker.id = 'notCompletedMarker';
}

const deleteDeleteBtn = (todoItem) => {
  const deleteBtn = todoItem.querySelector('.TodoItem-delete-btn');
  deleteBtn.remove();
}

const brightenTodoItem = (todoItem) => {
  todoItem.classList.remove('TodoItem-checked');
}

const undoCompletedDisplay = (todoItem) => {
  brightenTodoItem(todoItem);
  changeToNotCompletedMarker(todoItem);
  unStrikeThroughTitle(todoItem);
  deleteDeleteBtn(todoItem);
}

export { undoCompletedDisplay };