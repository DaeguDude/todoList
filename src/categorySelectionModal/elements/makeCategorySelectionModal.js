import "../css/categorySelectionModal.css";

// Make category selection modal HTML element
const makeCategorySelectionModal = (categories) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("id", "categorySelection");

  const categorySelectionModal = document.createElement("div");
  categorySelectionModal.classList.add("categorySelection-modal");
  categorySelectionModal.classList.add("modal-content");

  categorySelectionModal.innerHTML = modalHeader;
  categorySelectionModal.appendChild(makeModalMain(categories));

  modal.appendChild(categorySelectionModal);

  return modal;
};

const modalHeader = `
  <div class="categorySelection-modal-header">
    <div class="categorySelection-modal-title">Move to...</div>
  </div>`;

const makeModalMain = (categories) => {
  const categorySelectionModalMain = document.createElement("div");
  categorySelectionModalMain.classList.add("categorySelection-modal-main");

  categories.forEach((category) => {
    const item = makeIndividualCategory(category);
    categorySelectionModalMain.appendChild(item);
  });

  return categorySelectionModalMain;
};

const makeIndividualCategory = (categoryTitle) => {
  const modalItem = document.createElement("button");
  modalItem.classList.add("categorySelection-modal-items");
  modalItem.innerHTML = `
    <div class="categorySelection-modal-items-title">${categoryTitle}</div>
  `;

  return modalItem;
};

export { makeCategorySelectionModal };
