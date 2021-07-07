
const people = [
    {
        firstName: "John",
        lastName: "Wilkins"
    },
    {
        firstName: "Jane",
        lastName: "Doe"
    }
];
//normal function
console.log(
    people.map(function(person){
        return person.firstName; //['John', 'Jane']
    })
);

//array function
console.log(people.map(person => person.firstName));
