/*+++++++++++++++++++++++++++++++++++++++++++
hoisting works for all types of variable declarations (var, let, and const),
but the behavior regarding initialization differs. var is initialized with
undefined, while let and const remain uninitialized until their actual
declaration.
*/


// we are going to get an idea of hoisting and scope in this file.

console.log(a) // undefined as its declaration is hoisted but value assigned is not available here.
// console.log(c) // c not defined // limited scope
{
    console.log(a) // here also prefectly works due to hoisting
    // console.log(c) // Cannot access 'c' before initialization
    var a = 10  // it has global scope this a will be accessable and modifiable in anywhere in this file
    
    // b,c will not be availabe to use anywhere in the program other than the curly braces where it is declared and its inner curly braces
    const b = 20
    let c = 40
    {
        console.log(c)
        {
            console.log(b)
        }
    }
}

console.log(a) // prefectly works due to global scope
// console.log(c) // will not work due to limited scope
