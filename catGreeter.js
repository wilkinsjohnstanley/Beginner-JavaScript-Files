function catGreeter(){
    console.log("Hello, cat");
    console.log("Meooowwwww!");
}
catGreeter();

function specialGreeter(name){
    console.log("Hey " + name + "!")
}
specialGreeter("Hodor");

function adder(a, b, c, d){
    console.log (a+b+c+d);
}
adder(2, 2, 2, 2);

function printerArray(arr){
    for (var i=0; i<arr.length; i++)
    console.log(arr[i]);
}
printerArray(["cat", "kangaroo", "spider", "raccoon", "Joe"]);

function add(num1, num2){
    return num1 + num2;
}
console.log(add(2, 4));