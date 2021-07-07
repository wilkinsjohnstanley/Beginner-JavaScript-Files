//A pair of square brackets immediately after an expression, 
//with another expression inside of them, 
//will look up the element in the left-hand expression 
//that corresponds to the index given by the expression in the brackets.

function pluck(input, values) {
    var output = [];
    for (var i=0; i < input.length ; i++)
        output.push(input[i][values]);
        return output;
    
}
    
//Tests

const dogs = [
    { name: "moe", age: 4},
    { name: "larry", age: 5},
    { name: "curly", age: 6}
];

console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));