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

// console.log(userLoginMessage("Usman"))

// function calculateCartPrice (...num1){// 💡 jese shopping cart k andar pata ni hota kitne item aaengy islye rest operator use krge
//   return num1
// }

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 400, 5000));
// 🔍️ only last two values were printed, because first and second went to val1 and val2 and rest were gone to rest...

const user = {
  username: "Usman",
  price: 99,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "Sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));
