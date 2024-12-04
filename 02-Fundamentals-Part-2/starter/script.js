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
/*
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



// Arrays

const friend1 = 'kavindu'
const friend2 = 'Nimal'
const friend3 = 'Saman'

const friends = ['kavindu', 'Nimal', 'Saman']
console.log(friends)

const years = new Array(1999, 2000, 2001, 2004)

console.log(friends[1])
console.log(years.length)

years[2] = 2007

console.log(years)


const calAge = (birthYear) =>{
    return 2020 - birthYear;
}

const ages = [calAge(years[0]), calAge(years[1]),calAge(years[2])]
console.log(ages);




const friends = ['kavindu', 'Nimal', 'Bob'];

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove elements
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Bob'));
console.log(friends.indexOf('John'));

console.log(friends.includes('Nimal'));
console.log(friends.includes('John'));

*/

//CHALLENGE #2
/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300,
 and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above 
(you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.
*/
const calcTip = function (bill){
    return bill > 50 && bill <300? bill*0.15 : bill*0.2;
}

const bills =[125,555,44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];