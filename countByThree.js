/*
Declare a function 'countByThree'.
'countByThree' takes one number input: 'end'.
'countByThree' returns an array containing numbers from 3 to 'end'
*/

//Your code here
function countByThree(end){
    var output = [];
    for (i = 3; i <= end; i++){
        if(i % 3 == 0)
           output+=i;
        
        
        
    }
    console.log(output);
    return output;
}
//Tests
const actual = countByThree(9);
const expected = [3, 6, 9];
if (JSON.stringify(actual) === JSON.stringify(expected)){
    console.log("Yay!");
} else {
    console.log("Try again");
}