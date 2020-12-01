const makeLabelText = (label) => {
  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = label;

  return labelText;
}

export { makeLabelText }