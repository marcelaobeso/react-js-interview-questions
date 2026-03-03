// Postfix Increment Operator

let a = 1
let b = a++
console.log(a, b)

// Output: 2, 1. The postfix increment operator (a++) returns the value of 'a' before it is incremented. So, 'b' gets the value of 'a' (which is 1) before 'a' is incremented to 2.

let c = 1
let d = ++c
console.log(c, d)

// Output: 2, 2. The prefix increment operator (++c) increments 'c' first and then returns the new value. So, 'd' gets the value of 'c' after it has been incremented to 2.

console.log(1 < 2 < 3) // true
console.log(3 > 2 > 1) // false

// Explanation: In the expression '1 < 2 < 3', the comparison is evaluated from left to right. First, '1 < 2' is evaluated, which is true (1 is less than 2). Then, the result (true) is compared to 3. In JavaScript, true is coerced to 1 when compared to a number, so the expression becomes '1 < 3', which is true.

// In the expression '3 > 2 > 1', the comparison is also evaluated from left to right. First, '3 > 2' is evaluated, which is true (3 is greater than 2). Then, the result (true) is compared to 1. Again, true is coerced to 1, so the expression becomes '1 > 1', which is false.  

console.log(1 + 2 + '3') // '33'
console.log('5' - 2) // 3
console.log('5' - - 2) // 7

// Explanation: In the expression '1 + 2 + '3'', the numbers 1 and 2 are added together first, resulting in 3. Then, when adding the string '3', JavaScript coerces the number 3 to a string, resulting in the concatenation of '3' and '3', which gives '33'.

// In the expression '5' - 2, JavaScript coerces the string '5' to a number, resulting in 5 - 2, which equals 3.

// In the expression '5' - - 2, JavaScript again coerces the string '5' to a number, resulting in 5 - (-2). The double negative turns into addition, so it becomes 5 + 2, which equals 7.   

let arr = [1, 2, 3, 10, 5, 7, 22]
console.log(arr.sort()) // [1, 10, 2, 22, 3, 5, 7]

// Explanation: The default sort method in JavaScript sorts elements as strings. When sorting numbers, it compares their string representations, which is why '10' comes before '2' and '22' comes before '3'. To sort numbers correctly, you can provide a compare function to the sort method, like this:

arr.sort((a, b) => a - b)
console.log(arr) // [1, 2, 3, 5, 7, 10, 22]
console.log('10' < '2') // true

// Explanation: When comparing strings, JavaScript compares them lexicographically (based on Unicode values). The string '10' is compared character by character with '2'. Since '1' (the first character of '10') is less than '2', the comparison returns true.

