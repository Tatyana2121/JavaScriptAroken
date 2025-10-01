"use strict";
// 1.Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  return n * m;
}

// 2.Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
}
console.log(past(1, 1, 1)); //3661000
console.log(past(0, 1, 1)); //61000
console.log(past(0, 0, 0));
console.log(past(1, 0, 1)); //3601000
console.log(past(1, 0, 0)); //3600000

// 3.Remove First and Last Character
// Task
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

const removeChar = (str) => str.slice(1, -1);

console.log(removeChar("eloquent"));

//4. Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

var max = function (list) {
  const sortedList = [...list].sort((a, b) => b - a);
  return sortedList[0];
};
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

var min = function (list) {
  const sortedList = [...list].sort((a, b) => a - b);
  return sortedList[0];
};
console.log(min([42, 54, 65, 87, 0]));

//5. Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {
  let res = arr.reduce((accum, item) => Math.min(accum, item), Infinity);
  return res;
}
console.log(findSmallestInt([34, 15, 88, 2]));

//6.There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!
// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((acc, num) => acc + num, 0);
  let averageScore = (sum + yourPoints) / (classPoints.length + 1);
  if (yourPoints > averageScore) {
    return true;
  }
  return false;
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //true
console.log(betterThanAverage([80, 90, 70], 85)); // true (средняя = 81.25, 85 > 81.25)

// 7.Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  let res = "";
  for (let char of x) {
    if (char < 5) {
      res += "0";
    } else {
      res += "1";
    }
  }
  return res;
}

console.log(fakeBin("45385593107843568")); //, '01011110001100111');

// 8.Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  let res = input.reduce(
    (acc, num) => {
      if (num > 0) acc[0]++;
      else if (num < 0) acc[1] += num;
      return acc;
    },
    [0, 0]
  );
  return res;
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65].

// 9.Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let index = weight / height ** 2;
  switch (true) {
    case index <= 18.5:
      return "Underweight";
      break;
    case index <= 25.0:
      return "Normal";
      break;
    case index <= 30.0:
      return "Overweight";
      break;
    default:
      return "Obese";
  }
}

console.log(bmi(70, 1.8));
console.log(bmi(90, 1.7));

// 10.Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
  return "needle not found";
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
