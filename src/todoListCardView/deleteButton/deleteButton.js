import { get } from '../get.js';
import { todoList } from '../../TodoList/todolist.js';
import { todoDetailsCardView } from '../../todoDetailsCardView/todoDetailsCardView.js';
import { storage } from '../../localStorage/storage.js';

const isTodoDetailsOfTodoOpen = (event) => {
  const deleteBtn = event.target;
  const todo = getTodo(deleteBtn);
  const todoMainRowNumber = todo.getAttribute('data-todo-number');


  const todoDetailsCardView = document.querySelector('.TodoDetails-CardView');
  
  if (todoDetailsCardView === null) {
    return false;  
  }

  const todoDetailsNumber = todoDetailsCardView.getAttribute('data-todo-number');
  if (todoMainRowNumber === todoDetailsNumber) {
    return true;
  }

  return false;  
}

const getTodo = (deleteBtn) => {
  return get.todoListMainRowOfElement(deleteBtn)
}

const deleteTodo = (todo) => {
  todo.remove();
}

const updateDataTodoNumber = (todoListMainRows) => {
  todoListMainRows.forEach((todoListMainRow, todoNumber) => {
    todoListMainRow.setAttribute('data-todo-number', todoNumber);
  })
}

const enableDeleteButton = (deleteBtn) => {
  deleteBtn.addEventListener('click', (event) => {
    const todo = getTodo(deleteBtn);
    deleteTodo(todo);
    
    const todoDisplay = get.todoItemOfElement(deleteBtn);
    const todoNumber = get.todoNumber(todoDisplay);
    const category = get.currentCategory();
    todoList.deleteTodoByNumber(todoNumber, category);
    storage.updateChange();

    updateDataTodoNumber(get.allTodoListMainRows());
    todoDetailsCardView.removeTodoDetailsCardView(false);

    
  });
}

const makeDeleteBtn = () => {
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');
  
  enableDeleteButton(deleteBtn);
  return deleteBtn;
}

export { makeDeleteBtn, updateDataTodoNumber };