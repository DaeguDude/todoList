import { createListModal } from './createListModal/CreateListModal.js';
import { createTodoModal } from './createTodoModal/CreateTodoModal.js';
import { categorySelectionModal } from './categorySelectionModal/CategorySelectionModal.js';

const body = document.querySelector('body');
body.appendChild(createTodoModal.makeCreateTodoModal());

createTodoModal.startInitialSetup();
















