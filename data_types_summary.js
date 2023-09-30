// primitive data types
// number, null, string, symbol, Boolean, BigInt,undefined

let score = 101
let amit = null
let F_name = "alif";
let specialSymbol = Symbol("123")
let isLoggedIn = false;
let BigNumber = 1929039540293750293820950209375029305021957203957203950120n

// console.table([score, isLoggedIn, BigNumber, isLoggedIn, F_name, specialSymbol])
// console.table(typeof ([score, isLoggedIn, BigNumber, score, F_name, specialSymbol]));
let anotherSymbol = Symbol("123")
console.log(specialSymbol);
console.log(anotherSymbol)
console.log(specialSymbol === anotherSymbol);


// non primitive datatypes
// Array ,function, Objects

let heros = ["iron man", "Captain america", "black widow", "vision", "thor", "rocket", "Hulk", "ant man ", "Deadpool"]
let myfunction = function () {
    console.log("hello there")

}

let myObj = {
    name: "Alif",
    age: 21,
    PhoneNumber: 7387705851,
    email: "alif@gmail.com",
    address: "at post dhawadwadi tal jath dist sangli"

}
console.log(typeof heros)
console.log(typeof myfunction)
console.log(typeof myObj)