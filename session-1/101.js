// Session 1 - Exercise 1
// What will be the output of the following code and why?
// The code demonstrates the difference between var, let, and const in terms of scope.
// The variable 'x' declared with 'var' is function-scoped, so it is accessible outside the if block.
// The variables 'y' and 'z' declared with 'let' and 'const' are block-scoped, so they are not accessible outside the if block.

function example() {
    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;
    }
    console.log(x); // 1
    console.log(y); // ReferenceError: y is not defined
    // ReferenceError: y is not defined
    console.log(z); // ReferenceError: z is not defined
    // ReferenceError: z is not defined
}

example();

console.log(x) // ReferenceError: x is not defined

// Some top level variables or functions is window. window is a global object in browsers. Var scope if between its function. Its not necessarily global in all contexts. 

