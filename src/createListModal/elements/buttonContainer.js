const makeCancelBtn = () => {
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("createList-buttons");
  cancelBtn.setAttribute("data-btn", "cancel");
  cancelBtn.innerText = "Cancel";

  return cancelBtn;
};

const makeCreateBtn = () => {
  const createBtn = document.createElement("button");
  createBtn.classList.add("createList-buttons");
  createBtn.setAttribute("data-btn", "create");
  createBtn.innerText = "Create";

  return createBtn;
};

const makeButtonContainer = () => {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("createList-modal-button-container");

  const cancelBtn = makeCancelBtn();
  const createBtn = makeCreateBtn();

  buttonContainer.append(cancelBtn);
  buttonContainer.append(createBtn);

  return buttonContainer;
};

export { makeButtonContainer };
