// -------for of loop-----------



// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }






// const greetings = "hello world!";

// for (const greet of greetings) {
//         console.log(`each char is :${greet}`);
// };









//----------Maps------------------



const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United State of America');
map.set('Fr', "France");
// map.set('IN', 'India');     // duplicate value nhi entry hogi //

// console.log(map);





// for (const key of map) {
//     console.log(key);        //  array ke form mai hr entry print hogi
// } 






// for (const [key, value] of map) {
//     console.log(key, ':-', value);        // this will work perfectly
// } 







// const myObject = {
//     game1: 'NFS', 
//     game2 : 'spiderman'
// }

// for (const [key, value] of myObject) {        //     nahi kaam krega kyuki object iteratable nahi hai - in this case
//     console.log(key, ':-', value);
// }
