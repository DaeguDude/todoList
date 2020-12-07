import { get } from './get.js';

const changeTodoDetails = () => {
  const title = get.title();
  const priority = get.priority();
  const dueDate = get.dueDate();
  const description = get.description();
  const createdDate = get.createdDate();

  console.log({title, priority, dueDate, description, createdDate})
}

export { changeTodoDetails }