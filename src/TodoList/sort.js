
const sortTodosDueDate = (todos) => {
  todos.sort((todoOne, todoTwo) => {
    const todoOneDueDate = todoOne.getDueDate();
    const todoTwoDueDate = todoTwo.getDueDate();
    
    return Number(todoOneDueDate) - Number(todoTwoDueDate);
  });
}

/**
 * ------------------------------------------------------------------
 * THIS NEEDS TO BE FIXED. 
 * IT'S WORKING. BUT VERY INEFFICIENT CODE
 * ------------------------------------------------------------------
 */
const sortTodosPriority = (todos) => {
  
  const IMPORTANT = 1;
  const HIGH = 2;
  const MIDDLE = 3;
  const LOW = 4;

  todos.sort((todoOne, todoTwo) => {
    let todoOnePriority = todoOne.getPriority();
    let todoTwoPriority = todoTwo.getPriority();
    
    switch (todoOnePriority) {
      case "important":
        todoOnePriority = IMPORTANT;
        break;
      case "high":
        todoOnePriority = HIGH;
        break;
      case "middle":
        todoOnePriority = MIDDLE;
        break;
      case "low":
        todoOnePriority = LOW;
        break;
    }

    switch (todoTwoPriority) {
      case "important":
        todoTwoPriority = IMPORTANT;
        break;
      case "high":
        todoTwoPriority = HIGH;
        break;
      case "middle":
        todoTwoPriority = MIDDLE;
        break;
      case "low":
        todoTwoPriority = LOW;
        break;
    }
      
    return todoOnePriority - todoTwoPriority;
  });
}

const sortTodosCreatedDate = (todos) => {
  todos.sort((todoOne, todoTwo) => {
    const todoOneCreatedDate = todoOne.getCreatedDate();
    const todoTwoCreatedDate = todoTwo.getCreatedDate();
    
    return Number(todoOneCreatedDate) - Number(todoTwoCreatedDate);
  });
}

export { sortTodosCreatedDate, sortTodosPriority, sortTodosDueDate };