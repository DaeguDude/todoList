import { get } from './get.js';
import { todoListCardView } from './todoListCardView.js';
import { isCompletedMarker } from './isCompleted.js'
import { markCompleted } from './markCompleted.js';
import { undoCompleted } from './undoCompleted.js';
import { todoList } from '../TodoList/todolist.js';

const enableCheckMarkers = () => {
  const checkMarkers = get.allCheckMarkers()// get check marker

  checkMarkers.forEach(checkMarker => {
    checkMarker.addEventListener('click', () => {
      const todoItem = get.todoItemOfCheckMarker(checkMarker);
      const category = get.currentCategory();
      const todoListMainRow = get.todoListMainRowOfCheckMarker(checkMarker);
      const todoNumber = get.todoNumber(todoListMainRow);
      const todo = todoList.getTodoByNumber(todoNumber, category);
      
      if (isCompletedMarker(checkMarker)) {
        todo.undoCompleted();
        return undoCompleted(todoItem);
      } 
      
      todo.markCompleted();
      markCompleted(todoItem);  
    })
  })
}




export { enableCheckMarkers };