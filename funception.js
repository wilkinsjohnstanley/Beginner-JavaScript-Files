//funception is a function inside of a function
function add(x){
    function addTwo(y){
        return x + y;
    }
    
    return addTwo;
}

const addTwo = add(2);
let actual = addTwo(3);
let expected = 5;
if(actual === expected){
    console.log("Yay!");
} else {
    console.log("Try again!");
}