//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(i);
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);  
    
}

// console.log(element); //error - element is not defined

//nested loops:-

for (let i = 1; i <= 10; i++) {     
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );  //old way or complicated, use backticks--
    console.log(`${i} * ${j} = ${i*j}`);  //this is best way                      <---|
   }   
}

//Array in loops:-

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue:-

//break:-
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
   console.log(`Value of i is ${index}`);
    
}

//continue:-
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);
    
}