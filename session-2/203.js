// Variable Shadowing Example

let x = 10
function foo() {
    let x = 20;
    console.log(x); // Output: 20, because the variable 'x' declared inside the function 'foo' shadows the outer variable 'x'.
}
foo();
console.log(x); // Output: 10, because the variable 'x' declared inside the function 'foo' does not affect the outer variable 'x'.

// This code demonstrates variable shadowing, where a variable declared in an inner scope (inside the function) has the same name as a variable in an outer scope (outside the function). The inner variable shadows the outer variable within its scope.
