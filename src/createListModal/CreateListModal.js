import './css/createListModal.css';

import { startInitialSetup } from './startInitialSetup.js';
import { makeCreateListModal } from './elements/makeCreateListModal.js';
import { addCategory } from './addCategory.js';
import { get } from './getElements.js';

const openModal = () => {
  const container = get.container();
  container.appendChild(makeCreateListModal());

  startInitialSetup();
}

const CreateListModal = () => {  

  return {
    openModal,
    startInitialSetup,
  }
}

const createListModal = CreateListModal();

export { createListModal };
