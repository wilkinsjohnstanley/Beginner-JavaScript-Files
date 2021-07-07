//accessor methods do not modify the array
//they return some representation of the array
//the concat method joins

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const newArr = arr1.concat(arr2, arr3);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(newArr);

//the filter method creates an array 
//filters based on a test, elements must have values/be numbers?
const arr4 = [4, 8, 12, 5, 9, 11, 24];
const filtered = arr4.filter(num => num > 5);
console.log(arr4); //unchanged
console.log(filtered); //new array with numbers greater than 5

//the includes method looks for a value in the array, then returns true or false
const arr5 = ["cat", "dog", "bird", "fish"];
console.log(arr5.includes("cat")); //true
console.log(arr5.includes("human")); //false
console.log(arr5.includes("Dog")); //false
console.log(arr5.includes("dog")); //true

//index of method returns the 1st found occurance

const arr6 = [1, 2, 3, 4, 5];
console.log(arr6.indexOf(2));
console.log(arr6.indexOf(4));
//last index of method
console.log(arr6.lastIndexOf(5)); //4