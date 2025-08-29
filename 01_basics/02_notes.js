/* 
Data types in javascript:
There are two types of data types in javascript:
    1). Primitive data types:- 
        ==> Numberic(number,bigint), and
        ==> Non-Numeric(string,boolean,null,undefined,symbol)
    2). Non-primitive data types(object,arrays,function,date object, regular expression etc.) 
*/

//----------------------------------------------------------------------------------------------//

console.log(5>2>1); // here 5>2 is true, and true is converted to 1, so 1>1 is false

console.log("5"===5) //false because === checks for both value and type to be same and here type is different.
console.log("5"==5) //true ===> JavaScript would perform type coercion, converting the string "5" to the number 5.
console.log("5"!==5) //It returns true if either the value OR the type is different.


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