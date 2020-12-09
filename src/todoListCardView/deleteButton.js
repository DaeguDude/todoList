import { get } from './get.js';
import { todoList } from '../TodoList/todolist.js';


const deleteTodo = (deleteBtn) => {
  const todo = get.todoListMainRowOfElement(deleteBtn)
  todo.remove();
}

const updateDataTodoNumber = (todoListMainRows) => {
  todoListMainRows.forEach((todoListMainRow, todoNumber) => {
    todoListMainRow.setAttribute('data-todo-number', todoNumber);
  })
}

const enableDeleteButton = (deleteBtn) => {
  deleteBtn.addEventListener('click', () => {
    
    deleteTodo(deleteBtn);

    const todoListMainRow = get.todoListMainRowOfElement(deleteBtn);
    const todoNumber = get.todoNumber(todoListMainRow);
    const category = get.currentCategory();
    todoList.deleteTodoByNumber(todoNumber, category);

    updateDataTodoNumber(get.allTodoListMainRows());
  });
}

export { enableDeleteButton, updateDataTodoNumber };