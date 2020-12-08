import { makeTodoListCardView } from './elements/makeTodoListCardView.js';
import { startInitialSetup } from './startInitialSetup.js';

const TodoListCardView = () => {
  
  return {
    makeTodoListCardView,
    startInitialSetup
  }
}

const todoListCardView = TodoListCardView();

export { todoListCardView };