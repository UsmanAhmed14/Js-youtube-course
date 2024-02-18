// var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
//   console.log("inner: ", a);
} // 💡 scope {} k andr hota hy

//  {
//     anything inside curly braces has a local scope, and outside curly braces has a global scope
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "usman";

  function two() {
    // Closure is (andar ka function bahar waale function k variables ko access kr pata h)
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two(); //💡CLOSURES In Nested functions ➡️ child functions can access Parent function ❗️
}

// one();

if (true) {
  const username = "Usman";
  if (username === "Usman") {
    const website = " Youtube";
    // console.log(username + website);
  }
  //   console.log(websie);
}

// console.log(username)

//+++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}


// 💡Another technique for declaring functions 👇️

addTwo(5)
const addTwo = function(num) { // 👈️ This variable holds a function as  value and sometimes is known as EXPRESSIONS.

    return num + 2
}

// 💡second syntax mein function declare karraha hn k use pehle access karraha hn, uske DECLARATION se pehle.