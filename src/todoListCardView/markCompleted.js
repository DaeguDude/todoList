const markCompleted = (todoItem) => {
  // Add class 'TodoItem-checked' to 'todoItem' so it darkens whole thing.
  todoItem.classList.add('TodoItem-checked');
  console.log(todoItem);
  
  const checkMarker = todoItem.querySelector('.check-marker');
  checkMarker.className = 'far fa-check-circle check-marker';
  checkMarker.id = 'completedMarker';

  

  // strike through title
  // add delete button

}

export { markCompleted };