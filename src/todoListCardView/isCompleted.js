const isCompletedMarker = (checkMarker) => {
  if (checkMarker.id === 'completedMarker') {
    return true;
  }
  
  return false;
}

export { isCompletedMarker }