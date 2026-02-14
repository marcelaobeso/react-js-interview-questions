// Session 1 - Exercise 5
// Loose equality (==) vs Strict equality (===)

console.log('Loose equality (==):');
console.log('')
console.log(1 == '1'); // true, because == performs type coercion and converts the string '1' to the number 1 before comparing.
console.log(0 == false); // true, because == converts false to 0 before comparing.
console.log('' == false); // true, because == converts false to an empty string '' before comparing.
console.log(null == undefined); // true, because == considers null and undefined equal.

console.log('');
console.log('Now with strict equality (===):');
console.log(1 === '1'); // false, because === does not perform type coercion and compares both value and type, so a number is not equal to a string.
console.log(0 === false); // false, because 0 is a number and false is a boolean, they are not of the same type.
console.log(1.0 === 1); // true, because both are numbers and have the same value.
console.log(false + 'hello'); // Output: 'falsehello', because false is coerced to the string 'false' and concatenated with 'hello'.

// we can find all of this on: https://tc39.es/ecma262/#sec-islooselyequal

