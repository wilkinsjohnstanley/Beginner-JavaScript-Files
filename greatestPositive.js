
const numbers = [1, 2, 3];
//console.log(Math.max(...numbers));

const greatestPositive = (values) => {
    let greatest = 0;
    for (let i=0; i<values.length; i+=1){
        if (values[i] > greatest){
            greatest = values[i];
        }
    }
    return greatest;
}
console.log(greatestPositive(numbers));