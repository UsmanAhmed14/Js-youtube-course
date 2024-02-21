// for

for (let i = 1; i <= 10; i++) {
  const element = i;
//   console.log(element);
  if (element == 5) {
    // console.log("5 is best number");
  }
} // everything inside{} has a block scope

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer Loop Value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop Value: ${j} and outer loop ${i} `);
    // console.log(i + '*' + j + '= ' + i*j)
  }
}

let myArray = ["Flash", "Batman", "Superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
//   console.log(element);
}

// Break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break // 💡 doesnot allow, breaks out of scope
//     }
//     console.log(`Value of i is ${index}`)    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // allows one time 
    }
    console.log(`Value of i is ${index}`)    
}