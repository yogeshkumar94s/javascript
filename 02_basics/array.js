// Array

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const myHeros = ["Shaktiman", "Aryaman", "Naagraj"]

const myArray2 = new Array(1, 2, 3, 4, 5, 6)
// console.log(myArray[1]);

// Array Methods

// myArray.push(7);
// myArray.push(8);



// remove the last value in an Array
// myArray.pop();
// console.log(myArray) 




// add item in the start of an array
myArray.unshift(0)
// console.log(myArray);




//  remove the first item in an array
myArray.shift()
// console.log(myArray)



// console.log(myArray.includes(8))
// console.log(myArray.indexOf(8))




const newArr = myArray.join()

// console.log(myArray);
// console.log(newArr);

// console.log(typeof newArr);




// slice  and  splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);

console.log(myn1);


console.log("B ", myArray);


const myn2 = myArray.splice(1, 3);
console.log("C ", myArray)

console.log(myn2)