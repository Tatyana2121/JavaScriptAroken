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

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosList = document.querySelector(".todos");

function createTodoElement(text) {
  let createElem = document.createElement("li");
  createElem.classList.add("todo");
  createElem.innerHTML = `
    <div class="todo-text">${text}</div>
    <div class="todo-actions">
      <button class="button-complete button">&#10004;</button>
      <button class="button-delete button">&#10006;</button>
    </div>
  `;
  todosList.append(createElem);
}

function handleCreateTodo(todos, text) {
  createTodoElement(text);
  createTodo(todos, text);
}

handleCreateTodo(todos, "Задача 1");
handleCreateTodo(todos, "Задача 2");

editingTodoById(todos, 1, "editing");
console.log(todos);
