import { addCategory } from './addCategory.js';
import { get } from './getElements.js';
import { closeModal, isOutsideModalContentClicked } from './closeModal.js';

const enableCreateBtnToMakeCategory = () => {
  const createBtn = get.createBtn();

  createBtn.addEventListener('click', addCategory)
}

const enableCancelBtnToCloseModal = () => {
  const cancelBtn = get.cancelBtn();

  cancelBtn.addEventListener('click', closeModal);
}

const enableWindowToCloseModal = () => {
  window.addEventListener('click', (event) => {
    if (isOutsideModalContentClicked(event)) {
      closeModal();
    }
  }, { once: true });
}

const startInitialSetup =  () => {
  enableCancelBtnToCloseModal();
  enableWindowToCloseModal();
  enableCreateBtnToMakeCategory();
}

export { startInitialSetup };