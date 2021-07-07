function grab(input, values) {
var output = [];
//let rows = input.length;
for(let i=0; i<input.length; i++){
    //let items = input[i].length;
    //console.log(i, items)
    for(let n=0; n<input[i].length; n++){
        if (n === values){
        output.push(input[i][n]);
        
        }
        
    }
    
}
console.log(output);
return output;
}

// Tests
// You should not need to change the tests

const myGrid = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
];

let actual = grab(myGrid, 1);
let expected = ["b", "e", "h"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
console.log("Yay!");
} else {
console.log("Try again!");
}

const anotherGrid = [
    ["duck", "goose"],
    ["cat", "dog"],
    ["horse", "donkey"],
    ["giraffe", "zebra"]
];

actual = grab(anotherGrid, 0);
expected = ["duck", "cat", "horse", "giraffe"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
    } else {
    console.log("Try again!");
}

const oneMoreGrid = [
    ["1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10"],
];

actual = grab(oneMoreGrid, 3);
expected = ["4", "9"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
    } else {
    console.log("Try again!");
}