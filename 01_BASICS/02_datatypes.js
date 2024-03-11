"use strict"; // Treats all Js code as newer version
// official documentation of JavaScript is available on https://tc39.es/ecma262/

let userName = "Vishal"
let userAge = 23
let isLoggedIn = true
let email;
let userType = null;


// We use 'typeof' keyword to know type of anyvariable or constants

console.log(typeof userName);   // string
console.log(typeof userAge);    // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof email); // undefined cz typeof undefined is actually undefined and a variable is undefined until it is provided any value explicitly
console.log(typeof userType); // object yes typeof 'null' in javascript is object
