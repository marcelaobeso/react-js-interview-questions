/* Closure is a fundamental concept in JavaScript that allows a function to access variables from its outer scope even after the outer function has finished executing. It is created when a function is defined inside another function and retains access to the variables of the outer function.

 In the example below, the inner function 'inner' forms a closure that retains access to the variables 'a' and 'b' from the outer function 'outer', even after 'outer' has finished executing. */

// var a = 'global';
// function outer(){
//     var b = 'outer';
//     function inner(){
//         var c = 'inner';
//         console.log(a, b, c); // Output: global outer inner (inner function has access to variables from its own scope and from the outer scopes)
//     }
//     inner();
//     console.log(a, b); // Output: global outer (outer function has access to its own scope and the global scope, but not the inner scope)
//     console.log(c); // ReferenceError: c is not defined (c is not accessible outside of inner function)
// }
// outer();
// console.log(a);
// console.log(b); // ReferenceError: b is not defined (b is not accessible outside of outer function)
// console.log(c); // ReferenceError: c is not defined (c is not accessible outside of inner function)


const a = 'global';
function outer(){
    const b = 'outer';
    function inner(){
        const c = 'inner';
        console.log(a, b, c); // Output: global outer inner (inner function has access to variables from its own scope and from the outer scopes)
    }
    inner();
    console.log(a, b); // Output: global outer (outer function has access to its own scope and the global scope, but not the inner scope)
    console.log(c); // ReferenceError: c is not defined (c is not accessible outside of inner function)
}
outer();
console.log(a);
console.log(b); // ReferenceError: b is not defined (b is not accessible outside of outer function)
console.log(c); // ReferenceError: c is not defined (c is not accessible outside of inner function)