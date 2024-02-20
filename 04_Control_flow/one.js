// if statement

const isLoggedIn = true;
const temprature = 41;

// if (temprature === 40) {
//   console.log("Less than 50");
// } else {
//   console.log("Temprature is greater than 50");
// }

// <, >, <=, >=, ==(single ' = ' means ASSIGNMENT) when we use double ' = ' we check the equality, !=(not equal to), ===(checks datatypes as well that's why is called strict equal)

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);

const balance = "1000";

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than");
// } else if (balance < 900) {
//   console.log("less than");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==3) {
  console.log("Allowed to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User Logged In !");
}
