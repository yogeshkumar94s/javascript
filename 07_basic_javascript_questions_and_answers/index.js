// 1. What is JavaScript?

// JavaScript is a high-level, interpreted scripting language used primarily for building interactive web applications.

// 2. What are the key features of JavaScript?

// Dynamically typed, interpreted, single-threaded, and event-driven.

// 3. What is the latest version of JavaScript (ECMAScript)?

// As of my last knowledge update, ES2021 (ES12) was the latest version. However, JavaScript continues to evolve, so check for updates.

// 4. What are the data types in JavaScript?

// Primitive data types: string, number, boolean, null, undefined, symbol (ES6), bigint (ES11).
// Reference data types: object, array, function.

// 6. What's the difference between let, const, and var?

// let and const have block scope, while var has function scope. const cannot be reassigned, but let and var can.

// 8. What is a closure in JavaScript?

// A closure is a function that has access to variables from its containing (enclosing) function, even after the outer function has finished executing.

// 9. What is a callback function in JavaScript?

// A callback function is a function passed as an argument to another function, which is then invoked after the main function's operation is complete.

// 10. What is a promise in JavaScript?

// - A promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more elegantly.

// 11. What is the event loop in JavaScript?

// - The event loop is a mechanism that allows JavaScript to handle asynchronous operations by queuing and executing functions in the call stack.

// 12. What is the this keyword in JavaScript?

// - this refers to the object that is currently executing a function or the object to which a method belongs.

// 13. What are arrow functions in JavaScript?

// - Arrow functions are a concise way to write anonymous functions. They have a shorter syntax and do not have their own this binding.

// 14. How do you create an object in JavaScript?

// - You can create objects using object literals, constructor functions, or the ES6 class syntax.

// 15. Explain what is meant by "hoisting" in JavaScript.

// - Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during compilation.

// 16. What is the difference between == and === in JavaScript?

// - == is used for loose equality and performs type coercion. === is used for strict equality and does not perform type coercion.

// 19. How do you iterate through an array in JavaScript?

// - You can use loops like for, for...of, or array methods like forEach, map, filter, and reduce.

// 20. What is the difference between null and undefined?

// - null represents the intentional absence of any object value.
// - undefined represents an uninitialized or missing value.

// 21. How do you check if a variable is null or undefined in JavaScript?

// - You can use strict equality (===) to check if a variable is null or undefined.

// 22. What is a template literal in JavaScript?

// - A template literal is a string literal that allows you to embed expressions inside it using ${}. For example: `Hello, ${name}!`.

// 23. What is the purpose of the try...catch statement in JavaScript?

// - try...catch is used to handle exceptions (errors) that may occur in a block of code. It allows you to gracefully handle errors without crashing the program.

// 26. What is an immediately invoked function expression (IIFE) in JavaScript?

// - An IIFE is a function that is defined and executed immediately after being created. ---- It's often used to create a private scope for variables.

// 27. What is the purpose of the map function in JavaScript?

// - The map function is used to create a new array by applying a function to each element of an existing array.

// 28. How do you prevent a specific event from bubbling up in the DOM hierarchy?

// - You can use the event.stopPropagation() method to stop the event from bubbling further up the DOM.

// 29. What is the purpose of the localStorage and sessionStorage objects in JavaScript?

// - They provide a way to store key-value pairs locally in a user's browser. localStorage persists even after the browser is closed, while sessionStorage is cleared when the session ends.

// 30. How do you deep-clone an object in JavaScript?

// - You can use libraries like Lodash or write custom code using recursion to deep-clone an object.

// 31. What is the difference between nullish coalescing (??) and the OR operator (||)?

// - ?? returns the right-hand operand when the left-hand operand is null or undefined, whereas || returns the right-hand operand if the left-hand operand is falsy.

// 32. What are rest and spread operators in JavaScript?

// - The rest operator (...) is used to gather the remaining parameters of a function into an array. The spread operator (...) is used to expand an array or object into individual elements.

// 34. Explain the concept of prototypal inheritance in JavaScript.

// - In JavaScript, objects can inherit properties and methods from other objects. Each object has a prototype, and if a property or method is not found on the object itself, JavaScript looks up the prototype chain to find it.

// 35. How do you convert a string to a number in JavaScript?

// - You can use functions like parseInt(), parseFloat(), or the Number() constructor.

// 36. How can you remove an element from an array in JavaScript?

// - You can use methods like splice(), filter(), or the pop() method.

// 37. What is the purpose of the fetch API in JavaScript?

// - The fetch API is used to make network requests and fetch resources from a server. It is a modern replacement for the older XMLHttpRequest method.

// 38. What is the async/await feature in JavaScript?

// - async/await is a feature that simplifies working with asynchronous code. It allows you to write asynchronous code in a more synchronous style.

// 39. What is the purpose of the Array.isArray() method in JavaScript?

// - Array.isArray() is used to check if an object is an array. It returns true if the object is an array, otherwise false.

// 40. What is a callback hell or pyramid of doom in JavaScript?

// - Callback hell occurs when multiple nested callbacks are used, leading to deeply indented and hard-to-read code. It can be mitigated using techniques like Promises or async/await.

// 41. How can you create a JavaScript Date object for a specific date and time?

// - You can use the new Date(year, month, day, hours, minutes, seconds, milliseconds) constructor.

// 42. What is the window object in the browser environment?

// - The window object represents the browser window and is the global object in the browser's JavaScript environment. It contains properties and methods related to the browser.

// 43. How can you detect the user's browser in JavaScript?

// - You can use the navigator object and its properties like navigator.userAgent to determine the user's browser.

// 46. What is a generator function in JavaScript?

// - A generator function is a special type of function that can pause its execution and later resume it, allowing for asynchronous-like behavior.

// 47. How can you clone an array in JavaScript?

// - You can clone an array using methods like slice(), concat(), or the spread operator ([...arr]).

// 48. What is the purpose of the JavaScript Object.assign() method?

// - Object.assign() is used to copy the values of all enumerable properties from one or more source objects to a target object.

// 49. How do you define and handle errors in JavaScript?

// - You can use the try...catch statement to handle errors, and you can throw custom errors using the throw statement.

// 50. What is destructuring in JavaScript?

// - Destructuring allows you to extract values from objects and arrays into individual variables, making it easier to work with data.

// 51. Explain the "strict mode" in JavaScript.

// - Strict mode is a way to opt in to a restricted version of JavaScript that disallows certain actions and provides enhanced error handling.

// 52. How can you prevent the default behavior of an event in JavaScript?

// - You can use the event.preventDefault() method within an event handler to prevent the default action of an event, such as form submission or anchor link navigation.

// 54. How do you create a timer or delay in JavaScript?

// - You can use setTimeout() or setInterval() functions to create timers and delays.

// 55. What is the purpose of the arguments object in JavaScript functions?

// - The arguments object is an array-like object that allows you to access all the arguments passed to a function, even if they are not explicitly named in the function's parameter list.

// 56. What is the purpose of the indexOf() and lastIndexOf() methods in JavaScript?

// - indexOf() is used to find the index of the first occurrence of a specified value in an array. lastIndexOf() finds the index of the last occurrence of a specified value.

// 57. How do you convert a JSON string to a JavaScript object and vice versa?

// - Use JSON.parse() to convert a JSON string to a JavaScript object and JSON.stringify() to convert a JavaScript object to a JSON string.

// 58. What is event delegation in JavaScript?

// - Event delegation is a technique where you attach a single event listener to a common ancestor of multiple elements, allowing you to handle events on multiple child elements efficiently.

// 59. What is the purpose of the Array.from() method in JavaScript?

// - Array.from() is used to create a new array from an iterable object (e.g., an array-like object or a string).

// 60. How can you add, remove, and toggle CSS classes in JavaScript?

// - Use the classList property and its methods, such as add(), remove(), and toggle(), to manipulate CSS classes.

// 62. What is the purpose of the Array.filter() method in JavaScript?

// - Array.filter() is used to create a new array with all elements that pass a test provided as a function.

// 63. How can you reverse a string in JavaScript?

// - You can use various methods, including the split() and reverse() methods or a simple loop.

// 64. What is the purpose of the Math object in JavaScript?

// - The Math object provides mathematical functions and constants, such as Math.random(), Math.sqrt(), and Math.PI.

// 66. How do you create a new element in the DOM using JavaScript?

// - You can use the document.createElement() method to create a new element, and then you can append it to the DOM using methods like appendChild().

// 67. What is the purpose of the async/await feature in JavaScript?

// Answer: async/await is used to simplify working with asynchronous code, making it easier to write and understand asynchronous operations.

// 68. How do you handle asynchronous code in JavaScript?

// Answer: Asynchronous code is often handled using callbacks, promises, async/await, or event listeners, depending on the use case.

// 69. What is the difference between a for loop and a while loop in JavaScript?

// Answer: A for loop is typically used when the number of iterations is known in advance, while a while loop is used when the condition for continuation is evaluated at each iteration.

// 70. Explain the concept of scope in JavaScript.

// Answer: Scope refers to the context in which variables are declared and accessed. Variables can have global or local scope, and inner scopes have access to outer scopes.

// 71. What is a JavaScript object, and how is it different from an array?

// Answer: An object is a collection of key-value pairs, while an array is an ordered list of values. Objects use keys for access, and arrays use numeric indices.

// 72. Explain the purpose of the JSON object in JavaScript.

// Answer: The JSON object is used to parse and stringify JavaScript Object Notation (JSON) data, making it easy to exchange data between a server and a web application.

// 73. How do you compare two objects for equality in JavaScript?

// Answer: Objects are compared by reference, so two objects with the same properties and values are not considered equal. To compare their contents, you need to iterate through their properties and compare them manually.

// 74. Explain the purpose of the for...in and for...of loops in JavaScript.

// Answer: for...in is used to iterate over the properties of an object, while for...of is used to iterate over the values of an iterable object like an array.
