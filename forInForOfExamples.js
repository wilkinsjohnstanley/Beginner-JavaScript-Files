/*for... in/for...of */
//usage

//loop thu property names
// for (variable in object){
//     statements
// }

// //loop thu property values
// for (variable of object){
//     statement
// }

let person = {fname:"John", lname: "Wilkins", arms: 2};
let arr = [3, 5, 7];
arr.foo = 'hello';
let text = "";

//loops through the property names
for (let x in person){
    text += person[x];
    console.log(x); //--> fname, lname, arms
};
console.log(text); //--> JohnWilkins2

// //--> 0, 1, 2, foo
// for (let i in arr){
//     console.log(i);
// };
// //--> 3, 5, 7
// for (let i of arr){
//     console.log(i);
// };
