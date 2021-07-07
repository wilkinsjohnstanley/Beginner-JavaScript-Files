var cars = [
    {
        make: "honda",
        model: "civic",
        year: 2014,
        color: "blue"
    },
    {
        make: "toyota",
        model: "camry",
        year: 2000,
        color: "blue"
    },
    {
        make: "ford",
        model: "mustang",
        year: 2005,
        color: "black"
    }
]
//console.log(cars[0].make);
for (i = 0; i < cars.length; i++){
    if(cars[i].year < 2010){
        document.write(cars[i].make + ", " + cars[i].model + " ");
    }
}