const coding = ["js", "ruby", "java", "python", "Cpp"];

// coding.forEach(function (item) {
//   // 💡call back hy isliye function mein name add ni kiya
//   console.log(item);
// });

// coding.forEach( (item) => {
//     console.log(item)
// } )

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe); //giving just function reference here 💡

// coding.forEach((item, index, array) => {
//     console.log(item, index, array );
// });

const myCoding = [
  {
    languagename: "javascript",
    languagefilename: "js",
  },
  {
    languagename: "java",
    languagefilename: "java",
  },
  {
    languagename: "python",
    languagefilename: "py",
  },
];

myCoding.forEach((item) => {
    console.log(item.languagename);
});
