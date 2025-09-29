// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true }
);

console.log(users);
// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = (arr) => {
  let sum = 0;
  arr.forEach((user) => {
    sum += user.age;
  });
  return sum / arr.length;
};
console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = function (arr) {
  let admin = "";
  arr.forEach((user) => {
    if (user.isAdmin === true) admin += user.name + ", ";
  });
  return `Список администраторов: ${admin}`;
  return admin;
};
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
  const arrNew = [];
  if (n > arr.length) {
    console.error("не может быть больше длины массива");
    return;
  }
  if (n === undefined) {
    return arr[0];
  }
  if (n === 0) {
    return [];
  }
  for (let i = 0; i < n; i++) {
    arrNew.push(arr[i]);
  }
  return arrNew;
}

console.log(first(users, 7));
console.log(first(users, 0));
console.log(first(users, 2));
console.log(first(users));
