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

//CHALLENGE #1

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / (heightJohn * heightJohn)
console.log('bmiMark = ' + bmiMark + '\n' + 'bmiJohn =' + bmiJohn)

const markHigherBMI = bmiMark > bmiJohn

console.log(markHigherBMI)


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



//taking dissition if/else statements

const age = 15;
// const isOldEnough = age >= 18;

if(age >= 18 ){
    console.log('You can drive 🚗');
}else{
    console.log(`You are not old enough to drive ��. Please wait for another
    ${18-age} years`);
}


//CHALLENGE #2

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / (heightJohn * heightJohn)
console.log('bmiMark = ' + bmiMark + '\n' + 'bmiJohn =' + bmiJohn)

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI(${bmiMark}) is higher than John's (${bmiJohn})`)
} else {
  console.log(`John's BMI(${bmiJohn}) is higher than Mark's (${bmiMark})`)
}


// Type conversion and Coercion

const inputYear = '1993'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

//console.log(Number('kavindu') - output is NaN
console.log(String(23), 23)

//Type  Coercion

console.log('I am' + 23 + ' years old')
console.log('23' - '10' - 3)



//Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kavindu'));
console.log(Boolean({}));
console.log(Boolean(0));

const money = 0;
if(money){
    console.log('You have money!');
}else{
    console.log('You do not have money!');
}


// Equal operators == vs === 

const age = '18'
if(age == 18) console.log('you just became a adult(loose)');

if(age === 18) console.log('you just became a adult (strict)');


const favourite = Number(prompt("what is your favourite number : "));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log('cool! 23 is an amazing number!');
} else if(favourite === 7){
    console.log('7 is also a cool number');
}else{
    console.log('Number is not 23 or 7');
}

if(favourite !== 23) console.log('Why not 23?');



//Logical Operators

const hasDriversLicence = true; //A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicence && hasGoodVision); // true
console.log(hasDriversLicence || hasGoodVision); // true
console.log(!hasDriversLicence); // false

if (hasDriversLicence && hasGoodVision && !isTired){
    console.log('You are eligible to drive!');
}else{
    console.log('You are not eligible to drive...');
}


//CHALLENGE #3

const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy 🏆')
} else if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆')
} else {
  console.log('Koalas win the trophy 😁')
}


// Switch Statement

const day = 'Thursday'

switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('It is a weekday')
    break
  case 'Saturday':
  case 'Sunday':
    console.log('It is a weekend')
    break
  default:
    console.log('Invalid day')
}

if (day === 'Monday'|| day === 'Tuesday' || 
    day ==='Wednesday' || day === 'Thursday' || day === 'Friday'){
    console.log('It is a weekday')
}else{
    console.log('It is a weekend')
}

*/
// the Conditional(Ternary) Operator

const age = 23
// age >= 18? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 🥛');

const drink = age >= 18 ? 'wine 🍷' : 'water 🥛'
console.log(drink)

let drink2
if (age >= 18) {
  drink2 = 'wine 🍷'
} else {
  drink2 = 'water 🥛'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥛'}`)