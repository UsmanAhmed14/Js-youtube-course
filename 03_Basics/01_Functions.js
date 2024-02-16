function sayMyName() {
  console.log("U");
  console.log("S");
  console.log("M");
  console.log("A");
  console.log("N");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
}

// sayMyName this is REFERENCE of function () and this is execution

// sayMyName()
// sayMyName()
// sayMyName()
// sayMyName()
// sayMyName()

// (number1, number2) <= this is known as an argument!

// function addTwoNumbers (number1, number2) {
//   // 💡Inputs in functions are known as Parameters
//   console.log(number1 + number2); //The values which are passed onto the function when called is known as Arguments 💡
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;

  console.log("USMAN"); // 💡result k bd kch bi print ni hota h
}

const result = addTwoNumbers(5, 3);

// console.log("Result: ", result);

function userLoginMessage(username = "sam") {
  //💡can give default placeholder value like this
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(userLoginMessage("Usman"))
console.log(userLoginMessage("Usman"))