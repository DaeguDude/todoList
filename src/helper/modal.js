// import { get } from "./getElements.js";

// const Modal = () => {};

// const isOutsideModalContentClicked = (event) => {
//   const clickedTarget = event.target;
//   // how do you get modal?
//   const modal = get.modal();

//   if (clickedTarget === modal) {
//     return true;
//   }

//   return false;
// };

const globalCloseModal = (modalId) => {
  console.log(`removing ${modalId} modal`);
  const modal = document.querySelector(`#${modalId}`);
  modal.remove();
};

const closeModal = (modalId) => {
  globalCloseModal(modalId);
};

export { closeModal, globalCloseModal };
