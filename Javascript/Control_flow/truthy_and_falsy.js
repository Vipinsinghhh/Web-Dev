//truthy and falsy values in javascript

const userEmail = []

if (userEmail) { //chceking useremail ke andar kuch he ya nhi
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values:-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {    //checking the length of useremail and comparing it to 0, if length is 0 it means the array does't contain any value
    console.log("Array is empty");
}

const emptyObj = {}

//(object.keys(anyobject).length) <- used to check length of object

if (Object.keys(emptyObj).length === 0) {  //checking the length of object and comparing it to 0 
    console.log("Object is empty");
}

//--------------------------------------------------------------------------------------------------------------------------------------

// Nullish Coalescing Operator (??): null undefined 
//The Nullish Coalescing Operator (??) is used to provide a default value when a variable is null or undefined.
//"?? is a logical nullish coalescing operator used for default value handling (fallback values). It is a short-circuit operator that only checks for null and undefined.
//this is basically used when you take the data from database and you dont want null value and unefined value


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//-------------------------------------------------------------------------------------------------------------------------------------------
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")