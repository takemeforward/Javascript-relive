// for of loop
const elements = ["Vishal", "Shivam", "Nitesh", "Raushan", "Rohit"]
// for (const e of elements) {
//     // console.log(e)
// }
// for of loop return iterator which holds direct value of its object

const map = new Map()
map.set('fName','Vishal')
map.set('lName','Jha')
map.set('age', 24)
map.set('age', 24)  // this value will be ignored as map don't hold duplicate values.

// console.table(map) 
// for (const key of map) {
//     console.log(key[0], " :- ", key[1])
// }
// for (const [key,value] of map) {
//     console.log(key, " :- ", value)
// }

const myObject = {
    "IN": "INDIA",
    "USA": "UNITED STATES OF AMERICA",
    "PLC": "PEOPLES REPUBLIC OF CHINA",
    "IAF": "INDIAN AIR FORCE",
}
// Note: Objects can't be iterated using forof loop it is iterated using for in
for (const it in myObject) {
    console.log(`The full for of ${it} is ${myObject[it]}`)
}

/* OUTPUT
The full for of IN is INDIA
The full for of USA is UNITED STATES OF AMERICA
The full for of PLC is PEOPLES REPUBLIC OF CHINA
The full for of IAF is INDIAN AIR FORCE
*/