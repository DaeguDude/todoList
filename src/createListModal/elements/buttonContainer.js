const makeButtonContainer = () => {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("createList-modal-button-container");

  buttonContainer.innerHTML = `
    <button data-btn="cancel" class="createList-buttons">Cancel</button>
    <button data-btn="create" class="createList-buttons">Create</button>`;

  return buttonContainer;
};

export { makeButtonContainer };
