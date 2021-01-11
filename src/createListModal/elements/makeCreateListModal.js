import "../css/createListModal.css";

const makeCreateListModal = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("id", "createList");

  modal.innerHTML = `
    <div class="createList-modal modal-content">
      <div class="createList-modal-content-container">
        <div class="createList-modal-LabelText-container">
          <div class="Label__Text">NAME THIS LIST</div>
        </div>
        <div class="createList-modal-textField-container">
          <textarea rows="1" class="textField textField-title"></textarea>
        </div>
      </div>

      <div class="createList-modal-button-container">
        <button data-btn="cancel" class="createList-buttons">Cancel</button>
        <button data-btn="create" class="createList-buttons">Create</button>
      </div>
    </div>`;

  return modal;
};

export { makeCreateListModal };
