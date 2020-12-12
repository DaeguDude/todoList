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

const changeTodoItemTitle = (title, todoNumber) => {
  const todoListMainRows = document.querySelector('')
}

const TodoListCardView = () => {
  
  return {
    addTodo,
    changeTodoItemTitle,
    showTodoListCardView
  }
}

const todoListCardView = TodoListCardView();

export { todoListCardView };