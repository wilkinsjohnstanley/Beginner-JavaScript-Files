/*
Define a function called 'listDigits'. 

'listDigits' should take in a number.

It returns the digits of that number as an array.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

// Your code here
//method 1
var myInt = 235345;
 
// Getting the string as a parameter
// and typecasting it into an integer
let listDigits = num => Number(num);
 
var intArr = Array.from(String(myInt), listDigits);
 
// Print the result array
console.log(intArr);

//method 2

// Declare a variable and store an
// integer value
var num = 235345
 
// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers
 
var myArr = String(num).split("").map((num)=>{
  return Number(num)
})
 
console.log(myArr)

// Tests
// You should not need to change the tests

let actual = listDigits(12345);
let expected = [1, 2, 3, 4, 5];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}

actual = listDigits(21020);
expected = [2, 1, 0, 2, 0];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}

actual = listDigits(999999);
expected = [9, 9, 9, 9, 9, 9];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}

