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

  return {
    importantBtn,highBtn,middleBtn,lowBtn, allPriorityBtns
  }
}

const get = Get();

export { get };