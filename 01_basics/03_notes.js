
console.log(2+2);
console.log("2"+"2"); //22 (concatenation)
console.log("2"+2); //22 (concatenation)
console.log(+"2"+2); //4 (unary plus operator converts string to number)
console.log(+"2"+ +"2"); //4 (unary plus operator converts string to number)
console.log(2+"2"); //22 (concatenation)
console.log(2+"2"+2); //222 (concatenation)
console.log(1+2+"2"); //32 (1+2=3 then concatenation)
console.log(5>2>1); // here 5>2 is true, and true is converted to 1, so 1>1 is false
console.log(5>2<1); // here 5>2 is true, and true is converted to 1, so 1<1 is false
console.log(5>2 && 2>1); //true
console.log(5>2 || 2<1); //true
console.log(5>2 || 2>1); //true
