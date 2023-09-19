// ---------- Numbers in JavaScript--------------


const score = 150
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// to change a number into a string

// console.log(balance.toString().length);

// to fixed the two decimal range

// console.log(balance.toFixed(2))

// to give a precision value

const newBalance = 250.250;
// console.log(newBalance.toPrecision(5))
// console.log(newBalance.toPrecision(3))
// console.log(newBalance.toPrecision(4))
// console.log(newBalance.toPrecision(6))



//  to set localeString
const hundred = 10000000;
// console.log(hundred.toLocaleString());



//------------------Maths--------------------------

console.log(Math);

// abs = absolute
// console.log(Math.abs(-8));

// to round of

// console.log(Math.round(6.33));

// to choose upper value
// console.log(Math.ceil(5.2));

// to choose floor value
// console.log(Math.floor(5.88));


// to choose a min value
// console.log(Math.min(5, 6, 8, 10));

// to choose a max value
// console.log(Math.max(5, 6, 8, 10));



// to generate a random value

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));


// to generate a value in given range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);