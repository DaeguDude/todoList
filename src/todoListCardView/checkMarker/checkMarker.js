import { get } from "../get.js";
import { markCompletedDisplay } from "./markCompleted.js";
import { undoCompletedDisplay } from "./undoCompleted.js";
import { todoList } from "../../TodoList/todolist.js";

const isCompletedMarker = (checkMarker) => {
  if (checkMarker.id === "completedMarker") {
    return true;
  }

  return false;
};

const makeEmptyCheckMarker = () => {
  const emptyCheckMark = document.createElement("i");
  emptyCheckMark.classList.add("far", "fa-circle", "check-marker");
  emptyCheckMark.setAttribute("id", "notCompletedMarker");

  enableCheckMarker(emptyCheckMark);
  return emptyCheckMark;
};

const makeCheckedMarker = () => {
  const checkedMarker = document.createElement("i");
  checkedMarker.classList.add("far", "fa-check-circle", "check-marker");
  checkedMarker.setAttribute("id", "completedMarker");

  enableCheckMarker(checkedMarker);
  return checkedMarker;
};

const markCompleted = (todo, todoDisplay) => {
  todo.markCompleted();
  markCompletedDisplay(todoDisplay);
};

const undoCompleted = (todo, todoDisplay) => {
  todo.undoCompleted();
  undoCompletedDisplay(todoDisplay);
};

const toggleCompleted = (event) => {
  // SRP: toggle the completed status
  const checkMarker = event.target;

  const todoDisplay = get.todoItemOfElement(checkMarker);
  const category = get.currentCategory();
  const todoNumber = get.todoNumber(todoDisplay);
  const todo = todoList.getTodoByIndex(todoNumber, category);

  if (isCompletedMarker(checkMarker)) {
    return undoCompleted(todo, todoDisplay);
  }

  markCompleted(todo, todoDisplay);
};

const enableCheckMarker = (checkMarker) => {
  checkMarker.addEventListener("click", toggleCompleted);
};

export { makeEmptyCheckMarker, makeCheckedMarker };
