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

  const deleteTodoByIndex = (todoIndex, category) => {
    const todos = getTodosByCategory(category);
    todos.splice(todoIndex, 1);
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

  const getTodoByIndex = (todoIndex, category) => {
    const todos = getTodosByCategory(category);
    return todos[todoIndex];
  };

  const getAllCategories = () => {
    const categories = Object.keys(_todos);
    return categories;
  };

  return {
    addTodo,
    addNewCategory,
    deleteTodoByIndex,
    deleteTodoByIndex,
    deleteCategory,
    getTodosByCategory,
    getAllTodos,
    getAllCategories,
    getTodoByIndex,
  };
};

const todoList = TodoList();

export { todoList };
