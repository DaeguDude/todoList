const Get = () => {
  const createBtn = () => {
    return document.querySelector('button[data-btn="create"]');
  }

  const cancelBtn = () => {
    return document.querySelector('button[data-btn="cancel"]');
  }

  const titleTextarea = () => {
    return document.querySelector('.createList-modal-textField-container .textField-title');
  }

  const modal = () => {
    return document.querySelector('#createList');
  }

  const container = () => {
    return document.querySelector('.container');
  }

  return {
    createBtn,
    cancelBtn,
    titleTextarea,
    modal,
    container
  }
}

const get = Get();

export { get }