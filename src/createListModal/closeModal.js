import { get } from "./getElements.js";

const isOutsideModalContentClicked = (event) => {
  const clickedTarget = event.target;
  const modal = get.modal();

  if (clickedTarget === modal) {
    return true;
  }

  return false;
};

export { isOutsideModalContentClicked };
