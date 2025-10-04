"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
  date: "date"
};

const todos = [];const getNewId = (todos) =>  todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1
  // return todos.reduce((maxId, todo) => {
  //   if (todo.id > maxId) {
  //     return todo.id
  //   } else {
  //     return maxId
  //   }
  // }, 0) + 1

function getCurrentDateTime() {
  const now = new Date();
  const day = String(now.getDate());    
  const month = String(now.getMonth() + 1); 
  const year = now.getFullYear();
  const hours = String(now.getHours());
  const minutes = String(now.getMinutes());
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(getCurrentDateTime());

function createTodo(todos, text) {
  const newId = todos.length === 0 ? 1 : Math.max(...todos.map(t => t.id)) + 1;
  const newTodo = {
    [todoKeys.id]: getNewId(todos),
    [todoKeys.text]: text,
    [todoKeys.date]: getCurrentDateTime(),
    [todoKeys.is_completed]: false,
  }  
  return todos.push(newTodo)
}

createTodo(todos, "test1")
createTodo(todos, "test2")
createTodo(todos, "test3")
console.log(todos);

function completeTodoById(todos, todoId) {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId)
  if (todo === undefined) {
    console.log(`Todo with id ${todoId} not found`);
    return null
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo
}
completeTodoById(todos, 2)
console.log(todos);

function deleteById(todos, todoId) {  
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId) 
  if (todoIndex === -1) {
    console.log(`Todo with id ${todoId} not found`);
    return todos
  }
  return todos.splice(todoIndex, 1)
}

// deleteById(todos, 2)
// console.log(todos);

// function editingTodoById (todos, todoId, newText) {
//   const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId)
//   if (todoIndex === -1) {
//         console.log(`Todo with id ${todoId} not found`);
//     return todos
//   }
//   todos.forEach((todo, index) => {
//     if (index === todoIndex)  todo[todoKeys.text] = newText    
//   });
//   return todos
// }

// В редактирование задачи по идее можно обойтись без todos.forEach, так как у тебя уже есть индекс элемента и можно обратиться через todos[todoIndex]. И вот здесь todoId === -1 проверка должна быть не по id, а по индексу, иначе будет ошибка в логике. В идеале вообще переписать эту функцию на todos.find с поиском нужного todo по id :)

