

// Defining Ojbects

const mySymb = Symbol("key1")
const newUser = {
    name: "Vishal",
    "full name": "Vishal Jha",
    [mySymb]: "valuekey1",
    email: "jhakumar@gmail.com",
    age: 24,
    location: "Patna",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday", "Saturday", "Sunday"],
}
// objects in javascript is in the form of key: value pair
// key is treated as "key": value internally

// there are two ways to access the elements

// Method1
// console.log(newUser.name)
// console.log(newUser.isLoggedIn)
// console.log(newUser.lastLoginDays[2])
// console.log(newUser["full name"])

// Method2

// console.log(newUser["name"])
// console.log(newUser["isLoggedIn"])
// console.log(newUser["lastLoginDays"][2])

//============== Freezing objects ===========


newUser["age"] = 34 // Value is alterable even if object is of const type

// console.log(newUser["age"])

// to prevent objects from going through any unwanted change we need to freeze() it

// Object.freeze(newUser)

newUser.age = 24
// console.log(newUser.age)    // still old value is printed 

// console.log(newUser)

//================ adding function to object ============

newUser.greeting = function(){
    console.log(`Hello, ${this["full name"]}`)
    return 0;
}

// console.log(newUser.greeting())

// we can add more key values the way we added new function to existing object

//======================= How to merge two objects ==============

const source1 = {
    1: "a",
    2: "b",
    3: "c",
}
const source2 = {
    4: "a",
    2: "b",
    3: "e",
}

const mergedObj = Object.assign({}, source1, source2)

// console.log(mergedObj)  // { '1': 'a', '2': 'b', '3': 'e', '4': 'a' }
// when keys are same in tow source object then it takes key and value of 2nd object and ignores obj1

// other way is to use spread opertor
const mergedObject = {...source1, ...source2}

// console.log(mergedObject)

// some extra properties of Object

// console.log(Object.keys(newUser))   // Returns array of keys
// console.log(Object.values(newUser)) // Returns array of values
// console.log(Object.entries(newUser))
/*
[
  [ 'name', 'Vishal' ],
  [ 'full name', 'Vishal Jha' ],
  [ 'email', 'jhakumar@gmail.com' ],
  [ 'age', 24 ],
  [ 'location', 'Patna' ],
  [ 'isLoggedIn', false ],
  [ 'lastLoginDays', [ 'Monday', 'Tuesday', 'Saturday', 'Sunday' ] ],
  [ 'greeting', [Function (anonymous)] ]
]
*/

// check if a property is there in the object

console.log(newUser.hasOwnProperty('name'))