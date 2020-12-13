import { get } from './get.js';
import { todoList } from '../TodoList/todolist.js';
import { todoListCardView } from '../todoListCardView/todoListCardView.js';

const saveTodoDetails = () => {
  const title = get.todoTitle();
  const priority = get.todoPriority();
  const dueDate = get.todoDueDate();
  const description = get.todoDescription();
  const todoNumber = get.dataTodoNumber();
  const category = get.currentCategory();
  const todo = todoList.getTodoByNumber(todoNumber, category);
  
  todo.setTitle(title);
  todo.setPriority(priority);
  todo.setDueDate(dueDate);
  todo.setDescription(description);

  todoListCardView.changeTodoItemTitle(title, todoNumber);
}

export { saveTodoDetails }