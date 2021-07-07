//generate random number for examples
let randomNumber = Math.floor(Math.random() * 10) + 1;
let message;

//this is not ternary
if (randomNumber % 2 === 0){
    message = `The number ${randomNumber} is even`;

} else {
    message = `The number ${randomNumber} is odd`;

}
console.log(message);
//The number [randomNumber] is odd/even

//this is ternary
randomNumber % 2 === 0
   ? message = `The number ${randomNumber} is even`
   : message = `The number ${randomNumber} is odd`;

console.log(message);