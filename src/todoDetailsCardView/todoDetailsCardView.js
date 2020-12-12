import { makeTodoDetailsCardView } from './elements/makeTodoDetailsCardView.js';
import { startInitialSetup } from './startInitialSetup.js';
import { get } from './get.js';
import { saveTodoDetails } from './saveTodoDetails.js';
import { todoListCardView } from '../todoListCardView/todoListCardView.js';

const isCardViewExist = () => {
  const todoDetailsCardView = get.todoDetailsCardView()
  if (todoDetailsCardView === null) {
    return false;
  }

  return true;
}

const removeTodoDetailsCardView = () => {
  saveTodoDetails();
  const title = get.todoTitle();
  const todoNumber = get.todoNumber();
  get.todoDetailsCardView().remove();
  
  todoListCardView.changeTodoTitle(title, todoNumber)
}

const showTodoDetails = (todo, todoNumber) => {
  
  if(isCardViewExist()) {
    removeTodoDetailsCardView();
  }

  const container = get.cardViewContainer()
  const todoDetailsCardView = makeTodoDetailsCardView(todo, todoNumber);
  container.appendChild(todoDetailsCardView);

  startInitialSetup();
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