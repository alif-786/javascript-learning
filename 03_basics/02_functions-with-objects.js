const user = {
    username: "Alif",
    price: 200

}
function getObject(obj) {
    console.log(`Username: ${obj.username} and the price: ${obj.price}`)
}

getObject(user)


// this is also called as the spread operator but it depends on where your are using it 
function getSecondVale(...val1) {
    return val1
}

// let arr = [100, 200, 300, 400, 500, 600]
console.log(getSecondVale(190, 203492, 203920, 30293402, 69048902,))


function getSEcondval(arr) {
    return arr[1]
}
let arr = [100, 200, 300, 400, 500, 600]
console.log(getSEcondval(arr))