/*
Define a function called 'sumArray'. 

'sumArray' should take in an array.

It returns a new array where each number is the running 
total of the input array up to that index.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

// Your code here
function sumArray(array){
    var output = [];
    sum = 0;
    for (i = 0; i<array.length; i++){
        sum+=array[i];
        output.push(sum);
      
       
    }
    return output; 
}


// Tests
// You should not need to change the tests

let actual = sumArray([1, 2, 3, 4, 5]);
let expected = [1, 3, 6, 10, 15];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else  {
  console.log("Try again!");
}

actual = sumArray([-1, -2, -5, 4, -7]);
expected = [-1, -3, -8, -4, -11];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}