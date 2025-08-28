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

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 3456543576654356754n



// Reference (Non primitive) (call by reference because stored in heap memory)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
