// console.log("hello world")

// Stack(Primitive Datatypes), Headp(Non Primitive Datatypes)


// stack : it give the copy of values so that values cant be modified/ changed
let name = "alif ";
let name2 = name;
name2 = " Kunal "
console.log(name)
console.log(name2)


// Heap : it give the reference so the value can be easily changed

let user = {
    email: "user@gmail.com",
    upi: "user@ybl"

}

let user2 = user;
user2.email = "youtube@gmail.com";

console.log(user.email);
console.log(user2.email);