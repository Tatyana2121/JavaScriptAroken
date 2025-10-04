// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

let person = {
  name: "Tanya",
  age: 45,
  placeResidence: "Simferopol",
}

for (let key in person) {
  console.log(`${key}: ${person[key]}`)
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const obj = { };

let isEmpty = (object) => {
  for (const key in object) {
      return false
    } 
      return true
}

// let isEmpty = (object) => {
//   if (Object.keys(object).length == 0) {
//     return true
//   } else {
//     return false
//   }
// }
console.log(isEmpty(person));
console.log(isEmpty(obj));
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Object",
  description: "object of study JS",
  isCompleted: true,
}
const modifications = {
  key01: 'value01',
  key02: 'value02',
}
let cloneAndModify = function(object, modifications) {
  return {...object, ...modifications}
}
let taskMod = cloneAndModify(task, modifications)
for (let key in taskMod) {
  console.log(`${key}: ${taskMod[key]}`);
}
console.log(typeof cloneAndModify);
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const user = {
  name: 'Alice',  
  yearBirth: 2000,      
  yearCurrent: 2025,              
  isActive: true, 
  calcAge() {
    return (user.yearCurrent - user.yearBirth)
  },      
  greet() {
    console.log(`Привет! Добро пожаловать в систему.`);
  } 
}

let callAllMethods = (object) => {
  for (let key in object) {
    if (typeof object[key] === 'function') {
      console.log(object[key]);
    } else {
      console.log('Это не метод');
    }
  }
}
console.log(callAllMethods(user));
// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
