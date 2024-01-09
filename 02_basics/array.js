// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['captain america', 'iron man ', 'deadpool', 'thor', 'hawkeye', 'quick silver', 'hulk']

console.log(myArr[0])
console.log(myHeros[1])

myArr.push(7); // add the element to the end of the array
console.log("push:", myArr)
myArr.pop(); // delete the element from the last of the array
console.log("pop:", myArr)

myArr.unshift(12); // add the element to the start of the array
console.log("unshift:", myArr)
myArr.shift(); // remove the element from the start of the array
console.log("shift: ", myArr)


console.log(myArr.includes(12))
console.log(myArr.indexOf(2))

const newArr = myArr.join();
console.log(newArr)

const myNewArr1 = myArr.slice(0, 3);
console.log(myNewArr1); // it cuts the array and does not change the original array
console.log("original: ", myArr)

const myNewArr2 = myArr.splice(1, 3);
console.log(myNewArr2); // it cuts the array and change the original array
console.log("original: ", myArr)

