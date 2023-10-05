"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser  // alert and prompt - node js env mai kaam nhi krega

console.log(3 + 3); // code readability should be high

console.log("yogesh");

let name = "yogesh";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//////////////-------------------//////////////-----------------------

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n

// --------------------Reference type (Non primitive data types)--------------

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "yogesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//----------typeof Operator Results----------------------------------

/*
Type of val	                                          --    Result

Undefined	                                          --    "undefined"
Null	                                              --    "object"
Boolean              	                              --    "boolean"
Number	                                              --    "number"
String              	                              --    "string"
Object(native and does not implement [[Call]])	      --    "object"
Object(native or host and does implement [[Call]])    --    "function"
Object(host and does not implement [[Call]])	      --    Implementation-defined except may not be "undefined", "boolean", "number", or "string".

*/

// // interview questions // ----------------

/*


1. What are data types in JavaScript?

Answer: Data types in JavaScript are classifications that specify which type of value a variable can hold. JavaScript has six primitive data types and one reference data type.

2. List the primitive data types in JavaScript.

Answer: The primitive data types in JavaScript are:

Number
String
Boolean
Undefined
Null
Symbol (ES6)
3. What is the purpose of the typeof operator in JavaScript?

Answer: The typeof operator is used to determine the data type of a value or variable. For example, typeof 42 returns "number".

4. Explain the difference between dynamic and static typing.

Answer: JavaScript uses dynamic typing, which means that variables can change their data type during runtime. In contrast, static typing enforces data types at compile time, and variables cannot change their types.

5. How can you check if a variable is of a specific data type in JavaScript?

Answer: You can use the typeof operator to check the data type, or you can compare the value's constructor with the data type's constructor. For example:

javascript

typeof myVar === 'string'; // Check if myVar is a string
6. What is the difference between null and undefined in JavaScript?

Answer: null represents the intentional absence of any object value, while undefined signifies a variable that has been declared but not assigned a value.

7. What is a symbol data type in JavaScript, and how is it used?

Answer: The Symbol data type, introduced in ES6, represents a unique and immutable value. Symbols are often used to create private object properties and avoid naming conflicts.

8. How can you create a symbol in JavaScript?

Answer: You can create a symbol using the Symbol() constructor, like this:

javascript

const mySymbol = Symbol('description');
9. What is type coercion in JavaScript?

Answer: Type coercion is the automatic conversion of values from one data type to another when performing operations. JavaScript performs type coercion to make operations possible, which can lead to unexpected results.

10. Explain the concept of truthy and falsy values in JavaScript.

Answer: Truthy values are values that are considered as true when used in a boolean context, while falsy values are considered as false. Examples of falsy values include false, 0, null, undefined, and empty strings.

11. How can you convert a value to a boolean in JavaScript?

Answer: You can use the double negation operator (!!) or the Boolean() constructor to convert a value to a boolean. For example:

javascript

let value = "Hello";
let isTrue = !!value; // isTrue will be true
12. What are reference data types in JavaScript?

Answer: Reference data types in JavaScript are objects that do not hold their data directly but instead reference a location in memory. These include objects, arrays, functions, and more.

13. Explain the difference between primitive and reference data types.

Answer: Primitive data types are immutable and stored by value, while reference data types are mutable and stored by reference. Changing a reference data type affects all references to it.

14. How do you check if two objects are equal in JavaScript?

Answer: In JavaScript, two objects are considered equal if they reference the same memory location. You can check their equality using strict equality (===) or by comparing specific properties if needed.

15. What is the NaN value in JavaScript, and how is it handled?

Answer: NaN stands for "Not-a-Number" and represents an undefined or unrepresentable value in JavaScript. You can check for NaN using the isNaN() function.

16. Explain the difference between undefined and null in JavaScript.

Answer: undefined means a variable has been declared but has no assigned value, while null is an intentional absence of any object value.

17. How can you convert a string to a number in JavaScript?

Answer: You can convert a string to a number using functions like parseInt() or parseFloat(), or by using the unary plus (+) operator.

18. What is the instanceof operator, and how is it used?

Answer: The instanceof operator is used to check if an object is an instance of a particular constructor or class. It returns true or false.

19. What are the limitations of the typeof operator in JavaScript?

Answer: The typeof operator has some limitations, such as returning "object" for objects and arrays. It doesn't distinguish between different types of objects.

20. Can you change the data type of a variable in JavaScript?

Answer: Yes, JavaScript allows dynamic typing, which means you can change the data type of a variable by assigning a value of a different type to it.


*/
