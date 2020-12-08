import { get } from './get.js';
import { todoListCardView } from './todoListCardView.js';
import { isCompletedMarker } from './isCompleted.js'
import { markCompleted } from './markCompleted.js';

const enableCheckMarkers = () => {
  const checkMarkers = get.allCheckMarkers()// get check marker


  checkMarkers.forEach(checkMarker => {
    checkMarker.addEventListener('click', () => {
      const todoItem = get.todoItemOfCheckMarker(checkMarker);
      if (isCompletedMarker(checkMarker)) {
        console.log('Todo: set as uncompleted');
        console.log('show display as  uncompleted');
      } else {

        console.log('Todo: set as completed');
        console.log('show display as completed')
        markCompleted(todoItem);
      }
    })
  })
}


const startInitialSetup = () => {
  enableCheckMarkers();
}

export { startInitialSetup };