let date = new Date();
// console.log(date.toString())
// console.log(date.toLocaleDateString())
// console.log(date.toISOString())
// console.log(date.toLocaleString())
// console.log(date.toJSON())

// date inputs

// let myCreatedDate = new Date("01-24-2004");
let myCreatedDate = new Date(2004, 1, 24, 8, 15);
console.log(myCreatedDate.toLocaleString())

// create a new date and also console it

let myTimeStamp = Date.now();

console.log(myTimeStamp)
console.log(myCreatedDate.getTime() / 1000)

// creativity with the localstring 
console.log(date.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata',
    hour: "2-digit",
    minute: "2-digit",
}))


