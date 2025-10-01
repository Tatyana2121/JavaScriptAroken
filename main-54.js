"use strict";

const users = [
  {
    name: "Alex",
    age: 24,
    isAdmin: false,
  },
  {
    name: "Bob",
    age: 13,
    isAdmin: false,
  },
  {
    name: "John",
    age: 31,
    isAdmin: true,
  },
  {
    name: "Jane",
    age: 20,
    isAdmin: false,
  },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true }
);

function getUserAverageAge(users) {
  let sumAllAges = 0;
  users.forEach(user => {
    sumAllAges += user.age;
  });
  return sumAllAges / users.length;
}

function getAllAdmins(users) {
  const admins = [];
  users.forEach(user => {
    if (user.isAdmin) admins.push(user);
  });
  return admins;
}

function first(arr, n = 1) {
  const arrLength = arr.length;
  if (arrLength < n) {
    console.error(`n(${n}) не может быть меньше длины массива: ${arrLength}`);
    return;
  }

  const newArr = new Array(n);
  for (let i = 0; i < n; i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}

console.log(first([10, 15, 33, 50, 14]));
