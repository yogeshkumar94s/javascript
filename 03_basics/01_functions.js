
function sayMyname() {
    console.log("y");
    console.log("o");
    console.log("g");
    console.log("e");
    console.log("s");
    console.log("h");
    
}

sayMyname();  // this function will print the name 

// sayMyname;     // this is function reference






// add two numbers

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2)
};

// addTwoNumbers()   // will return NaN     // Because there is no argument
addTwoNumbers(3, 50)   // will return 53     




/* --------------Note-------------------------


when we writre a function's definitation, in the paranthesis, it called parameters.
and when we execute this function, it called arguments.


*/



const result = addTwoNumbers(55, 25);

console.log("Result :", result)      // Result : undefined  // This is because we are not returning any value from the function.







function addNumbers(num1, num2) {
    let total = num1 + num2;
    return total
    console.log("yogesh")       //Yogesh will newer print because by default there is a rule that code written after return will newer execute.
}

const allTotal = addNumbers(78, 87)
console.log("AllTotal : ", allTotal)












function loginUserMessage(userName) {
    return `${userName} just logged in`
}


console.log(loginUserMessage("yogesh"))    // this will return -- yogesh just logged in 
console.log(loginUserMessage())           // this will print -- undefined just logged in







// ------------Functions Continued------------------------

//-----------rest operator-----------


function calculateCartPrice(...price) {
    return price;
}

console.log(calculateCartPrice(250, 50000, 789, 4545))    // this will print an array







//-----Object---------Handle Object------------

const user = {
    userName: "Yogesh",
    price: 999
}


function handleObject(anyobject){
    console.log(`username is ${anyobject.userName}, and price is ${anyobject.price}.`)
}


handleObject(user)





// ---------array-----------handling array------------------


const myNewArray = [200, 100, 150, 5500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))