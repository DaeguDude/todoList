const Get = () => {
  const allCheckMarkers = () => {
    return document.querySelectorAll('.check-marker');
  }

  const allTodoListMainRows = () => {
    return document.querySelectorAll('.TodoList-main-rows');
  }

  const todoItemOfElement = (checkMarker) => {
    return checkMarker.closest('.TodoItem');
  }

  const todoListMainRowOfElement = (elem) => {
    return elem.closest('.TodoList-main-rows');
  }

  const header = () => {
    return document.querySelector('.TodoList-CardView-header');
  }

  const currentCategory = () => {
    return header().innerText;
  }
  
  const todoListMain = () => {
    return document.querySelector('.TodoList-CardView-main');
  }

  const todoNumber = (todoItem) => {
    const todoItemContainer = todoItem.closest('.TodoList-main-rows');
    return todoItemContainer.getAttribute('data-todo-number');
  }

  const todoListCardView = () => {
    return document.querySelector('.TodoList-CardView');
  }

  const cardViewContainer = () => {
    return document.querySelector('.CardView-Container');
  }

  return {
    allCheckMarkers,
    allTodoListMainRows,
    todoItemOfElement,
    todoListMainRowOfElement,
    currentCategory,
    todoNumber,
    todoListMain,
    todoListCardView,
    cardViewContainer
  }
}

const get = Get();

export { get };