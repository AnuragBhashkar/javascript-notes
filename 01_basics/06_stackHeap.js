/*
Stack(copy) vs Heap Memory(reference):-

    stack:
        - stores primitive values
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
//-------------------------------------------------------------------------------------------------//
 let myName = "anurag"; // stored in stack
 let anotherName = myName; // copy of myName is created in stack
 anotherName = "bhashkar"; // changing anotherName will not affect myName
    console.log(myName); // Output: anurag
    console.log(anotherName); // Output: bhashkar because it is copy of myName