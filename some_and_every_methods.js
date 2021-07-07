/*
The high order array methods some() 
and every() return true or false 
depending on if some or every element in an array passes a test.

They both can accept up to three arguments; 
the current elements value, the current index, and the entire originating array.

arr.some(callback(currentValue, index, array){
    //...
})

arr.every(callback(currenValue, index, array){
    //...
})

*/
const numbers = [3, 6, 14, 9];
let overTen = numbers.some(function(num){
    return num > 10
});
console.log(overTen); //true