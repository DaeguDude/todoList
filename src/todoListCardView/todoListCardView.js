import { makeTodoListCardView } from './elements/makeTodoListCardView.js';
import { startInitialSetup } from './startInitialSetup.js';
import { isTodoListCardViewExist } from './isCompleted.js';
import { get } from './get.js';

const deleteTodoListCardView = () => {
  const todoListCardView = get.todoListCardView();
  todoListCardView.remove();
}

const showTodoListCardView = (category) => {
  if(isTodoListCardViewExist()) {
    deleteTodoListCardView();
  }

  const todoListCardView = makeTodoListCardView(category);

  const cardViewContainer = document.querySelector('.CardView-Container');
  cardViewContainer.appendChild(todoListCardView);
}

const TodoListCardView = () => {
  
  return {
    startInitialSetup,
    showTodoListCardView
  }
}

const todoListCardView = TodoListCardView();

export { todoListCardView };