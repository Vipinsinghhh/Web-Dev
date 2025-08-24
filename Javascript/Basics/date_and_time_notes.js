// date and time notes:-

// JavaScript me Date ek built-in object hai jo date aur time ke sath kaam karne ke liye use hota hai.

// 1. Date object banana

let todaydate = new Date();  
console.log(todaydate);            //Ye system ka current date & time dega.

// 2. Different ways to create Date

// Current date & time
let d1 = new Date();  

// Specific date (year, month, day, hour, minute, second, ms)
// NOTE: Month 0 se start hota hai (0 = Jan, 11 = Dec)
let d2 = new Date(2025, 7, 23, 10, 30, 0);  

// Date string se
let d3 = new Date("2025-08-23T10:30:00");  

console.log(d1);
console.log(d2);
console.log(d3);

// 3. Getting Date & Time (Methods)

let today = new Date();

console.log(today.getFullYear());   // 2025
console.log(today.getMonth());      // 7 (August, bcoz 0-based)
console.log(today.getDate());       // 23 (day of month)
console.log(today.getDay());        // 6 (Saturday, 0=Sunday)

console.log(today.getHours());      // Hour (0-23)
console.log(today.getMinutes());    
console.log(today.getSeconds());    
console.log(today.getMilliseconds());

// 4. Setting Date & Time

let myDate = new Date();
myDate.setFullYear(2030);
myDate.setMonth(0);   // January
myDate.setDate(15);
myDate.setHours(12);

console.log(myDate);

// 5. Timestamps (Important)

let timestamp = Date.now();
console.log(timestamp); // e.g., 1755934200123

// 6.Formatting Date & Time

let now = new Date();

console.log(now.toDateString());   // "Sat Aug 23 2025"
console.log(now.toTimeString());   // "10:55:30 GMT+0530 (India Standard Time)"
console.log(now.toLocaleDateString()); // "23/8/2025"
console.log(now.toLocaleTimeString()); // "10:55:30 am"
console.log(now.toLocaleString());     // "23/8/2025, 10:55:30 am"

// 7. Example: Time difference

let start = new Date(2025, 7, 23, 10, 0, 0);
let end = new Date(2025, 7, 23, 12, 30, 0);

let diff = end - start; // milliseconds
console.log(diff / (1000 * 60)); // Minutes => 150



