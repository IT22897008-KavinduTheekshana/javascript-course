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

*/

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
