//  for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// };

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number")
//     }
//     console.log(element)
// };

// -----------nested loop---------------

// for (let i = 0; i <= 10; i++) {
//         console.log(`outer loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value: ${j } ooter loop value : ${i}`)
//     }
// }

// ---------pronting table from 1 to 10--------------------

// for (let i = 1; i <= 10; i++) {
//         console.log(`table of : ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value: ${j } ooter loop value : ${i}`)
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
// }

// ----------working with array------------------

//  let myArray = ['flesh', 'batman', 'superman'];
//  console.log(myArray.length);

//  for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);

//  }

// ------------break and continue-----------------

// ------break-----------

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log('detected 5')
//         break;
//     }
//     console.log(`value of i is : ${index}`);
// }

// ----------continue----------------// ek baar maaf kr do--------

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log('detected 5')
//         continue;
//     }
//     console.log(`value of i is : ${index}`);
// }

//  -----------------------------------------------interview Questions--------------------------------------------
/*
1. What is an iterator in JavaScript?

Answer: An iterator is an object that provides a way to access elements of a collection (e.g., an array or object) one at a time, allowing you to loop over and process each element sequentially.

2. What is the primary purpose of iterators in JavaScript?

Answer: The primary purpose of iterators is to provide a standardized way to iterate over data structures, making it easier to work with collections of data.

3. What is the difference between an iterable and an iterator in JavaScript?

Answer: An iterable is an object that can be iterated over, while an iterator is an object that provides a way to iterate over an iterable. An iterable may have many iterators associated with it.

4. How do you create an iterator in JavaScript?

Answer: You can create an iterator by defining an object with a next() method. The next() method returns an object with two properties: value (the next value in the iteration) and done (a boolean indicating whether the iteration is complete).

5. What is the typical structure of an iterator's next() method?

Answer: The next() method usually looks like this:

javascript

{
  value:  next value ,
  done:  true if the iteration is complete, false otherwise 
}
6. How do you loop through an iterable using an iterator in JavaScript?

Answer: You can loop through an iterable using a for...of loop or by manually calling the next() method of an iterator in a loop until the done property becomes true.

7. What are some built-in iterable objects in JavaScript?

Answer: Some built-in iterable objects in JavaScript include arrays, strings, maps, sets, and the arguments object.

8. How can you make a custom object iterable in JavaScript?

Answer: To make a custom object iterable, you need to define a method with the key Symbol.iterator that returns an iterator object with a next() method.

9. What is the purpose of the Symbol.iterator symbol in JavaScript?

Answer: The Symbol.iterator symbol is used to define the default iterator for an object. It allows you to specify how an object should be iterated over.

10. How can you use iterators to implement custom iteration logic for data structures like trees or graphs?

Answer: For complex data structures, you can implement custom iterators to traverse them in a specific order, depth-first, breadth-first, or other custom patterns.

11. What is the role of the return() method in an iterator, and when is it called?

Answer: The return() method in an iterator is optional and is called when you want to prematurely terminate the iteration. It allows for cleanup or finalization operations.

12. How does the for...of loop handle exceptions thrown inside an iterator?

Answer: If an exception is thrown inside an iterator during a for...of loop, it propagates to the surrounding code, and you can catch it with a try...catch block.

13. What is the difference between an iterator and a generator in JavaScript?

Answer: An iterator is a simple object used to traverse collections, while a generator is a function that can pause its execution and resume it later. Generators are often used to create custom iterators.

14. What is the purpose of the yield keyword in generator functions?

Answer: The yield keyword is used in generator functions to pause the function's execution and yield a value to the caller. It allows for resumable computations.

15. How do you create a generator function in JavaScript?

Answer: You create a generator function by using the function* syntax and including one or more yield statements.

16. What is the relationship between generators and iterators in JavaScript?

Answer: Generators can be used to create custom iterators. When a generator function is invoked, it returns an iterator object that you can use to iterate over values produced by the generator.

17. What is the role of the throw() method in generator iterators, and when is it used?

Answer: The throw() method is used to throw an exception within a generator function and can be caught by the generator's code. It allows for error handling within the generator.

18. How do you use the return() method in generator functions, and what is its purpose?

Answer: The return() method in generator functions is used to specify a return value for the generator and signal its completion. It can be called with an optional value.

19. Can you give an example of creating a custom iterable object with an iterator in JavaScript?

Answer: Sure, here's an example of creating a custom iterable object with an iterator:

javascript

const customIterable = {
  data: [1, 2, 3, 4],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const value of customIterable) {
  console.log(value); // Outputs 1, 2, 3, 4
}
20. What are some practical use cases for iterators and generator functions in JavaScript programming?

Answer: Practical use cases include iterating over large data sets, implementing lazy evaluation, asynchronous programming, and creating custom iteration patterns for data structures.
*/

/*
for Loop:

Purpose: The for loop is used when you know the number of iterations you need in advance. It's commonly used for iterating over arrays or running a specific block of code a fixed number of times.
Example:
javascript

for (let i = 0; i < 5; i++) {
  console.log(i);
}
while Loop:

Purpose: The while loop is used when you don't know the number of iterations in advance, and you want to continue looping until a specified condition becomes false.
Example:
javascript

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
do...while Loop:

Purpose: Similar to the while loop, the do...while loop is used for situations where you want to execute the loop block at least once before checking the loop condition.
Example:
javascript

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
for...in Loop:

Purpose: The for...in loop is specifically designed for iterating over the properties of objects. It is used to loop through the keys (property names) of an object.
Example:
javascript

const person = { name: 'Alice', age: 30 };
for (const key in person) {
  console.log(key, person[key]);
}
for...of Loop:

Purpose: The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, and other collections. It provides a simple and concise way to loop through the values of these objects.
Example:
javascript

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}
forEach Method:

Purpose: The forEach method is not a traditional loop but a built-in array method. It's used to iterate over each element of an array and apply a provided function to each element.
Example:
javascript

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});
for...await Loop (for Asynchronous Operations):

Purpose: The for...await loop is used in asynchronous JavaScript to iterate over asynchronous iterable objects, such as promises or async generators.
Example:
javascript

async function asyncFunction() {
  const promises = [asyncTask1(), asyncTask2(), asyncTask3()];
  for await (const result of promises) {
    console.log(result);
  }
}
Each type of loop serves a specific purpose, so choosing the right one depends on your task and the type of data you need to iterate through. Understanding when and how to use these loops is essential for effective JavaScript programming.
 */

/*
1. Arrays:

for...of Loop:

Use Case: Use the for...of loop when you want to iterate over the values of an array.
Example: This loop is great for tasks like summing up the elements, filtering elements, or performing any operation on the values of an array.
Example Code:
javascript

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}
forEach Method:

Use Case: Use the forEach method when you want to apply a function to each element of an array.
Example: It's useful for tasks that require performing the same operation on each element without the need for an index.
Example Code:
javascript

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});
for Loop:

Use Case: Use the traditional for loop when you need to iterate over an array with a known or specified number of iterations.
Example: This loop is helpful when you want to access elements by their index or perform complex iteration logic.
Example Code:
javascript

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
2. Objects:

for...in Loop:
Use Case: Use the for...in loop when you want to iterate over the properties (keys) of an object.
Example: It's commonly used to access and work with the properties of an object, such as when you need to perform operations on object key-value pairs.
Example Code:
javascript

const person = { name: 'Alice', age: 30 };
for (const key in person) {
  console.log(key, person[key]);
}
3. General Advice:

If you're working with arrays and need to loop over their values, prefer for...of or forEach.
If you're working with objects and need to access their properties (keys) and values, use for...in.
Remember that modern JavaScript also provides other methods like map, filter, and reduce, which are often more suitable for specific tasks on arrays. Additionally, libraries like lodash offer powerful utility functions for working with both arrays and objects, simplifying common iteration and manipulation tasks.
*/
