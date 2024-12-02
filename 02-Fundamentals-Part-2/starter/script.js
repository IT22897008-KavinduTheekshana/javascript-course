//Srict mode

'use strict'

/*
let hasDriversLicence = false
const passTest = true

if (passTest) hasDriversLicence = true
if (hasDriversLicence) console.log('you can drive')

//const interface = 'Audio';
//const private = 55;
*/

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


