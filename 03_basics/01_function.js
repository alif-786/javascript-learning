// function sayMyName() {
//     console.log("A")
//     console.log("L")
//     console.log("I")
//     console.log("P")
// }

// sayMyName();


function addTwoNumber(num1, num2) {
    // check all the parameters are numbers
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Please provide two numbers")
    } else {
        return num1 + num2;
    }
}

const result = addTwoNumber(5, 5)
console.log(result)

function isLoggedIn(username = "No one") {
    if (!username) {
        console.log("Please Enter the username")
        return
    }
    return console.log(`Hello ${username}`)
}
console.log(isLoggedIn("Alif"))