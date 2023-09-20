// singleton

// object literals

// symbol declaration
const mySym = Symbol("key1");

const jsUser = {
  name: "yogesh",
  fullName: "Yogesh Kumar",
  [mySym]: "kumar94",
  age: 29,
  location: "Haridwar",
  email: "yogesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(typeof jsUser[mySym])



// change the value

jsUser.email = "kumar@google.com"


// console.log(jsUser.email)
// to lock the value - freeZe the Object 

// Object.freeze(jsUser)

jsUser.email = "saini@google.com"

// console.log(jsUser.email)

// console.log(jsUser)


jsUser.greeting = function() {
    console.log("Hello JS user, How are you")
}
jsUser.greetingTwo = function() {
    console.log(`Hello js user ${this.name}. how are you`)
}

// console.log(jsUser.greeting)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())