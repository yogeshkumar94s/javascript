const name = "yogesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("yogesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   yogesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yogesh.com/yogesh%20saini";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

// // -------------------------------------------------------------------

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

//  Interview Questions -------------------------------------------------------------------------------

/*
1. What is a string in JavaScript?

Answer: A string in JavaScript is a sequence of characters, typically used to represent text.

2. How do you declare a string in JavaScript?

Answer: You can declare a string using either single quotes ('), double quotes ("), or backticks (``). For example:

javascript

let singleQuotes = 'Hello, world!';
let doubleQuotes = "Hello, world!";
let backticks = `Hello, world!`;
3. How do you concatenate strings in JavaScript?

Answer: You can concatenate strings using the + operator or template literals (``). For example:

javascript

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
4. Explain the concept of string interpolation in JavaScript.

Answer: String interpolation is the process of embedding variables or expressions within a string, typically using template literals. For example:

javascript

let name = "John";
let greeting = `Hello, ${name}!`;
5. How do you find the length of a string in JavaScript?

Answer: You can find the length of a string using the length property of the string object. For example:

javascript

let str = "Hello, world!";
let length = str.length; // length will be 13
6. What is the purpose of escape characters in strings?

Answer: Escape characters are used to include special characters in strings, such as \" for double quotes within a double-quoted string or \\ for a literal backslash.

7. How can you access individual characters in a string in JavaScript?

Answer: You can access individual characters in a string using square brackets and the character's index, starting from 0. For example:

javascript

let str = "Hello";
let firstCharacter = str[0]; // firstCharacter will be "H"
8. Explain the difference between charAt() and square bracket notation for accessing characters in a string.

Answer: charAt() is a method that returns the character at a specified index in a string, while square bracket notation directly accesses characters by their index.

9. How can you convert a string to uppercase or lowercase in JavaScript?

Answer: You can use the toUpperCase() and toLowerCase() methods to convert a string to uppercase or lowercase, respectively.

10. What is the slice() method, and how is it used with strings?

Answer: The slice() method extracts a portion of a string and returns it as a new string, without modifying the original string. For example:

javascript

let str = "Hello, world!";
let sliced = str.slice(0, 5); // sliced will be "Hello"
11. Explain the purpose of the trim() method for strings.

Answer: The trim() method removes whitespace characters from both the beginning and end of a string, returning a new string.

12. How do you check if a string contains a specific substring in JavaScript?

Answer: You can use the includes() method to check if a string contains a specific substring. For example:

javascript

let str = "Hello, world!";
let containsWorld = str.includes("world"); // containsWorld will be true
13. What is the split() method, and how does it work with strings?

Answer: The split() method splits a string into an array of substrings based on a specified delimiter. For example:

javascript

let str = "apple,banana,orange";
let fruits = str.split(","); // fruits will be ["apple", "banana", "orange"]
14. How can you find the index of the first occurrence of a substring in a string?

Answer: You can use the indexOf() method to find the index of the first occurrence of a substring in a string. For example:

javascript

let str = "Hello, world!";
let index = str.indexOf("world"); // index will be 7
15. What is string immutability in JavaScript?

Answer: String immutability means that once a string is created, it cannot be changed. Instead, string methods return new strings with the desired modifications.

16. Explain the purpose of the replace() method for strings.

Answer: The replace() method is used to replace a specified substring or pattern in a string with a new string or value. For example:

javascript

let str = "Hello, world!";
let newStr = str.replace("world", "JavaScript");
17. What is a template literal, and how is it different from traditional strings?

Answer: A template literal is a string enclosed in backticks (``) that allows for easy string interpolation and multiline strings. Traditional strings use single or double quotes.

18. How do you escape backticks inside a template literal?

Answer: You can escape backticks inside a template literal by using a backslash (\). For example:

javascript

let message = `This is a backtick: \` `;
19. What is the purpose of the substring() method for strings?

Answer: The substring() method is used to extract a portion of a string between two specified indices and returns it as a new string. It's similar to slice() but doesn't accept negative indices.

20. How can you reverse a string in JavaScript?

Answer: You can reverse a string by converting it into an array, reversing the array, and then joining the array back into a string. For example:

javascript

let str = "Hello";
let reversed = str.split("").reverse().join(""); // reversed will be "olleH"

*/
