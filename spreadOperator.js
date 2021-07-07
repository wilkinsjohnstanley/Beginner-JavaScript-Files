/*The spread operator, represented by three periods (...), 
allows you to spread or expand an iterable, such as an array, a string, 
or even an object, into its individual elements. 

The spread operator can be used in function calls, array literals, and object literals. 

myFunction(...iterableObj);

*/
/*
function sum(x, y, z){
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //6
*/
const arr1 = ["cat", "dog"];
const arr2 = ["cow", "chicken"];
const arr3 = [...arr1, "alien", ...arr2];
console.log(arr3); //returns ["cat", "dog", "alien", "cow", "chicken"]

const name = "Hello";
const nameArr = [...name];
console.log(nameArr); //["H", "e", "l", "l", "o"]