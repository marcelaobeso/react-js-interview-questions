// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
// For variables declared with 'var', the declaration is hoisted and initialized with undefined. For variables declared with 'let' and 'const', the declaration is hoisted but not initialized, which means they are in a "temporal dead zone" until their declaration is evaluated. 

console.log( x ); // Output: undefined, because 'x' is hoisted to the top of its scope and initialized with undefined.
var x = 5;
console.log( x ); // Output: 5, because 'x' is now assigned the value 5.

console.log( 'function declaration: ')
greet();
function greet() {
    console.log('Hello!');
} // Output: 'Hello!', because function declarations are hoisted in their entirety, so the function 'greet' is available before its declaration in the code.

console.log( 'function expression: ')
try {
    greetExpression(); // This will throw a TypeError: greetExpression is not a function, because only the variable declaration is hoisted, not the assignment of the function expression.
} catch (error) {
    console.error(error);
}
var greetExpression = function() {
    console.log('Hi!');
};
greetExpression(); // Output: 'Hi!', because now 'greetExpression' is assigned the function expression and can be called.


console.log( 'let and const: ')
try {
    console.log( y ); // This will throw a ReferenceError: Cannot access 'y' before initialization, because 'y' is declared with 'let' and is in the temporal dead zone until its declaration is evaluated.
} catch (error) {
    console.error(error);
}
let y = 10;
console.log( y );

// If you run it on a browser, you will get that 'ReferenceError: a is not defined' because the browser is runing it line by line and it will not hoist the variable declaration to the top of the scope. However, if you run it on Node.js, you will get 'undefined' because Node.js hoists the variable declaration to the top of the scope and initializes it with undefined. This is a difference in how JavaScript is executed in different environments.

// this is different from 

console.log(f); //ReferenceError: f is not defined
console.log(g); // ReferenceError: Cannot access 'y' before initialization
let g = 'Hello';

// same for const 

// conclusion: Hoisting can lead to unexpected behavior if you are not aware of it, especially when using 'var'. It is generally recommended to use 'let' and 'const' to avoid issues related to hoisting and to make your code more predictable.