/*
Global variables in JavaScript are those declared outside of any function or block scope. 
They are accessible from anywhere within the script, including inside functions and blocks. 
Variables declared without the var, let, or const keywords inside a function automatically become global variables.
*/

//---------------------------------------------------------------------------------- //

/*

let:
- Block-scoped: Accessible only within the block it is defined.
- meaning they are only accessible within the block, statement, or expression where they are defined.
- Can be updated but not re-declared within the same scope.

const:
- Block-scoped: Accessible only within the block it is defined.
- Cannot be updated or re-declared. 
- Must be initialized at the time of declaration.
- if the value is an object or array, you can still modify its properties or contents.

var:
- generally, not used in modern JavaScript due to its function-scoping and hoisting behavior.
- Function-scoped: Accessible within the function it is defined.
- Can be updated and re-declared within its scope.
- If var declared outside a function, it becomes a global variable.

*/

//---------------------------------------------------------------------------------- //

// Notes on JavaScript basics:
// 1. JavaScript is case-sensitive
// 2. Variable names cannot start with numbers
// 3. Variable names cannot contain spaces or hyphens (-)
// 4. Use camelCase for variable names (e.g., myVariableName)
// 5. Use meaningful variable names
// 6. Always declare variables with let, const, or var
// 7. Use const for variables that won't be reassigned
// 8. Use let for variables that will be reassigned
// 9. Avoid using var (due to its function scope and hoisting behavior)
// 10. Use strict equality (===) and inequality (!==) operators to avoid type coercion issues

