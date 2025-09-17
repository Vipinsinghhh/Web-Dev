📌 Control Flow in JavaScript

🔹 Definition:
Control flow means the order in which instructions/statements are executed in a program.
By default, JavaScript runs code top to bottom, left to right.
But using special statements (conditions, loops, branching), we can change or control that order.

---

🔹 Types of Control Flow

1. Conditional Statements (Decision Making)
Used when we want to execute code based on conditions.

👉 if statement
let age = 20;
if (age >= 18) {
  console.log("You can vote");
}

👉 if...else
let age = 16;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

👉 if...else if...else
let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

👉 switch statement (useful when checking one variable against multiple values)
let day = 2;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Other day");
}

---

2. Loops (Iteration)
Used to run a block of code repeatedly.

👉 for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

👉 while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

👉 do...while loop (runs at least once, even if condition is false)
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

👉 for...of loop (for arrays, strings, iterable objects)
for (let num of [10, 20, 30]) {
  console.log(num);
}

👉 for...in loop (for objects → keys)
let person = { name: "Vipin", age: 22 };
for (let key in person) {
  console.log(key, person[key]);
}

---

3. Branching / Jump Statements
Used to change the normal flow inside loops.

👉 break → exits the loop early
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // 1, 2
}

👉 continue → skips current iteration, moves to next
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1, 2, 4, 5
}

---

🔹 Real-Life Example of Control Flow
👉 Suppose you are building a login system:
- if → check if username/password are correct.
- else → show error message.
- loop → retry attempts (max 3 times).
- break → stop after 3 failed tries.

---

📌 Final Notes Sentence (for revision):
“Control flow in JavaScript defines how the program’s statements are executed. It includes conditions (if, else, switch), loops (for, while, do-while, for-of, for-in), and branching (break, continue) to control execution order.”
