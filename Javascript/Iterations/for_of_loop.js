// for of loop:-

// ["", "", ""]
// [{}, {}, {}]  //every time you fetch data from database it comes in this format


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {     //for_of loop on array
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {     //for_of loop on string
    if(greet == " "){  
        continue;    //skipping space in a string
    }
    console.log(`Each char is ${greet}`)
}


// Maps
//Map is an in-built object in JavaScript

const map = new Map()   
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // not allowed same thing again - Maintains insertion order (the order you add items is preserved).

console.log(map);

//for_of loop works on the map
for (const [key] of map) {    //
    console.log(key);  //only key prints
}

for (const [key, value] of map) {    
    console.log(key, ':-', value);  //both key value pair prints
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//but for_of Loop does't work on objects

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  //output :- object is not iterable
// }