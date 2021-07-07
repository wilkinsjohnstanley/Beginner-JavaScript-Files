/*
Declare a function 'some'.
'some' takes two inputs:
1. an array and
2. a predicate (a function that returns a boolean).
'some' should return 'true' when at least one value in the array passes the predicate
and 'false' if no values pass the predicate.
*/
//Your code here
function some (array, lessThan100){
    let some = array.some(function(num){
        return num < 100
    });
}
//Tests
function lessThan100(x){
    return x > 100;
}
let actual = some([110, 200, 300, 1000, 4, 600], lessThan100);
let expected = true;