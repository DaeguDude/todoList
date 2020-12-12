import { makeTodoListCardView } from './elements/makeTodoListCardView.js';
import { isTodoListCardViewExist } from './isCompleted.js';
import { get } from './get.js';
import { addTodo } from './addTodo.js';

const deleteTodoListCardView = () => {
  const todoListCardView = get.todoListCardView();
  todoListCardView.remove();
}



const showTodoListCardView = (category) => {
  if (isTodoListCardViewExist()) {
    deleteTodoListCardView();
  }

  const todoListCardView = makeTodoListCardView(category);

  const cardViewContainer = get.cardViewContainer();
  cardViewContainer.appendChild(todoListCardView);
}

const TodoListCardView = () => {
  
  return {
    addTodo,
    showTodoListCardView
  }
}

const todoListCardView = TodoListCardView();

export { todoListCardView };