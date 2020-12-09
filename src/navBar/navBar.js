import { enableCreateTodoBtn } from './createTodoButton.js';

const startInitialSetup = () => {
  enableCreateTodoBtn();
}

const NavBar = () => {
  
  return {
    startInitialSetup
  }
}

const navBar = NavBar();

export { navBar };