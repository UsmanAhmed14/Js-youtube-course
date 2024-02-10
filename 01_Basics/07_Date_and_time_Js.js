// Dates

let  myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof(myDate));


// let myCreatedDate = new Date(2024, 1, 10) // month starts from 0 in JS
let myCreatedDate = new Date(2024, 1, 10, 5 ,3) // month starts from 0 in JS
console.log(myCreatedDate.toLocaleString());