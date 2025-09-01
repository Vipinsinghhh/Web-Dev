const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)    //array ke andar push hoke nested array ban jata he  
console.log(marvel_heros);
//Output:- [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3][1]);  //3rd index ke subarray ki  1st index ki value print hogi:- flash

const allHeros = marvel_heros.concat(dc_heros)  //concat individual index to new array did not push whole array in another array
console.log(allHeros);   //['thor','Ironman','spiderman',[ 'superman', 'flash', 'batman' ],'superman', 'flash', 'batman']

const all_new_heros = [...marvel_heros, ...dc_heros]  //another method of concatinate array

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //arrays ko "flatten" karta hai (matlab andar wale arrays ko bahar le aata hai)  , using infinity as a depth if you dont know how many nested array are avialable in in array
console.log(real_another_array);  //output:- [1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Hitesh"))  //checking "hitesh" is an array or not, using "Array.isArray()" method
console.log(Array.from("Hitesh"))     //converting string to array
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   //converting integer variables value into array
                                                //Output:- [ 100, 200, 300 ]