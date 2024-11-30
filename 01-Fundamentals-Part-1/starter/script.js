/*
//Basic Operations
let js = 'amazing'
console.log(40 + 8 + 23 - 10)

let firstName = 'John';
console.log(firstName);

console.log(typeof true);
console.log(typeof null);


const now = 2037
const ageKavi = now - 2000;
const ageKasun = now - 1997;
console.log(ageKavi, ageKasun);


//Assignment oprators
let x = 10+5; //15
x += 10; //x = x +10 = 25
x *= 4; //x = x * 4 = 100
x ++ //x = x+1
x -- //x = x-1

console.log(x);


const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / (heightJohn * heightJohn)
console.log('bmiMark = ' + bmiMark + '\n' + 'bmiJohn =' + bmiJohn)

const markHigherBMI = bmiMark > bmiJohn

console.log(markHigherBMI)
*/

// Strings and Template Literals

const firstName = 'kavindu'
const job = 'teacher'
const birthYear = 2000
const year = 2037

const kavindu =
  "I'am " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(kavindu)

const kavinduNew = `I'am ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(kavinduNew)

console.log(
  'String with \n\
    multiple \n\
    lines'
)

console.log(`String with 
    multipal
    lines`)
