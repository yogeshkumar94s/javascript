// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a)   //  can't be acces
// console.log(b)   // can't be access
// console.log(c)   // this will be access anywhere in the file and this is a problem

//---------Nested Scope---------------

function one() {
  const username = "yogesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website)
  two();
}

one();

//      Interesting

function addOne(num) {
  //      function
  return num + 1;
}

addOne(5);

const addTwo = function (num) {
  // function expression
  return num + 2;
};

addTwo(5);

/*
1. What is scope in JavaScript, and why is it important?

Answer: Scope refers to the context in which variables and functions are declared and can be accessed in JavaScript. It determines the visibility and lifetime of variables and functions, helping to prevent naming conflicts and manage data effectively.

2. What are the two main types of scope in JavaScript, and how do they differ?

Answer: JavaScript has two main types of scope: global scope and local (function) scope. Global scope refers to variables and functions that are accessible throughout the entire program, while local scope pertains to those that are confined to a specific function.

3. Explain the concept of "hoisting" with respect to variable declarations in JavaScript.

Answer: Hoisting is a JavaScript behavior where variable declarations (not their assignments) are moved to the top of their containing function or global context during compilation. This means you can use a variable before it's declared without generating an error.

4. How do you declare a variable in the global scope in JavaScript?

Answer: Variables declared outside of any function or block are automatically placed in the global scope. You simply declare them using var, let, or const at the top level of your script.

5. What is a "block scope," and which JavaScript versions introduced block-scoped variables?

Answer: Block scope refers to the scope of variables declared within blocks, such as if statements and loops. Block-scoped variables were introduced in ECMAScript 6 (ES6) with the let and const keywords.

6. How are variables declared with var, let, and const different in terms of scope?

Answer: Variables declared with var have function-level scope or global scope if declared outside functions. Variables declared with let and const have block-level scope, limited to the nearest enclosing block (e.g., a loop or an if statement).

7. Explain the difference between "lexical scope" and "dynamic scope."

Answer: Lexical scope, also known as static scope, is determined by the physical location of a variable's declaration in the source code. Dynamic scope, on the other hand, is based on the call stack and changes depending on the call hierarchy.

8. How can you access a variable from an outer scope within a nested function or block in JavaScript?

Answer: You can access a variable from an outer scope within a nested function or block if it is within the lexical scope of the nested code. This happens automatically, as JavaScript looks up the scope chain to find the variable.

9. What is a "closure" in JavaScript, and how does it relate to scope?

Answer: A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has completed execution. Closures are a result of the way scope works in JavaScript and are useful for preserving data and encapsulation.

10. Explain the concept of "shadowing" in JavaScript and its implications for variable scope.

Answer: Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable "shadows" the outer one, making the outer variable temporarily inaccessible within the inner scope.

11. How do you define a local (function) scope in JavaScript?

Answer: A local scope is automatically created when you declare a variable or function inside a function or block. Any variable or function declared inside that scope is accessible only within it.

12. What is the "scope chain" in JavaScript, and how does it work?

Answer: The scope chain is a hierarchical order of scopes in JavaScript. When a variable is referenced, JavaScript first looks in the current scope, then the parent scope, and continues up the chain until it finds the variable or reaches the global scope.

13. What is the "let" and "const" temporal dead zone (TDZ), and how does it relate to scope?

Answer: The temporal dead zone (TDZ) is the period between entering a scope and the variable's actual declaration with let or const. During this time, accessing the variable results in a ReferenceError. This helps prevent variable hoisting-related issues.

14. How can you create a closure in JavaScript, and what are some practical use cases for closures?

Answer: You can create a closure by defining a function inside another function and returning it. Practical use cases for closures include data encapsulation, private variables, and maintaining state between function calls.

15. What is the difference between "private" and "public" variables in the context of closures?

Answer: Private variables in closures are not directly accessible from outside the closure, while public variables are accessible. This allows you to create encapsulated and controlled access to data.

16. What is "IIFE," and how does it relate to scope in JavaScript?

Answer: IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern that involves defining and immediately executing a function. IIFE helps create a private scope and avoid polluting the global scope.

17. Explain the concept of "module pattern" in JavaScript and how it uses closures.

Answer: The module pattern is a design pattern that leverages closures to create encapsulated modules with private and public members. It is commonly used for organizing code and preventing variable conflicts.

18. What are the potential pitfalls or issues related to scope in JavaScript, and how can you avoid them?

Answer: Common issues include variable shadowing, unexpected global variables, and unintentional closures. To avoid these issues, use let and const for block scope, avoid global variables, and be mindful of variable naming.

19. How can you use the this keyword within different scopes in JavaScript, and what values does it refer to in various contexts?

Answer: The value of this depends on the context in which it is used. In the global context, it refers to the global object (e.g., window in a browser). In a function, it depends on how the function is called, unless an arrow function is used, in which case it captures the value of this from the surrounding lexical context.

20. What is the significance of the window object in the global scope of a web browser environment?

Answer: In a web browser environment, the window object represents the global context. It provides access to the global scope, browser-related functionality, and serves as the top-level object for the JavaScript code running in the browser.
*/
