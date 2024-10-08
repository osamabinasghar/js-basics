// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score:number = 100 TypeScript

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsiteTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non-Primitve)

// Array, Objects, Functions

const heros = ["Batman", "Superman", "Spiderman"]
let myObj = {
    name: "Osama",
    age: 32,
}

const myFunction = function() {
    // console.log("Hello World!");    
}

// console.log(typeof outsiteTemp);

// ****************************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Osama"

let anotherName = myName
anotherName = "Osamaa"

console.log(myName);
console.log(anotherName);

let userOne = {
    email:"Obinasghar@yahoo.com",
    id: 123
}

let userTwo = userOne

userTwo.email = "Osamabinasghar91@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);