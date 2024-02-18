// var c = 300
let a = 300
if (true) {
    let a = 10;
    const b = 20;
    console.log("inner: ",a);

} // 💡 scope {} k andr hota hy

//  {
//     anything inside curly braces has a local scope, and outside curly braces has a global scope
// } 

console.log(a);
// console.log(b);
// console.log(c);
