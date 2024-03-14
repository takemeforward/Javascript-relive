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

// console.log(id===anotherId)

const bigNumber = 564886565546665454566655555n
// console.log(typeof bigNumber);

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Vishal",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello Vishal!");
}

myFunction();
// console.log(typeof myFunction)
// console.log(typeof id)

// =============================================================================+

// Memory Types of JS

// 1.) Stack memory (All Primitive Types uses Stack memory)
// When any changes is made in copy of this type the original will not be changed

let sayMyName = "Vishal"
let youAlsoSayMyName = sayMyName

youAlsoSayMyName = "Rohit"

console.log(sayMyName)  // Vishal (Original value did not changed)
console.log(youAlsoSayMyName) // Rohit (Copy of got changed)


// 2.) Heap memory (All non-primitive Types uses Heap memory)
// When a variable of this type is created data are stored in Heap memory and its reference is stored in variable so when we make a copy there also reference of same heap memory is copied so changes in anyone will lead to change on other.

let user = {
    email: "jhakumarvishu@gmail.com",
    upi: "user@ybl",
}

let newUser = user;

newUser.email = "kyonchahiye@gmail.com"

console.log(user.email)
console.log(newUser.email);

/*
now new object is 

{
    email: "kyonchahiye@gmail.com",
    upi: "user@ybl",
}
*/