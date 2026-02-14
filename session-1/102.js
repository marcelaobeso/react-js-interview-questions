// 2. const doesnt mean inmutable. It means that the variable identifier cannot be reassigned. However, if the variable is an object or an array, its properties or elements can still be modified. For example:

const user = {
    name: 'Alice',
    age: 30
};

user.name = 'Bob'; // This is allowed, we are modifying the property of the object, not reassigning the variable.
console.log(user.name); // Output: Bob

const numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

//this will be allowed, we are modifying the contents of the array, not reassigning the variable. However, if we try to reassign the variable itself, it will throw an error:

user = {
    name: 'Charlie',
    age: 25
}; // This will throw a TypeError: Assignment to constant variable.

// Primitives (like numbers, strings, booleans) declared with const cannot be reassigned, and their values cannot be changed. For example:

const pi = 3.14;
pi = 3.14159; // This will throw a TypeError: Assignment to constant variable.