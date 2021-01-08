const makeContentContainer = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("createList-modal-content-container");

  contentContainer.appendChild(makeLabelTextContainer());
  contentContainer.appendChild(makeTextFieldContainer());

  return contentContainer;
};

const makeLabelTextContainer = () => {
  const labelTextContainer = document.createElement("div");
  labelTextContainer.classList.add("createList-modal-LabelText-container");

  labelTextContainer.innerHTML = `
    <div class="Label__Text">NAME THIS LIST</div>`;

  return labelTextContainer;
};

const makeTextFieldContainer = () => {
  const textFieldContainer = document.createElement("div");
  textFieldContainer.classList.add("createList-modal-textField-container");

  textFieldContainer.innerHTML = `
    <div class=".createList-modal-textField-container">
      <textarea rows="1" class="textField textField-title"></textarea>
    </div>`;

  return textFieldContainer;
};

export { makeContentContainer };
