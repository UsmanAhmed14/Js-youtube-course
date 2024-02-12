// Array
// @lang:javascript formatter
const myArr = [0, 1, 2, 3, 4, 5];
const heroes = ["Captain-America", "Soldier=Boy", "Miyamoto Musashi"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

// Array methods

// myArr.push(6); //simply adds an element into the array
// myArr.push(7); //simply adds an element into the array
// myArr.pop(); //last value ko remove krdega

// myArr.unshift(9); // inserts element in the beginning of the array.
// myArr.shift(); // removes the first element

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// splice, slice

console.log("A ", myArr);

const myNewArray1 = myArr.slice(1, 3);

console.log(myNewArray1);
console.log("B ", myArr);

const myNewArray2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myNewArray2);
