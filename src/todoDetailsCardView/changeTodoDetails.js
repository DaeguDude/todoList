import { get } from './get.js';

const changeTodoDetails = () => {
  const title = get.todoTitle();
  const priority = get.todoPriority();
  const dueDate = get.todoDueDate();
  const description = get.todoDescription();
  const createdDate = get.todoCreatedDate();

  // Change todo Details man :)
}

export { changeTodoDetails }