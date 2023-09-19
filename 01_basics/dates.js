// dates in JavaScript

let myDate = new Date();
console.log(myDate);


console.log(myDate.toString())

console.log(myDate.toLocaleString())
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date(2023, 0, 23, 5, 3);


console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myNewDate = new Date('2022-01-14');
console.log(myNewDate.toLocaleString());



let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());  // this will give milisecond

// to change in seconds

console.log(Math.floor(Date.now() / 1000 ));



let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());



// newDate.toLocaleString('default', {
//     weekday: 'long',
//     month: 'long',
//     timeZone: 'absolute'
// });

