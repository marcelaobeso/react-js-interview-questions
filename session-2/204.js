function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// In this code, the inner function returned by createCounter forms a closure that captures the variable 'count' from its outer scope. Each time the inner function is called, it increments and logs the value of 'count', demonstrating how closures allow functions to access and manipulate variables from their enclosing scopes.