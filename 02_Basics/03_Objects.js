// console.log("Hello World ! ");

// singleton
// Object.create also known as, through constructor method
// Object literals

const mySym = Symbol("key1");

const JSuser = {
  name: "usman",
  "Full Name": "M. Usman Ahmed",
  [mySym]: "mykey1",
  age: 25,
  location: "karachi",
  email: "usman@google.com",
  isLoggedIn: false,
  LastLoginDays: ["Monday", "Saturday", "Sunday"],
};

// Accessing objects JSuser.

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["Full Name"]);
// console.log(typeof JSuser[mySym]);

JSuser.email = "usman@chatgpt.com"; //equal '=' se values ko overwrite krsakte hain

//Object.freeze(JSuser); //changes can be locked via this command
JSuser.email = "usman@microsoft.com";

// console.log(JSuser);

JSuser.Greetings = function () {
  console.log("Hello JS user ! ");
};


JSuser.Greetings2 = function () {
  console.log(`Hello JS user ${this.name} !`);
};

console.log(JSuser.Greetings());
console.log(JSuser.Greetings2());
