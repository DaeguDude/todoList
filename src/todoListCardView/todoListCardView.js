import { makeTodoListCardView } from './elements/makeTodoListCardView.js';
import { startInitialSetup } from './startInitialSetup.js';
import { makeTodoListMainRows} from './elements/todoListMainRows.js';
import { get } from './get.js';
import { updateDataTodoNumber } from './deleteButton.js';

const addTodo = (todo) => {
  const todoListMainRow = makeTodoListMainRows(todo);
  const todoListMain = get.todoListMain();
  todoListMain.appendChild(todoListMainRow);
  updateDataTodoNumber(get.allTodoListMainRows());
}

const TodoListCardView = () => {
  
  return {
    makeTodoListCardView,
    startInitialSetup,
    addTodo
  }
}

const todoListCardView = TodoListCardView();

export { todoListCardView };