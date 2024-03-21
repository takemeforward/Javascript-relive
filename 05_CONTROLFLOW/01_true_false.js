// following is some list of falsy falue

// 0, -0, BigInt 0n, "", undefined, NaN, false, null

// following are some truthy values

// 1, any number, [], {} and many more...

// example

if(-5){
    console.log("any number except 0 is truty value")
}

if({}){
    console.log("truthy value")
}
if([]){
    console.log("truthy value")
}
if('v'){
    console.log("truthy value")
}
if(NaN){
    console.log("truthy value")
}else{
    console.log("Falsy value")
}
if(undefined){
    console.log("truthy value")
}else{
    console.log("Falsy value")
}
if(null){
    console.log("truthy value")
}else{
    console.log("Falsy value")
}

if(0n){
    console.log("truthy value")
}else{
    console.log("Falsy value")
}
