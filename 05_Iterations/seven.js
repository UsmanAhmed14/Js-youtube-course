const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// newNums = myNumbers.map((num) => num + 10);

// 💡Chaining method means, we can apply 2 or 3 methods
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num)=>num>=40)

// .filter((num)=>num >= 40)

console.log(newNums);
