const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// for(let i = 0; i<companies.length; i++){
//     console.log(companies[i]);
// }

/*forEach
takes in a synchronous call back function
can take in an 'iterator' but can also get an index and the entire array, which is the same for all the other higher order functions
*/

companies.forEach(function(company){
    //doing company dot attribute, gives you that attribute
    console.log(company.name);
});

/*filter
*/

//this is how you do it with a for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
    
// }
// console.log(canDrink);

//this is how you do it with the filter H.O.F.
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });
// console.log(canDrink);


//with an arrow function to make it two lines of code
const canDrink = ages.filter(age => age>=21);
console.log(canDrink);

//filter retail companies, 1st let's see the ES5 version
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });
// console.log(retailCompanies);


//filter retail companes, ES6
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

//Get 80s companies
const eightiesCompanies = companies.filter(company => (company.start>=1980 && company.start<1990));
console.log(eightiesCompanies);

//Get all the companies that lasted at least 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);


/*map*/
//Create array of company names
const companyNames = companies.map(function(company){
    return company.name;
});
//list of the companies with start and end dates formatted so they appear in brackets next to the name!
// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// })
// console.log(testMap);

//arrow function
const testMap = companies.map(company => `${company.name}[${company.start} - ${company.end}]`);
console.log(testMap);

//age example
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);

/*sort*/
//sort companies by start year
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

//sort ages
//a minus b gives you ascending order, b minus a gives you descending order
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

/*reduce*/
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//     return total+age;
// }, 0);

const ageSum = ages.reduce((total, age) => total+age, 0);
console.log(ageSum);

//Get total years for all companies
// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);
const totalYears = companies.reduce((total, company) => total + 
(company.end - company.start), 0);
console.log(totalYears);

//Combine methods
const combined = ages

    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
console.log(combined);