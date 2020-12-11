import { get } from './get.js';
import { todoListCardView } from './todoListCardView.js';
import { isCompletedMarker } from './isCompleted.js'
import { markCompletedDisplay } from './markCompleted.js';
import { undoCompletedDisplay } from './undoCompleted.js';
import { todoList } from '../TodoList/todolist.js';

const markCompleted = (todo, todoDisplay) => {
  todo.markCompleted();
  markCompletedDisplay(todoDisplay);
}

const undoCompleted = (todo, todoDisplay) => {
  todo.undoCompleted();
  undoCompletedDisplay(todoDisplay);
}

const toggleCompleted = (event) => {
  // SRP: toggle the completed status
  const checkMarker = event.target;
  
  const todoDisplay = get.todoItemOfElement(checkMarker);
  const category = get.currentCategory();
  const todoNumber = get.todoNumber(todoDisplay);
  const todo = todoList.getTodoByNumber(todoNumber, category);
  
  if (isCompletedMarker(checkMarker)) {
    return undoCompleted(todo, todoDisplay);
  }

  markCompleted(todo, todoDisplay);
}

const enableCheckMarkers = () => {
  const checkMarkers = get.allCheckMarkers();

  checkMarkers.forEach(checkMarker => {
    checkMarker.addEventListener('click', toggleCompleted);
  })
}




export { enableCheckMarkers };