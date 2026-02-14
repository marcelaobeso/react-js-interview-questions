// redeclaration with var and let 
var a = 10;
var a = 20; // This is allowed with var, and 'a' will now be 20.

let b = 30;
// let b = 40; // This will throw a SyntaxError: Identifier 'b' has already been declared

const c = 50;
// const c = 60; // This will throw a SyntaxError: Identifier 'c' has already been declared

console.log(a); // Output: 20

{
    let d = 70;
    console.log(d); // Output: 70
    // const d = 80; // This will throw a SyntaxError: Identifier 'd' has already been declared
}
{
    let d = 80; // This is allowed, 'd' is block-scoped and can be redeclared in a different block.
    console.log(d); // Output: 80
}

// curly blocks create a new scope for let and const, but not for var. This is why we can redeclare 'd' in different blocks without any issues.
