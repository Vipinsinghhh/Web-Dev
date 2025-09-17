//map:- map() is an array method in JavaScript.
//It creates a new array by applying a function to each element of the original array.
//It does not change the original array.
//Always returns an array of the same length.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => {   //with { } (block scope)
    return num + 10
})
console.log(newNums);

const newNums1 = myNumbers.map( (num) => num + 10) //without { } (implicit return)
console.log(newNums1);

//---------chaining---------------------
//chaining is used when need to perform multiple operations in a array
const newNums2 = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums2);