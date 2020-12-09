const Get = () => {
  const allCheckMarkers = () => {
    return document.querySelectorAll('.check-marker');
  }

  const todoItemOfCheckMarker = (checkMarker) => {
    return checkMarker.closest('.TodoItem');
  }

  const todoListMainRowOfCheckMarker = (checkMarker) => {
    return checkMarker.closest('.TodoList-main-rows');
  }

  const header = () => {
    return document.querySelector('.TodoList-CardView-header');
  }

  const currentCategory = () => {
    return header().innerText;
  }

  const todoNumber = (todoListMainRow) => {
    return todoListMainRow.getAttribute('data-todo-number');
  }

  return {
    allCheckMarkers,
    todoItemOfCheckMarker,
    todoListMainRowOfCheckMarker,
    currentCategory,
    todoNumber
  }
}

const get = Get();

export { get };