import { get } from './getElements.js';
import { closeModal } from './closeModal.js';


const isEmpty = (str) => {
  if (str === '') {
    return true;
  }

  return false;
}

const isTitleTextareaEmpty = () => {
  const titleTextArea = get.titleTextarea();
  const title = titleTextArea.value;

  if (isEmpty(title)) {
    return true;
  }

  return false;
}

const addCategory = () => {
  if (!isTitleTextareaEmpty()) {
    console.log('Make category: TODOLIST');
    console.log('Make category: DISPLAY');
    closeModal();
    
  }
}

export { addCategory };