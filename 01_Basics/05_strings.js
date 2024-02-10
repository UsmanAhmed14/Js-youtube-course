const name = "usman"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //also known as string interpolation 🤓

// new keyword use karte hain tou objects❗️ use krte hain JS k 
const gameName = new String('hitesh-hc-com-chodary-youtuber')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4) // ❗️ending index not included. 
console.log(newString);

const anotherString = gameName.slice(-8, 4) 
console.log(anotherString);

// trim method for string 🖥️

const newStringOne = "    hitesh    hc"
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace method in JS

const url = "https://usman.com/usman%20ahmed"

console.log(url.replace('%20','-'))

console.log(url.includes('usman'));
console.log(url.includes('sunday'));

console.log(gameName.split('-'));







