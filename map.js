//The JavaScript array map() method creates a new array from the results of a function called on each element in another array. And it does not modify the original array.
const people = [
    {
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe'
    }
]
//boring way to do it
const names = [];
for(person of people){
    names.push(`${person.firstName} ${person.lastName}`);
}
console.log(names);

//exciting way to do it with map and arrow function
const names2 = people.map(person => `${person.firstName} ${person.lastName}`);
console.log(names2);