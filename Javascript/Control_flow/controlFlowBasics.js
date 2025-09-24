//Basics of control flow in js like if else condition

// if
const isUserloggedIn = true
const temperature = 41


if ( isUserloggedIn ){  //basic if condition 
    console.log("do work");
}
//---------------------------------------------------------------------------------
if ( temperature === 41 ){  //strictly checking by ===
    console.log("less than 50");
} else {
    console.log("temperature is greater than 40");
}
console.log("Execute");//this executes always 

//-----------------------------------------------------------------------------------
// <, >, <=, >=, ==, !=, ===, !==    <-operators used for checking conditions

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);  //giving error beacuse power is in block scope

//----------------------------------------------------------------------------------------
const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");  //another method of checking condition without using if else

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {            //else if used when you want to check multiple conditions
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {       //if any condition was not matched then else will executes
    console.log("less than 1200");

}

//---------------------------------------------------------------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {   // AND operator - Returns true if both conditions are true.
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {  //OR operator - Returns true if at least one condition is true.
    console.log("User logged in");
}