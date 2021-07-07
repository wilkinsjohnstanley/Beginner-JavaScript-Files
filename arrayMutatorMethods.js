/*
In JavaScript, array mutator methods modify the original array. 
The push method adds one or more elements to the end of an array
Then, it returns the new length of the array.
*/
const arr = ["cat", "dog", "robot", "cow"];
console.log(arr.push("alien")); //returns 5
console.log(arr); //modified: ["cat", "dog", "robot", "cow", "alien"]

//The pop method removes the last element from an array and returns that element
const arr1 = ["baseball", "golf", "tennis"];
console.log(arr1.pop()); //returns "tennis"
console.log(arr1); //["baseball", "golf"]
//The shift method removes the first element from an array and returns thhat element 
const arr2 = ["Biloxi", "Oxford", "Miyako"];
console.log(arr2.shift()); //returns Biloxi
console.log(arr2); //modified: returns ["Oxford", "Miyako"]
/*The unshift method adds one or more elements to the beginning of an array. 
Then, it returns the new length of the array. 
*/
const arr3 = ["Yellow", "Brown", "Orange", "Green"];
console.log(arr3.unshift("Blue")); //returns 5
console.log(arr3); //returns modified: [Blue, Yellow, Brown, Orange, Green]

/*
The splice method adds and/or removes elements from an array.

The first parameter defines the position
where the element should be added or removed.
The second parameter finds how many elements should be removed. 
All the other parameters are the elements to be added. 
*/
//array.splice(start, deleteCount, item1, item2, ...);
const arr4 = ["Butterfinger", "Kit Kat", "PayDay"];
console.log(arr4.splice(1, 1, "Snickerdoodle")); 
//returns [Kit Kat]
console.log(arr4); 
//returns modified [Butterfinger, Snickerdoodle, Payday]

//The sorts the elements of an array in place and returns the array.
//note that it sorts by character order 100 before 2, a before b
const arr5 = ["breakfast", "lunch", "dinner", "midnight snack"];
arr5.sort();
console.log(arr5); //(4) ["breakfast", "dinner", "lunch", "midnight snack"]
