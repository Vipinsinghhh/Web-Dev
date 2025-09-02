// singleton
// Object.create  <-- 2nd type of object declaration

// object literals  <-- 1st type of object declaration

const mySym = Symbol("key1")  

//declaring object:-
const JsUser = {
    name: "Hitesh", //key-value pairs
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)          //access type 1 - in this sometimes errors might me possible if you declare a key like this "full name"
console.log(JsUser["email"])       //access type 2- always use like this
console.log(JsUser["full name"])   
console.log(JsUser[mySym])   //like this you access the symbol datatype values,brackets are important 

JsUser.email = "hitesh@chatgpt.com"   //changing object email value
// Object.freeze(JsUser)  <-- use this when you want to freeze an object for stop the changes
JsUser.email = "hitesh@microsoft.com"  //ab changes nhi ho skte kyuki object freeze ho gya he
console.log(JsUser);    

JsUser.greeting = function(){      //declaring function in object from outside
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //printing greeting with name which you declare inside a object using "this" keyword
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());