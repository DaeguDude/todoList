import '../../css/todoListCardView.css';


const makeTodoItem = (completed) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('TodoItem');

  if (completed === true) {
    todoItem.classList.add('TodoItem-checked');
  }

  return todoItem;
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

const makeEmptyCheckMarker = () => {
  const emptyCheckMark = document.createElement('i');
  emptyCheckMark.classList.add('far', 'fa-circle');
  emptyCheckMark.setAttribute('id', 'notCompletedMarker');

  return emptyCheckMark;
}

const makeCheckedMarker = () => {
  const checkedMarker = document.createElement('i');
  checkedMarker.classList.add('far', 'fa-check-circle');
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


const makeTodoItem = (title, index, completed) => {
  // We need to insert the row, todoitem is in the row
  const todoListMainRows = document.createElement('div');
  todoListMainRows.classList.add('TodoList-main-rows');
  todoListMainRows.setAttribute('data-todo', index);

  const todoItem = makeTodoItem(completed);
  const todoItemCheckBox = makeTodoItemCheckBox(completed);
  const todoItemTitle = makeTodoItemTitle(title, completed);
  const deleteBtn = makeDeleteBtn();


  todoListMainRows.appendChild(todoItem);
  todoItem.appendChild(todoItemCheckBox);
  todoItem.appendChild(todoItemTitle);

  if (completed === true) {
    todoItem.appendChild(deleteBtn);
  }

  return todoListMainRows;
}

export { makeTodoItem };