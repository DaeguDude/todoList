import { makeTitleRow } from './title/title.js';
import { makeTagRow } from './tag/tag.js';
import { makeDueDateRow } from './dueDate/dueDate.js';
import { makeDescriptionRow } from './description/description.js';
import { makeCreatedDateRow } from './createdDate/createdDate.js';


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
