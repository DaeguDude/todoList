import { addCategory } from './addCategory.js';
import { get } from './getElements.js';
import { closeModal, isOutsideModalContentClicked } from './closeModal.js';
import { isTitleTextareaEmpty } from './isTitleTextareaEmpty.js';

const enableCreateBtn = () => {
  const createBtn = get.createBtn();

  createBtn.addEventListener('click', () => {
    if (!isTitleTextareaEmpty()) {
      const category = get.titleTextarea().value;
      addCategory(category);
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
  enableCreateBtn();
}

export { startInitialSetup };