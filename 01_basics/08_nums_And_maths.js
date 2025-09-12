const score = 400
// console.log(score); //400

const balance = new Number(100)
// console.log(balance); //[Number: 100] //it's an object not a primitive value
// console.log(balance + 1); //101 because JS converts it to primitive number

console.log(balance.toString().length); //3 because it's converted to string '100'
console.log(balance.toFixed(1)); //100.0 //it converts number to string with fixed decimal points

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000 //Indian format
console.log(hundreds.toLocaleString('en-US')); //1,000,000 //US format


//----------------------------------------------------------------------------------------------//
//----------------------------------(Maths)----------------------------------//

console.log(Math); //Math is a built-in object in JS which has properties and methods for mathematical constants and functions 
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8)); //3
console.log(Math.max(4, 3, 6, 8)); //8
console.log(Math.sqrt(64)); //8
console.log(Math.pow(2, 4)); //16
console.log(Math.PI); //3.141592653589793

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Generates a random number between min and max (inclusive)
// Math.random() * (max - min + 1) generates a number between 0 and (max - min + 1)
// Math.floor(...) rounds it down to the nearest whole number
// Adding min shifts the range to be between min and max
//----------------------------------------------------------------------------------------------//

