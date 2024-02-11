let a = 10 
var b = 11
const c = "Alif kamate"

if (true) {
    let  a = 100
    var b = 100
    const c = "Alif"
    console.log(`INNER : a = ${a}, b = ${b}, c = ${c}`)
    //this values are scope values those presence is in if block if they go out side they are nothing 
}

// console log all the variables which are declared above 
// console.log(`OUTER : ${a}, ${b}, ${c}`)

// nested functions  
function one() {
    const username = "Alif kamate"

    function two() {
        const website = " youtube"
        console.log(username)
    }
    // console.log(website)
    two();
}

// one();

// ++++++++++++++++ interesting +++++++++++++++

console.log(addOne(6))
function addOne(num) {
    return num + 1;
}

// addTwo(6) // we can not do like this 
const addTwo = function (num) { 
    return num + 2;
}