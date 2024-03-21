// Immediately Invoked Function Expression
// This type of cunction is used where we need immediate execution of the function
// as sooon as program execution starts and also we want execution of function
// should not be polluted with the global object
// this type of cunction can be normal named function or arrow annonymys function

(function connection(){
    console.log('DATABASE CONNECTED!')
})();

(()=>{
    console.log('DATABASE CONNECTED!')
})();

// IIFE  functions can take parameters as well

((username)=>{
    console.log(`Hello ${username} database is connected!`)
})("jhakumarvishu");

