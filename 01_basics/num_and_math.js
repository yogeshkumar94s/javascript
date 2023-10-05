// ---------- Numbers in JavaScript--------------

const score = 150;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// to change a number into a string

// console.log(balance.toString().length);

// to fixed the two decimal range

// console.log(balance.toFixed(2))

// to give a precision value

const newBalance = 250.25;
// console.log(newBalance.toPrecision(5))
// console.log(newBalance.toPrecision(3))
// console.log(newBalance.toPrecision(4))
// console.log(newBalance.toPrecision(6))

//  to set localeString
const hundred = 10000000;
// console.log(hundred.toLocaleString());

// ///  Interview questions -------------------------------------------------------------------------
/*
1. What are the two types of numbers in JavaScript, and how do they differ?

Answer: In JavaScript, there are two types of numbers: integers (whole numbers) and floating-point numbers (numbers with decimal points). Both types are represented using the Number data type.

2. What is the maximum and minimum safe integer in JavaScript, and how can you check for them?

Answer: The maximum safe integer in JavaScript is Number.MAX_SAFE_INTEGER, which is 2^53 - 1. The minimum safe integer is Number.MIN_SAFE_INTEGER, which is -(2^53 - 1). You can check for these values using Number.isSafeInteger().

3. How can you convert a string to a number in JavaScript?

Answer: You can convert a string to a number using functions like parseInt() for integer conversion and parseFloat() for floating-point conversion. For example:

javascript

let str = "123";
let num = parseInt(str); // Converts to integer
4. Explain the concept of NaN (Not-a-Number) in JavaScript, and how can you check for it?

Answer: NaN is a special value in JavaScript that represents an unrepresentable or undefined value in numeric operations. You can check for NaN using the isNaN() function or Number.isNaN() method.

5. What is the difference between isNaN() and Number.isNaN() for checking if a value is NaN?

Answer: isNaN() converts its argument to a number before checking for NaN, which can lead to unexpected results. Number.isNaN() strictly checks if the value is NaN without type coercion.

6. How do you round a number to a specified number of decimal places in JavaScript?

Answer: You can use the toFixed() method to round a number to a specified number of decimal places and convert it to a string. For example:

javascript

let num = 3.14159;
let rounded = num.toFixed(2); // Rounded to 2 decimal places
7. What is the Math object in JavaScript, and how can it be used for mathematical operations?

Answer: The Math object is a built-in object in JavaScript that provides mathematical functions and constants. It can be used for operations like rounding, trigonometry, exponentiation, and more.

8. How can you generate a random number in JavaScript?

Answer: You can use the Math.random() method to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). To get a random integer within a specific range, you can combine Math.random() with other mathematical operations.

9. What are the common methods for converting numbers to strings in JavaScript?

Answer: Common methods for converting numbers to strings in JavaScript include toString(), String(), and string interpolation using template literals.

10. Explain the concept of JavaScript's "floating-point" precision and potential issues with it.

Answer: JavaScript uses a binary floating-point representation for numbers, which can lead to precision issues when performing calculations with very large or very small numbers. Developers should be aware of these limitations when working with numbers.

11. How can you check if a value is an integer in JavaScript?

Answer: You can check if a value is an integer using the Number.isInteger() method or by comparing it with its integer representation using type coercion.

12. What is the purpose of the parseInt() function, and what happens when it encounters non-numeric characters?

Answer: The parseInt() function parses a string and extracts an integer. When it encounters non-numeric characters, it stops parsing and returns the parsed integer. For example, parseInt("123abc") returns 123.

13. How do you perform exponentiation in JavaScript?

Answer: You can use the Math.pow() method for exponentiation. Additionally, the ** operator introduced in ECMAScript 2016 can be used for the same purpose. For example:

javascript

let result = Math.pow(2, 3); // result will be 8
14. What is the purpose of the Number.parseFloat() method introduced in ECMAScript 2015?

Answer: Number.parseFloat() is used to parse a string and convert it to a floating-point number. It is more suitable for modern JavaScript development compared to parseFloat().

15. How can you check if a number is finite or infinite in JavaScript?

Answer: You can use the isFinite() method to check if a number is finite (neither NaN nor infinite) or isFinite() can be used to determine if a number is finite, infinite, or -Infinity.

16. Explain the concept of the "parseInt" radix argument and why it is important when parsing strings to integers.

Answer: The radix argument in parseInt() specifies the base in mathematical numeral systems (e.g., base 10 for decimal). It is important to specify the radix to avoid unexpected results, especially when parsing strings starting with "0" (octal) or "0x" (hexadecimal).

17. How do you convert a number to its hexadecimal representation in JavaScript?

Answer: You can use the Number.toString() method with a base of 16 to convert a number to its hexadecimal representation. For example:

javascript

let num = 255;
let hex = num.toString(16); // hex will be "ff"
18. What is the difference between parseInt() and parseFloat() for converting strings to numbers?

Answer: parseInt() extracts and returns the integer part of a string until a non-numeric character is encountered, while parseFloat() parses and returns the floating-point number from the beginning of the string.

19. How can you convert a binary or octal string to an integer in JavaScript?

Answer: You can convert a binary or octal string to an integer using the parseInt() function with the appropriate radix. For example, to convert a binary string to an integer:

javascript

let binaryString = "1010";
let decimalNumber = parseInt(binaryString, 2); // decimalNumber will be 10
20. Explain the concept of "Number boxing" in JavaScript and its implications.

Answer: Number boxing is a process where primitive numbers are temporarily converted to their corresponding Number objects for method invocation. It has performance implications, and developers should be aware of when it occurs to optimize code execution.
*/

//------------------Maths--------------------------

// ///---------------Interview Questions----------------------------
/*
1. What is the Math object in JavaScript, and what is its purpose?

Answer: The Math object is a built-in object in JavaScript that provides mathematical functions and constants. It is used for various mathematical operations in JavaScript.

2. How can you access properties and methods of the Math object in JavaScript?

Answer: You can access properties and methods of the Math object using the dot notation. For example: Math.PI, Math.sqrt(25).

3. Explain the purpose of the Math.random() method.

Answer: The Math.random() method generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). It is often used for generating random numbers.

4. How can you generate a random integer within a specified range using the Math object?

Answer: You can generate a random integer within a specified range using the following formula: Math.floor(Math.random() * (max - min + 1)) + min.

5. What does the Math.floor() method do, and how is it used in JavaScript?

Answer: The Math.floor() method rounds a number down to the nearest integer. It is used to truncate the decimal part of a number.

6. Explain the purpose of the Math.ceil() method.

Answer: The Math.ceil() method rounds a number up to the nearest integer. It is often used when you want to ensure that a number is not rounded down.

7. What does the Math.round() method do, and how does it round numbers?

Answer: The Math.round() method rounds a number to the nearest integer. It rounds up or down based on the decimal part. For example, Math.round(3.6) returns 4, and Math.round(3.2) returns 3.

8. How can you calculate the square root of a number using the Math object?

Answer: You can calculate the square root of a number using the Math.sqrt() method. For example: Math.sqrt(25) returns 5.

9. What is the purpose of the Math.pow() method, and how is it used for exponentiation?

Answer: The Math.pow() method is used for exponentiation. It takes two arguments: the base and the exponent, and returns the result of raising the base to the power of the exponent.

10. How can you calculate trigonometric values like sine, cosine, and tangent using the Math object?

Answer: You can use the Math.sin(), Math.cos(), and Math.tan() methods to calculate trigonometric values. For example: Math.sin(Math.PI / 2) returns 1.

11. Explain the purpose of the Math.abs() method, and how is it used in JavaScript?

Answer: The Math.abs() method returns the absolute value of a number, which is its value without regard to its sign. For example: Math.abs(-5) returns 5.

12. What is the Math.log() method used for, and how does it work?

Answer: The Math.log() method calculates the natural logarithm of a number. The result is the exponent to which the constant e (approximately 2.71828) must be raised to obtain the given number.

13. How can you calculate the base-10 logarithm of a number using the Math object?

Answer: You can calculate the base-10 logarithm of a number using the Math.log10() method. For example: Math.log10(100) returns 2.

14. Explain the purpose of the Math.min() and Math.max() methods.

Answer: The Math.min() method returns the smallest of zero or more numbers, and the Math.max() method returns the largest of zero or more numbers.

15. What does the Math.floor(Math.random() * 6) expression do, and how is it commonly used in games?

Answer: This expression generates a random integer between 0 and 5. It is often used in games to simulate the roll of a six-sided die or similar random events.

16. How can you generate a random number within a specified range, such as between 10 and 20?

Answer: You can generate a random number within a specified range by using the formula Math.floor(Math.random() * (max - min + 1)) + min. For example: Math.floor(Math.random() * (20 - 10 + 1)) + 10 generates a random number between 10 and 20.

17. What is the mathematical constant e, and how can you access it using the Math object?

Answer: The mathematical constant e is approximately equal to 2.71828. You can access it using Math.E.

18. How can you calculate the factorial of a number using the Math object?

Answer: The Math object does not provide a direct method for calculating the factorial of a number. You would typically use a loop or a recursive function to calculate the factorial.

19. Explain the purpose of the Math.sign() method, and how does it work?

Answer: The Math.sign() method returns the sign of a number as 1 (positive), -1 (negative), or 0 (zero). It is often used to determine the sign of a number.

20. What is the Math.trunc() method, and how does it differ from Math.floor()?

Answer: The Math.trunc() method removes the decimal part of a number and returns the integer part. Unlike Math.floor(), it does not round the number up if it is negative. For example, Math.trunc(-3.9) returns -3.
*/

console.log(Math);

// abs = absolute
// console.log(Math.abs(-8));

// to round of

// console.log(Math.round(6.33));

// to choose upper value
// console.log(Math.ceil(5.2));

// to choose floor value
// console.log(Math.floor(5.88));

// to choose a min value
// console.log(Math.min(5, 6, 8, 10));

// to choose a max value
// console.log(Math.max(5, 6, 8, 10));

// to generate a random value

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

// to generate a value in given range

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
