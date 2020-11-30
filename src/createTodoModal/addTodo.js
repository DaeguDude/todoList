import { get } from './getElements.js';

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

const addTodo = () => {
  if (!isTitleTextareaEmpty()) {
    console.log('Make Todo: TODO');
    console.log('ADD TODO: TODOLIST');
    console.log('ADD TODO: DISPLAY');
    console.log('CLOSE MODAL');
  }
}

export { addTodo };
