import { makeTodoListCardView } from './elements/makeTodoListCardView.js';
import { get } from './get.js';
import { addTodo } from './addTodo.js';

const isTodoListCardViewExist = () => {
  if (get.todoListCardView() != null) {
    return true;
  }

  return false;
}

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
  const allTodoListMainRows = get.allTodoListMainRows();
  const todoListMainRows = allTodoListMainRows[todoNumber];
  const todoItemTitle = todoListMainRows.querySelector('.TodoItem-title');
  todoItemTitle.innerText = title;
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