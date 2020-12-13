import { get } from '../../../get.js';

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

export { selectedPriorityBtn };