const closeModal = (modalId) => {
  console.log(`removing ${modalId} modal`);
  const modal = document.querySelector(`#${modalId}`);
  modal.remove();
};

export { closeModal };
