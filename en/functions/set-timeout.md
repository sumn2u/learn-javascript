---
chapter: 8
pageNumber: 56
Title: Set Timeout
---

# Set Timeout
The set timeout global method is used to add a timer (in milliseconds) before a function is ran. 

For instance, in this example after "Ready..." is written in the console, the function `start()` has to wait 3 seconds before running.

```js
console.log("Ready...");

function start() {
console.log("go!!");
}

setTimeout(start, 3000);

//Output: "Ready..." then after 3 seconds, "go!!"
```

# Clear Timeout
The clear timeout global method is used to remove any `setTimeout()` methods that are stores in variables. For instance let's change our last example by storing `setTimeout()` in a variable
```js
console.log("Ready...");

function start() {
console.log("go!!");
}

let timeBeforeStart = setTimeout(start, 3000);

clearTimeout(timeBeforeStart);
// Stops the function as a whole from running
```