import { selectedPriorityBtn } from './elements/main/tag/selectedPriority.js';

const isEmpty = (str) => {
  if (str === '') {
    return true;
  }

  return false;
}

const Get = () => {
  const importantBtn = () => {
    return document.querySelector('#priority-important-btn');
  } 

  const highBtn = () => {
    return document.querySelector('#priority-high-btn');
  } 

  const middleBtn = () => {
    return document.querySelector('#priority-middle-btn');
  }

  const lowBtn = () => {
    return document.querySelector('#priority-low-btn');
  } 

  const allPriorityBtns = () => {
    return document.querySelectorAll('.priority-tag');
  }

  const todoTitle = () => {
    return document.querySelector('.TodoEdit-main-titleRow textarea').value;
  }

  const todoPriority = () => {
    const selectedBtn = selectedPriorityBtn();
    
    if (isEmpty(selectedBtn)) {
      return '';
    }

    const priority = selectedBtn.innerText;
    return priority;
  }
  
  const todoDueDate = () => {
    return document.querySelector('#TodoEdit-DueDate').value;
  }
  
  const todoDescription = () => {
    return document.querySelector('.TodoEdit-main-DescriptionRow textarea').value;
  }
  
  const todoCreatedDate = () => {
    return document.querySelector('.TodoEdit-CreatedDate').innerText;
  }

  const cardViewContainer = () => {
    return document.querySelector('.CardView-Container');
  }

  const todoDetailsCardView = () => {
    return document.querySelector('.TodoDetails-CardView');
  }

  const dataTodoNumber = () => {
    return todoDetailsCardView().getAttribute('data-todo-number');
  }

  const currentCategory = () => {
    return document.querySelector('.TodoList-CardView-header').innerText;
  }

  return {
    importantBtn,highBtn,middleBtn,lowBtn, allPriorityBtns, todoTitle,
    todoPriority, todoDueDate, todoDescription, todoCreatedDate,
    selectedPriorityBtn, cardViewContainer, todoDetailsCardView, dataTodoNumber,
    currentCategory
  }
}

const get = Get();

export { get };