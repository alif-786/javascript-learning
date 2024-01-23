const mySym = Symbol("key1")
const user = {
    name: "Alif",
    "full name": "Alif Asmatpasha kamate",
    age: 20,
    isAdmin: true,
    hobbies: ["coding", "reading"],
    email: "Alifkamate@google.com",
    isLoggedIn: true,
    [mySym]: "myKeyIsHere",
    location: "jath"
}

// console.log(user.name)
// console.log(user["name"]) // you can also access the object by array method

console.log(user[mySym]) //this syntax is only for the accessing the symbol

// you can also change the values of the objects like email and name

user.name = "Kunal"
// console.log(user["name"])

// you also freeze the whole object so that it can not be modified

// Object.freeze(user)

// user.name = "Amir";
// console.log(user)

user.greetings = function () {
    console.log("Hello mother fucker")
}
console.log(user.greetings())

user.greetingsWithName = function () {
    console.log(`Hello, ${this.name}`)
}
console.log(user.greetingsWithName())