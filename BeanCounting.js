// Your code here.
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


//tests  
  function countBs(string) {
    return countChar(string, "B");
  }
console.log(countBs("Big Bad Breakfast Before Bedtime"));

console.log(countChar("always another alphabetical ambrosia alliance", 'a'));
