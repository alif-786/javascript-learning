const tinder = new Object();
tinder.name = "Tinder";
tinder.age = 20;
tinder.location = "New York";
tinder.isLoggedIn = true;
tinder.isOnline = false;
tinder.isBusy = true;

// console.log(tinder)

const somePlatform = {
    Appname: "Instagram",
    isLoggedIn: true,
    isOnline: true,
    isBusy: false,
    age: 20,
    location: "New York",
    user: {
        fullName: {
            Fname: "Alif",
            Lname: "kamate",
        },
        username: "alifkamate",
    }
}

// console.log(somePlatform.user.fullName.Fname)


const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "c", 4: " D" }
const obj3 = { 5: "e", 6: " F" }

const obj4 = Object.assign({}, obj1, obj2, obj3);

// console.log(obj4)


console.log(tinder)
let keys = Object.keys(tinder);
let values = Object.values(tinder);
let entries = Object.entries(tinder);

console.log(`keys = ${keys},\n values = ${values},\n entries = ${entries}`);

console.log(tinder.hasOwnProperty('isLoggedIn'))
