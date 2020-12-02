const isSameTodo = (todoOne, todoTwo) => {
  return Object.is(todoOne, todoTwo);
}

export { isSameTodo };