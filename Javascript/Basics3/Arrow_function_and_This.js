const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);    //this.username(key) only use in the objects
        console.log(this);
    },
    ArrowFunction: () => {
        console.log(this.username);    //undefined -> this. is not allowed in the arrow function
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

user.ArrowFunction()   //calling arrow function of object

console.log(this);


function Chai(){
    // let username = "vipin";
    console.log(this.username);  //undefined
    console.log(this);  //so many things displayed in terminal  
}
Chai();     

const coffee = function(){    //another way of declaring function
    let username = "vipin";
    console.log(this.username); //undefined
    console.log(this);    //so many things displayed in terminal
}
coffee(); 

const arrowFn = () => {   // arrow function declared
    let username = "vipin"; 
    console.log(this.username); //undefined
    console.log(this);  //empty object output me aaega -> {}
}
arrowFn(); 
//it is compulsory to store arrow function in variable without doing this arrow function doesn't work

//---------implicit return arrow function------------

const addTwo = (num1, num2) => {   //normal arrow function
    return num1 + num2
}

const addTwo1 = (num1, num2) =>  num1 + num2    //implicit return arrow function without Parentheses

const addTwo2 = (num1, num2) => ( num1 + num2 )   //implicit return arrow function with Parentheses

const addTwo3= (num1, num2) => ({username: "hitesh"})   //it is used when you want to return object in function (must use parantheses() otherwise it shows undefined)


console.log(addTwo1(3, 4));
console.log(addTwo2(3,4));
console.log(addTwo3(3,4));





// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()