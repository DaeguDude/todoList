import { addCategory } from './addCategory.js';
import { get } from './getElements.js';
import { closeModal, isOutsideModalContentClicked } from './closeModal.js';
import { isTitleTextareaEmpty } from './isTitleTextareaEmpty.js';

const enableCreateBtnToAddCategory = () => {
  const createBtn = get.createBtn();

  createBtn.addEventListener('click', () => {
    if (!isTitleTextareaEmpty()) {
      addCategory();
    }
  })
}

const enableCreateBtnToCloseModal = () => {
  const createBtn = get.createBtn();

  createBtn.addEventListener('click', () => {
    if (!isTitleTextareaEmpty()) {
      closeModal();
    }
  })
}

const enableCancelBtnToCloseModal = () => {
  const cancelBtn = get.cancelBtn();

  cancelBtn.addEventListener('click', closeModal);
}

const enableWindowToCloseModal = () => {
  window.addEventListener('click', function closeModalOrNot(event) {
    if (isOutsideModalContentClicked(event)) {
      closeModal();
      window.removeEventListener('click', closeModalOrNot);
    }
  });
}

const startInitialSetup = () => {
  enableCancelBtnToCloseModal();
  enableWindowToCloseModal();
  enableCreateBtnToAddCategory();
  enableCreateBtnToCloseModal();
}

export { startInitialSetup };