//forEach loop:-

const coding = ["js", "ruby", "java", "python", "cpp"]

//Different Ways to Use forEach()

coding.forEach( function (val){  //Simple Example (only element)
    console.log(val);
} )


coding.forEach( (item) => {   //Using Arrow Function
    console.log(item);
} )


function printMe(item){     //Passing a Named Function
    console.log(item);
}
coding.forEach(printMe)


coding.forEach( (item, index, arr)=> {   //Accessing the Original Array
    console.log(item, index, arr);   //value, index, whole array 
} )


//objects in array- in this format values are comes when we fetch data from database
const myCoding = [     
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {   //using arrow function
    
    console.log(item.languageName);
} )

myCoding.forEach(function (item){   //using normal function
    console.log(item.languageFileName);
    
})