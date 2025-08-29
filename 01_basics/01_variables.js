//There are three ways to declare a variable in JavaScript: var, let, and const.
//var is function-scoped, while let and const are block-scoped.

const accountId = 123456   //The value can't be changed because of const.

//Variables declared with "var" can be re-declared and updated.
//Variables declared with "let" can be updated but not re-declared.

let accountEmail = "anurag@gmail.com"  //The value can be changed because of let.but it can't be re-declared.
//let accountEmail="a@gmail.com" //It will throw an error because we can't re-declare a let variable in the same scope.


var accountPassword = "12345"  //The value can be changed because of var and it can be re-declared.
var accountPassword = "67890"  //Re-declaring the variable.


accountCity="Jaipur" //It will create a global variable because we didn't use var, let or const.

let accountState; //We can declare a variable without assigning a value. It will be undefined.

// accountId=12345  //It will throw an error because we can't change the value of a const variable.

console.log("Your accound Id is: " + accountId) //It will print the value of accountId variable.
console.log("Your accound Email is: " + accountEmail) //It will print the value of accountEmail variable.
console.log("Your accound Password is: " + accountPassword) //It will print the updated value of accountPassword variable.
console.log("Your accound City is: " + accountCity) 
console.log("Your accound State is: " + accountState) //It will print undefined.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //It will print the values in a table format.