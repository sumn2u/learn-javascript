---
chapter: 19
pageNumber: 102
---
# Debugging

In programming, errors can occur while writing code. It could be due to syntactical or logical errors. The process of finding errors can be time-consuming and tricky and is called code debugging.

Fortunately, most modern browsers come with built-in debuggers. These debuggers can be switched on and off, forcing errors to be reported. It is also possible to set up breakpoints during the execution of code to stop execution and examine variables. For this one has to open a debugging window and place the `debugger` keyword in the JavaScript code. The code execution is stopped in each breakpoint, allowing developers to examine the JavaScript values and, resume the execution of code.

One can also use the `console.log()` method to print the JavaScript values in the debugger window.

```javascript
const a = 5, b = 6;
const c = a + b;
console.log(c);
// Result : c = 11;
```
