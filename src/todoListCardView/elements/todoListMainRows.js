const makeEmptyCheckMarker = () => {
  const emptyCheckMark = document.createElement('i');
  emptyCheckMark.classList.add('far', 'fa-circle', 'check-marker');
  emptyCheckMark.setAttribute('id', 'notCompletedMarker');

  return emptyCheckMark;
}

const makeCheckedMarker = () => {
  const checkedMarker = document.createElement('i');
  checkedMarker.classList.add('far', 'fa-check-circle', 'check-marker');
  checkedMarker.setAttribute('id', 'completedMarker');

  return checkedMarker;
}

const makeDeleteBtn = () => {
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');
  
  return deleteBtn;
}

const makeTodoItemTitle = (title, completed) => {
  const todoItemTitle = document.createElement('div');
  todoItemTitle.classList.add('TodoItem-title');
  todoItemTitle.innerText = title;

  if (completed) {
    todoItemTitle.classList.add('TodoItem-title-checked');
  }

  return todoItemTitle;
}

const makeTodoItemCheckBox = (completed) => {
  const todoItemCheckBox = document.createElement('div');
  todoItemCheckBox.classList.add('TodoItem-checkBox');
  let marker;

  if (completed === true) {
    marker = makeCheckedMarker();
    
  } else {
    marker = makeEmptyCheckMarker();
  }

  todoItemCheckBox.appendChild(marker);

  return todoItemCheckBox;
}

const makeTodoItem = (todo) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('TodoItem');

  const title = todo.getTitle();
  const completed = todo.isCompleted();

  todoItem.appendChild(makeTodoItemCheckBox(completed));
  todoItem.appendChild(makeTodoItemTitle(title, completed));

  if (completed) {
    todoItem.classList.add('TodoItem-checked');
    todoItem.appendChild(makeDeleteBtn());
  }

  return todoItem;
}

const makeTodoListMainRows = (todo) => {
  // We need to insert the row, todoitem is in the row
  const todoListMainRows = document.createElement('div');
  todoListMainRows.classList.add('TodoList-main-rows');

  todoListMainRows.appendChild(makeTodoItem(todo));
    
  return todoListMainRows;
}

export { makeTodoListMainRows };