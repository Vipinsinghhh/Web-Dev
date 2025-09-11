
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");              
    console.log("E");
    console.log("S");
    console.log("H");
}                           //normal code

sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result                       //after this return statement further code does't run
    return number1 + number2
}

const result = addTwoNumbers(3, 5)   //return value of function is need to store in variable for taking output

console.log("Result: ", result);   


function loginUserMessage(username = "sam"){ //sets default value if calling function does't passes valid argumnet
    if(!username){                                  //checking if username not present print any statement, it is basically used for checking the calling function passes the argument or calling null function 
        console.log("PLease enter a username");                                                                                   
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){     //the rest paramneter incluldes all remaining values into array
    console.log(val1);
    console.log(val2);
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)    //we can pass whole object in function like this

handleObject({           //also like this
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]     

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));             //passing array into function by reference of array variable
console.log(returnSecondValue([200, 400, 500, 1000]));     //pasing array into function manually