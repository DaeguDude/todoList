import { Todo } from '../Todo/todo.js';

const addTodo = (todo) => {
  const localStorageTodo = {
    title: todo.getTitle(),
    description: todo.getDescription(),
    category: todo.getCategory(),
    dueDate: todo.getDueDate(),
    createdDate: todo.getCreatedDate(),
    priority: todo.getPriority(),
    completed: todo.isCompleted()
  }  

  const numberOfTodos = getAllTodos().length;
  localStorage.setItem(numberOfTodos, JSON.stringify(localStorageTodo));
}

const convertTodo = (localStorageTodo) => {
  localStorageTodo = JSON.parse(localStorageTodo);

  const title = localStorageTodo.title;
  const description = localStorageTodo.description;
  const category = localStorageTodo.category;
  const dueDate = localStorageTodo.dueDate;
  const createdDate = localStorageTodo.createdDate;
  const priority = localStorageTodo.priority;
  const completed = localStorageTodo.completed;

  const todo = Todo(title, description, category);
  
  todo.setDueDate(dueDate);
  todo.setCreatedDate(createdDate);
  todo.setPriority(priority);
  todo.setCompleted(completed);

  return todo;
}

const getAllTodos = () => {
  const numberOfTodos = Object.keys(localStorage);
  const todos = [];
  numberOfTodos.forEach(numTodo => {
    const localStorageTodo = localStorage.getItem(numTodo);
    const todo = convertTodo(localStorageTodo);
    todos.push(todo);
  })

  return todos;
}

export { addTodo, getAllTodos };