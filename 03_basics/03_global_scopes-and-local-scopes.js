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
console.log(`OUTER : ${a}, ${b}, ${c}`)