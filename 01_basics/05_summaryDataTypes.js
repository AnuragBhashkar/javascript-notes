/*
JavaScript is a dynamically typed language ✅.

Variables don’t have fixed types. The type is determined at runtime based on the value assigned.
A variable can hold a number at one moment, then a string, then an object, etc.

*/

//---------------------------------------------------------------------------------------------------//

//  Primitive (call by value because stored in stack memory)
//  7-types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Symbol is used to create unique identifiers. Even if two symbols have the same description, they are different.
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); // false
// console.log(typeof anotherId); // symbol


const bigNumber = 3456543576654356754n // n at the end to denote BigInt



// Reference (Non primitive) (call by reference because stored in heap memory)

// Array, Objects, Functions

const heros = ["Java", "JavaScript", "ReactJs"];
console.log(heros); 
console.log(typeof heros); // "object" but not arrays because arrays are a type of object in JavaScript
console.log(Array.isArray(heros));  // true


let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction(); // function call 