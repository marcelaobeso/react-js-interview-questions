// variables have no type, they can hold any type of value. The type of the value is determined at runtime. For example:
console.log('Regular types we all know: ')

console.log(typeof 'Miaw'); // Output: string
console.log(typeof (() => {})); // Output: function
console.log(typeof Symbol()); // Output: symbol
console.log(typeof undefined); // Output: undefined

// typeof will always return a string, be sure to compare it with a string when checking the type of a variable. For example:
const value = 42;
if (typeof value === 'number') {
    console.log('The value is a number');
} else {
    console.log('The value is not a number');
}
console.log(' ')
console.log('Some special cases: ')
console.log(typeof null); // Output: object (this is a known quirk in JavaScript, null is not actually an object, but typeof returns 'object' for historical reasons)
console.log(typeof NaN); // Output: number (NaN stands for Not-a-Number, but it is still considered a number type in JavaScript)


console.log(typeof 0/0); // Output: number (0/0 results in NaN, which is of type number)
console.log(typeof parseInt('abc')); // Output: number (parseInt returns NaN when it cannot parse a number, but NaN is still of type number)
console.log(typeof Math.sqrt(-1)); // Output: number (Math.sqrt of a negative number results in NaN, which is of type number)
console.log(typeof Infinity); // Output: number (Infinity is also of type number in JavaScript


console.log(typeof []); // Output: object (arrays are a type of object in JavaScript)
console.log(typeof {a: 1, b: 'Miaw'}); // Output: object (plain objects are also of type object in JavaScript)

console.log(' ')
console.log('On NAN, Null and undefined: ')
console.log(typeof null); // Output: object (this is a known quirk in JavaScript, null is not actually an object, but typeof returns 'object' for historical reasons)
console.log(typeof NaN);
console.log('type of undefined: ', typeof undefined);// this means that the value does not exists or has not been assigned a value yet. 

let a = null; // This is an explicit assignment of null, which means that 'a' is intentionally set to have no value. The type of 'a' will be 'object' due to the quirk mentioned above.
console.log(a, typeof a); // Output: object

let b
console.log(b, typeof b); // Output: undefined (b is declared but not assigned a value, so it is undefined)

// const c
// console.log(c, typeof c); // This will throw a SyntaxError: Missing initializer in const declaration, because const variables must be initialized at the time of declaration.


if (typeof window !== 'undefined') {
    console.log('We are in a browser environment');
} else {
    console.log('We are in a non-browser environment (like Node.js)');
}

if (typeof process !== 'undefined') {
    console.log('We are in a Node.js environment');
} else {
    console.log('We are in a non-Node.js environment (like a browser)');
}

if (typeof navigator !== 'undefined') {
    console.log(navigator.userAgent);
    console.log(navigator.platform);
}