---
chapter: 27
pageNumber: 259
description: Understanding the Event Loop in JavaScript.
---

## Event Loop in JavaScript

The event loop is a fundamental concept in JavaScript that allows for asynchronous programming. It is responsible for executing code, collecting and processing events, and executing queued sub-tasks.

### How the Event Loop Works

JavaScript is single-threaded, meaning it can execute one piece of code at a time. The event loop allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible.

### Components of the Event Loop

1. **Call Stack**: The call stack is where the JavaScript engine keeps track of function calls.
2. **Web APIs**: These are provided by the browser (or Node.js) and include things like `setTimeout`, `DOM events`, and `HTTP requests`.
3. **Callback Queue**: This is where functions are queued up to be executed after the call stack is clear.
4. **Event Loop**: The event loop continuously checks the call stack to see if it's empty. If it is, it takes the first event from the callback queue and pushes it to the call stack.

### Example of the Event Loop

Here's a simple example to illustrate how the event loop works:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

**Output:**
```
Start
End
Timeout
```

### Explanation

1. `console.log("Start")` is executed and "Start" is printed.
2. `setTimeout` is called, and the callback is sent to the Web API. The main thread continues.
3. `console.log("End")` is executed and "End" is printed.
4. The event loop checks the call stack and finds it empty. It then pushes the `setTimeout` callback to the call stack.
5. The `setTimeout` callback is executed and "Timeout" is printed.

### Event Loop in Action

Here's a more complex example to demonstrate the event loop in action:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 1000);

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

**Output:**
```
Start
End
Promise
Timeout 2
Timeout 1
```

### Explanation

1. `console.log("Start")` is executed and "Start" is printed.
2. `setTimeout` with 1000ms delay is called and the callback is sent to the Web API.
3. `setTimeout` with 0ms delay is called and the callback is sent to the Web API.
4. `Promise.resolve().then` is called and the callback is sent to the microtask queue.
5. `console.log("End")` is executed and "End" is printed.
6. The event loop checks the call stack and finds it empty. It then processes the microtask queue first, executing the `Promise` callback and printing "Promise".
7. The event loop then processes the callback queue, executing the `setTimeout` with 0ms delay and printing "Timeout 2".
8. Finally, the `setTimeout` with 1000ms delay is executed and "Timeout 1" is printed.

### Microtasks vs Macrotasks

Microtasks (e.g., Promises) have higher priority than macrotasks (e.g., `setTimeout`). The event loop processes all microtasks before moving on to the next macrotask.

### Example of Microtasks and Macrotasks

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
}).then(() => {
    console.log("Promise 2");
});

console.log("End");
```

**Output:**
```
Start
End
Promise 1
Promise 2
Timeout
```

### Explanation

1. `console.log("Start")` is executed and "Start" is printed.
2. `setTimeout` is called and the callback is sent to the Web API.
3. `Promise.resolve().then` is called and the callback is sent to the microtask queue.
4. `console.log("End")` is executed and "End" is printed.
5. The event loop processes the microtask queue, executing the `Promise` callbacks and printing "Promise 1" and "Promise 2".
6. The event loop then processes the callback queue, executing the `setTimeout` callback and printing "Timeout".

