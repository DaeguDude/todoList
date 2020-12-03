import { createListModal } from './createListModal/CreateListModal.js';
import { createTodoModal } from './createTodoModal/CreateTodoModal.js';
import { categorySelectionModal } from './categorySelectionModal/CategorySelectionModal.js';

import { Todo } from './Todo/todo.js';
import { todoList } from './TodoList/todolist.js';
// import { makeTodoDetailsCardView } from './todoDetailsCardView/elements/makeTodoDetailsCardView.js';
import { makeTodoEditMain } from './todoDetailsCardView/elements/main/main.js';

const body = document.querySelector('body');
body.appendChild(makeTodoEditMain());













