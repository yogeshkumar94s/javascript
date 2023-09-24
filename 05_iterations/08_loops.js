// --------------reduce-------------------


const myNums = [1, 2, 3]

// myTotal = myNums.reduce( function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)


// -------------with arrow function-------------------


// const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0 )

// console.log(myTotal);









const shoppingCart = [
    {
        itemName: 'js course',
        price: 999
    },
    {
        itemName: 'python',
        price: 399
    },
    {
        itemName: 'mobile devlopment',
        price: 15000
    },
    {
        itemName: 'data science course',
        price: 35000
    },
    {
        itemName: 'data analyst',
        price: 25000
    },
]



 const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

 console.log(priceToPay);