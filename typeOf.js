array = [1, 2, 3, 4, "A", "B", "C", true, false];
let num=0;
    let str=0;
    let boo=0;
for (let i = 0; i<=array.length;i++){
    
    if(typeof array[i] === typeof 0){
        num++;
    }
    if(typeof array[i] === typeof ""){
        str++;
    }
    if(typeof array[i] === typeof true){
        boo++;
    }
}
if(num >= str && num>= boo){
    console.log("NUMBER COUNT:" + num);
} 
if(str >= num && str>= boo){
    console.log("STRING COUNT:" + str);
} 
if(boo >= str && boo>= num){
    console.log("BOOLEAN COUNT:" + boo);
} 