const makeTodoListHeader = (category) => {
  const todoListHeader = document.createElement('div');
  todoListHeader.classList.add('TodoList-CardView-header');
  todoListHeader.innerText = category;

  return todoListHeader;
}

export { makeTodoListHeader };