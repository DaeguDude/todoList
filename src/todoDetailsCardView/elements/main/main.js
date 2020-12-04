import { makeTitleRow } from '../main/elements/titleRow.js'
import { makeTagRow } from '../main/elements/TagRow.js';
import { makeDueDateRow } from '../main/elements/DueDateRow.js';
import { makeDescriptionRow } from '../main/elements/descriptionRow.js';
import { makeCreatedDateRow } from '../main/elements/createdDateRow.js';


const makeTodoEditMain = (todo) => {
  const todoEditMain = document.createElement('div');
  todoEditMain.classList.add('TodoEdit-main');

  const title = todo.getTitle();
  const priority = todo.getPriority();
  const dueDate = todo.getDueDate();
  const description = todo.getDescription();
  const createdDate = todo.getCreatedDate();
  
  todoEditMain.appendChild(makeTitleRow(title));
  todoEditMain.appendChild(makeTagRow(priority));
  todoEditMain.appendChild(makeDueDateRow(dueDate));
  todoEditMain.appendChild(makeDescriptionRow(description));
  todoEditMain.appendChild(makeCreatedDateRow(createdDate));

  return todoEditMain;
}

export { makeTodoEditMain };
