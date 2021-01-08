import { get } from "./getElements.js";

// Check if outside of modal is clicked.
const isOutsideModalContentClicked = (event) => {
  const clickedTarget = event.target;
  const modal = get.modal();

  if (clickedTarget === modal) {
    return true;
  }

  return false;
};

export { isOutsideModalContentClicked };
