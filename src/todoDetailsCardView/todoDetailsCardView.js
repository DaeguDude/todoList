import { makeTodoDetailsCardView } from './elements/makeTodoDetailsCardView.js';
import { startInitialSetup } from './startInitialSetup.js';
import { get } from './get.js';

const showTodoDetails = (todo) => {
  const container = get.cardViewContainer()
  const todoDetailsCardView = makeTodoDetailsCardView(todo);
  container.appendChild(todoDetailsCardView);

  startInitialSetup();
}

const TodoDetailsCardView = () => {

  return {
    showTodoDetails
  }
}

const todoDetailsCardView = TodoDetailsCardView();

export { todoDetailsCardView };