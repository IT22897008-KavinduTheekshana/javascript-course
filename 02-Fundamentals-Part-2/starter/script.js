//Srict mode

'use strict'

/*
let hasDriversLicence = false
const passTest = true

if (passTest) hasDriversLicence = true
if (hasDriversLicence) console.log('you can drive')

//const interface = 'Audio';
//const private = 55;


//function

function logger() {
  console.log('My name is Kavindu')
}

logger()
logger()

function frutProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

// const frutJuice  = frutProcessor(5, 2);
// console.log(frutJuice);

console.log(frutProcessor(5, 2));



//function declarations

function calcAge1(birthYear) {
  return 2025 - birthYear
}
const age1 = calcAge1(2000)

//functions expression - this can't be used before the declaration

const calcAge2 = function (birthYear) {
  return 2025 - birthYear
}

const age2 = calcAge2(2000)
console.log(age1, age2)



//Arrow functions

const calcAge3 = birthYear => 2025-birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearUntilRetirement = (birthYear,firstName) =>{
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} is retired in ${retirement} years.`
}

console.log(yearUntilRetirement(2000,'Kavindu'));

*/

//Reviewing function
const calAge = function(birthYear){
    return 2020 - birthYear;
}
const yearUntilRetirement = function (birthYear,firstName) {
    
    const retirement = 65 - calAge(birthYear);

    if(retirement > 0){
        return `${firstName} will retire in ${retirement} years.`;
    }else{
        return `${firstName} is already retired.`;
    }
    
}

console.log(yearUntilRetirement(2000,'Kavindu'));