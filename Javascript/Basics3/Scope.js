//var c = 300

let a = 300
if (true) {                      //example of scope
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log(a);
console.log(b);
console.log(c);


function one(){                        //global scope
    const username = "hitesh"

    function two(){                    //block scope
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

     two()

}

one()

if (true) {                             //global scope
    const username = "hitesh"           
    if (username === "hitesh") {          //block scope
        const website = " youtube"
        console.log(username + website);    //block scope can able to access the global scope
    }
    // console.log(website);    //global scope cannot access the block scope variable 
}

console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//in this situation we can able to pass the argument to the function and able to access the function properties

console.log(addone(5))

function addone(num){          
    return num + 1
}


//but there is not possible beacause this initialisation technique of function is different,there is a function stored in a variable and variables are not declared before initialising them, the variable properties applied on the function if we access function by storing it on the variable
addTwo(5)
const addTwo = function(num){    //another initialising technique of function
    return num + 2
}