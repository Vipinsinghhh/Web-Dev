//Array 

//Initialise an array in 3 different way:-

const myArr = [0, 1, 2, 3, 4, 5]            //first
const myHeros = ["shaktiman", "chulbul", "ganguram"]     //second

const myArr2 = new Array(1,2,3,4)   //third

console.log(myArr[1]);

//----------Array Methods------------

myArr.push(6)      //insert new value in array 
console.log(myArr);

myArr.push(7)      //inserting 7
console.log(myArr);

myArr.pop()         //this used for deleting the last value from array
console.log(myArr);

myArr.unshift(9)     //used for insrting value in starting of array
console.log(myArr);

myArr.shift()        
console.log(myArr);   //used for deleting the starting value of array

console.log(myArr.includes(9))   //used for checking the value is present in array or not

console.log(myArr.indexOf(3));   //checking what value present on index 3

const newArr = myArr.join()   //.join() - convert array into string
console.log(myArr);    //old array
console.log(newArr);   //new array after converting array to string

//slice and splice:-

console.log("A: ",myArr);

const myn1 = myArr.slice(1,3)  //last range does not include
console.log(myn1);   //[1, 2]

console.log("B: ", myArr);

const myn2 = myArr.splice(1,3)  //last range includes and changes also reflected to the array
console.log("c: ", myArr);  //[ 0, 4, 5, 6 ]
console.log(myn2);   //[ 1, 2, 3 ]

