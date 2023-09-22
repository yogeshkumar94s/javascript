const user = {
    username: "yogesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)        // this refers the current context
        // console.log(this)
    }
}

// user.welcomeMessage()    //   will print - yogesh , welcome to website

user.username = "yogee"

// user.welcomeMessage()      //  will print - yogee , welcome to website


console.log(this)        //  currently we are in node environment so this will print an empty object.

// If we console.log(this) in browser this will print a window Object.









// -----------Arrow Function--------------



// const addTwo = (num1, num2) => {
//    const total = num1 + num2
//    return total
// }

// console.log(addTwo(25, 66))




// const addTwo = (num1, num2) => num1 + num2      // implicit return

// console.log(addTwo(5, 6))













// --------------IIFE-------------------


// function coffee() {
//     console.log('DB CONNECTED')
// }
// coffee()


//  Global scope ke pollution se problems create hoti hai

// isse bachne ke liye IIFE ka use karte hai



// (function coffee() {
//     console.log('DB CONNECTED')
// }) ();
