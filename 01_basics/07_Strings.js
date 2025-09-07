//String in js are used to represent text
//String can be created using single quotes, double quotes or backticks
//String can be accessed using index
//String are immutable in js means once created they cannot be modified for example:-
let str = "Hello";
str[0] = "L"; //This will not change the string
console.log(str); //Output: Hello

//----------------------------------------------(String methods)-----------------------------------------------------//
//String methods are used to perform operations on strings

//Take "Hello" as an example string:- 
console.log(str[0]); //Output: "H"
console.log(str.charAt(0)); //Output: "H"
console.log(str.charAt(10)); //Output: (empty string) because index 10 is out of range
console.log(str.length); //Output: "5" because length of string is 5
console.log(str.toUpperCase()); //Output: "HELLO" because it converts all characters to uppercase
console.log(str.toLowerCase()); //Output: "hello" because it converts all characters to lowercase
console.log(str.indexOf("e")); //Output: "1" because index of e is 1
console.log(str.indexOf("l")); //Output: "2" because index of first l is 2
console.log(str.lastIndexOf("l")); //Output: "3" because index of last l is 3
console.log(str.includes("lo")); //Output: "true" because string contains lo
console.log(str.includes("world")); //Output: "false" because string does not contain world
console.log(str.startsWith("He")); //Output: "true" because string starts with He
console.log(str.endsWith("lo")); //Output: "true" because string ends with lo
console.log(str.slice(0, 2)); //Output: "He" because it extracts characters from index 0 to 2 (2 is not included)
console.log(str.slice(2)); //Output: "llo" because it extracts characters from index 2 to end
console.log(str.replace("H", "h")); //Output: "hello" because it replaces first occurrence of H with h
console.log(str.replaceAll("l", "L")); //Output: "HeLLo" because it replaces all occurrences of l with L
console.log(str.split("")); //Output: [ 'H', 'e', 'l', 'l', 'o' ] because it splits string into array of characters
console.log(str.split("l")); //Output: [ 'He', '', 'o' ] because it splits string into array of substrings using l as separator


//String can be concatenated using + operator
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3); //Output: Hello World


//String can be concatenated using += operator
let str4 = "Hello";
str4 += " World";
console.log(str4); //Output: Hello World


//String can be concatenated using template literals (backticks)
let name = "Anurag";
let age = 21;
let str5 = `My name is ${name} and I am ${age} years old.`;
console.log(str5); //Output: My name is Anurag and I am 21 years old.

//---------------------------------------------(end)----------------------------------------------------//