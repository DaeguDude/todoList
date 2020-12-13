import { todoListCardView } from './todoListCardView/todoListCardView.js';
import { navBar } from './navBar/navBar.js';
import { todoList } from './TodoList/todolist.js';
import { storage } from './localStorage/storage.js';

const todos = storage.getAllTodos();
todos.forEach(todo => {
  todoList.addTodo(todo);
})

navBar.startInitialSetup();
todoListCardView.showTodoListCardView();


















