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
*/


//CHALLENGE #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores.
 This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them 
(you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), 
and then logs the winner to the console, together with the victory points, according to the rule above. 
Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

*/

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3
}

const scoreDolphins = calcAverage(90, 80, 71)
const scoreKoalas = calcAverage(65, 54, 27)

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(
      2
    )})`
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`
  } else {
    return 'No team wins...'
  }
}
console.log(checkWinner(scoreDolphins, scoreKoalas))
