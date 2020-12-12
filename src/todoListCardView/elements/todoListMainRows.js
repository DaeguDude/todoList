import { makeDeleteBtn } from '../deleteButton.js';
import { makeCheckedMarker, makeEmptyCheckMarker } from '../checkMarker.js';
import { todoDetailsCardView } from '../../todoDetailsCardView/todoDetailsCardView';
import { todoList } from '../../TodoList/todolist.js';
import { get } from '../get.js';
import { enableButtonsToBeSelected } from '../../todoDetailsCardView/priority.js';

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
  let checkMarker;

  if (completed === true) {
    checkMarker = makeCheckedMarker();
    
  } else {
    checkMarker = makeEmptyCheckMarker();
  }

  todoItemCheckBox.appendChild(checkMarker);

  return todoItemCheckBox;
}

const enableTodoItem = (todoItem) => {
  todoItem.addEventListener('click', (event) => {
    const checkMarker = todoItem.querySelector('.check-marker');
    const deleteBtn = todoItem.querySelector('.TodoItem-delete-btn');

    if (!(event.target === checkMarker || event.target === deleteBtn)) {
      const todoNumber = get.todoNumber(todoItem);
      const category = get.currentCategory();
      const todo = todoList.getTodoByNumber(todoNumber, category);
      todoDetailsCardView.showTodoDetails(todo, todoNumber);
    }
  })
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
    const deleteBtn = makeDeleteBtn();
    todoItem.appendChild(deleteBtn);
  }

  enableTodoItem(todoItem);
  return todoItem;
}



const makeTodoListMainRows = (todo, todoNumber) => {
  // We need to insert the row, todoitem is in the row
  const todoListMainRows = document.createElement('div');
  todoListMainRows.classList.add('TodoList-main-rows');
  todoListMainRows.setAttribute('data-todo-number', todoNumber);

  todoListMainRows.appendChild(makeTodoItem(todo));
  return todoListMainRows;
}

export { makeTodoListMainRows };

