const makeCheckMarker = () => {
  const checkMarker = document.createElement('i');
  checkMarker.classList.add('far', 'fa-check-circle');

  return checkMarker;
}

export { makeCheckMarker };