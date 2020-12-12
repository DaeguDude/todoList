const Get = () => {
  const addTodoBtn = () => {
    return document.querySelector('.createTodo-buttons');
  }

  const titleTextarea = () => {
    return document.querySelector('.todoinfo-title textarea');
  }

  const descriptionTextarea = () => {
    return document.querySelector('.todoinfo-description textarea');
  }

  const categoryBtn = () => {
    return document.querySelector('.todoinfo-category button');
  }

  const modal = () => {
    return document.querySelector('#createTodo');
  }

  const container = () => {
    return document.querySelector('.container');
  }

  const currentCategory = () => {
    return document.querySelector('.TodoList-CardView-header').innerText;
  }
  

  return {
    addTodoBtn,
    titleTextarea,
    descriptionTextarea,
    categoryBtn,
    modal,
    container,
    currentCategory
  }
}

const get = Get();

export { get }