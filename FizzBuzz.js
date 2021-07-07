//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
//For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
//print "Buzz" instead.
//When you have that working, modify your program to print "FizzBuzz", 
//for numbers that are divisible by both 3 and 5 
//(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//(This is actually an interview question that has been claimed to weed 
//out a significant percentage of programmer candidates. So if you solved it, 
//you’re now allowed to feel good about yourself.)

for (var n = 1; n<=100; n++){
  //output has to be blank at the beginning of every loop
var output="";  
  if (n % 3 == 0)
    output+= "Fizz";
  
  if (n % 5 == 0)
    output+= "Buzz";
    //why won't this work if n is on the left, and output is on the right?
  console.log(output || n);  
  

  
}
  //So, n is outputed as 1 through 100
  //but the || or logic operator is used
  //so that the output is either the
  //variable output OR the number 
  //in sequence from 1 to 100
  //Fizz & Buzz get added together as FizzBuzz because of the addition to output in the if statements
    
