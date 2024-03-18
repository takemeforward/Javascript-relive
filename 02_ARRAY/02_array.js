const marvel_heros = ["IronMan", "Captain America", "Thor", "SpiderMan"]
const dc_heros = ["SuperMan", "BatMan", "Flash"]
const IN_heros = ["Shaktiman", "Krish", "random"]

// marvel_heros.push(dc_heros) // here dc_heros will become 5th element of array marvel_heros which itself will be an array
// console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros, IN_heros)     // correct way to concatinate two array
// console.log(all_heros)

// More better way to concatinate two or more array is 
// By using spliting operator '...'
// its like giving elements of array saperately
const all_heros_here = [...marvel_heros, ...dc_heros, ...IN_heros]
// console.log(all_heros_here)

// ============================== Some useful methods =========

const uneven_arr = [1,2,3,[4,5,6], [7,8,[4,6,[8,9]]]]

const usable_arr = uneven_arr.flat(3)   // flat(Infinity) when don't know the depth
// console.log(usable_arr)

console.log(Array.isArray("Vishal"))    // check if given value is an array
console.log(Array.from("vishal"))   // convert given value into array [ 'v', 'i', 's', 'h', 'a', 'l' ]
console.log(Array.from({myName: "Vishal"})) // when it can't convert to array returns [] empty array

// convert values to array

const a = 10, b = 20, c = 30
const numArr = Array.of(a,b,c)
console.log(numArr)    // [ 10, 20, 30 ]

