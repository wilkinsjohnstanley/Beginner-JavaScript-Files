function addNums(num1, num2){
    console.log(num1+num2);

}
addNums(5,4);


//with return statements this time
function addNums(num1, num2){
    return num1+num2;

}
console.log(addNums(5, 5));

//Arrow function 
const  addNums = (num1, num2) => {
    return num1+num2;

}
console.log(addNums(5, 5));

//Arrow Function 2 without return statement
const  addNums = (num1, num2) => num1+num2;


console.log(addNums(5, 5)); 
