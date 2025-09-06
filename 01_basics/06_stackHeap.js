/*
Stack(copy) vs Heap Memory(reference):-

    stack:
        - stores primitive values only (string, number, boolean, null, undefined, symbol, bigint)
        - fixed size 
        - faster access
        - memory is automatically managed (LIFO)
        - copy of original value so it will not change the value

    heap:
        - stores non-primitive values (objects, arrays, functions)
        - dynamic size
        - slower access
        - memory management is complex (garbage collection)
        - reference of original value so it will directly change the value
*/

//
//---------------------------------------------(stack example)-----------------------------------------------------//

/*
 let myName = "anurag"; // stored in stack because it is a primitive value i.e string
 let anotherName = myName; // copy of myName is created in stack
 console.log(anotherName); // Output: anurag because it is copy of myName
 anotherName = "bhashkar"; // changing anotherName will not affect myName
console.log(myName); // Output: anurag because it is original value
console.log(anotherName); // Output: bhashkar because it is changed value

*/


//---------------------------------------------(heap example)----------------------------------------------------//
let userOne={            // stored in heap because it is a non-primitive value i.e object
    email: "user@gmail.com",
    upi: "user@okicici"
}

let userTwo = userOne; // reference of userOne is created in stack
console.log(userTwo);

userTwo.email = "anurag@gmail.com"; // changing userTwo will affect userOne because both are pointing to same reference
console.log(userTwo);  //the values will be updated as both are pointing to same reference


console.log("The value of userOne will also be updated as both are pointing to same reference");
console.log(userOne);  //the value of userOne will also be updated as both are pointing to same reference

//---------------------------------------------(end)----------------------------------------------------//