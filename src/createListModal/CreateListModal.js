import './css/createListModal.css';

import { startInitialSetup } from './startInitialSetup.js';
import { makeCreateListModal } from './elements/makeCreateListModal.js';
import { addCategory } from './addCategory.js';
import { get } from './getElements.js';

const CreateListModal = () => {  

  return {
    makeCreateListModal,
    startInitialSetup,
  }
}

const createListModal = CreateListModal();

export { createListModal };
