// Integer number
const num = Number(20);
// console.log(num);
// console.log(typeof num);
// console.log(num.valueOf());
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// number with decimal points

const n = Number(4000.2898)

// console.log(n.toFixed(2)) // two digit after .
// console.log(n.toPrecision(6)) // total number of digits will be 6
// console.log(typeof n.toString())  // convert number to string original number is still unchanged

// Some important Math functions and values

// console.log(Math.PI)
// console.log(Math.LN2)
// console.log(Math.LOG10E)

const newNumber = Number(1000000000000)
// console.log(newNumber.toLocaleString('en-IN'));

const balance = Number(40.84)

// console.log(Math.floor(balance))   // it will simply remove all decimal values rounds to lower
// console.log(Math.ceil(balance))    // rounds to upper value 41
// console.log(Math.round(balance))    // rounds to nearest integer
// console.log(Math.abs(-8))      // gives absolute positive
// console.log(Math.min(12,1,-9,0,0,8383)) // return min among provided
// console.log(Math.max(12,1,-9,0,0,8383)) // returns max among provided

// =========================== Playing with Math.random()

// console.log(Math.random()) // return any numbe from 0 to 1

const randomNumber = Number(Math.random())
// console.log(randomNumber)    // it generates number from [0,1)

// ========== Generate a number  in (min, max) closed domain
const min = 21
const max = 25

const aNumber = Math.floor(((Math.random() *(max-min))) + min)
console.log(aNumber)




