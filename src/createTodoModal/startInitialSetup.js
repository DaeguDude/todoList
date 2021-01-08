import { addTodo } from "./addTodo.js";
import { get } from "./getElements.js";
import { isOutsideModalContentClicked } from "./closeModal.js";
import { closeModal } from "../helper/modal";
import { isTitleTextareaEmpty } from "./isTitleTextareaEmpty.js";
import { categorySelectionModal } from "../categorySelectionModal/CategorySelectionModal.js";

const enableAddTodoBtn = () => {
  const addTodoBtn = get.addTodoBtn();
  addTodoBtn.addEventListener("click", () => {
    if (!isTitleTextareaEmpty()) {
      addTodo();
      closeModal("createTodo");
    }
  });
};

// Category Selection Btn enable
const enableCategoryBtn = () => {
  const categoryBtn = get.categoryBtn();

  categoryBtn.addEventListener("click", categorySelectionModal.openModal);
};

const enableWindowToCloseModal = () => {
  window.addEventListener("click", function closeModalOrNot(event) {
    if (isOutsideModalContentClicked(event)) {
      closeModal("createTodo");
      window.removeEventListener("click", closeModalOrNot);
    }
  });
};

const startInitialSetup = () => {
  enableAddTodoBtn();
  enableCategoryBtn();
  enableWindowToCloseModal();
};

export { startInitialSetup };
