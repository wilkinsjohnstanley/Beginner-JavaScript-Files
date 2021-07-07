const negativeNumbers = [-1, -2, -3, -4];
//console.log(Math.min(...numbers));

const lastNegative = (values) => {
    let least = 0;
    for (let i=0; i<values.length; i+=1){
        if (values[i] < least){
            least = values[i];
        }
    }
    return least;
}
console.log(lastNegative(negativeNumbers));