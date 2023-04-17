// Write a function that takes in a string and returns it when reversed
// let food = “eating”
  function reversedString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  let food = "eating";
  let reversedFood = reversedString(food);
  console.log(reversedFood);
// question2
// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function findTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        console.log(target);
        return;
      }
    }
    console.log("null");
  }
  let num = [2, 8, 0, 23, 5, 45, 76];
let target = 23;
findTarget(num, target);
// question 3
// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (let year = 2000; year <= 2023; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }
  //take2-Another solution
  for (let i = 2000; i <= 2023; i++) {
    if (i%4===0) {
     console.log(i + " is a leap year");
    }
    else{
     console.log(i + " is not a leap year");
    }
   }
//   question 4
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
// question5
// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function multiplyByFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 4);
    }
    return result;
  }
  let numArray = [12, 87, 45, 75, 23, 64, 73];
  let multipliedArray = multiplyByFour(numArray);
  console.log(multipliedArray);
//   Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function stringsToNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Number(arr[i]));
    }
    return result;
  }
  let nums = ["10", "24", "45", "56", "67"];
  let array = stringsToNumbers(nums);
  console.log(array);
//  parseInt
for (let year = 1000; year <= 2023; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }