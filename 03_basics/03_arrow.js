const user = {
  username: "yogesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // this refers the current context
    // console.log(this)
  },
};

// user.welcomeMessage()    //   will print - yogesh , welcome to website

user.username = "yogee";

// user.welcomeMessage()      //  will print - yogee , welcome to website

console.log(this); //  currently we are in node environment so this will print an empty object.

// If we console.log(this) in browser this will print a window Object.

// -----------Arrow Function--------------

// const addTwo = (num1, num2) => {
//    const total = num1 + num2
//    return total
// }

// console.log(addTwo(25, 66))

// const addTwo = (num1, num2) => num1 + num2      // implicit return

// console.log(addTwo(5, 6))

// --------Interview questions--------------------------------------------------------------------------

/*
1. What is an arrow function in JavaScript, and how is it different from a regular function?

Answer: An arrow function is a more concise way to define functions in JavaScript. It has a shorter syntax and automatically captures the value of this from its surrounding context. Unlike regular functions, arrow functions are always anonymous.

2. How do you define an arrow function in JavaScript?

Answer: You define an arrow function using the arrow (=>) syntax. For example: (param1, param2) => expression.

3. Explain the difference in behavior of the this keyword between regular functions and arrow functions.

Answer: In regular functions, the value of this depends on how the function is called. In arrow functions, this is lexically scoped and captures the value of this from the surrounding context in which the arrow function is defined.

4. When are arrow functions most useful in JavaScript code?

Answer: Arrow functions are most useful when you need a concise way to define simple functions, especially for callback functions and when you want to maintain the value of this from an outer context.

5. Can arrow functions have multiple parameters, and how do you define them?

Answer: Yes, arrow functions can have multiple parameters. You define them within parentheses. For example: (param1, param2) => expression.

6. How do you handle single-line arrow functions that have no curly braces {}?

Answer: Single-line arrow functions with no curly braces implicitly return the result of the expression. For example: (x, y) => x + y returns the sum of x and y.

7. What is the purpose of the return keyword in arrow functions?

Answer: In single-line arrow functions, the return keyword is not required to return a value. However, in multi-line arrow functions, you can use return to specify the value to be returned explicitly.

8. Can arrow functions be used as constructors to create objects?

Answer: No, arrow functions cannot be used as constructors to create objects. They lack the prototype property and cannot be called with new.

9. How do you pass default parameter values to arrow functions?

Answer: You can pass default parameter values to arrow functions by providing them in the parameter list. For example: (param1 = defaultValue) => expression.

10. Can arrow functions have rest parameters, and how are they defined?

Answer: Yes, arrow functions can have rest parameters, which are defined using the spread (...) syntax. For example: (param1, ...rest) => expression.

11. What are the limitations of arrow functions compared to regular functions?

Answer: Arrow functions are not suitable for all scenarios. They cannot be used as methods in objects, lack their own arguments object, and cannot be used for dynamic this binding.

12. How do you define an arrow function that takes no parameters?

Answer: You can define an arrow function that takes no parameters by providing empty parentheses. For example: () => expression.

13. Explain the benefits of arrow functions when working with callback functions.

Answer: Arrow functions are concise and capture the surrounding context's this value, making them a natural choice for callback functions. They reduce the need for explicit binding and provide cleaner syntax.

14. Can arrow functions be used for asynchronous operations with async and await?

Answer: Yes, arrow functions can be used for asynchronous operations with async and await. They work well in combination with async functions.

15. How do you return an object literal from an arrow function without wrapping it in parentheses?

Answer: To return an object literal from an arrow function without wrapping it in parentheses, you can use the following syntax: () => ({ key: value }).

16. What happens if you try to use the arguments object inside an arrow function?

Answer: Arrow functions do not have their own arguments object. If you try to use arguments inside an arrow function, it will reference the arguments of the enclosing function or become undefined if there is none.

17. How can you use the rest parameter in an arrow function to handle an arbitrary number of arguments?

Answer: You can use the rest parameter in an arrow function to collect an arbitrary number of arguments into an array. For example: (param1, ...rest) => { /* rest is an array of additional arguments 

18. Explain the concept of "lexical scoping" and how it applies to arrow functions.

Answer: Lexical scoping means that variable and this binding in arrow functions is based on the surrounding code's context rather than how the function is called. Arrow functions capture these values from their outer scope lexically.

19. When might it be more appropriate to use a regular function over an arrow function in JavaScript code?

Answer: You might prefer regular functions over arrow functions when you need to create methods on objects, define functions with their own this binding, or use the arguments object.

20. What are the potential downsides of using arrow functions in JavaScript code?

Answer: While arrow functions are concise and convenient in many cases, they are not suitable for all scenarios, particularly when you need dynamic this binding, object methods, or access to the arguments object. Overusing arrow functions can lead to unexpected behavior in these cases.

*/

// --------------IIFE--------------------------------------------------------------------------------

// function coffee() {
//     console.log('DB CONNECTED')
// }
// coffee()

//  Global scope ke pollution se problems create hoti hai

// isse bachne ke liye IIFE ka use karte hai

// (function coffee() {
//     console.log('DB CONNECTED')
// }) ();

// // -----------Interview questions----------------------

/*
1. What is an IIFE in JavaScript, and what does the acronym stand for?

Answer: An IIFE stands for "Immediately Invoked Function Expression." It is a JavaScript design pattern that involves defining and immediately executing a function expression.

2. How do you write an IIFE in JavaScript?

Answer: You can write an IIFE by enclosing a function expression in parentheses and immediately invoking it with an additional set of parentheses. For example: (function() {  code here  })();.

3. What is the purpose of using an IIFE in JavaScript?

Answer: The primary purpose of an IIFE is to create a private scope for variables and functions. It helps avoid variable name conflicts, prevents global pollution, and allows for encapsulation of code.

4. Can you pass arguments to an IIFE? If so, how?

Answer: Yes, you can pass arguments to an IIFE by providing them within the inner set of parentheses. For example: (function(arg1, arg2) {  code here  })(value1, value2);.

5. What is the return value of an IIFE, and how can you capture it?

Answer: An IIFE can return a value, and you can capture it by assigning the IIFE to a variable. For example: let result = (function() { return 42; })();.

6. How does an IIFE help with variable scoping in JavaScript?

Answer: An IIFE creates a private scope for variables inside it. Variables declared inside an IIFE are not accessible from the outside, preventing global scope pollution and conflicts.

7. Can you use the let and const keywords inside an IIFE for block-level scope?

Answer: Yes, you can use let and const inside an IIFE to create variables with block-level scope, which was introduced in ECMAScript 6 (ES6).

8. Why might you choose to use an IIFE instead of a regular function in your code?

Answer: You might choose to use an IIFE when you need to create a self-contained scope for a specific task, avoid polluting the global scope, and encapsulate code that doesn't need to be reused elsewhere.

9. Can you nest IIFEs within each other? If so, what are the implications?

Answer: Yes, you can nest IIFEs within each other. This allows you to create multiple levels of private scopes. However, it can lead to code that is harder to read and maintain, so it should be used judiciously.

10. What are the common use cases for IIFEs in JavaScript code?

Answer: Common use cases for IIFEs include creating private variables, avoiding global variable conflicts, initializing modules, and managing code execution in a controlled manner.

11. How can you achieve asynchronous behavior within an IIFE in JavaScript?

Answer: You can use asynchronous functions like setTimeout or fetch inside an IIFE to achieve asynchronous behavior. Just ensure that the IIFE handles asynchronous operations correctly, such as using callbacks, promises, or async/await.

12. Can you create named IIFEs, or are they always anonymous?

Answer: IIFEs are typically anonymous functions, but you can give them a name if needed. However, named IIFEs are less common and less useful than anonymous ones.

13. What is the difference between the following two IIFE syntaxes: (function() {})(); and (function() {})();?

Answer: There is no practical difference between the two syntaxes. Both are valid ways to create and invoke an IIFE, and the choice between them is a matter of coding style.

14. How can you pass external dependencies (e.g., libraries) into an IIFE to make them available inside the IIFE's scope?

Answer: You can pass external dependencies as arguments to an IIFE and use them within the IIFE's scope. This pattern is often used in module systems.

15. What is the self-executing function pattern, and how does it relate to IIFEs?

Answer: The self-executing function pattern is another name for IIFEs. It involves defining and immediately executing a function expression to create a private scope.

16. How do you handle errors and exceptions within an IIFE?

Answer: You can handle errors and exceptions within an IIFE by using try-catch blocks or by returning error information from the IIFE, depending on your specific use case.

17. Can IIFEs be used in browser environments and Node.js environments alike?

Answer: Yes, IIFEs can be used in both browser and Node.js environments, as they are a JavaScript language feature that works across different JavaScript environments.

18. What are some potential downsides or considerations when using IIFEs in JavaScript code?

Answer: While IIFEs are useful for creating private scopes, they can make code less readable if overused or nested excessively. It's essential to strike a balance and use them judiciously.

19. How can you use IIFEs to control the order of execution of code in a script?

Answer: You can use IIFEs to control the order of code execution by placing code that needs to run in a specific sequence inside IIFEs and invoking them in the desired order.

20. Are IIFEs still commonly used in modern JavaScript development, or have other module systems and tools replaced them?

Answer: While other module systems and tools like ES6 modules and bundlers have become more popular, IIFEs are still used, especially in scenarios where a lightweight and simple encapsulation is sufficient.
*/
