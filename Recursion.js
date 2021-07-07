// Your code here.
function isEven(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven(-n);
    else
      return isEven(n - 2);
  }
  

//tests
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven1(-1));
console.log(isEven(-1))
// → ?? 
// create an additional if statement for negative numbers, and multiply them by -1 
//so they are converted into positive version of themselves, then they continue with the normal processing