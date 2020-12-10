import { get } from './get.js';

const isCompletedMarker = (checkMarker) => {
  if (checkMarker.id === 'completedMarker') {
    return true;
  }
  
  return false;
}

const isTodoListCardViewExist = () => {
  if(get.todoListCardView() != null) {
    return true;
  }

  return false;
}

export { isCompletedMarker, isTodoListCardViewExist }