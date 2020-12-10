import { createListModal } from './createListModal/CreateListModal.js';
import { createTodoModal } from './createTodoModal/CreateTodoModal.js';
import { categorySelectionModal } from './categorySelectionModal/CategorySelectionModal.js';
import { todoDetailsCardView } from './todoDetailsCardView/todoDetailsCardView.js';
import { todoListCardView } from './todoListCardView/todoListCardView.js';
import { navBar } from './navBar/navBar.js';

import { Todo } from './Todo/todo.js';
import { todoList } from './TodoList/todolist.js';

import { getToday } from './date/getToday.js';




const myTodo1 = Todo('1', 'Today is the day I go');
myTodo1.setCategory('jiujitsu');
myTodo1.setPriority('low');
myTodo1.setDueDate('2020-05-20');

const myTodo2 = Todo('2', 'Today is the day I go');
myTodo2.setCategory('jiujitsu');
myTodo2.setPriority('low');
myTodo2.setDueDate('2020-05-20');
myTodo2.markCompleted();

// const myTodo3 = Todo('3', 'Today is the day I go');
// myTodo3.setCategory('jiujitsu');
// myTodo3.setPriority('low');
// myTodo3.setDueDate('2020-05-20');

// const myTodo4 = Todo('4', 'Today is the day I go');
// myTodo4.setCategory('jiujitsu');
// myTodo4.setPriority('low');
// myTodo4.setDueDate('2020-05-20');
// myTodo4.markCompleted();

// const myTodo5 = Todo('5', 'Today is the day I go');
// myTodo5.setCategory('jiujitsu');
// myTodo5.setPriority('low');
// myTodo5.setDueDate('2020-05-20');
// myTodo5.markCompleted();

// const myTodo6 = Todo('6', 'Today is the day I go');
// myTodo6.setCategory('jiujitsu');
// myTodo6.setPriority('low');
// myTodo6.setDueDate('2020-05-20');
// myTodo6.markCompleted();

// const myTodo7 = Todo('7', 'Today is the day I go');
// myTodo7.setCategory('jiujitsu');
// myTodo7.setPriority('low');
// myTodo7.setDueDate('2020-05-20');
// myTodo7.markCompleted();

todoList.addTodo(myTodo1);
todoList.addTodo(myTodo2);
// todoList.addTodo(myTodo3);
// todoList.addTodo(myTodo4);
// todoList.addTodo(myTodo5);
// todoList.addTodo(myTodo6);
// todoList.addTodo(myTodo7);



const category = 'jiujitsu';
todoListCardView.showTodoListCardView(category);

todoListCardView.startInitialSetup();

navBar.startInitialSetup();
navBar.showCategories();














