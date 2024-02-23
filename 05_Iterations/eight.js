// Reduce method

const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function(acc,cv){
//     console.log(`acc: ${acc} and currval: ${cv}`);
//     return acc + cv
// },0)

const myTotal = myNums.reduce((acc, cv) => acc + cv, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS-hindi",
    price: 2999,
  },
  {
    itemName: "PY-hindi",
    price: 999,
  },
  {
    itemName: "mob-dev-course",
    price: 5999,
  },
  {
    itemName: "Data-Science",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => item.price + acc, 0); //array mein se price nikalni hy 🤦
console.log(priceToPay);
