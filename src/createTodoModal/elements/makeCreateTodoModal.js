import '../css/createTodoModal.css';
import { makeTodoinfoContainer } from './todoinfoContainer.js';
import { makeAddTodoBtnContainer } from './addTodoBtnContainer.js';

const makeCreateTodoModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'createTodo');

  const createTodoModal = document.createElement('div');
  createTodoModal.classList.add('createTodo-modal');
  createTodoModal.classList.add('modal-content');

  const todoInfoContainer = makeTodoinfoContainer();
  const addTodoBtnContainer = makeAddTodoBtnContainer();
  
  createTodoModal.appendChild(todoInfoContainer);
  createTodoModal.appendChild(addTodoBtnContainer);

  modal.appendChild(createTodoModal);

  return modal;
}

export { makeCreateTodoModal };