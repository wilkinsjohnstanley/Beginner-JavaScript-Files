const cheese ={
    name: "Pepper Jack",
    age: 2,
    isCheese: true,
};

//copy object, but only change one property
const cheese2={...cheese, name:"Gouda"}

console.log(cheese)
console.log(cheese2)
