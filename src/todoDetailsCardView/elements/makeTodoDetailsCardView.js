import '../css/todoDetailsCardView.css';
import { makeTodoEditPane } from './editPane.js';


// Should export only one big function
const makeTodoDetailsCardView = (todo) => {
  const todoDetailsCardView = document.createElement('div');
  todoDetailsCardView.classList.add('TodoDetails-CardView');

  const todoEditPane = makeTodoEditPane(todo);
  todoDetailsCardView.appendChild(todoEditPane);

  return todoDetailsCardView;
}

export { makeTodoDetailsCardView };