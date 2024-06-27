---
chapter: 19
pageNumber: 122
description: In programming, errors can occur while writing code. It could be due to syntactical or logical errors. The process of finding errors can be time-consuming and tricky and is called code debugging.
---
# Debugging

In programming, errors can occur while writing code. It could be due to syntactical or logical errors. The process of finding errors can be time-consuming and tricky and is called *code debugging*.

Fortunately, most modern browsers come with built-in debuggers. These debuggers can be switched on and off, forcing errors to be reported. It is also possible to set up breakpoints during the execution of code to stop execution and examine variables. For this one has to open a debugging window and place the `debugger` keyword in the JavaScript code. The code execution is stopped in each breakpoint, allowing developers to examine the JavaScript values and, resume the execution of code.

One can also use the `console.log()` method to print the JavaScript values in the debugger window.

```javascript
const a = 5, b = 6;
const c = a + b;
console.log(c);
// Result : c = 11;
```
## Browser Developer Tools
Modern browsers come equipped with powerful developer tools that aid in debugging JavaScript, inspecting HTML and CSS, and monitoring network requests. Here's a brief overview of some essential tools:

**Chrome DevTools:** Google Chrome's developer tools offer a wide range of features for debugging web applications.

**Firefox DevTools:** Mozilla Firefox's developer tools are another excellent option, offering similar capabilities.

**Microsoft Edge DevTools:** For Microsoft Edge users, the built-in developer tools provide essential debugging features.

**Safari Web Inspector:** Safari's Web Inspector is a robust toolset for debugging and profiling web applications.

## Using Breakpoints

Modern browsers offer developer tools with debugging capabilities.
Setting breakpoints pauses code execution and helps to inspect variables and call stacks.


### Browser Developer Tools

Browsers provide a set of developer tools that allow you to inspect HTML, CSS, and JavaScript.
We can access them by right-clicking on a web page and selecting "Inspect" or by pressing `F12` or `Ctrl+Shift+I`.
Key features include:

**Console:** View and interact with console output.

**Elements:** Inspect and modify the DOM.

**Sources:** Debug JavaScript with breakpoints and watch expressions.

**Network:** Monitor network requests and responses.
Using debugger Statement

We can insert the debugger statement in the code to create breakpoints programmatically. When the code encounters debugger, it will pause execution and open the browser's developer tools.
