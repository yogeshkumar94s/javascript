// let fname = "yogesh";

// console.log(typeof fname);
// console.log(typeof fname);

// let valueInNumber = Number(fname);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = "yogesh"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "yogesh" => true

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

//  //  interview Questions-------------------------------------------------

/*
1. What are the main types of operations in JavaScript?

Answer: In JavaScript, there are three main types of operations: arithmetic, comparison, and logical.

2. Explain the arithmetic operators in JavaScript.

Answer: Arithmetic operators are used for performing mathematical operations. They include + (addition), - (subtraction), * (multiplication), / (division), % (modulo), and ** (exponentiation).

3. What is the purpose of the modulo operator (%) in JavaScript?

Answer: The modulo operator returns the remainder of a division operation. For example, 5 % 2 equals 1 because 5 divided by 2 leaves a remainder of 1.

4. How does JavaScript handle division by zero?

Answer: Division by zero in JavaScript results in Infinity or -Infinity depending on the signs of the operands. For example, 1 / 0 returns Infinity.

5. Explain the concept of operator precedence in JavaScript.

Answer: Operator precedence determines the order in which operations are evaluated in an expression. JavaScript follows a set of rules to decide which operation to perform first.

6. What is the difference between the == and === operators in JavaScript?

Answer: == performs type coercion before comparison, while === performs strict equality comparison without type coercion.

7. What is the purpose of the unary plus (+) operator in JavaScript?

Answer: The unary plus operator is used to convert a value to a number data type. For example, +"42" returns the number 42.

8. Explain the difference between prefix and postfix increment/decrement operators (++ and --).

Answer: Prefix increment (++x) increments the value of x before using it in an operation. Postfix increment (x++) uses the value of x in the current operation and then increments it.

9. How do you concatenate strings in JavaScript?

Answer: Strings can be concatenated using the + operator or template literals (``). For example:

javascript

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
10. What is short-circuit evaluation in logical operations?

Answer: Short-circuit evaluation is a process where the second operand of a logical expression is not evaluated if the first operand already determines the outcome.

11. What are bitwise operators in JavaScript?

Answer: Bitwise operators manipulate binary representations of numbers. They include & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), and >> (right shift).

12. Explain the typeof operator in JavaScript and provide an example.

Answer: The typeof operator is used to determine the data type of a value. For example:

javascript

let x = 42;
console.log(typeof x); // Output: "number"
13. What is the purpose of the conditional (ternary) operator ? : in JavaScript?

Answer: The conditional operator allows for conditional expressions. It evaluates a condition and returns one of two values based on whether the condition is true or false.

14. What is the difference between && and || in logical operations?

Answer: && is the logical AND operator, which returns true if both operands are true. || is the logical OR operator, which returns true if at least one of the operands is true.

15. How do you compare two objects for equality in JavaScript?

Answer: In JavaScript, two objects are considered equal if they reference the same memory location. You can use deep comparison functions or libraries for more complex comparisons.

16. Explain the purpose of the in operator in JavaScript.

Answer: The in operator is used to check if a property exists in an object. For example:

javascript

let person = { name: "John", age: 30 };
console.log("name" in person); // Output: true
17. What is the difference between unary and binary operators in JavaScript?

Answer: Unary operators operate on a single operand, while binary operators operate on two operands.

18. What is the purpose of the bitwise NOT operator ~ in JavaScript?

Answer: The bitwise NOT operator inverts the bits of a number, effectively returning the one's complement.

19. How can you concatenate arrays in JavaScript?

Answer: You can use the concat() method or the spread (...) operator to concatenate arrays. For example:

javascript

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = arr1.concat(arr2);
20. What is the purpose of the void operator in JavaScript?

Answer: The void operator evaluates an expression and returns undefined. It is often used to prevent navigation when a link is clicked.
*/
// -----------------------------------------------------------------------------------------------------
// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = " yogesh "

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

// ----------------Increment (++)--------------

/*
The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.
*/

let x = 3;
const y = x++; // y ki value 3 hi rahegi kyuki increment baad mai hua hai

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // b ki value 4 ho jayegi

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// -----------------comparison---------------------------

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===

// console.log("2" === 2);

// // interview Questions // --------------------------------------------------------------------------
/*
1. What is data type conversion in JavaScript?

Answer: Data type conversion in JavaScript refers to the process of changing a value from one data type to another, such as converting a string to a number or an object to a string.

2. What is the difference between implicit and explicit data type conversion?

Answer: Implicit conversion, also known as type coercion, is done automatically by JavaScript when performing operations with different data types. Explicit conversion, on the other hand, is done explicitly by the developer using functions like parseInt(), String(), or Number().

3. How can you convert a string to a number in JavaScript?

Answer: You can convert a string to a number using functions like parseInt(), parseFloat(), or by using the + operator. For example:

javascript

let str = "123";
let num = parseInt(str);
4. How can you convert a number to a string in JavaScript?

Answer: You can convert a number to a string using the String() constructor or by concatenating it with an empty string (""). For example:

javascript

let num = 123;
let str = String(num);
5. Explain type coercion in JavaScript.

Answer: Type coercion is an automatic conversion of values between different data types when performing operations. For example, 1 + "2" results in the string "12" due to type coercion.

6. What is the parseInt() function, and when should you use it?

Answer: parseInt() is a JavaScript function used to parse a string and extract an integer from it. It should be used when you want to convert a string to an integer.

7. How can you convert a value to a boolean in JavaScript?

Answer: You can convert a value to a boolean using the double negation operator (!!) or the Boolean() constructor. For example:

javascript

let value = "Hello";
let isTrue = !!value;
8. What is type casting in JavaScript?

Answer: Type casting is the process of explicitly converting a value from one data type to another, typically using functions or operators.

9. Explain the concept of truthy and falsy values in JavaScript.

Answer: Truthy values are values that are considered as true when used in a boolean context, while falsy values are considered as false. Examples of falsy values include false, 0, null, undefined, and empty strings.

10. How can you check the data type of a variable in JavaScript?

Answer: You can use the typeof operator to check the data type of a variable. For example:

javascript

let x = 42;
console.log(typeof x); // Output: "number"
11. What is the difference between == and === in JavaScript?

Answer: == performs type coercion, converting operands to a common type before comparison, while === performs strict equality comparison without type coercion.

12. How can you convert an object to a JSON string in JavaScript?

Answer: You can use the JSON.stringify() method to convert an object to a JSON string. For example:

javascript

let obj = { name: "John", age: 30 };
let jsonString = JSON.stringify(obj);
13. Explain the parseFloat() function and when it should be used.

Answer: parseFloat() is a JavaScript function used to parse a string and extract a floating-point number from it. It should be used when you want to convert a string to a floating-point number.

14. What is type safety in JavaScript, and how does it relate to data type conversion?

Answer: Type safety refers to the ability of a programming language to prevent or handle unintended data type conversions. JavaScript is loosely typed, which means it is less type-safe compared to strongly typed languages.

15. How can you convert a boolean to a string in JavaScript?

Answer: You can convert a boolean to a string using the String() constructor or by concatenating it with an empty string (""). For example:

javascript

let bool = true;
let str = String(bool);
16. What is the Number() constructor, and how is it used for data type conversion?

Answer: The Number() constructor is used to explicitly convert a value to a number data type. It can be used to convert strings or other values to numbers.

17. What is the difference between parseInt() and parseFloat()?

Answer: parseInt() extracts and converts a whole number from a string, while parseFloat() extracts and converts a floating-point number, allowing decimal values.

18. How can you convert a string containing a JSON object to a JavaScript object?

Answer: You can use the JSON.parse() method to convert a JSON string to a JavaScript object. For example:

javascript

let jsonString = '{"name":"John","age":30}';
let obj = JSON.parse(jsonString);
19. What are some common pitfalls when dealing with type conversion in JavaScript?

Answer: Common pitfalls include unexpected results due to type coercion, NaN (Not-a-Number) values resulting from invalid conversions, and unintentional loss of data precision.

20. How can you prevent unexpected type coercion in JavaScript?

Answer: To prevent unexpected type coercion, use the strict equality operator === when comparing values to ensure both the value and type match.
*/
