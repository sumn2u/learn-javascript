---
chapter: 27
pageNumber: 257
description: Understanding Call Stacks in JavaScript 
---


## Understanding Call Stacks in JavaScript

In JavaScript, a Call Stack is a data structure that uses the Last-In, First-Out (LIFO) principle to temporarily store and manage function invocation (call).

### What is a Call Stack?

A call stack is responsible for keeping track of function calls in your code. The call stack helps the JavaScript interpreter to keep track of what function is currently being run and what functions are called from within that function, and so on.

When a script calls a function, JavaScript's interpreter adds that function to the call stack and then starts carrying out the function. Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.

When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last line of code that was run.

### Example of a Call Stack

Here's a basic example to understand how a call stack works:

```javascript
function firstFunction() {
    console.log("First function is called.");
    secondFunction();
    console.log("First function is done.");
}

function secondFunction() {
    console.log("Second function is called.");
    thirdFunction();
    console.log("Second function is done.");
}

function thirdFunction() {
    console.log("Third function is called.");
}

firstFunction();
```

**Output:**
```
First function is called.
Second function is called.
Third function is called.
Second function is done.
First function is done.
```

### How the Call Stack Works

1. When `firstFunction` is called, it is added to the call stack.
2. Inside `firstFunction`, `secondFunction` is called, so it is added to the call stack.
3. Inside `secondFunction`, `thirdFunction` is called, so it is added to the call stack.
4. `thirdFunction` completes and is removed from the call stack.
5. `secondFunction` resumes, completes, and is removed from the call stack.
6. `firstFunction` resumes, completes, and is removed from the call stack.

### Stack Overflow

A stack overflow occurs when there are too many function calls in the call stack. This can happen with recursive functions that do not have a base case to stop the recursion.

```javascript
function recursiveFunction() {
    recursiveFunction();
}

recursiveFunction();
```

This will result in a "Maximum call stack size exceeded" error.

