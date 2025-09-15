// Call Stack in JavaScript:-

// Definition:
// The call stack is a data structure (Last In, First Out) used by JavaScript 
// to keep track of function calls. 
// When a function is called, it is pushed on the stack. 
// When it finishes, it is popped off. 
// Only one function runs at a time because JavaScript is single-threaded.

// How It Works (Example):
function first() {
   console.log("First");
   second();
   console.log("First End");
}

function second() {
   console.log("Second");
}

first();

// Step-by-step:
// 1. first() called → pushed on stack.
// 2. Logs "First".
// 3. second() called → pushed on stack.
// 4. second() runs → logs "Second".
// 5. second() finishes → popped off stack.
// 6. Back to first(), logs "First End".
// 7. first() finishes → popped off stack.
// 8. Call stack is empty.

// Output:
// First
// Second
// First End

// Key Points:
// - Works like a stack of plates (push and pop).
// - New function calls go on top of the stack.
// - Long tasks block the stack and cause freezing.
// - Infinite loops or too many calls lead to "Stack Overflow" error.

// Real-life Analogy:
// Like a to-do list with sticky notes:
// - Write a task and place on top.
// - Add new tasks on top if needed.
// - Finish the top task, remove it, then continue the previous one.

// Short Answer:
// The Call Stack is the mechanism that tracks function execution order 
// in JavaScript, allowing it to know which function is running 
// and what to do after it finishes.
