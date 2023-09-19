// What is a string in JavaScript, and how is it defined?

let myString = "Hello World!";

// How do you find the length of a string in JavaScript?

let length = myString.length;
// console.log(length);

// Explain the difference between single quotes ('), double quotes ("), and backticks (``) when defining strings.

/* 
Single quote is the only way to define the string in javascript
*/

let myString2 = "This is my second String";

/* 
Double quote is the another way to define the string in javascript
*/

let doubleQuoteString = "This is Double Quote String";

/* 
`` backticks are used to define template literals, a modern way of defining strings in javascript introduced in es6.
Template literals offers several advantages over traditional string, including:

1. The ability to include variables and expressions direclty inside the string using ${} syntax.
2. Multiline strings without the need for explicit line breaks.
*/

// How do you access a specific character in a string by its index?
let char = myString2.charAt(0);
// console.log(char);

// How can you extract a substring from a string using the substring() method?

/*
The substring() method is used to extract a portion of string from a string based on giving indices. This method takes two arguments, the start index and the end index. The method return a new string containing the character from the start index, but not including, the character at the last index.
*/

let newString = myString2.substring(0, 6);
// console.log(newString);

// What is the purpose of the slice() method for strings, and how does it differ from substring()?

/*
The slice() method is used to extract a portion of a string and return a new string. It takes two arguments the first indice (inclusive) and the last indice (exclusive) just like substring() method. However, the slice method provides the more flexibility, as it allow negative indice and handles them differently from substring() method.
*/
let slicedStr = myString2.slice(0, 5);
// console.log(slicedStr);

// Explain how the indexOf() method works to find the position of a substring within a string.
// The indexOf() method in JavaScript is used to find the position (index) of the first occurrence of a specified substring within a string. It returns the index where the substring starts or -1 if the substring is not found.

let indOf = myString2.indexOf("T");
console.log(indOf);
