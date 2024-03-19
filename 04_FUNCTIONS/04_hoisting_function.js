/*Function Declarations: Function declarations are completely hoisted, 
meaning both the function name and its implementation are moved to 
the top of the enclosing scope. This allows you to call the function 
before its actual declaration in the code.*/

greet(); // "Hello, world!"

function greet() {
    console.log("Hello, world!");
}


/*Function Expressions: Function expressions, on the other hand, are not 
hoisted in the same way. Only the variable declaration is hoisted, not 
the function assignment. Therefore, you cannot call a function expression 
before it's assigned.*/

greet(); // TypeError: greet is not a function

var greet = function() {
    console.log("Hello, world!");
};
