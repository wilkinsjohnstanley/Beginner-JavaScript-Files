/* the setTimeout method calls a function after
a specified number of milliseconds. Additional properties may be called
setTimeout(function, milliseconds, param1, param2, ...)
*/
setTimeout(() => {
    console.log("Hello");
}, 3000);

//returns after 3 seoncds: Hello
//It can also be written like this:
function greeting(){
    console.log("Hello");
}
//returns after 3 seconds: Hello

//We can also pass parameters to the function like this:
setTimeout(greeting, 3000, "Hi");
function greeting(x){
    console.log(x);
}
//returns after 3 seconds: Hi

//We can also choose to cancell the setTimeout before it is called based on a condition

const timeout = setTimeout(greeting, 300, "Hi");
if(true){
    clearTimeout(timeout);
}
function greeting(x){
    console.log(x);
}

//the setInterval will run continually until it is cleared or the window is closed
//setInterval(function, milliseconds, param1, param2, ...)
let counter = 0;
setInterval(count, 1000);
function count(){
    console.log(counter++);

    if (counter > 365){
        clearInterval(countInterval);
    }
}
//returns counter every second, 0, 1, 2, 3, 4, 5...