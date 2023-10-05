//------------ singalton object
// const tinderUser = new Object()

// ------------Non singalton Object
const tinderUser = {};

tinderUser.Id = "123abc";
tinderUser.name = "jimmy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "tony@dcmarvel.com",
  fullName: {
    userFullName: {
      firstName: "yogesh",
      lastName: "Kumar",
    },
  },
};

// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "aa", 5: "bb", 6: "cc" };

// const obj3 = {...obj1, ...obj2}

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3)

// very Important

const users = [
  {
    id: 1,
    email: "ghgh@gmail.com",
  },
  {
    id: 2,
    email: "ghgh@gmail.com",
  },
  {
    id: 3,
    email: "ghgh@gmail.com",
  },
  {
    id: 4,
    email: "ghgh@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("email"));
console.log(tinderUser.hasOwnProperty("Id"));

//     // -------------------Interview Questions------------------------------------------------------------

/*
1. What is an object in JavaScript?

Answer: An object in JavaScript is a collection of key-value pairs, where each key is a unique string (or symbol) that maps to a specific value. Objects are used to represent structured data and are one of the fundamental data types in JavaScript.

2. How do you declare an object in JavaScript?

Answer: You can declare an object using curly braces {}. For example:

javascript

let person = {
  firstName: "John",
  lastName: "Doe"
};
3. What is a property in an object, and how do you access it?

Answer: A property is a key-value pair in an object. You can access a property using dot notation (object.propertyName) or bracket notation (object["propertyName"]). For example:

javascript

let person = {
  firstName: "John",
  lastName: "Doe"
};
console.log(person.firstName); // Access using dot notation
console.log(person["lastName"]); // Access using bracket notation
4. Can the keys (property names) in an object be of any data type?

Answer: In most cases, keys in an object are strings or symbols. However, JavaScript automatically converts non-string keys to strings when used as object keys.

5. How do you add or update properties in an object?

Answer: You can add or update properties in an object by simply assigning a value to a new or existing key. For example:

javascript

let person = {};
person.firstName = "John"; // Adding a new property
person.lastName = "Doe";   // Updating an existing property
6. What is the purpose of the delete operator in JavaScript when working with objects?

Answer: The delete operator is used to remove a property from an object. For example:

javascript

let person = { firstName: "John", lastName: "Doe" };
delete person.lastName; // Removes the "lastName" property
7. How do you check if an object has a specific property?

Answer: You can use the in operator or the hasOwnProperty() method to check if an object has a specific property. For example:

javascript

let person = { firstName: "John", lastName: "Doe" };
console.log("firstName" in person); // true
console.log(person.hasOwnProperty("lastName")); // true
8. What is object destructuring, and how is it used in JavaScript?

Answer: Object destructuring is a feature that allows you to extract specific properties from an object and assign them to variables in a concise way. For example:

javascript

let person = { firstName: "John", lastName: "Doe" };
let { firstName, lastName } = person;
9. What is the difference between deep and shallow copying of objects?

Answer: Shallow copying creates a new object that has references to the same properties (including nested objects) as the original object. Deep copying creates a completely new object with new copies of all properties, including deeply nested objects.

10. What is an object constructor, and how is it used to create objects?

Answer: An object constructor is a function that serves as a blueprint for creating objects with similar properties and methods. You can use constructor functions or class constructors in modern JavaScript to create objects.

11. What is the Object.keys() method, and how does it work with objects?

Answer: The Object.keys() method returns an array of an object's own enumerable property keys. It allows you to extract all the keys from an object for further manipulation.

12. Explain the concept of prototypal inheritance in JavaScript.

Answer: In JavaScript, objects can inherit properties and methods from other objects through their prototype chain. If a property or method is not found in an object, JavaScript looks up the prototype chain to find it in its parent objects.

13. How can you prevent properties in an object from being modified or deleted?

Answer: You can use property descriptors and methods like Object.freeze(), Object.seal(), or Object.preventExtensions() to prevent properties in an object from being modified, deleted, or extended.

14. What is an object literal in JavaScript, and how is it used to create objects?

Answer: An object literal is a way to create objects by specifying their properties and values directly within curly braces. For example:

javascript

let person = { firstName: "John", lastName: "Doe" };
15. What is the difference between deep and shallow equality comparison of objects?

Answer: Shallow equality compares object references, while deep equality checks whether the values of all properties and nested properties are the same. Deep equality requires a recursive comparison of properties.

16. What is the purpose of the Object.create() method in JavaScript?

Answer: The Object.create() method creates a new object with a specified prototype object. It is used to implement prototypal inheritance in JavaScript.

17. Explain the concept of object sealing in JavaScript.

Answer: Object sealing is a process that prevents the addition or deletion of properties in an object but allows the modification of existing properties. You can seal an object using Object.seal().

18. What is a symbol property in an object, and how is it used?

Answer: A symbol property is a unique and immutable property key introduced in ECMAScript 2015. It is often used to create non-enumerable properties or to avoid naming conflicts.

19. How do you iterate through the properties of an object in JavaScript?

Answer: You can iterate through the properties of an object using a for...in loop, the Object.keys() method, or the Object.entries() method, among others.

20. What are object rest and spread properties, and how are they used in JavaScript?

Answer: Object rest and spread properties are features introduced in ECMAScript 2018. Rest properties allow you to collect the remaining properties of an object into a new object, while spread properties allow you to merge properties from one object into another. For example:

javascript

let { a, ...rest } = { a: 1, b: 2, c: 3 };

1. What is the purpose of the Object.defineProperty() method, and how is it used?

Answer: The Object.defineProperty() method is used to define new properties or modify existing properties in an object with additional attributes, such as getter and setter functions, configurable, enumerable, and writable flags.

2. Explain the concept of object composition in JavaScript and provide an example.

Answer: Object composition is a design pattern where objects are combined to form more complex objects. For example, you can create a Person object and a Job object, and then compose a PersonWithJob object by combining the two.

javascript

let person = { name: "John" };
let job = { title: "Engineer" };

let personWithJob = { ...person, ...job };
3. What are object prototypes in JavaScript, and how do they relate to inheritance?

Answer: Object prototypes are a mechanism by which objects can inherit properties and methods from other objects. In JavaScript, every object has a prototype, and they form a prototype chain for property and method lookup.

4. What is the purpose of the Object.setPrototypeOf() method, and when should it be used?

Answer: The Object.setPrototypeOf() method is used to set the prototype of an object to another object. It should be used with caution, as changing an object's prototype can lead to unexpected behavior and performance issues.

5. Explain the difference between shallow and deep cloning of objects, and provide examples of each.

Answer: Shallow cloning creates a new object with references to the same properties as the original object. Deep cloning creates a new object with new copies of all properties and nested properties. Shallow cloning can be achieved with the spread operator, while deep cloning typically requires a custom recursive function or libraries like Lodash.

6. How can you implement private and encapsulated properties in JavaScript objects?

Answer: You can achieve private properties by using closures or symbols. Closures hide variables within a constructor function, while symbols create private property keys that are not enumerable.

7. Explain the concept of object immutability and how it can be achieved in JavaScript.

Answer: Object immutability means that an object's properties cannot be changed after it is created. It can be achieved by using methods like Object.freeze() or by creating a new object with modified properties instead of modifying the original object.

8. What are getter and setter methods in JavaScript objects, and how are they used?

Answer: Getter and setter methods are special methods that allow you to control access to an object's properties. Getters are used to retrieve property values, and setters are used to modify them.

javascript

let person = {
  _name: "John",
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  }
};
9. Explain the concept of object serialization and deserialization in JavaScript.

Answer: Serialization is the process of converting an object into a string or another format that can be easily stored or transmitted. Deserialization is the process of converting that string or format back into an object. This is commonly used for data persistence or communication.

10. What are object mixins, and how can they be used to extend object functionality?

Answer: Object mixins are functions that can be used to extend the functionality of an object by adding new properties and methods. They are often used to share behavior among objects without using inheritance.

11. What is the Object.getOwnPropertyDescriptors() method, and how can it be used to access property descriptors?

Answer: The Object.getOwnPropertyDescriptors() method returns an object containing property descriptors for an object's own properties. This allows you to access and manipulate property attributes like configurable, enumerable, and writable.

12. How can you implement method chaining in JavaScript objects?

Answer: Method chaining allows you to call multiple methods on an object in a single chain by having each method return the object itself (this). You can achieve this by returning this at the end of each method.

javascript

let calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this;
  },
  subtract(num) {
    this.value -= num;
    return this;
  }
};

let result = calculator.add(5).subtract(2).value; // result will be 3
13. Explain the concept of object identity and how it relates to comparison of objects.

Answer: Object identity refers to the fact that two distinct objects with the same property values are not considered equal unless they reference the same memory location. This is different from comparing primitive values, which compare their actual values.

14. What is the purpose of the Object.getOwnPropertyNames() method, and how is it used?

Answer: The Object.getOwnPropertyNames() method returns an array of all property names (including non-enumerable ones) for a given object. It can be useful for inspecting an object's properties.

15. How can you create a shallow copy of an object with the same prototype chain using Object.create()?

Answer: You can create a shallow copy of an object with the same prototype chain using Object.create() by passing the original object's prototype as the first argument. This retains the prototype chain of the original object in the copy.

javascript

let original = {
  a: 1,
  b: 2
};

let copy = Object.create(Object.getPrototypeOf(original));
Object.assign(copy, original);

*/
