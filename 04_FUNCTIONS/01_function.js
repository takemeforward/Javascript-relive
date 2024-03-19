const {log} = console
function addTwoNumber(num1, num2){
    return num1+num2
}

const result = addTwoNumber(1,2)
log(result)

function loginMessage(username = ""){
    if(!username){
        log("Please Enter a username")
        return ""
    }
    return `${username} just LoggedIn.`
}

log(loginMessage())

