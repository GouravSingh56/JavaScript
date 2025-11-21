// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


/* JavaScript is a dynamically typed language
We don't need to specify data types while declaring a variable   
Data types are automatically determined during program execution */

const score = 100
const scoreValue = "100.3"

const isLoggedIn = false
const outsideTemp = null  // null means empty value
let userEmail;

console.log(typeof score); // number
console.log(typeof scoreValue); // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object (bug in js)
console.log(typeof userEmail); // undefined    


const id = Symbol("12345")  // unique value
const anotherId = Symbol("12345") // unique value
console.log(id === anotherId); // false
// BigInt
const bigNumber = 1234567890123456789012345678901234567890n
console.log(typeof bigNumber);


// Non-Primitive  or Reference Data Types  
// Object   
//  Object : Array, Functions, Dates etc.

let person = {
    name: "Gourav Singh",
    age: 24
}
console.log(typeof person); // object

const hero = ["Superman", "Spiderman", "Ironman"]
console.log(typeof hero); // object 

const myFunc = function() {
    console.log("Hello World");
}
console.log(typeof myFunc); // object function

//*****************************************************

// Stack (Primitive), Heap Memory (Non-Primitive)

// Primitive data types are stored in stack memory
// Non-Primitive data types are stored in heap memory and reference is stored in stack memory 

let num1 = 5  // stored in stack
let num2 = num1  // copy of num1 is stored in num2  
console.log("num1 :", num1); // 5
console.log("num2 :", num2); // 5

let myYoutubename = "codewithgourav"
let anotherName = myYoutubename

anotherName = "codewithharry"
console.log("myYoutubename :", myYoutubename);
console.log("anotherName :", anotherName);
// both are independent


let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne  // both userOne and userTwo point to same object in heap memory

userTwo.email = "gourav@google.com"

console.log(userOne.email);
console.log(userTwo.email);
// both are dependent
