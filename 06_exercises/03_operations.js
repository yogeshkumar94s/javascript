//     What is the modulo operator in JavaScript, and how is it used?

// Answer

// The modulo operator in JavaScript is represented by the % symbol. It is used to find the remainder of a division operation between two numbers. In other words, it calculates what is left over after one number is divided by another.

// Here's how the modulo operator is used:

// const dividend = 10;
// const divisor = 3;

// const remainder = dividend % divisor;

// console.log(remainder); // Output: 1 (remainder of 10 / 3)

// In this example, 10 % 3 calculates the remainder when 10 is divided by 3, which is 1. So, remainder will be assigned the value 1.

// The modulo operator is commonly used in various programming tasks, such as:

// 1.  Checking for even or odd numbers: You can use the modulo operator to determine if a number is even or odd. If num % 2 equals 0, the number is even; otherwise, it's odd.

// 2.  Wrapping values: It's often used to create looping behavior or to ensure values stay within a certain range. For example, in a clock, you might use hours % 12 to ensure the hour value stays between 0 and 11.

// 3.  Grouping items into categories: It can be used to distribute items into categories or groups, based on the remainder of their values when divided by a divisor.

// The modulo operator is a versatile tool in programming for various mathematical and logical operations.

//  What is the result of adding a number and a string in JavaScript?

// Answer

// In JavaScript, when you add a number and a string using the + operator, it performs a type coercion and converts the number to a string or the string to a number, depending on the context. The result is a string concatenation.

// Here are some examples to illustrate this behavior:

// const number = 42;
// const string = " is the answer.";

// const result1 = number + string; // Result: "42 is the answer."
// const result2 = string + number; // Result: " is the answer.42"

// console.log(result1);
// console.log(result2);

// In the first example, the number 42 is converted to a string, and then it's concatenated with the string " is the answer.", resulting in the string "42 is the answer.".

// In the second example, the string " is the answer." is concatenated with the number 42, resulting in the string " is the answer.42".

// So, adding a number and a string in JavaScript results in string concatenation.

//   How do you increment a variable in JavaScript?

// Answer

// In JavaScript, you can increment a variable using the ++ operator, which is called the increment operator. There are two ways to use it:

// 1.   Post-increment: In this form, the ++ operator follows the variable name. It first uses the current value of the variable in the expression and then increments it afterward.

// let num = 5;
// let result = num++; // result is assigned the current value of num (5), and then num is incremented to 6
// console.log(result); // Output: 5
// console.log(num); // Output: 6

// 2.   Pre-increment: In this form, the ++ operator precedes the variable name. It increments the variable before using its value in the expression.

// let num = 5;
// let result = ++num; // num is incremented to 6, and then result is assigned the updated value of num (6)
// console.log(result); // Output: 6
// console.log(num); // Output: 6

// You can choose the appropriate form of the increment operator based on whether you want to use the current value of the variable before or after it's incremented.

//   What is the equality (==) operator in JavaScript, and how does it work?

// Answer

// The equality operator (==) in JavaScript is used to compare two values for equality. However, it performs type coercion, which means it tries to convert the operands to a common type before making the comparison. This can sometimes lead to unexpected results if you're not careful.

// Here's how the equality operator works:

// 1.   If the operands have the same data type, it compares them directly using a strict equality check. If they are equal in value and type, it returns true, otherwise false. This is known as "strict equality" or "strict comparison."

// 5 == 5 // true
// 'hello' == 'world' // false

// 2.   If the operands have different data types, JavaScript attempts to convert one or both of the operands to a common data type. After the conversion, it performs a strict equality check.

// 5 == '5' // true (string '5' is converted to a number)
// true == 1 // true (boolean true is converted to a number)

// 3.   The equality operator performs type coercion to make the comparison, which can lead to unexpected behavior. For example:

// '' == 0 // true (empty string is converted to 0)
// null == undefined // true (both are considered equal in this context)

// Due to the potential for unexpected behavior, it's often recommended to use the strict equality operator === (triple equals) instead, which compares both value and data type without performing type coercion. It's considered a safer and more predictable way to check for equality:

// 5 === 5 // true
// '5' === 5 // false

// In most cases, it's a good practice to use === for strict equality checks and avoid the == operator unless you specifically need type coercion.

//    What is the strict equality (===) operator in JavaScript, and how is it different from the equality operator?

// Answer

// The strict equality operator (===) in JavaScript is used to compare two values for equality while considering both their values and their data types. It's also known as "strict comparison." Unlike the regular equality operator (==), the strict equality operator does not perform type coercion, which makes it more predictable and safer for equality comparisons.

// Here's how the strict equality operator works and how it differs from the regular equality operator:

// 1.   Values and Data Types Must Match:

// With the strict equality operator (===), both the values and data types of the operands must match for the comparison to return true.
// If the values or data types are different, the comparison returns false.

// 5 === 5 // true (same value and data type)
// '5' === 5 // false (different data types)

// 2.  No Type Coercion:

// Unlike the regular equality operator (==), the strict equality operator does not perform type coercion. It does not try to convert one operand's type to match the other's.

// '5' === 5 // false (string and number are different data types)

// 3.   More Predictable:

// Because the strict equality operator requires an exact match of both value and data type, it's often considered more predictable and less error-prone.
// Using the strict equality operator is a best practice in JavaScript when you want to ensure that both the value and data type match in your comparisons. It helps avoid unexpected type coercion issues that can arise with the regular equality operator (==).

//    How do you use the logical NOT (!) operator in JavaScript?

// Answer

// The logical NOT (!) operator in JavaScript is used to negate or reverse the Boolean value of an expression or operand. It effectively converts true to false and false to true. Here's how you use it:

// const value = true;
// const negatedValue = !value;

// console.log(negatedValue); // Output: false

// In this example, !value negates the value of the value variable, changing true to false.

// You can also use the logical NOT operator to negate the truthiness or falsiness of non-Boolean values. In JavaScript, certain values are considered "falsy," including false, 0, '' (empty string), null, undefined, and NaN. All other values are considered "truthy."

// Here's an example of negating the truthiness of a non-Boolean value:

// const number = 0;
// const isTruthy = !number;

// console.log(isTruthy); // Output: false (0 is falsy)

// In this case, !number negates the truthiness of number, converting it from falsy to true.

// The logical NOT operator is often used in conditional statements, loops, and other situations where you need to reverse the Boolean value of an expression or condition.

//    What is the ternary (conditional) operator in JavaScript, and how is it used?

// Answer

// The ternary operator, also known as the conditional operator, is a concise way to write conditional expressions in JavaScript. It allows you to make decisions and assign values to a variable based on a condition. The ternary operator takes the following form:

// condition ? expressionIfTrue : expressionIfFalse

// Here's how it works:

// condition is the expression that is evaluated for its truthiness or falsiness.
// If condition is true, expressionIfTrue is executed and its result is returned.
// If condition is false, expressionIfFalse is executed and its result is returned.

// Here's an example of how to use the ternary operator:

// const age = 25;
// const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";

// console.log(canVote); // Output: "Yes, can vote"

// In this example:

// The condition age >= 18 is evaluated. If it's true (which it is in this case because age is 25), the first expression "Yes, can vote" is returned.
// If the condition is false, the second expression "No, cannot vote" is returned.
// You can use the ternary operator to make concise decisions in your code, such as assigning values based on conditions or rendering different content in templates and UI components. However, it's essential to use it judiciously to maintain code readability and avoid overly complex expressions.

//   How do you perform bitwise AND, OR, and XOR operations in JavaScript?

// Answer

// In JavaScript, you can perform bitwise AND (&), bitwise OR (|), and bitwise XOR (^) operations on integer values using the corresponding bitwise operators. Here's how they work:

// 1.   Bitwise AND (&):

// The bitwise AND operator compares each bit of two integers and returns a new integer where each bit is set to 1 only if the corresponding bits in both operands are 1.

// const result = 5 & 3; // Bitwise AND of 0101 (5) and 0011 (3)
// console.log(result); // Output: 1 (binary 0001)

// 2.   Bitwise OR (|):

// The bitwise OR operator compares each bit of two integers and returns a new integer where each bit is set to 1 if at least one of the corresponding bits in both operands is 1.

// const result = 5 | 3; // Bitwise OR of 0101 (5) and 0011 (3)
// console.log(result); // Output: 7 (binary 0111)

// 3.   Bitwise XOR (^):

// The bitwise XOR operator compares each bit of two integers and returns a new integer where each bit is set to 1 if the corresponding bits in the operands are different.

// const result = 5 ^ 3; // Bitwise XOR of 0101 (5) and 0011 (3)
// console.log(result); // Output: 6 (binary 0110)

// It's important to note that these bitwise operations work on the binary representation of integers and return the result as an integer. JavaScript automatically converts decimal numbers to their binary representation when performing these operations.

// You may also encounter the bitwise NOT operator (~), which inverts the bits of an integer, turning 0s into 1s and vice versa.

// const result = ~5; // Bitwise NOT of 0101 (5)
// console.log(result); // Output: -6 (binary 11111010 in two's complement)

// Bitwise operations are mainly used for low-level programming and tasks that involve manipulating individual bits within integers, such as working with flags or optimizing memory usage. They are not commonly used in everyday JavaScript programming.

//   What is the result of shifting bits to the left in JavaScript?

// Answer

// In JavaScript, shifting bits to the left using the left shift operator (<<) is a bitwise operation that moves the bits of an integer to the left by a specified number of positions. Each position shifted to the left effectively multiplies the integer by 2.

// Here's how it works:

// Given an integer x, if you perform x << n, where n is the number of positions to shift, it moves the binary representation of x to the left by n positions, padding with zeroes on the right.
// This operation is equivalent to multiplying x by 2 raised to the power of n.
// Here's an example:

// const x = 5; // Binary: 0101
// const n = 2; // Shift by 2 positions

// const result = x << n; // Shift left by 2 positions

// console.log(result); // Output: 20

// In this example, x << 2 shifts the bits of x two positions to the left, resulting in 010100, which is equivalent to the decimal value 20. So, the result of shifting bits to the left in JavaScript is effectively a multiplication by 2 raised to the power of the number of positions shifted.

//   How do you perform a bitwise NOT operation in JavaScript?

// Answer

// In JavaScript, you can perform a bitwise NOT operation using the bitwise NOT operator (~). The bitwise NOT operator inverts each bit of an integer, turning 0 bits into 1 and 1 bits into 0.

// Here's how it works:

// const x = 5; // Binary: 0101

// const result = ~x; // Bitwise NOT of 0101 (5)

// console.log(result); // Output: -6 (binary 11111010 in two's complement)

// In this example, ~x inverts each bit of the binary representation of 5, resulting in 11111010 in binary, which is equivalent to -6 in decimal using two's complement representation.

// The result of the bitwise NOT operation is a signed integer. It's important to note that the bitwise NOT operator inverts all the bits, including the sign bit, which can result in negative values when interpreting the inverted bits in two's complement representation.

//   What are assignment operators in JavaScript, and how do they differ from basic assignment (=)?

// Answer

// Assignment operators in JavaScript are used to assign values to variables. While the basic assignment operator (=) assigns a value to a variable, there are also compound assignment operators that combine assignment with an arithmetic or bitwise operation. These operators are used to modify the value of a variable and assign the result back to the variable in a single step.

// Here's a brief explanation of the basic assignment operator and some common compound assignment operators:

// 1.   Basic Assignment (=):

// The basic assignment operator assigns the value on the right side of the operator to the variable on the left side.

// let x = 5; // Assigns the value 5 to the variable x

// Compound Assignment Operators:

// Compound assignment operators combine an arithmetic or bitwise operation with assignment in a single step.
// They are often used to update the value of a variable based on its current value.

// let y = 10;

// y += 5; // Equivalent to y = y + 5; (y is now 15)
// y -= 3; // Equivalent to y = y - 3; (y is now 12)
// y *= 2; // Equivalent to y = y * 2; (y is now 24)

// Common compound assignment operators include +=, -=, *=, /=, %= (for arithmetic operations), &=, |= (for bitwise operations), and more.

// The main difference between basic assignment (=) and compound assignment operators is that compound assignment operators both perform an operation and assign the result to the variable in a single step, making the code more concise and often more efficient.

// Compound assignment operators are particularly useful when you want to increment or modify the value of a variable without having to reference the variable twice in the same line of code.

//   How do you check if a string contains a specific substring in JavaScript?

// Answer

// In JavaScript, you can check if a string contains a specific substring using various methods and techniques. Here are some common approaches:

// 1.   Using the includes() Method:

// The includes() method is a simple way to check if a string contains a substring. It returns true if the substring is found in the string, and false otherwise.

// const str = "Hello, world!";
// const substring = "world";

// if (str.includes(substring)) {
//   console.log("Substring found.");
// } else {
//   console.log("Substring not found.");
// }

// 2.   Using the indexOf() Method:

// The indexOf() method returns the index of the first occurrence of a substring in the string. If the substring is not found, it returns -1.

// const str = "Hello, world!";
// const substring = "world";

// if (str.indexOf(substring) !== -1) {
//   console.log("Substring found.");
// } else {
//   console.log("Substring not found.");
// }

// 3.   Using Regular Expressions:

// Regular expressions provide powerful pattern matching capabilities. You can use a regular expression to test if a string contains a specific substring.

// const str = "Hello, world!";
// const substring = "world";
// const regex = new RegExp(substring);

// if (regex.test(str)) {
//   console.log("Substring found.");
// } else {
//   console.log("Substring not found.");
// }

// 4.   Using startsWith() and endsWith() for Exact Matches:

// If you want to check if a string starts or ends with a specific substring, you can use the startsWith() and endsWith() methods.

// const str = "Hello, world!";
// const startsWithSubstr = "Hello";
// const endsWithSubstr = "world";

// if (str.startsWith(startsWithSubstr)) {
//   console.log("String starts with the substring.");
// }

// if (str.endsWith(endsWithSubstr)) {
//   console.log("String ends with the substring.");
// }

// Choose the method that best suits your specific needs, whether you're looking for an exact match or need more advanced pattern matching capabilities using regular expressions.

//   How do you use the Math object to perform mathematical operations in JavaScript?

// Answer

// The Math object in JavaScript provides a set of built-in properties and methods for performing various mathematical operations. You can use the Math object to perform operations like basic arithmetic, rounding, trigonometry, exponentiation, and more. Here's how you can use it:

// 1.   Basic Arithmetic Operations:

// You can use Math for basic arithmetic operations like addition, subtraction, multiplication, and division.

// const x = 5;
// const y = 3;

// const sum = Math.add(x, y);
// const difference = Math.subtract(x, y);
// const product = Math.multiply(x, y);
// const quotient = Math.divide(x, y);

// console.log(sum, difference, product, quotient);

// 2.  Rounding Methods:

// JavaScript's Math object provides methods for rounding numbers, including Math.round() (rounds to the nearest integer), Math.floor() (rounds down to the nearest integer), and Math.ceil() (rounds up to the nearest integer).

// const number = 3.75;

// const rounded = Math.round(number); // 4
// const floor = Math.floor(number); // 3
// const ceil = Math.ceil(number); // 4

// console.log(rounded, floor, ceil);

// 3.   Exponentiation and Square Roots:

// You can use Math.pow() to raise a number to a specified exponent and Math.sqrt() to calculate the square root of a number.

// const base = 2;
// const exponent = 3;

// const result = Math.pow(base, exponent); // 8
// const squareRoot = Math.sqrt(16); // 4

// console.log(result, squareRoot);

// 4.  Trigonometric Functions:

// JavaScript's Math object includes trigonometric functions like Math.sin(), Math.cos(), and Math.tan() for working with angles.

// const angleInRadians = Math.PI / 4; // 45 degrees in radians

// const sine = Math.sin(angleInRadians);
// const cosine = Math.cos(angleInRadians);
// const tangent = Math.tan(angleInRadians);

// console.log(sine, cosine, tangent);

// 5.   Constants:

// Math provides constants like Math.PI (π) and Math.E (Euler's number) for use in mathematical calculations.

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045

// These are just a few examples of the mathematical operations you can perform using the Math object in JavaScript. It's a versatile tool for a wide range of mathematical tasks, so consult the JavaScript documentation or resources for more details on specific operations and methods provided by Math.

//   What is the order of precedence for operators in JavaScript, and how does it affect expressions?

// Answer

// The order of precedence for operators in JavaScript determines the order in which operators are evaluated in expressions. It ensures that expressions are evaluated in a predictable and consistent manner. Operators with higher precedence are evaluated before operators with lower precedence. Here's a general overview of the order of precedence for common operators in JavaScript:

// 1.   Grouping (Parentheses): ()

// Expressions within parentheses are evaluated first.

// 2.   Exponentiation: **

// Exponentiation is performed right to left. For example, 2 ** 3 ** 2 is equivalent to 2 ** (3 ** 2), not (2 ** 3) ** 2.

// 3.   Negation (Unary Minus) and Bitwise NOT: - (unary), ~ (bitwise NOT)

// Unary minus and bitwise NOT operations are evaluated right to left.

// 4.   Multiplication, Division, and Remainder: *, /, %

// Multiplication, division, and remainder operations are evaluated left to right.

// 5.   Addition and Subtraction: +, -

// Addition and subtraction operations are evaluated left to right.

// 6.   Bitwise Shift: <<, >>, >>>

// Bitwise shift operations are evaluated left to right.

// 7.  Bitwise AND: &

// 8.  Bitwise XOR: ^

// 9.  Bitwise OR: |

// 10.   Comparison and Equality: <, >, <=, >=, instanceof, in, ==, !=, ===, !==

// Comparison and equality operations are evaluated left to right.

// 11.   Logical NOT: ! (logical NOT)

// 12.   Logical AND: && (logical AND)

// 13.   Logical OR: || (logical OR)

// 14.   Conditional (Ternary) Operator: ? :

// The conditional operator is evaluated from left to right.

// 15.   Assignment:  =, +=, -= and so on (all compound assignment operators)

// Operators with higher precedence are evaluated before operators with lower precedence. When operators have the same precedence, the associativity (whether they are evaluated from left to right or right to left) depends on the specific operator. For example, most binary arithmetic operators have left-to-right associativity.

// It's essential to be aware of the operator precedence rules when writing complex expressions to ensure that the expressions are evaluated as intended. You can also use parentheses to override the default precedence and explicitly specify the order of evaluation.

//   How do you convert a number to a string with a specific number of decimal places in JavaScript?

// Answer

// To convert a number to a string with a specific number of decimal places in JavaScript, you can use the toFixed() method or use Number.prototype.toLocaleString() with appropriate options. Here are both methods explained:

// 1.  Using toFixed() Method:

// The toFixed() method is a built-in method for numbers that allows you to specify the number of decimal places you want in the resulting string.

// const number = 123.45678;
// const decimalPlaces = 2;

// const formattedString = number.toFixed(decimalPlaces);

// console.log(formattedString); // Output: "123.46"

// In this example, toFixed(2) converts the number to a string with 2 decimal places.

// 2.   Using Number.prototype.toLocaleString():

// The toLocaleString() method can also be used to format numbers with a specific number of decimal places. You can pass options to specify the locale and the number of decimal places.

// const number = 123.45678;
// const decimalPlaces = 2;

// const formattedString = number.toLocaleString(undefined, {
//   minimumFractionDigits: decimalPlaces,
//   maximumFractionDigits: decimalPlaces,
// });

// console.log(formattedString); // Output: "123.46"

// In this example, toLocaleString() is used with the minimumFractionDigits and maximumFractionDigits options set to 2 to format the number with 2 decimal places.

// Both of these methods allow you to control the formatting of numbers as strings with the desired number of decimal places. Choose the method that best suits your requirements and formatting preferences.

//   How do you use the delete operator to remove properties from an object in JavaScript?

// Answer

// In JavaScript, you can use the delete operator to remove properties from an object. Here's how you use it:

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   // Use delete to remove a property
//   delete person.age;

//   console.log(person);

//   In this example, the delete operator is used to remove the age property from the person object. After the delete operation, the person object will no longer have the age property, and if you try to access person.age, it will return undefined.

//   It's important to note a few things about the delete operator:

// 1.    The delete operator returns true if the property is successfully deleted, and false if it fails (e.g., if the property is not configurable).

// const obj = { prop: "value" };
// const result = delete obj.prop; // Returns true

// 2.   The delete operator can only delete properties from an object, not variables or function names.

// 3.   The delete operator can be used with both own properties and inherited properties, but it won't delete properties defined as non-configurable using Object.defineProperty().

// 4.   It's not recommended to use the delete operator to remove elements from an array, as it can lead to unexpected behavior. Use array methods like splice() or pop() for removing elements from arrays.

// 5.   Be cautious when using delete in performance-critical code, as it may have performance implications, especially when used in a loop or with large objects.

// In general, while the delete operator is useful for removing properties from objects, it should be used with care and consideration of its behavior and potential impact on your code.

//   How do you check if an object has a specific property in JavaScript?

// Answer

// In JavaScript, you can check if an object has a specific property using various methods. Here are three common ways to perform this check:

// 1.  Using the in Operator:

// The in operator checks if an object has a specific property, either its own property or an inherited one. It returns true if the property exists and false otherwise.

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   if ("age" in person) {
//     console.log("The 'age' property exists in the object.");
//   } else {
//     console.log("The 'age' property does not exist in the object.");
//   }

//  2.    Using the hasOwnProperty() Method:

// The hasOwnProperty() method is a built-in method of objects that checks if an object has a specific property as its own property (not inherited).

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   if (person.hasOwnProperty("age")) {
//     console.log("The 'age' property exists in the object.");
//   } else {
//     console.log("The 'age' property does not exist in the object.");
//   }

// 3.    Using Optional Chaining (ES2020 and later):

//   You can use optional chaining (?.) to safely check for the existence of nested properties in modern JavaScript.

//   const person = {
//     name: "John",
//     address: {
//       city: "New York"
//     }
//   };

//   if (person.address?.city) {
//     console.log("The 'city' property exists in the object.");
//   } else {
//     console.log("The 'city' property does not exist in the object.");
//   }

//   Choose the method that best fits your specific use case. The in operator is suitable for checking both own and inherited properties, while hasOwnProperty() specifically checks for own properties. Optional chaining is useful for nested properties, and it helps prevent errors when accessing properties deep within an object.

//   How do you handle exceptions and errors in JavaScript using try...catch blocks?

// Answer

// In JavaScript, you can handle exceptions and errors using try...catch blocks. This allows you to gracefully handle unexpected errors that may occur during the execution of your code. Here's how try...catch blocks work:

// 1.    Try Block (try):

// Inside a try block, you place the code that you want to monitor for exceptions or errors. If an exception occurs within the try block, it is immediately caught and does not terminate the program's execution.

// try {
//     // Code that might throw an exception
//     const result = 10 / 0; // This will throw a division by zero error
//   } catch (error) {
//     // Code to handle the exception
//     console.error("An error occurred:", error.message);
//   }

// 2.   Catch Block (catch):

//   If an exception occurs within the try block, the control is transferred to the corresponding catch block.
//   The catch block receives an error object that contains information about the exception, including its message.
//   You can specify a variable (e.g., error in the example) to hold the error object.

// 3.    Finally Block (finally - Optional):

//   You can also include a finally block after the catch block. Code within the finally block is executed regardless of whether an exception occurred or not. It's often used for cleanup tasks.

//   try {
//     // Code that might throw an exception
//   } catch (error) {
//     // Code to handle the exception
//   } finally {
//     // Code that runs whether or not an exception occurred
//   }

//   Here are some important points to remember:

// *   You can have multiple catch blocks to handle different types of exceptions.

// try {
//     // Code that might throw an exception
//   } catch (error) {
//     if (error instanceof TypeError) {
//       console.error("Type error occurred:", error.message);
//     } else if (error instanceof RangeError) {
//       console.error("Range error occurred:", error.message);
//     } else {
//       console.error("An error occurred:", error.message);
//     }
//   }

// *  The error object has properties like name and message that provide information about the exception.

// *  Use throw to manually throw custom exceptions when needed.

// try {
//     if (somethingIsWrong) {
//       throw new Error("Custom error message");
//     }
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }

//  *  try...catch blocks are essential for handling exceptions and preventing them from crashing your application. They are commonly used when dealing with I/O operations, network requests, and other situations where errors can occur.

//   By using try...catch blocks effectively, you can write more robust and error-tolerant JavaScript code.
