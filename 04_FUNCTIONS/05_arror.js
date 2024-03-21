const user = {
    username: "vishal",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website.`)    // we cannot user variables of object without using this keyword{reference error.}
        console.table(this)
    }
}

// user.welcomeMessage()
// user.username = "takemeforward"
// user.welcomeMessage()

// console.log(this);      // global this in node.js envorinment is empty object but in browser it is Windows object

// this of normal function: it has a lot of objects in node

function aFunction(){
    console.log(this)
}
// aFunction()
const fun = function (){
    console.log(this)
}

// fun()

// this of arrow function : it has empty object

const arrow = ()=>{
    console.log(this);
}

// arrow();

// Implecit return arrow function

const addTwoNumbers = (num1,num2)=>  num1+num2  // we don't need to write return keyword in this case.

console.log(addTwoNumbers(10,20));

// return object in implicite return

const getObj = ()=> ({username: "jhakumarvishu"})   // to return object wrape object with parenthesis
console.log(getObj())