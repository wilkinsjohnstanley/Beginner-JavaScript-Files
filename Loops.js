/*You should study these things in preparation for the next check-in:

- I wonder if you are overly reliant on the set-up that you have, 
and struggle to debug and write these problems outside of that. 
I do think you should be console.logging more and things like that, 
because otherwise you are working on these problems blind.
- This technical interview is to make sure that people firmly understand the basics. 
I don't care if you use loops or native methods to do the problem - 
more advanced or complex syntax isn't super relevant to me. 
The only thing I am looking for is a clarity of logic. 
That means that if I point to any bit of your code, 
you should be able to tell me exactly what it is, does, or represents - 
and also why it is in the spot it is in and not in some other spot. 
So, for instance, with loops... do all of these loops work? 
Read each of these and guess what will print out. Run each one. 
Did you correctly guess? If not, why is your expectation different from what actually ran? 
For each of these, make sure you are clear on where the result is coming from and why. 
*/
let myArray = [1, 2, 3, 4];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]); // what prints out? 1, 2, 3, 4
// }

// for (let i = 0; i < myArray.length; ++i) {
//   console.log(myArray[i]); // what prints out? 1, 2, 3, 4
// }

// for (let i = myArray.length; i > 0; i--) {
//   console.log(myArray[i]); // what prints out? undefined, 4, 3, 2
// }

// for (let i = myArray.length - 1; i > 0; i--) {
//   console.log(myArray[i]); // what prints out? 4, 3, 2
// }

// i = 0;
// for (; i < myArray.length; ) {
//   console.log(myArray[i]); // what prints out? 1, 2, 3, 4
//   i++;
// }

// for (let item of myArray) {
//   // console.log(item); // what prints out? 1, 2, 3, 4
//   console.log(myArray[item]); // what prints out? 2, 3, 4, undefined
// }

// for (let item in myArray) {
//   console.log(item); // what prints out? 0, 1, 2, 3
// }

// myArray.forEach(item => {
//   console.log(item); // what prints out? 1, 2, 3, 4
// });

// i = 0;
// while (i < myArray.length) {
//   console.log(myArray[i]); // what prints out? 1, 2, 3, 4
//   i++;
// }

// i = 0;
// while (++i < myArray.length) {
//   console.log(myArray[i]); // what prints out? 2, 3, 4
// }

i = 0;
while (i++ < myArray.length) {
  console.log(myArray[i]); // what prints out? 2, 3, 4, undefined
}