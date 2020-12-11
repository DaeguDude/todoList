import { get } from './get.js';
import { todoList } from '../TodoList/todolist.js';

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
  deleteBtn.addEventListener('click', () => {
    const todo = getTodo(deleteBtn);
    deleteTodo(todo);
    
    const todoDisplay = get.todoItemOfElement(deleteBtn);
    const todoNumber = get.todoNumber(todoDisplay);
    const category = get.currentCategory();
    todoList.deleteTodoByNumber(todoNumber, category);

    updateDataTodoNumber(get.allTodoListMainRows());
  });
}

export { enableDeleteButton, updateDataTodoNumber };