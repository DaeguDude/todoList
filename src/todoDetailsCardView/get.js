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

  const selectedPriorityBtn = () => {
    const classes = ['important-selected', 'high-selected', 'middle-selected',
  'low-selected'];  
    const priorityBtns = get.allPriorityBtns();

    for (let i = 0; i < priorityBtns.length; i++) {
      const priorityBtn = priorityBtns[i];
      const priorityBtnClass = priorityBtn.className;
      if (priorityBtnClass.includes('selected')) {
        return priorityBtn;
      }
    }

    return '';
  }

  return {
    importantBtn,highBtn,middleBtn,lowBtn, allPriorityBtns, todoTitle,
    todoPriority, todoDueDate, todoDescription, todoCreatedDate,
    selectedPriorityBtn
  }
}

const get = Get();

export { get };