import { makeTodoinfoTitleContainer } from './todoInfoTitleContainer.js';
import { makeTodoinfoDescriptionContainer } from './todoInfoDescriptionContainer.js';
import { makeTodoinfoCategoryContainer } from './todoinfoCategoryContainer.js';

const makeTodoinfoContainer = () => {
  const todoInfoContainer = document.createElement('div');
  todoInfoContainer.classList.add('createTodo-modal-todoinfo-container');

  const todoinfoTitleContainer = makeTodoinfoTitleContainer();
  const todoinfoDescriptionContainer = makeTodoinfoDescriptionContainer();
  const todoinfoCategoryContainer = makeTodoinfoCategoryContainer();

  todoInfoContainer.appendChild(todoinfoTitleContainer);
  todoInfoContainer.appendChild(todoinfoDescriptionContainer);
  todoInfoContainer.appendChild(todoinfoCategoryContainer);

  return todoInfoContainer;
}

export { makeTodoinfoContainer };