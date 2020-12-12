import { get } from './getElements.js';
import { Todo } from '../Todo/todo.js';
import { todoList } from '../TodoList/todolist.js';
import { todoListCardView } from '../todoListCardView/todoListCardView.js';
import { updateDataTodoNumber } from '../todoListCardView/deleteButton.js';

const getTodoTitle = () => {
  return get.titleTextarea().value;
}

const getTodoDescription = () => {
  return get.descriptionTextarea().value;
}

const getTodoCategory = () => {
  return get.categoryBtn().innerText;
}
const addTodo = () => {
  const title = getTodoTitle();
  const description = getTodoDescription();
  const category = getTodoCategory();
  
  const todo = Todo(title, description, category);
  todoList.addTodo(todo);
  todoListCardView.addTodo(todo);


}

export { addTodo };
