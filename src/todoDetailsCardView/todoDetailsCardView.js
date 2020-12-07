import { makeTodoDetailsCardView } from './elements/makeTodoDetailsCardView.js';
import { startInitialSetup } from './startInitialSetup.js';

const TodoDetailsCardView = () => {

  return {
    makeTodoDetailsCardView,
    startInitialSetup
  }
}

const todoDetailsCardView = TodoDetailsCardView();

export { todoDetailsCardView };