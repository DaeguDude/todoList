import { get } from './getElements.js';

const isOutsideModalContentClicked = (event) => {
  const clickedTarget = event.target;
  const modal = get.modal();
  
  if (clickedTarget === modal) {
    return true;
  }

  return false;
}

const closeModal = () => {
  const modal = get.modal();
  modal.remove();
}

export { closeModal, isOutsideModalContentClicked };