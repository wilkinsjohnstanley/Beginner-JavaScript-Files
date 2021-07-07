/* 
Declare a function 'pluck'.
'pluck' takes two inputs: an array of objects and a string (the key)
'pluck' returns an array of the corresponding values at that key from each object.
*/

//Your Code here
function pluck(input, values) {
    var output = [];
    for (var i=0; i < input.length ; i++)
        output.push(input[i][values]);
    console.log(output);
    return output;
}
//Tests

const dogs = [
    { name: "moe", age: 4},
    { name: "larry", age: 5},
    { name: "curly", age: 6}
];
let actual = pluck(dogs, "name");
let expected = ["moe", "larry", "curly"];

if (JSON.stringify(actual) === JSON.stringify(expected)){
    console.log("Yay!");
} else {
    console.log("Try again!");
}

const vegetables = [
    { type: "carrot", amount: 1},
    { type: "potato", amount: 5},
    { type: "broccoli", amount: 112},
    { type: "lettuce", amount: 3},
    { type: "asparagus", amount: 9}
];

let actual = pluck(vegetables, "type");
let expected = ["carrot", "potato", "broccoli", "lettuce", "asparagus"];

if (JSON.stringify(actual) === JSON.stringify(expected)){
    console.log("Yay!");
} else {
    console.log("Try again!");
}
