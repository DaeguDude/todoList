import "../css/createListModal.css";

import { makeButtonContainer } from "./buttonContainer.js";
import { makeContentContainer } from "./contentContainer.js";

const makeCreateListModal = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("id", "createList");

  const createListModal = document.createElement("div");
  createListModal.classList.add("createList-modal");
  createListModal.classList.add("modal-content");

  const buttonContainer = makeButtonContainer();
  const contentContainer = makeContentContainer();

  createListModal.appendChild(contentContainer);
  createListModal.appendChild(buttonContainer);

  modal.appendChild(createListModal);

  return modal;
};

export { makeCreateListModal };
