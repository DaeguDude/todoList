import { createListModal } from './createListModal/CreateListModal.js';
import { createTodoModal } from './createTodoModal/CreateTodoModal.js';
import { categorySelectionModal } from './categorySelectionModal/CategorySelectionModal.js';
import { todoDetailsCardView } from './todoDetailsCardView/todoDetailsCardView.js';

import { Todo } from './Todo/todo.js';
import { todoList } from './TodoList/todolist.js';
import { enableButtonsToBeSelected } from './todoDetailsCardView/priority.js';
import { getToday } from './date/getToday.js';


const myTodo = Todo('Going to Jiujitsu', 'Today is the day I go');
myTodo.setCategory('jiujitsu');
myTodo.setPriority('important');

const body = document.querySelector('body');
body.appendChild(todoDetailsCardView.makeTodoDetailsCardView(myTodo));

enableButtonsToBeSelected();















