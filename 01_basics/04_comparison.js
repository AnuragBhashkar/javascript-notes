console.log(2>1); // true
console.log(2>=1); // true
console.log(2==1); // false
console.log(2!=1); // true
console.log("2">1); // true because "2" is converted to 2 because of type coercion,
//  which is a process of converting one data type to another when comparing two values of different types
console.log("02"==1); // false because "02" is converted to 2

//String → Number ✅ (only works if the string has digits, else NaN)
//Number → String ✅ (always works)

console.log(5>2>1); // here 5>2 is true, and true is converted to 1, so 1>1 is false

