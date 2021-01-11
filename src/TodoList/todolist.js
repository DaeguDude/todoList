import { getPriorityAsNumber } from "./getPriorityAsNumber.js";
import { isSameObject } from "./isSameTodo.js";

const TodoList = () => {
  const _todos = {
    default: [],
  };

  // Add Todo
  const addTodo = (todo) => {
    let category = todo.getCategory();

    // if category doesn't exist, add one
    if (!(category in _todos)) {
      addNewCategory(category);
    }

    _todos[category].push(todo);
  };

  const addNewCategory = (category) => {
    _todos[category] = [];
  };

  const deleteTodoByNumber = (todoNumber, category) => {
    const todos = getTodosByCategory(category);
    todos.splice(todoNumber, 1);
  };

  const deleteCategory = (category) => {
    return delete _todos[category];
  };

  const getAllTodos = () => {
    const allTodos = [];
    for (const [category, todos] of Object.entries(_todos)) {
      todos.forEach((todo) => {
        allTodos.push(todo);
      });
    }

    return allTodos;
  };

  const getTodosByCategory = (category) => {
    return _todos[category];
  };

  const getTodoByNumber = (todoNumber, category) => {
    const todos = getTodosByCategory(category);
    return todos[todoNumber];
  };

  const getAllCategories = () => {
    const categories = Object.keys(_todos);
    return categories;
  };

  return {
    addTodo,
    addNewCategory,
    deleteTodoByNumber,
    deleteCategory,
    getTodosByCategory,
    getAllTodos,
    getAllCategories,
    getTodoByNumber,
  };
};

const todoList = TodoList();

export { todoList };
