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
let myCreatedDate = new Date("2023-01-14") // month starts from 0 in JS
// console.log(myCreatedDate.toLocaleString());

// TIMESTAMPS

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor((Date.now()/1000)));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay() + 1);


newDate.toLocaleString('default', {
    // weekday: "long",
    dateStyle: "short"
})
console.log(newDate);
