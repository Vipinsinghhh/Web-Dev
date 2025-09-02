const tinderUser2 = new Object()  //hum is tarah se bhi object ko create kr skte he
const tinderUser = {}      //is tarah se bhi

tinderUser.id = "123abc"       //insertion of key-value pairs
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {              //nested objects
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);   //like this we access nested objects

const obj1 = {1: "a", 2: "b"}    
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   <- in this nested objects are created in a new object

// const obj3 = Object.assign({}, obj1, obj2, obj4)   <-- inserted all object in a new obj, ab nested objects nhi banege

const obj3 = {...obj1, ...obj2}    //another object concatination method which spreads multiple objects in one objects

console.log(obj3);

//creating multiple objects inside array
const users = [          
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)  //access method of object inside array

// console.log(tinderUser);

console.log(Object.keys(tinderUser));    //printing keys of the objects inside array
console.log(Object.values(tinderUser));   //printing values of the objects inside array
console.log(Object.entries(tinderUser));   //printing key-value pairs of the object inside array0

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checking "isloggedIn" is present in tinderuser object or not
