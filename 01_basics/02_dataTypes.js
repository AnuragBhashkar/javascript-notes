//we will learn about data types in javascript:
//There are two types of data types in javascript:
//1. Primitive data types:- 
//       ==> Numberic(number,bigint) and non-numeric(string,boolean,null,undefined,symbol)
//2. Non-primitive data types:- (object,arrays,function,date object, regular expression etc.) 

"use strict"; //it is used to enable strict mode in javascript and treat all JS code as newer version. 
// It helps to write secure javascript code. 
// Helps catch mistakes early.
// Prevents bad practices (like using undeclared variables).

//alert("Welcome to data types in javascript"); //it will not work in node.js environment. It will work in browser environment only.



// It store string data type
let txt = "GeeksforGeeks";
 
//----------------------------------------------------------------------------------------------//

// It store integer data type
let a = 5;
let b = 5;

// It store Boolean data type
(a == b ) //--> returns true to the console

// To check Strictly (i.e. Whether the datatypes and values of both variables are same)--> "===" is used
(a === b) //---> returns true to the console because both value and datatype are same
 
//----------------------------------------------------------------------------------------------//

console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(null == undefined) // true because both represent "no value"
console.log(null === undefined) // false because they are of different types
// In JavaScript, both null and undefined represent "empty" values but are distinct types. 
// null is a special object representing the intentional absence of a value,
// while undefined signifies that a variable has been declared but not assigned a value. 
// Despite their similar purpose, they are not strictly equal (===) to each other.

//----------------------------------------------------------------------------------------------//

console.log(typeof 123) // number
console.log(typeof 12.5) // number
console.log(typeof 'Hello') // string
console.log(typeof true) // boolean
console.log(typeof function() {}) // function
console.log(typeof {}) // object
console.log(typeof []) // object



// It store object data:- 
// (objects are represented in the below way mainly)
let Student = {
    firstName: "Johnny",
    lastName: "Diaz", 
    age: 35, 
    mark: "blueEYE"
}

// It store array data type which is also a type of object data type.
let places= ["GFG", "Computer", "Hello"];

//----------------------------------------------------------------------------------------------//