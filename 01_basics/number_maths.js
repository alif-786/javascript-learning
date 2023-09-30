let score = 499;
// console.log(score)

const balance = new Number(400)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length) // it give the length of the string

let fixedvalue = 786.779;
console.log(fixedvalue.toFixed(3))

let precision = 145.90;
// console.log(precision.toPrecision(3)) // it give the precision of the number

let hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++++++++++++++++++++++++ MATHS++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.ceil(7.9))
// console.log(Math.floor(4.2))
// console.log(Math.round(12.5))

console.log(Math.random())
console.log(Math.random() * 10 + 1)
console.log(Math.floor(Math.random() * 10 + 1))

let minValue = 10;
let maxValue = 20;
console.log(Math.floor(Math.random() * (maxValue - minValue) + 1) + minValue)