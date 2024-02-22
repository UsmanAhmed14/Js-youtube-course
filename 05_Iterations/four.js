const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by app",
};

for (const key in myObject) {
  // console.log(`${key} for shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "Java", "cpp"];

for (const key in programming) {
  // console.log(`${programming[key]} is at ${key}`);
  // console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}
