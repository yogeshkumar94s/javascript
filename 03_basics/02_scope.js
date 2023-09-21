// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)





if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)   //  can't be acces
// console.log(b)   // can't be access
// console.log(c)   // this will be access anywhere in the file and this is a problem




//---------Nested Scope---------------


function one() {
    const username = "yogesh"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two();
}

one(); 








//      Interesting


function addOne(num) {       //      function
    return num + 1
}

addOne(5)




const addTwo = function(num) {         // function expression
    return num + 2 
}

addTwo(5)












