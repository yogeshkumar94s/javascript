// 1
// const myName = "yogesh";
// 2
// let myAge = 29;
// 3
// function addTwoNumber(num1, num2) {
//   return num1 + num2;
// }
// 4
// function subtractTwoNumbers(num1, num2) {
//   return num1 - num2;
// }
// 5
// function multiplyTwoNumbers(num1, num2) {
//   return num1 * num2;
// }
// 6
function divideTwoNumbers(num1, num2) {
  return num1 / num2;
}
// 7
// const myArray = ["white", "blue", "yellow", "green", "red"];
// 8
// myArray.push("skyBlue");
// console.log(myArray);
// 9
// myArray.shift(); // remove an element from beginning of an array
// console.log(myArray);
// 10
// let presense = myArray.includes("yellow"); // check if an element is present in an array
// console.log(presense);
// 11. Create an object that represents a person with properties like name, age, and city.
// const userOne = {
//   name: "yogesh",
//   age: 29,
//   city: "Moradabad",
//   currentLocation: "Haridwar",
// };
// 12 Access and print the properties of the person object.
// console.log(userOne.name);
// console.log(userOne.age);
// console.log(userOne.city);
// 13 Create an array of numbers and use a loop to print each number.
// const myNumbers = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 44];
// for (let i = 0; i < myNumbers.length; i++) {
//   // console.log(myNumbers[i]);
// }
// Q: How can I print the numbers in reverse order?

// for (let i = myNumbers.length - 1; i >= 0; i--) {
//   console.log(myNumbers[i]);
// }
// console.log("length is", myNumbers.length);
// Q: What if I want to find the sum of all numbers in the numbers array?

// let sum = 0;
// for (let i = 0; i < myNumbers.length; i++) {
//   sum += myNumbers[i];
// }
// console.log(sum);

// Q: How would you find the average (mean) of the numbers in the numbers array?

// let sum = 0;
// for (let i = 0; i < myNumbers.length; i++) {
//   sum += myNumbers[i];
// }
// console.log(sum);
// console.log(typeof sum);
// let average = sum / myNumbers.length;
// console.log(average.toFixed(3));
// console.log(typeof average);
// Q: What would happen if you used a for...of loop instead of a for loop to print the numbers?

/*We directly iterate over the elements of the numbers array using a for...of loop.
In each iteration, the number variable takes on the value of the current element in the array.
We then use console.log(number); to print the current number.
Using a for...of loop in this context simplifies the code by removing the need to manually manage an index variable (i) and access array elements by index. It makes the code more readable and less error-prone, especially when dealing with arrays where you don't need to track the index explicitly.
*/

// example

// let sum = 0;
// for (const i of myNumbers) {
//   sum += i;
// }

// console.log(`The sum of myNumbers array is ${sum}`);

// Q: Is there a way to check if a specific number exists in the numbers array?

// console.log(myNumbers.includes(2)); //true

// Q: - What if you want to create a new array that only contains even numbers from the numbers array?
// forOf loop
// let evenNumber = [];
// for (const n of myNumbers) {
//   if (n % 2 === 0) {
//     evenNumber.push(n);
//   }
// }
// console.log(evenNumber);

// by using Filter

// const evenNumberByFilter = myNumbers.filter((n) => n % 2 === 0);
// console.log(`Even number are ${evenNumberByFilter}`);
// console.log(typeof evenNumberByFilter); //   object // environment issue
// console.log(Array.isArray(evenNumberByFilter)); // true

// Q: How can you find the largest number in the numbers array?

// let largestNumber = 0;

// for (let i = 0; i < myNumbers.length; i++) {
//   if (myNumbers[i] > largestNumber) {
//     largestNumber = myNumbers[i];
//   }
// }

// console.log(largestNumber);

// Q: What if you want to double each number in the numbers array and store the results in a new array?

// let doubleOfmyNumbers = [];

// for (let i = 0; i < myNumbers.length; i++) {
//   const newNums = myNumbers[i] * 2;
//   doubleOfmyNumbers.push(newNums);
// }

// console.log(doubleOfmyNumbers);

// Q: Can you explain what the map() method is and how it can be used with the numbers array?
// Ok lets double the every elements of myNumbers by .map() method

// const doubleMyNumbrs = myNumbers.map((number) => number * 2);
// console.log(doubleMyNumbrs);
// console.log(myNumbers);

///------------------///--------------------///---------------

// 14 Create a function that takes an array of numbers and returns their sum.
// const myArray = [1, 2, 3, 4, 5, 6, 7, 9, 101];
// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i];
// }

// console.log(sum);

// 15 Create a function that takes an array of numbers and returns the average.
// const myArray = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// let sum = 0;
// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i];
// }

// let average = sum / myArray.length;
// console.log(average);

// 16 Create a function that finds the largest number in an array.

// const myArray = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// let largestNumber = 0;

// for (let i = 0; i < myArray.length; i++) {
//   if (largestNumber < myArray[i]) {
//     largestNumber = myArray[i];
//   }
// }
// console.log(`The largest number of the array is : ${largestNumber}`);

// 17 Create a function that finds the smallest number in an array.
// const myArray = [0.5, 0.7, 1, 2, 3, 4, 5, 6, 7, 9, 10];

// let smallest = myArray[0];

// function findSmallestNumber(myArray) {
//   for (let i = 1; i < myArray.length; i++) {
//     if (myArray[i] < smallest) {
//       smallest = myArray[i];
//     }
//   }
//   return smallest;
// }
// console.log(`The smallest number is ${findSmallestNumber(myArray)}`);
