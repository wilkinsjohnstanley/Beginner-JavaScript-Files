
/*
Define a function called 'uniqChars'.

'uniqChars' should take in a string.

It should return a string with any duplicated characters removed. 
(It should keep only the first instance of each character.)

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

// Your code here
function uniqChars(str){
  var output =[];
  var tempArr = str.split("");
  for (let i = 0; i<tempArr.length; i++){
  
    output+=tempArr[i];
    for (let j = 0; j<output.length;j++){
      if (output[j] === tempArr[i]){
        tempArr = output[j].pop();
      }
    }
   
   
  }
  console.log(output);
  return output;
}





// function uniqChars(string) {
//   return string
//     .split('')
//     .filter(function(item, pos, self) {
//       return self.indexOf(item) == pos;
//     })
//     .join('');
// }
// console.log(uniqChars('baraban'));



  

// Tests
// You should not need to change the tests

let actual = uniqChars("aaaabbbcc");
let expected = "abc";

if (actual === expected) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}

actual = uniqChars("AaEeIiOoUu");
expected = "AaEeIiOoUu";

if (actual === expected) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}

actual = uniqChars("t a c o c a t");
expected = "t aco";

if (actual === expected) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}