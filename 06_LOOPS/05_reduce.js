const myArr = [1,3,5,7,9]

// const sumUp = myArr.reduce((accumulator, currentValue)=>{
//     console.log(`Accumulator ${accumulator} and current value is ${currentValue}`)
//     return accumulator + currentValue
// }, 0)
// short hand way to write above function.
const sumUp = myArr.reduce((accumulator, currentValue) => (accumulator + currentValue), 0)

console.log(sumUp)

/*
Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, and 
is provided as an argument in the next call to the callback function.
*/

const shopingCart = [
    {
        courseTitle: "Js course",
        price: 999
    },
    {
        courseTitle: "React course",
        price: 1999
    },
    {
        courseTitle: "DevOps course",
        price: 3999
    }
]

const totalCartValue = shopingCart.reduce((acc, item) => ( acc + item.price), 0)
console.log(totalCartValue)