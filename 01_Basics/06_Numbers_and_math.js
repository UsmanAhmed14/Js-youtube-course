
const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.866
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// Maths

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.2)); //lowest value lega.
// console.log(Math.floor(4.2)); //highest value lega.
// console.log(Math.sqrt(25)); //highest value lega.
// console.log(Math.pow(8,2)); //highest value lega.

// Random

// const diceThrow1 =Math.random() // hamesha 0 aur 1 k beech ki value ayegi.
// console.log(diceThrow1);
// const multiple = (diceThrow1 * 10) + 1
// console.log(multiple);


console.log(Math.random());
console.log((Math.random()*10)) + 1;
console.log(Math.floor(Math.random()*10)) + 1;


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)