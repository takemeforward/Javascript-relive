// nullish collision operator ??

let num;
num = num??20  // if first value is null or undefined then 2nd will be used
let num2 = NaN;

num2 = num2??10     // nullish collision operator doesn't work on NaN
console.log(num2)

console.log(num)

