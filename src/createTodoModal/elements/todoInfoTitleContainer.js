const makeTodoinfoTitleContainer = () => {
  const todoinfoContainerTitle = document.createElement('div');
  todoinfoContainerTitle.classList.add('todoinfo-container-title');

  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'TITLE';

  const todoinfoTitle = document.createElement('div');
  todoinfoTitle.classList.add('todoinfo-title');

  const titleTextarea = document.createElement('textarea');
  titleTextarea.classList.add('textField', 'textField-title')
  titleTextarea.setAttribute('rows', '1');
  titleTextarea.setAttribute('placeholder', 'I want to...');

  todoinfoContainerTitle.appendChild(labelText);
  todoinfoContainerTitle.appendChild(todoinfoTitle);
  todoinfoTitle.appendChild(titleTextarea);

  return todoinfoContainerTitle;
}

export { makeTodoinfoTitleContainer };