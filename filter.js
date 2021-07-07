/*
The JavaScript filter() method creates an array filled with all array elements of another array 
that pass a test, provided as a function. Filter() does not execute the function for array elements 
without values, and it does not change the original array.

The filter() method accepts a function callback and that function has access to the current element, 
index, and the entire original array.

A common use case would be filtering objects. 
If we have an app or website we would want to provide a way for the user to filter items. 
*/
const movies = [
    { title: 'Star Wars: Episode IV - A New Hope',
    year: 1977},
    { title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980},
    { title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983},
    { title: 'Star Wars: Episode I - The Phantom Menace',
    year: 1999},
    { title: 'Star Wars: Episode II - Attack of the Clones',
    year: 2002},
    { title: 'Star Wars: Episode III - Revenge of the Sith',
    year: 2005},
    { title: 'Star Wars: Episode VII - The Force Awakens',
    year: 2015},
    { title: 'Star Wars: Episode VIII - The Last Jedi',
    year: 2017},
    { title: 'Star Wars: Episode IX - The Rise of Skywalker',
    year: 2019}
];
let filteredMovies = movies.filter(el => el.year <= 1995);
console.log(filteredMovies); //Episodes IV, V, VI



let numbers = [4, 7, 11, 8, 12, 9];
let filtered = numbers.filter(function(value){
    return value % 2 === 0;
});
console.log(filtered); //[4, 8, 12]

let filteredArroyFunction = numbers.filter(value => value % 2 === 0);
console.log(filteredArroyFunction);




arr = ["chicken", "robot", "kitten", "puppy"];
newArr = [];
//let newArray = arr.filter(function(element, index, array));
