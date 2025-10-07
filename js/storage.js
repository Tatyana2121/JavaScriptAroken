//для получения наших todos
export const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"))
}
//для сохранения наших todose`
export const setTodosToLocalStorage = todos => {
  localStorage.setItem("todos", JSON.stringify(todos))
} 