// /Execution Context in JavaScript

// Definition:
// Execution Context is the environment in which JavaScript code runs. 
// It decides which variables, functions, and objects are accessible.

// Types:
// 1. Global Execution Context (GEC): Created first, handles global code, creates global object and 'this'.
// 2. Function Execution Context (FEC): Created whenever a function is called, contains function’s variables, arguments, and inner functions.
// 3. Eval Execution Context: Created inside eval(), rarely used.

// Phases of Execution Context:
// 1. Creation Phase: Memory is allocated, variables are set to undefined, and functions are stored.
// 2. Execution Phase: Code runs line by line, variables get values, and functions are executed.

// Example:
var x = 10
function add(a, b) {
   var result = a + b;
   return result;
}
console.log(add(5, 3));

// - Global Context: allocates x, add. Then x=10 and add() is called.
// - Function Context: allocates a, b, result. Then a=5, b=3, result=8. Returns 8.

// Key Points:
// - Only one Global Execution Context.
// - Each function call creates a new Function Execution Context.
// - Execution Contexts are managed using the Call Stack.

// Short Answer:
// Execution Context is the environment where JS code runs, containing variables, functions, scope, and 'this'.
