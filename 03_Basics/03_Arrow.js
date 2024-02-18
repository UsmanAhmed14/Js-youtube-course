const user = {
  //current context yani {scope} ko access krne k liye THIS
  username: "Usman",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
const chai = () => {
  let username = "hitesh";
  console.log(this.username);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2 due to IMPLICIT, no need to write return function
//💡also known as IMPLICIT return, no parenthesis ❌()

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ name: "usman" });

console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];

// myArray.forEach(() => ()) will be discussed in future IA!