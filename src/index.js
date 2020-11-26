import { CreateListModal } from './createListModal/CreateListModal.js';

const body = document.querySelector('body');

const createListModal = CreateListModal();
body.appendChild(createListModal.makeCreateListModal());
createListModal.startInitialSetup();







