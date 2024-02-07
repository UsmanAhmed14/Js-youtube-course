let score = "Usman Ahmed";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumer = Number(score);
// console.log(typeof(valueInNumer));
// console.log(valueInNumer);

// "33" => 33 easliy converted into 33.
// "33avc" => NaN not a number
// true => 1.
// false => 0.

let isLoggedIn = "Usman"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*

Boolean converts as following
1 => true; 0 => false
"" => false; "usman" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


//  ************Operations*********


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 +2);
// console.log(2 -2);
// console.log(2 *2);
// console.log(2 **2);
// console.log(2 /2);
// console.log(2 % 2);


let str1 = "hello"
let str2 = " Usman"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log((3 + 5)* 3 % 2);
// console.log(+true);

let gameCounter = 100;
++gameCounter; //prefix ? postfix operator ?
// assignment study prefix/postfix from mdn! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment 

console.log(gameCounter);