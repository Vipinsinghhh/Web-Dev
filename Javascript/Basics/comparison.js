//comparison in datatypes in javascript

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);         <---type conversion ho ja rha he yha string se num me 
// console.log("02" > 1);        <---yha bhi

console.log(null > 0);                //     <---
console.log(null == 0);               //        |
console.log(null >= 0);               //        |
                                      //        |--------(Avoid this type of conversion as much as possible)
console.log(undefined == 0);          //        |
console.log(undefined > 0);           //        |
console.log(undefined < 0);           //     <---

// === 

console.log("2" === 2);       //strictly compared without changing data type