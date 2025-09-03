//object De-structuring:-

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor)  //this is normal access method of values in objects 

//this is object de-structuring
const {courseInstructor: instructor} = course

console.log(course.courseInstructor); //before de-structuring using this
console.log(instructor); //after de-structuring using this, only use name that was destructured


//------------API Basics------------------
//Jab hum API (Application Programming Interface) se data lete hain, toh wo data mostly JSON format me aata hai.
// Aur JSON ka structure basically Objects aur Arrays ka combination hota hai.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]