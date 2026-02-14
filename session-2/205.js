// Function scope for var:
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}
// Output: 3, 3, 3. This is because 'var' is function-scoped, and the variable 'i' is shared across all iterations of the loop. By the time the setTimeout callbacks are executed, the loop has completed and 'i' has the value of 3.

// Block scope for let:
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}
// Output: 0, 1, 2. This is because 'let' is block-scoped, and each iteration of the loop creates a new scope for 'i'. Each setTimeout callback captures the value of 'i' at the time it was created, resulting in the expected output.