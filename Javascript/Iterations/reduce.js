//filter:- filter() is an array method in JavaScript.
//It creates a new array with all elements that pass a condition (test function).
// The original array is not changed.

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {   //with { }
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);


const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)   //without { } (Implicit return)

console.log(myTotal1);

//example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);