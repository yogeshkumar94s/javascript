const userEmail = "y@google.ai";

if (userEmail) {
  // here userEmail is a truthy value
  console.log("got user email");
} else {
  console.log("don't have user email");
}

// ---------------falsy values------------

// false, 0, -0, bigint 0n, "", null, undefined, NaN

//-----------------truthy values----------------

// "0", 'falsy', ' ', [], {}, function() {}

// ------------check if an array is empty-----------------------

const myArray = [];

if (myArray.length === 0) {
  console.log("array is empty");
} else {
  console.log("array is not empty");
}

// -------------to chech if an object is empty------------------

const myObject = {};

if (Object.keys(myObject).length === 0) {
  console.log("object is empty");
} else {
  console.log("object is not empty");
}

// -------------nullish coalescing operator (??) : null  undefined----------

let val1;
// val1 = 5 ?? 10;     // val1 will be 5
// val1 = null ?? 10      // val1 will be 10
// val1 = undefined ?? 10 ?? 20;     // val1 will be 10

// console.log(val1);

// ------------ternary operator------------

// condition ? true : false

const iceTeaPrice = 10;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

//  // Interview Questions----------------------------------------
/*
1. What are truthy and falsy values in JavaScript?

Answer: In JavaScript, values are evaluated as either truthy or falsy based on their inherent boolean interpretation. Truthy values are considered true in a boolean context, while falsy values are considered false.

2. List some examples of truthy values in JavaScript.

Answer: Truthy values include non-empty strings, non-zero numbers, objects, arrays, functions, and other non-falsy values.

3. What are some examples of falsy values in JavaScript?

Answer: Falsy values include empty strings (""), the number 0, null, undefined, NaN, false, and document.all (a browser-specific value).

4. How do truthy and falsy values impact conditional statements in JavaScript?

Answer: Conditional statements rely on the truthiness or falsiness of values to determine which code path to execute. For example, in an "if" statement, a truthy condition executes the associated code block, while a falsy condition does not.

5. How can you check if a value is truthy in JavaScript?

Answer: You can check if a value is truthy by simply using it in a boolean context. For example, if (value) will evaluate to true if value is truthy.

6. How can you check if a value is falsy in JavaScript?

Answer: You can check if a value is falsy by using the logical NOT operator !. For example, if (!value) will evaluate to true if value is falsy.

7. What is the difference between the equality operator (==) and the strict equality operator (===) with respect to truthy and falsy values?

Answer: The equality operator (==) performs type coercion and may consider values of different types as equal if their converted values match (e.g., 0 == false is true). The strict equality operator (===) checks both value and type, ensuring a more precise comparison (e.g., 0 === false is false).

8. How can you use short-circuiting with truthy and falsy values in JavaScript?

Answer: Short-circuiting is a technique that takes advantage of the behavior of logical operators (&& and ||) to conditionally execute code. For example, value && doSomething() will only call doSomething() if value is truthy.

9. What is the result of combining logical AND (&&) and logical OR (||) operators with truthy and falsy values?

Answer: Logical AND (&&) returns the first falsy value encountered or the last truthy value if all values are truthy. Logical OR (||) returns the first truthy value encountered or the last falsy value if all values are falsy.

10. Explain the concept of "truthy coalescing" using the nullish coalescing operator (??).

Answer: The nullish coalescing operator (??) returns the first truthy value from a list of values, excluding null and undefined. It provides a way to select the first non-null, non-undefined value.

11. What is the difference between null and undefined in terms of truthy and falsy values?

Answer: Both null and undefined are falsy values, but they are distinct. null represents the intentional absence of any object value, while undefined indicates that a variable has been declared but has not been assigned a value.

12. How do you handle situations where you need to differentiate between null, undefined, and other falsy values?

Answer: To differentiate between null, undefined, and other falsy values, you can use strict equality (===) or the nullish coalescing operator (??) to handle null and undefined cases separately.

13. What are some common scenarios where understanding truthy and falsy values is crucial in JavaScript programming?

Answer: Understanding truthy and falsy values is crucial when working with conditional statements, handling function return values, validating user input, and dealing with default values.

14. Can you change the truthiness or falsiness of a value in JavaScript?

Answer: No, you cannot change the inherent truthiness or falsiness of a value in JavaScript. Values have fixed truthy or falsy characteristics based on their type and content.

15. How can you handle cases where you want to treat empty strings as falsy values while still considering non-empty strings as truthy?

Answer: You can explicitly check for empty strings using the condition if (str === '') to treat them as falsy while using if (str) to consider non-empty strings as truthy.

16. What is the behavior of the !! double NOT operator in JavaScript, and how is it used to coerce values into boolean form?

Answer: The !! double NOT operator is used to explicitly convert a value into its boolean form. It negates the negation and effectively coerces a value into true (if truthy) or false (if falsy).

17. What is the role of truthy and falsy values in short-circuit evaluation, and how does it impact the execution of code with logical operators?

Answer: In short-circuit evaluation, logical operators (&& and ||) rely on the truthiness or falsiness of values to determine whether to proceed with evaluating subsequent expressions. This behavior allows for efficient conditional execution.

18. How do truthy and falsy values impact the behavior of functions that return values in JavaScript?

Answer: Functions that return values can return truthy or falsy values. Understanding these values is important when using function return values to make decisions or perform further operations.

19. Can you provide an example of using truthy and falsy values to provide default values in function parameters?

Answer: Yes, here's an example:

javascript

function greet(name) {
  name = name || 'Guest';
  console.log(`Hello, ${name}!`);
}
greet(); // Outputs: "Hello, Guest!"
greet('Alice'); // Outputs: "Hello, Alice!"
20. How can you ensure that a value is both truthy and of a specific type (e.g., a non-empty string)?

Answer: To ensure that a value is both truthy and of a specific type, you can use a combination of type checking and truthiness checks. For example:

javascript

if (typeof value === 'string' && value !== '') {
  // Code for a non-empty string value
}
*/
