import { addCategory } from "./addCategory.js";
import { get } from "./getElements.js";
import { isOutsideModalContentClicked } from "./closeModal.js";
import { closeModal } from "../helper/modal.js";
import { isTitleTextareaEmpty } from "./isTitleTextareaEmpty.js";

const enableCreateBtn = () => {
  const createBtn = get.createBtn();

  createBtn.addEventListener("click", () => {
    if (!isTitleTextareaEmpty()) {
      const category = get.titleTextarea().value;
      addCategory(category);
      closeModal("createList");
    }
  });
};

const enableCancelBtnToCloseModal = () => {
  const cancelBtn = get.cancelBtn();

  cancelBtn.addEventListener("click", () => {
    closeModal("createList");
  });
};

const enableWindowToCloseModal = () => {
  window.addEventListener("click", function closeModalOrNot(event) {
    if (isOutsideModalContentClicked(event)) {
      closeModal("createList");
      window.removeEventListener("click", closeModalOrNot);
    }
  });
};

const startInitialSetup = () => {
  enableCancelBtnToCloseModal();
  enableWindowToCloseModal();
  enableCreateBtn();
};

export { startInitialSetup };
