import { createListModal } from './createListModal/CreateListModal.js';
import { createTodoModal } from './createTodoModal/CreateTodoModal.js';
import { categorySelectionModal } from './categorySelectionModal/CategorySelectionModal.js';

import { Todo } from './Todo/todo.js';
import { todoList } from './TodoList/todolist.js';

const todo1 = Todo('middle', 'yea', 'gym');
const todo2 = Todo('low', 'ya', 'gym');
const todo3 = Todo('important', 'yeaa', 'gym');
const todo4 = Todo('high', 'yeaa', 'gym');

todoList.addTodo(todo1);
todoList.addTodo(todo2);
todoList.addTodo(todo3);
todoList.addTodo(todo4);

console.log(todoList.getTodosByCategory('gym'));

todoList.deleteTodo(todo1);

console.log(todoList.getTodosByCategory('gym'));



















