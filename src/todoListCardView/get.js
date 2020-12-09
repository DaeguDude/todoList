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

  const todoNumber = (todoListMainRow) => {
    return todoListMainRow.getAttribute('data-todo-number');
  }

  return {
    allCheckMarkers,
    allTodoListMainRows,
    todoItemOfElement,
    todoListMainRowOfElement,
    currentCategory,
    todoNumber,
    todoListMain
    
  }
}

const get = Get();

export { get };