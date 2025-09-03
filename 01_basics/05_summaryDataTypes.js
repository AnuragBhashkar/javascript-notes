/*
JavaScript is a dynamically typed language ✅.

Variables don’t have fixed types. The type is determined at runtime based on the value assigned.
A variable can hold a number at one moment, then a string, then an object, etc.
*/

//---------------------------------------------------------------------------------------------------//

//  Primitive (call by value because stored in stack memory)
//  7-types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3 

const isLoggedIn = false
console.log(typeof isLoggedIn); // boolean

const outsideTemp = null
console.log(typeof outsideTemp); // object because of a bug in JavaScript

let userEmail;

// Symbol is used to create unique identifiers. Even if two symbols have the same description, they are different.
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); // false because both are unique
// console.log(typeof anotherId); // symbol


const bigNumber = 34565435766543567587576n // n at the end to denote BigInt
console.log(typeof bigNumber); // bigInt because of n in the end



// Reference (Non primitive) (call by reference because stored in heap memory)

// Array, Objects, Functions
// Array literal
const heros = ["Java", "JavaScript", "ReactJs"]; // array:-  a type of object in JavaScript
console.log(heros); 
console.log(typeof heros); // "object" but not arrays because arrays are a type of object in JavaScript
console.log(Array.isArray(heros));  // true because it checks whether it's an array or not

// Object literal
// object is a collection of key-value pairs separed by comma
// key is always string
// value can be of any data type
// key-value pair is called property
// object is mutable (can be changed)
let myObj = {
    name: "hitesh",
    age: 22,
}

// Function expression
const myFunction = function(){
    console.log("Hello world");
}
myFunction(); // function call 
console.log(typeof myFunction); // function but technically it's an object in JavaScript that's why it is called function object.

//---------------------------------------------------------------------------------------------------//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/*
🔹 Mutable vs Immutable in JavaScript

Mutable: - The value can be changed/modified after it is created.
         - If something is mutable, you can update its contents without creating a new copy.
         - Objects and Arrays in JavaScript are mutable.

         Examples:
let arr = [1, 2, 3];
arr.push(4);   // modifies the same array
console.log(arr); // [1, 2, 3, 4]

let obj = { name: "Anurag" };
obj.age = 21;  // modifies the same object
console.log(obj); // { name: "Anurag", age: 21 }


Here, arr and obj are the same references in memory, just updated.

Immutable

Meaning: The value cannot be changed once created.

Any "change" actually creates a new value, leaving the old one untouched.

Examples:

Primitive types (String, Number, Boolean, null, undefined, Symbol, BigInt) are immutable.

let str = "Hello";
str.toUpperCase(); // returns a NEW string "HELLO"
console.log(str);  // original string is still "Hello"

let num = 10;
let newNum = num + 5; // creates a new number (15)
console.log(num);     // 10 (unchanged)


Here, you’re not modifying the original value — instead, JS creates a new one.

🔑 Quick Summary

Mutable: Arrays, Objects, Functions (reference types) → can be updated in place.

Immutable: Strings, Numbers, Booleans, null, undefined, Symbol, BigInt (primitive types) → can’t be changed, only replaced.
*/