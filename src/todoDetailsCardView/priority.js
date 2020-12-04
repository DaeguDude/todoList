import { get } from './get.js';

const enableButtonsToBeSelected = () => {
  const buttons = get.allPriorityBtns();
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const btn = button.innerText
      button.classList.add(btn + '-selected')
    })
  })
}

export { enableButtonsToBeSelected }