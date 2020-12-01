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

export { isTitleTextareaEmpty };