import '../css/todoDetailsCardView.css';
import { makeTodoEditPane } from './editPane.js';


// Should export only one big function
const makeTodoDetailsCardView = () => {
  const todoDetailsCardView = document.createElement('div');
  todoDetailsCardView.classList.add('TodoDetails-CardView');

  const todoEditPane = makeTodoEditPane();
  todoDetailsCardView.appendChild(todoEditPane);

  return todoDetailsCardView;
}

export { makeTodoDetailsCardView };