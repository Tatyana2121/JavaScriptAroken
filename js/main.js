"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

function editingTodoById(todos, todoId, newText) {
  const todoIndex = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (!todoIndex) {
    console.log(`Todo with id ${todoId} not found`);
    return todos;
  }
  todoIndex[todoKeys.text] = newText;
  return todos;
}

const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

function createTodoElement(todo) {
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo");
  todoElement.dataset.id = todo[todoKeys.id];
  todoElement.innerHTML = `
    <div class="todo-text">${todo[todoKeys.text]}</div>
    <div class="todo-actions">
      <button class="button-complete button">&#10004;</button>
      <button class="button-delete button">&#10006;</button>
    </div>
  `;
  return todoElement;
}

function handleCreateTodo(todos, text) {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  todosElement.prepend(todoElement);
}
// formElement.document.querySelector("submit", handleCreateTodo)

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = inputElement.value.trim();
  if (!text) return;
  handleCreateTodo(todos, text);
  inputElement.value = "";
});

todosElement.addEventListener("click", (event) => {
  const todo = event.target.closest(".todo");
  if (!todo) return;
  if (event.target.classList.contains("button-delete")) {
    deleteTodoById(todos, Number(todo.dataset.id));
    todo.remove();
  }
  if (event.target.classList.contains("button-complete")) {
    completeTodoById(todos, Number(todo.dataset.id));
    todo.classList.toggle("completed");
  }
  console.dir(event.target);
});
