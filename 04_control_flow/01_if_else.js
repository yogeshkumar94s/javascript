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
const loggedInFromEmail = true


if (userLoginIn && debitCard) {
    console.log("allow to buy course")
};

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in")
}