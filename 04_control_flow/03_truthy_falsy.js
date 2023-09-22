const userEmail = "y@google.ai"

if (userEmail) {                // here userEmail is a truthy value
    console.log("got user email")
} else {
    console.log("don't have user email")
}





// ---------------falsy values------------

// false, 0, -0, bigint 0n, "", null, undefined, NaN




//-----------------truthy values----------------

// "0", 'falsy', ' ', [], {}, function() {}




// ------------check if an array is empty-----------------------

const myArray = [];

if (myArray.length === 0) {
    console.log("array is empty")
} else {
    console.log("array is not empty")
}



// -------------to chech if an object is empty------------------

const myObject = {};

if (Object.keys(myObject).length === 0) {
    console.log("object is empty");
} else {
    console.log('object is not empty');
};









// -------------nullish coalescing operator (??) : null  undefined----------


let val1;
// val1 = 5 ?? 10;     // val1 will be 5
// val1 = null ?? 10      // val1 will be 10
// val1 = undefined ?? 10 ?? 20;     // val1 will be 10


// console.log(val1);








// ------------ternary operator------------

// condition ? true : false


const iceTeaPrice = 10;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")