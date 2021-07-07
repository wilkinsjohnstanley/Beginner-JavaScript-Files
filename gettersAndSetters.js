const person = {
    firstName: 'John',
    lastName: 'Wilkins',
    get fullName(){
        return `${person.firstName} ${person.lastName}` 
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
    
    
};
//getters => access properties
console.log(person.fullName);
//setters => change properties
person.fullName = 'John Wilkins';
console.log(person); 
//console.log(person.firstName + ' ' + person.lastName);
//console.log(`${person.firstName} ${person.lastName}`);