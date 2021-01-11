import "../css/createTodoModal.css";
import { get } from "../getElements.js";

const makeCreateTodoModal = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("id", "createTodo");

  const createTodoModal = document.createElement("div");
  createTodoModal.classList.add("createTodo-modal");
  createTodoModal.classList.add("modal-content");

  createTodoModal.appendChild(makeTodoinfoContainer());
  createTodoModal.appendChild(makeAddTodoBtnContainer());

  modal.appendChild(createTodoModal);

  return modal;
};

const makeAddTodoBtnContainer = () => {
  const addTodoBtnContainer = document.createElement("div");
  addTodoBtnContainer.classList.add("createTodo-modal-addTodoBtn-container");

  const createTodoBtns = document.createElement("button");
  createTodoBtns.classList.add("createTodo-buttons");
  createTodoBtns.innerText = "Add Todo";

  addTodoBtnContainer.appendChild(createTodoBtns);

  return addTodoBtnContainer;
};

const makeTodoinfoContainer = () => {
  const todoInfoContainer = document.createElement("div");
  todoInfoContainer.classList.add("createTodo-modal-todoinfo-container");

  const todoinfoTitleContainer = makeTodoinfoTitleContainer();
  const todoinfoDescriptionContainer = makeTodoinfoDescriptionContainer();
  const todoinfoCategoryContainer = makeTodoinfoCategoryContainer();

  todoInfoContainer.appendChild(todoinfoTitleContainer);
  todoInfoContainer.appendChild(todoinfoDescriptionContainer);
  todoInfoContainer.appendChild(todoinfoCategoryContainer);

  return todoInfoContainer;
};

const makeTodoinfoTitleContainer = () => {
  const todoinfoContainerTitle = document.createElement("div");
  todoinfoContainerTitle.classList.add("todoinfo-container-title");

  const labelText = makeLabelText("TITLE");

  const todoinfoTitle = document.createElement("div");
  todoinfoTitle.classList.add("todoinfo-title");

  const titleTextarea = document.createElement("textarea");
  titleTextarea.classList.add("textField", "textField-title");
  titleTextarea.setAttribute("rows", "1");
  titleTextarea.setAttribute("placeholder", "I want to...");

  todoinfoContainerTitle.appendChild(labelText);
  todoinfoContainerTitle.appendChild(todoinfoTitle);
  todoinfoTitle.appendChild(titleTextarea);

  return todoinfoContainerTitle;
};

const makeTodoinfoDescriptionContainer = () => {
  const todoinfoContainerDescription = document.createElement("div");
  todoinfoContainerDescription.classList.add("todoinfo-container-description");

  const labelText = makeLabelText("DESCRIPTION");

  const todoinfoDescription = document.createElement("div");
  todoinfoDescription.classList.add("todoinfo-description");

  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.classList.add("textField", "textField-description");
  descriptionTextarea.setAttribute("rows", "10");
  descriptionTextarea.setAttribute("placeholder", "Insert your notes here");

  todoinfoContainerDescription.appendChild(labelText);
  todoinfoContainerDescription.appendChild(todoinfoDescription);
  todoinfoDescription.appendChild(descriptionTextarea);

  return todoinfoContainerDescription;
};

const makeTodoinfoCategoryContainer = () => {
  const todoinfoContainerCategory = document.createElement("div");
  todoinfoContainerCategory.classList.add("todoinfo-container-category");

  const labelText = makeLabelText("CATEGORY");

  const todoinfoCategory = document.createElement("div");
  todoinfoCategory.classList.add("todoinfo-category");

  const categorySelectionBtn = document.createElement("button");
  categorySelectionBtn.classList.add("todoinfo-category-selectBtn");
  // This needs to be changed in the future
  categorySelectionBtn.innerText = get.currentCategory();

  todoinfoContainerCategory.appendChild(labelText);
  todoinfoContainerCategory.appendChild(todoinfoCategory);
  todoinfoCategory.appendChild(categorySelectionBtn);

  return todoinfoContainerCategory;
};

const makeLabelText = (label) => {
  const labelText = document.createElement("div");
  labelText.classList.add("Label__Text");
  labelText.innerText = label;

  return labelText;
};

export { makeCreateTodoModal };
