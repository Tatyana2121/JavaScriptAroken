import { todoKeys } from "./constans.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js"
import { setTodosToLocalStorage } from "./storage.js"

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

//функция отрисовки сохраненных задач
export const renderTodos = todos => {
  todosElement.innerHTML = ""
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo)
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("complete")
    }
    todosElement.prepend(todoElement);
  })
}

function handleCreateTodo(todos, text) {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  setTodosToLocalStorage(todos)
  todosElement.prepend(todoElement);
}

export const initTodoHandlers = todos => {
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
});
}

