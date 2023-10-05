function sayMyname() {
  console.log("y");
  console.log("o");
  console.log("g");
  console.log("e");
  console.log("s");
  console.log("h");
}

sayMyname(); // this function will print the name

// sayMyname;     // this is function reference

// add two numbers

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// addTwoNumbers()   // will return NaN     // Because there is no argument
addTwoNumbers(3, 50); // will return 53

/* --------------Note-------------------------


when we writre a function's definitation, in the paranthesis, it called parameters.
and when we execute this function, it called arguments.


*/

const result = addTwoNumbers(55, 25);

console.log("Result :", result); // Result : undefined  // This is because we are not returning any value from the function.

function addNumbers(num1, num2) {
  let total = num1 + num2;
  return total;
  console.log("yogesh"); //Yogesh will newer print because by default there is a rule that code written after return will newer execute.
}

const allTotal = addNumbers(78, 87);
console.log("AllTotal : ", allTotal);

function loginUserMessage(userName) {
  return `${userName} just logged in`;
}

console.log(loginUserMessage("yogesh")); // this will return -- yogesh just logged in
console.log(loginUserMessage()); // this will print -- undefined just logged in

// ------------Functions Continued------------------------

//-----------rest operator-----------

function calculateCartPrice(...price) {
  return price;
}

console.log(calculateCartPrice(250, 50000, 789, 4545)); // this will print an array

//-----Object---------Handle Object------------

const user = {
  userName: "Yogesh",
  price: 999,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.userName}, and price is ${anyobject.price}.`
  );
}

handleObject(user);

// ---------array-----------handling array------------------

const myNewArray = [200, 100, 150, 5500];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));

//----- Interview Questions------------------------------------------------------------------

/*
1. What is a regular function in JavaScript, and how do you define one?

Answer: A regular function in JavaScript is a block of code that performs a specific task when called. You can define a regular function using the function keyword followed by a function name, a list of parameters, and a function body enclosed in curly braces.

2. How do you call (invoke) a regular function in JavaScript?

Answer: You can call (invoke) a regular function by using its name followed by parentheses and passing any required arguments inside the parentheses. For example: myFunction(10, 20).

3. What is the purpose of function parameters, and how do you access them inside a function?

Answer: Function parameters are placeholders for values that a function expects to receive when it is called. Inside the function, you can access these parameters as local variables using their names.

4. What is the difference between a function declaration and a function expression in JavaScript?

Answer: A function declaration is a named function defined with the function keyword at the top level of a script or function. A function expression is a function that is defined within an expression, often assigned to a variable. Function declarations are hoisted, while function expressions are not.

5. How can you return a value from a regular JavaScript function, and why is it useful?

Answer: You can return a value from a regular function using the return statement. Returning values is useful for passing data back to the calling code and for making functions more reusable and modular.

6. Explain the concept of function scope in JavaScript.

Answer: Function scope means that variables declared inside a function are only accessible within that function and not outside of it. This helps prevent variable name conflicts and provides encapsulation.

7. What is a "closure" in JavaScript, and how can it be created using regular functions?

Answer: A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has completed execution. Closures are often created when inner functions are returned from outer functions.

8. What is a self-invoking function, and why is it useful?

Answer: A self-invoking function is a function that is immediately executed after it is defined. It is useful for creating private variables and functions, encapsulating code, and avoiding global scope pollution.

javascript

(function() {
  // Your code here
})();
9. How can you pass a function as an argument to another function in JavaScript?

Answer: You can pass a function as an argument to another function just like any other variable. This is commonly used in higher-order functions and callback patterns.

10. What is the difference between function parameters and function arguments in JavaScript?

Answer: Function parameters are the named variables declared in the function definition, while function arguments are the actual values passed to the function when it is called. Parameters and arguments are often used interchangeably, but they refer to different things.

11. How can you check if a function exists or is defined in JavaScript?

Answer: You can check if a function exists by using the typeof operator or by comparing it to undefined. For example: typeof myFunction === 'function'.

12. Explain the concept of "hoisting" with respect to regular functions in JavaScript.

Answer: Hoisting is a JavaScript behavior where function declarations are moved to the top of their containing scope during the compilation phase. This means you can call a function before its actual definition in the code.

13. What is the purpose of the arguments object in JavaScript functions?

Answer: The arguments object is an array-like object available in all functions that contains the arguments passed to the function. It is useful when you need to work with a variable number of arguments or when the number of arguments is unknown.

14. How can you define default values for function parameters in JavaScript?

Answer: You can define default values for function parameters using the assignment operator (=) in the parameter list. If no value is passed for a parameter, the default value is used.

javascript

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
15. What is the "arrow function" syntax in JavaScript, and how does it differ from regular functions?

Answer: Arrow functions are a concise way to define functions in JavaScript. They have a more compact syntax and automatically bind the value of this based on the surrounding context. Arrow functions are anonymous and cannot be used as constructors.

16. How do you access the this keyword inside a regular function, and how does it differ from arrow functions?

Answer: Inside a regular function, the value of this depends on how the function is called. In contrast, arrow functions capture the this value from the surrounding context in which they are defined.

17. What is a "callback function," and how is it used in JavaScript?

Answer: A callback function is a function that is passed as an argument to another function and is intended to be executed later, often after an asynchronous operation or in response to an event.

18. Explain the concept of "recursion" in JavaScript functions.

Answer: Recursion is a technique where a function calls itself to solve a problem. It is often used for tasks that can be broken down into smaller, similar subtasks, such as calculating factorials or traversing tree-like data structures.

19. How can you prevent or handle "stack overflow" errors when using recursion in JavaScript?

Answer: To prevent stack overflow errors in recursive functions, you can use techniques like tail recursion or convert the recursive function into an iterative one. You can also increase the stack size if necessary.

20. What are "anonymous functions," and how are they different from named functions?

Answer: Anonymous functions are functions without a name. They can be assigned to variables, used as arguments in other functions, and defined inline. Named functions have a specific identifier and can be called by name.
*/
