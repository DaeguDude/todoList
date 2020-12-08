const Get = () => {
  const allCheckMarkers = () => {
    return document.querySelectorAll('.check-marker');
  }

  const todoItemOfCheckMarker = (checkMarker) => {
    return checkMarker.closest('.TodoItem');
  }

  return {
    allCheckMarkers,
    todoItemOfCheckMarker
  }
}

const get = Get();

export { get };