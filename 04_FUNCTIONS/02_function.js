// This function can take any number of arguments
// here ... will be called rest operator
function totalCartPrice(...price){
    return price
}

console.log(totalCartPrice(12,13,14,15)) //[ 12, 13, 14, 15 ]