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

  return {
    createBtn,
    cancelBtn,
    titleTextarea,
    modal
  }
}

const get = Get();

export { get }