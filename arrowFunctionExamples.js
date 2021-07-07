// //normal function
// let normalFunction = function(){
//     //do something
// };

// //arrow function
// let arrowFunction = () => {
//     //do something
// };

// //normal function
// function message(){
//     return "Hello World";
// }

//arrow function equivalent
// let message = () => {
//     return "Hello World";
// };
//Because we are only returns one statement 
//We can get rid of the curly braces and return
//We can implicitly return the value
// let message = () => "Hello World";

//What is we want to pass parameters?
// let message = (name) => `Hello ${name}`;
// console.log(message("John")); //Hello John

//Since we only have one parameter, we can get rid of the parentheses surround the parameter

let message = name => `Hello ${name}`;
console.log(message("John"));

//Multiple parameters require parenthesis
let text = (greeting, name) => `${greeting} ${name}`;
console.log(text("Hi", "John"));
//Hi John