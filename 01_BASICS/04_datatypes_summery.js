// There are two types of data types in JS on the basic of how it is stored and accessed from memory

// Primitive 

// 7 Types: string, number, null, undefined, boolean, symbol and BigInt

// Reference Types

// array, objects, functions

// Note:- JavaScript is a dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 564886565546665454566655555n
console.log(typeof bigNumber);

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Vishal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello Vishal!");
}

myFunction();
console.log(typeof myFunction)
console.log(typeof id)
