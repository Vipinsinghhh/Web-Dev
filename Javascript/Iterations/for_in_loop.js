//for_in loop:-
//we can say for_in loop used when we want to iterate object beacuse for_of loop does iterate objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);  //for values use (myobject[key])
}

for (const key in myObject) {
    console.log(key);  //only for keys 
}

//for_in Loop on array:-
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);  //it prints indexes of array
}

for (const key in programming) {
    console.log(programming[key]);  //it prints values of array
}

//Map
//for_in Loop does't work on map
//basically for_of loop works on the map and for_in loop is not

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);  //no output
}