// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

// const greetings = "HEllo World"

// for (const greet of greetings) {
//   console.log(`each character is: ${greet}`);
// }

// Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

for (const [key, value] of map) {
  //   console.log(key,':-',value);
}

const myObject = {
  game1: "NFS",
  game2: "SpiderMan",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
