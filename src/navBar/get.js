const Get = () => {
  const addCategoryBtn = () => {
    return document.querySelector('#add-category-btn');
  }

  const unfoldCategoryBtn = () => {
    return document.querySelector('#unfold-category-btn');
  }

  const foldCategoryBtn = () => {
    return document.querySelector('#fold-category-btn');
  }

  const navBarCategoryList = () => {
    return document.querySelector('.navbar-category-list');
  }

  const createTodoBtn = () => {
    return document.querySelector('#createTodoBtn');
  }

  const navBarCategory = () => {
    return document.querySelector('.navbar-category');
  }

  return {
    addCategoryBtn, unfoldCategoryBtn, foldCategoryBtn, navBarCategoryList,
    createTodoBtn, navBarCategory
  }
}

const get = Get();

export { get };