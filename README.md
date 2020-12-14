# TodoList

TodoList project that is a part of open source web development curriculum The Odin Project. 

## DESCRIPTION

You can make a todo of your own and keep up with todos that you need to complete.
Here is the [live demo] for trial.

![todoList preview](./todoList.png)

## STACKS USED

- HTML / CSS
- Javascript
- Webpack
- Npm
- localStorage

## Things to improve

- **Logical Thinking**: When problem occurs, I tend to just make my way through it, not without thinking about how to solve problems step by step.

- **How to write DRY code**: Looking at my code, there's a lot of codes that are repeated. For example,

```javascript
// 'From Category Selection Modal'
const closeModal = () => {
  const modal = get.modal();
  modal.remove();
}

// 'From Create Todo Modal'
const closeModal = () => {
  const modal = get.modal();
  modal.remove();
}

// 'From Create List Modal'
// close modal
const closeModal = () => {
  const modal = get.modal();
  modal.remove();
}
```

All these things have same function declared on its own. But it's doing exactly same thing.

- **How to separate the code(module)**: I had such a big factory function object that was doing a lot of things in my first pace of the project, which led to the [code](https://github.com/DaeguDude/TOP-todolist/blob/implementing-Functionality/src/Display/display.js) that wasn't managable anymore. I had to complete restart the project because code that I wrote wasn't understandable anymore. I have taken an advice from TOP board member to separate by component, which a lot of times means to separate UI. So here's my components so far.

Display:

`categorySelectionModal`, `createListModal`, `createTodoModal`, `navBar`, `todoDetailsCardView`, `todoListCardView`, 

Application Logic:

`Todo`, `TodoList`. 

And let's see the problem I have. In the `todoListCardView`, which lists the todos that someone has created, it has checkMarker that will set todo as completed. So checkMarker alone needs to have a lot of functions attached.
I'm curious if I have to make this component as well? I am not too sure how I can separate it.

And what about the function `addTodo` of `todoListCardView`? Where does it need to live in the codebase?

## Future Plan(Refactoring)

Aim: Write the code that's easier to understand.






