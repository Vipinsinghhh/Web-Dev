//some common string operation:-

//1. length ( size of string check krna)

let name ="vipin";
console.log(name.length);

//2. access characters

let str = "javascript";
console.log(str[0]);
console.log(str[5]);

//3. change case

let text = "hello";
console.log(text.toUpperCase());

//4. trim(remove spaces)

let msg = "  Hi Js  ";
console.log(msg.trim());
console.log(msg.trimStart());
console.log(msg.trimEnd());

//5.slice/substring(part nikalna)

let str2 = "javascript";
console.log(str2.slice(0,4));
console.log(str2.slice(4,10));

//6. Replace the word from string

let text2 = "I love python";
console.log(text2.replace("python","javascrit"));

//7. concatinate the string

let a = "hello";
let b = "world";
console.log(a.concat(" ",b));
console.log(a+" "+b);

//8. Includes(check word is exist in the string or not)

let text3 = "javascript is awesome";
console.log(text3.includes("java"));
console.log(text3.includes("python"));

//9. Startwith / endswith ( check the string is start with that word or not)
let text4 = "hello my name is vipin";
console.log(text4.startsWith("hello"));
console.log(text4.endsWith("name"));
console.log(text4.endsWith("vipin"));

//10. Split (split string into the array)

let text5 = "apple, bannana, mango";
let text6 = "haha-hehe-huhu-lulu";
let arr = text5.split(" ");
console.log(arr);
console.log(text5.split(" "));
console.log(text6.split("-"));

//11. Repeat ( reapeat the string)
let word = "hi ";
console.log(word.repeat(5));

//12.template literals(backticks)

let namee = "vipin";
let age = 22;
console.log(`hello my name is ${name} and my age is ${age}.`)




