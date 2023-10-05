//  if statement

/* 
Conditional Statements


Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

*/

// let score = 45;

// if (score <= 50) {
//     console.log("code will be run if conditin is true")
//   }

// -----------Short Hand Notation-------------

// const balance = 500;

// if (balance > 500) console.log("test");

// -------------Nesting---------------

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900")
// } else if (balance < 1000) {
//     console.log("balance is 1000")
// } else{
//     console.log("Greater than 1000")
// };

const userLoginIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoginIn && debitCard) {
  console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged in");
}

// // -------------------Interview questions-------------------------------------------------------------

/*
1. What are conditional statements in JavaScript, and why are they used?

Answer: Conditional statements are used to make decisions in code based on specified conditions. They allow different code blocks to be executed depending on whether a condition evaluates to true or false.

2. How do you write a basic "if" statement in JavaScript?

Answer: A basic "if" statement is written as follows:

javascript

if (condition) {
  // Code to execute if the condition is true
}
3. What is the role of the condition within an "if" statement?

Answer: The condition is an expression that evaluates to either true or false. If the condition is true, the code block inside the "if" statement is executed.

4. What happens if the condition in an "if" statement is false?

Answer: If the condition in an "if" statement is false, the code block inside the "if" statement is skipped, and the program continues executing the next statement after the "if" statement.

5. What is an "else" statement, and how is it used in conjunction with an "if" statement?

Answer: An "else" statement is used to specify a code block that should be executed when the condition in the corresponding "if" statement is false. It provides an alternative code path.

6. How do you write an "if-else" statement in JavaScript?

Answer: An "if-else" statement is written as follows:

javascript

if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
7. Can you have multiple "else if" conditions in an "if-else" statement, and how are they used?

Answer: Yes, you can have multiple "else if" conditions in an "if-else" statement to specify additional conditions to check. The code block associated with the first true condition encountered will be executed.

8. What is the purpose of the "switch" statement in JavaScript, and how does it differ from "if-else" statements?

Answer: The "switch" statement is used to evaluate an expression against multiple possible case values. It provides a more efficient way to handle multiple conditions compared to a series of "if-else" statements.

9. How do you write a "switch" statement in JavaScript, and what are the essential components of a "switch" statement?

Answer: A "switch" statement is written as follows:

javascript

switch (expression) {
  case value1:
    // Code to execute if expression equals value1
    break;
  case value2:
    // Code to execute if expression equals value2
    break;
  default:
    // Code to execute if expression does not match any case
}
10. What is the purpose of the "break" statement within a "switch" statement?

Answer: The "break" statement is used to exit the "switch" statement after the code block associated with a matching case has been executed. It prevents the execution of subsequent cases.

11. How can you handle multiple conditions using nested "if-else" statements?

Answer: You can handle multiple conditions by nesting "if-else" statements inside each other. This allows you to create more complex decision structures.

12. What is the "ternary" or "conditional" operator in JavaScript, and how does it work?

Answer: The ternary operator (? :) is a shorthand way to write simple conditional expressions. It evaluates a condition and returns one of two values depending on whether the condition is true or false.

13. How do you write a conditional expression using the ternary operator?

Answer: A conditional expression using the ternary operator is written as follows:

javascript

condition ? trueValue : falseValue;
14. What is the benefit of using the ternary operator over "if-else" statements for simple conditions?

Answer: The ternary operator is concise and can make code more readable when dealing with simple conditions. It is often used for inline conditional assignments.

15. How do you handle multiple conditions in a series of "if-else" statements when you want to execute more than one code block?

Answer: You can use a series of "if-else" statements to check multiple conditions sequentially. If multiple conditions are true, multiple code blocks can be executed.

16. What are "truthy" and "falsy" values in JavaScript, and how do they affect conditional statements?

Answer: In JavaScript, certain values are considered "truthy" (e.g., non-empty strings, numbers other than 0) while others are considered "falsy" (e.g., empty strings, 0, null, undefined). Conditional statements rely on these concepts to determine whether a condition is true or false.

17. How do you handle exceptions or errors in conditional statements?

Answer: You can handle exceptions or errors in conditional statements by using try-catch blocks within the code blocks associated with "if" or "else" statements.

18. What is the purpose of the "default" case in a "switch" statement, and is it required?

Answer: The "default" case in a "switch" statement is executed when none of the cases match the expression's value. It is not required, but it provides a fallback option when no other case matches.

19. Can you use conditional statements to control the flow of asynchronous code in JavaScript?

Answer: Yes, conditional statements can be used to control the flow of asynchronous code by specifying conditions for when asynchronous actions should be initiated or when their results should be handled.

20. What are some best practices for writing clean and maintainable conditional statements in JavaScript?

Answer: Some best practices include using meaningful variable and function names, formatting code consistently, using comments to explain complex conditions, and favoring readability over brevity.
*/

// // --------------------Javascript Execution Context-------------------------------------------------------

/*
1. What is an execution context in JavaScript?

Answer: An execution context is a concept in JavaScript that represents the environment in which code is executed. It includes information such as variables, function declarations, the this value, and the scope chain.

2. How many types of execution contexts are there in JavaScript, and what are they?

Answer: There are three types of execution contexts in JavaScript: global execution context, function execution context, and eval execution context (less common).

3. What is the global execution context, and when is it created?

Answer: The global execution context is the top-level context in a JavaScript program. It is created when the script starts executing and represents the global scope, including global variables and functions.

4. How is the global execution context different from function execution contexts?

Answer: The global execution context is the outermost context that encompasses the entire script, while function execution contexts are created when functions are called and represent the local scope within those functions.

5. What is the call stack, and how does it relate to execution contexts?

Answer: The call stack is a data structure in JavaScript that keeps track of function calls. Each function call creates a new function execution context, and these contexts are pushed onto the call stack. When a function completes, its context is popped from the stack.

6. How does JavaScript determine the order of execution for functions and code blocks within an application?

Answer: JavaScript follows a single-threaded, synchronous execution model, meaning that functions are executed in the order they are called, and code blocks are executed sequentially.

7. What is a function execution context, and when is it created?

Answer: A function execution context is created each time a function is called in JavaScript. It includes information about the function's local variables, parameters, and its position in the scope chain.

8. Explain the concept of the "scope chain" within an execution context.

Answer: The scope chain is an ordered list of variables and functions that an execution context can access. It is used to look up identifiers when a variable or function is referenced. The scope chain includes the local scope and any outer (enclosing) scopes.

9. How is the this keyword determined in an execution context, and what value does it hold?

Answer: The value of the this keyword in an execution context is determined by how a function is called. It typically represents the object that is the "current" object, known as the context object, and its value can change depending on the calling context.

10. What is the difference between the global context and function execution contexts with regard to the this keyword?

Answer: In the global context, this refers to the global object (e.g., window in a browser). In function execution contexts, the value of this depends on the function's invocation context, which can vary.

11. What happens when a function is called in JavaScript, in terms of execution contexts and the call stack?

Answer: When a function is called, a new function execution context is created, which includes information about the function's parameters, local variables, and its position in the scope chain. This new context is pushed onto the call stack.

12. What is a closure, and how does it relate to execution contexts?

Answer: A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has completed execution. Closures are a result of the way execution contexts work in JavaScript.

13. How does JavaScript handle asynchronous operations like callbacks and promises within the context of execution contexts?

Answer: Asynchronous operations in JavaScript use callback functions or Promises to defer execution until certain conditions are met. The callback functions are added to the call stack when their conditions are met, and their execution contexts are created and processed accordingly.

14. What is the "variable environment" in an execution context, and how does it relate to variable declarations?

Answer: The variable environment is a part of the execution context that holds declared variables and function declarations. It is initialized with all variable and function declarations before the code is executed.

15. How does JavaScript handle errors and exceptions within execution contexts?

Answer: JavaScript uses try-catch blocks to handle errors and exceptions within execution contexts. When an error occurs, the call stack is inspected to find the appropriate catch block for handling the error.

16. What is the difference between the creation phase and the execution phase of an execution context?

Answer: During the creation phase, variable and function declarations are processed and added to the variable environment, and the scope chain is established. In the execution phase, the actual code is executed in the context of the created environment.

17. Can you manually create an execution context in JavaScript, and if so, how?

Answer: Execution contexts are created automatically by the JavaScript engine when functions are called or code is executed. You cannot manually create an execution context in the same way the engine does.

18. What is the role of the lexical environment in an execution context, and how does it differ from the variable environment?

Answer: The lexical environment in an execution context is responsible for handling scope and closures. It maintains the scope chain and contains information about outer (enclosing) environments. The variable environment, on the other hand, primarily deals with variable and function declarations.

19. How does the concept of execution context relate to the event loop in asynchronous JavaScript?

Answer: The event loop is responsible for managing the execution of asynchronous tasks, such as callbacks and promises. It continually checks the call stack and the message queue to determine which code to execute next, which is closely tied to execution contexts.

20. Can execution contexts be nested within each other, and if so, how does this impact variable access and the scope chain?

Answer: Yes, execution contexts can be nested within each other, especially when functions are called from within other functions. The nested execution contexts create a nested scope chain, allowing inner contexts to access variables from outer contexts, but not vice versa.
*/
