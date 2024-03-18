// Array: Collection of various elements(my be of different types)
const sampleArr = [1,"Vishal",'v',5]
// console.log(sampleArr)

const arr = [0,1,2,3,4,5]
// console.log(arr[1])

// console.log(arr.toString()) // converts array into string elements saperated by comma


//============ Diff b/w slice() and splice()

// console.log(arr.slice(2,4), " sliced array") // prints elements from index 2 to 3
// console.log("A ", arr, " original array after slice")  // Original is still same

// console.log(arr.splice(2,2), " spliced array")  // 2nd argument of splice tells number of elements to be spliced
// console.log("B ", arr, " original array after splice")


//========== Shallow Copy vs Deep copy

// Example 1: Shallow Copy
let originalArr = [1, 11, 111];
let shallowCopy = originalArr.slice();

shallowCopy[1] = 20;

// console.log(shallowCopy);    // [ 1, 20, 111 ]
// console.log(originalArr);    // [ 1, 11, 111 ]
// We noticed that here elements in the original array didn't change

// Example 2: Shallow Copy with Nested Arrays
let originalArr1 = [1, [11], 111];
let shallowCopy1 = originalArr1.slice();

shallowCopy1[1][0] = 20;

// console.log(shallowCopy1);    // [ 1, [ 20 ], 111 ]
// console.log(originalArr1);    // [ 1, [ 20 ], 111 ]
// We noticed this time changes made in the shallow copy actually reflected in the original one

// Explanation:
// Shallow copy creates a new array, but it only copies references to nested arrays or objects, not the nested arrays or objects themselves.
// When you modify a nested array in the shallow copy, it affects the original array because both the shallow copy and the original array share the same references to the nested arrays or objects.
// However, when you modify a non-nested element in the shallow copy, it does not affect the original array because non-nested elements are directly copied by value.

// Example 1: Deep Copy

let originalArr2 = [1,2,[4],6]
let deepCopy = JSON.parse(JSON.stringify(originalArr2))

deepCopy[2][0] = 30
// console.log(originalArr2) //[ 1, 2, [ 4 ], 6 ] original remais same
// console.log(deepCopy) // [ 1, 2, [ 30 ], 6 ] changes reflect in copy only

// Experiment

let myArr = [1,2,3,4,5]
let newArr = myArr
newArr[2] = 20
// console.log(myArr)
// console.log(newArr)

// ================== pushing and removing elements in array =======

let myArray = [2,3,4,5]

console.log(myArray)

myArray.push(7, 7, 9)   // Array.push() is able to push single or multiple elements

console.log(myArray);

myArray.shift() // removes first elements or shifts all lements one place left
console.log(myArray)

myArray.unshift(0,-3)   // inserts number of elements from left of array
console.log(myArray)

console.log(myArray.includes(7))
console.log(myArray.indexOf(7))

//===============================


