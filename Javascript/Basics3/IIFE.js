// Immediately Invoked Function Expressions (IIFE)


function chai(){     
    console.log(`DB CONNECTED `);
    
}

chai();


( function aurcode(){    //this is named IIFE
    console.log(`DB CONNECTED 2`)
})();    //must use semicolon for ending the context of function otherwise next function doesn't work


( () => {           //this is simple or unnamed IIFE
    console.log(`DB CONNECTED 3`)
})();


// This is how argument passed in the iife function:-
( (name) => {
    console.log(`DB CONNECTED 4 ${name}`)
})("vipin");