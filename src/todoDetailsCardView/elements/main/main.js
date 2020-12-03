import { makeTitleRow } from '../main/elements/titleRow.js'
import { makeTagRow } from '../main/elements/TagRow.js';
import { makeDueDateRow } from '../main/elements/DueDateRow.js';
import { makeDescriptionRow } from '../main/elements/descriptionRow.js';
import { makeCreatedDateRow } from '../main/elements/createdDateRow.js';


const makeTodoEditMain = () => {
  const todoEditMain = document.createElement('div');
  todoEditMain.classList.add('TodoEdit-main');

  todoEditMain.appendChild(makeTitleRow());
  todoEditMain.appendChild(makeTagRow());
  todoEditMain.appendChild(makeDueDateRow());
  todoEditMain.appendChild(makeDescriptionRow());
  todoEditMain.appendChild(makeCreatedDateRow());

  return todoEditMain;
}

export { makeTodoEditMain };
