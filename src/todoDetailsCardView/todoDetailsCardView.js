import { makeTodoDetailsCardView } from './elements/makeTodoDetailsCardView.js';
import { get } from './get.js';
import { saveTodoDetails } from './saveTodoDetails.js';
import { todoListCardView } from '../todoListCardView/todoListCardView.js';
import { storage } from '../localStorage/storage.js';

const isCardViewExist = () => {
  const todoDetailsCardView = get.todoDetailsCardView()
  if (todoDetailsCardView === null) {
    return false;
  }

  return true;
}

const removeTodoDetailsCardView = (save) => {
  if (!isCardViewExist()) {
    return;
  }

  if (save != false) {
    saveTodoDetails();
    storage.updateChange();
  }

  const todoDetailsCardView = get.todoDetailsCardView();
  todoDetailsCardView.remove();
}

const showTodoDetails = (todo, todoNumber) => {
  
  if(isCardViewExist()) {
    removeTodoDetailsCardView(true);
  }

  const container = get.cardViewContainer();
  const todoDetailsCardView = makeTodoDetailsCardView(todo, todoNumber);
  container.appendChild(todoDetailsCardView);
}

const TodoDetailsCardView = () => {

  return {
    showTodoDetails,
    removeTodoDetailsCardView,
    isCardViewExist
  }
}

const todoDetailsCardView = TodoDetailsCardView();

export { todoDetailsCardView };