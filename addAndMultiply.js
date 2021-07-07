/*a method is a function associated with an object
A function call is a call expression.
A method call is a property expression combined with a call expression.
The method call expression determines the value of 'this'
*/
function addAndMultiply(x){
    let returnObject = {
        "add": function add(y){
            addAndMultiply += x + y;
            return x + y;
        },
        "multiply": function multiply(y){
            addAndMultiply += x * y;
            return x * y;
        }

    };
    return returnObject;
}


//tests
let actual = addAndMultiply(4);
//something dot something means we're using keys inside of an object
let foo = actual.add(3);
let bar = actual.multiply(2);

let expectedFoo = 7;
let expectedBar = 8;

if (foo === expectedFoo && bar === expectedBar){
    console.log("Success!")
} else {
    console.log("Try again!")
}