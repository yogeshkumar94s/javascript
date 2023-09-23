// -------------for each loop in javascript--------------------


const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item) {                    // forEach ek callback function leta hai. Note-- is function ka naam nahi hota. 
//     console.log(item);
// } );



// ---------with arrow function------------

// coding.forEach( (item ) => {
//     console.log(item);
// } );






// -------------function reference------------------

// function printMe(item){
//     console.log(item);
// };

// coding.forEach( printMe );







// ----------------more about forEach-------------------

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);          // every item has the access of the whole array
// } );





// -------------access the keys and values from an object which is inside an Array:---------------------


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: 'js'
    },
    {
        languageName: "java",
        languageFileName: 'java'
    },
    {
        languageName: "python",
        languageFileName: 'py'
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} );


