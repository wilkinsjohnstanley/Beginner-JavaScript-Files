//Constructors are defined with a capital letter
function Person(name, eyeColor, age){
    //this to point to the object we're inside of
    //name of the property to create inside the object
    //set it equal to a variable called name, a placeholder
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    //can also create methods
    this.updateAge = function(){
        return ++this.age;
    };

}
let person01 = new Person("John", "Hazel", 25);
console.log(person01.name);
//-->John
//use the method
/*
Method - a function that is associated with an object
*/
console.log(person01.updateAge());