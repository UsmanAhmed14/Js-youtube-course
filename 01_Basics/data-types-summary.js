// primitive data types

// 7 Types: string, Number, Boolean, Null, Undefined(variable declare krdiya hy lekin y decide ni kiya h, value kia daalenge abhi), Symbol, BigInt

const score = 100;
const scoreValue = 100.33;

const isLoggedIn = true
const outsideTemp = null

let userEmail; // value undefined hogi, bd mein value assign ki jasakti h.

const id = Symbol('123')
const AnotherId = Symbol('123')

console.log(id === AnotherId);

const bigNumber = 3243525235n



// Reference Type(Non Primitive)

// Arrays, Objects, Function

const heroes = ["Home Lander", "Soldier Boy", "SuperMan"] //Array

let myObj = {
    fullName : "M. Usman Ahmed",
    age:25, 
    } // Object, has key value pairs

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);