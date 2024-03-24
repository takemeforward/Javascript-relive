const {log: print} = console

const myNums = [1,2,3,4,5,6,7,8,9,10]

const myNewNums = myNums
                        .map((num)=> num*10)
                        .map((num)=> num+10)

print(myNewNums)

/*
OUTPUT
[
  20, 30, 40,  50,  60,
  70, 80, 90, 100, 110
]
*/

// map does operation on each elements of array and in the end 
// it returns array to variable myNewNums
// maps will execute from left one to right one in the end.