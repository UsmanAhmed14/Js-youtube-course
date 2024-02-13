// console.log("Hello World ! ");

// singleton
// Object.create also known as, through constructor method
// Object literals

const mySym = Symbol("key1")

const JSuser = {
  name: "usman",
  "Full Name": "M. Usman Ahmed",
  [mySym]:"mykey1",
  age: 25,
  location: "karachi",
  email: "usman@google.com",
  isLoggedIn: false,
  LastLoginDays:["Monday","Saturday","Sunday"]
};

// Accessing objects JSuser.

console.log(JSuser.email)
console.log(JSuser["email"])
console.log(JSuser["Full Name"])
console.log(typeof JSuser[mySym])