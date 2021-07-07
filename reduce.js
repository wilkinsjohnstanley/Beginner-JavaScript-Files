/*
The JavaScript reduce() method reduces an array to a single value. 
It executes a provided function for each value in the array 
and the returned value is stored in an accumulator. 
The function is not executed for array elements without values 
and it does not change the original array.

First we create a new variable, 
then we reference the array and add .reduce(). 
The reduce() method accepts two parameters. 
The first is a function. 
The function has access to the accumulator, current value, current index, 
and the entire original array. 
The second parameter after the function is an optional initial value for the accumulator. 
If the initial value is not included, 
the first element in the array will be used and skipped. 
*/
//let reduced = arr.reduce(function(accumulator, currentValue, index, array), initialValue)

const numbers = [1, 8, 7, 4, 9, 11];
/*
let sum = 0;
for(number of numbers){
    sum+= number;
}
console.log(sum); //40
*/
let sum = numbers.reduce((total, value) => {
    return total + value
}, 0);
console.log(sum); //40

let sum2 = numbers.reduce((total, value) => total + value);
console.log(sum2); //40