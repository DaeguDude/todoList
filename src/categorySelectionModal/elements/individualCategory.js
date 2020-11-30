
const makeIndividualCategory = (categoryTitle) => {
  // Make individual modal Item
  const modalItem = document.createElement('button');
  modalItem.classList.add('categorySelection-modal-items');
  
  const itemTitle = document.createElement('div');
  itemTitle.classList.add('categorySelection-modal-items-title');
  itemTitle.innerText = categoryTitle;
  
  modalItem.appendChild(itemTitle);

  modalItem.addEventListener('click', function selectCategory() {
    console.log('selected');
    console.log('createTodoModal: Change the category value');
    console.log('close modal');
  });

  return modalItem;
}

export { makeIndividualCategory };