---
chapter: 19
pageNumber: 122
description: In programming, errors can occur while writing code. It could be due to syntactical or logical errors. The process of finding errors can be time-consuming and tricky and is called code debugging.
---
# Debugging

In programming, errors can occur while writing code. It could be due to syntactical or logical errors. **Code debugging** is the process of identifying, isolating, and fixing errors, which can be time-consuming and tricky.

Fortunately, most modern browsers come with built-in debuggers. These debuggers can be switched on and off, forcing errors to be reported. It is also possible to set up breakpoints during the execution of code to stop execution and examine variables. For this one has to open a debugging window and place the `debugger` keyword in the JavaScript code. The code execution is stopped in each breakpoint, allowing developers to examine the JavaScript values and, resume the execution of code.

## The console.log() Technique

One of the simplest and most widely used debugging methods is using the `console.log()` function. It helps you track the flow of your code and inspect the values of variables at specific points in execution. 

```javascript
function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  console.log('Tax calculated:', tax);  // Output for inspection
  const total = price + tax;
  return total;
}

calculateTotal(100, 0.2);
```
Use `console.log()` to:

- Check if a function is being called.
- Print the value of variables.
- Monitor control flow (e.g., if a condition is met).

Other useful `console` methods:

- `console.error()` – for logging errors.
- `console.warn()` – for warnings.
- `console.table()` – for printing data in tabular form.
- `console.trace()` – to print the stack trace at a certain point.

## Using Breakpoints

A breakpoint is a spot in your code where execution will pause, allowing you to examine the current state: variable values, call stack, scope chain, etc.
Modern browsers offer developer tools with debugging capabilities.

### How to Set Breakpoints
1. Open the Sources panel in DevTools.
2. Navigate to your script file.
3. Click on the line number where you want execution to pause.

Once paused, you can:

- **Step over** – move to the next line.
- **Step into** – dive into a function call.
- **Step out** – exit the current function.
- **Resume** – continue execution until the next breakpoint.
Breakpoints are non-intrusive and can be added/removed without changing your code.

## Browser Developer Tools
Modern browsers come equipped with powerful developer tools that aid in debugging JavaScript, inspecting HTML and CSS, and monitoring network requests. Here's a brief overview of some essential tools:

**Chrome DevTools:** Google Chrome's developer tools offer a wide range of features for debugging web applications.

**Firefox DevTools:** Mozilla Firefox's developer tools are another excellent option, offering similar capabilities.

**Microsoft Edge DevTools:** For Microsoft Edge users, the built-in developer tools provide essential debugging features.

**Safari Web Inspector:** Safari's Web Inspector is a robust toolset for debugging and profiling web applications.

### Browser Dev Tools

Browsers provide a set of developer tools that allow you to inspect HTML, CSS, and JavaScript.
We can access them by right-clicking on a web page and selecting "Inspect" or by pressing `F12` or `Ctrl+Shift+I`/ `Cmd + Option + I` (Mac).

### Key Panels in Developer Tools
- **Console:** Displays logs, errors, and allows executing JS in real time.
- **Elements / Inspector:** Lets you browse and edit the HTML and CSS.
- **Sources:** Where you debug JavaScript using breakpoints.
- **Network:** View resource loading, timing, and request/response data.
- **Performance / Memory:** Useful for profiling and identifying memory leaks or bottlenecks.

We can insert the debugger statement in the code to create breakpoints programmatically. When the code encounters debugger, it will pause execution and open the browser's developer tools.

### Watch Expressions and Scope

In the DevTools, you can **watch** variables or expressions. This is helpful when debugging complex logic or tracking a variable over time.

- Use the **Watch** panel to track expressions like user.name or cart.length.
- View **Local**, **Closure**, and **Global** scopes to inspect available variables.

### Stack Trace and Call Stack

When paused at a breakpoint (or after an error), you can inspect the Call Stack panel:

- It shows the series of function calls that led to the current point.
- Clicking on a frame lets you inspect variables in that context.
Understanding the call stack is vital for fixing unexpected behaviors caused by incorrect function flows.

## Common Debugging Strategies

- **Simplify the problem**: Try to isolate the smallest reproducible example.
- **Use assertions**: Manually check assumptions in your code.
- **Rubber duck debugging**: Explain your code to someone (or something!) to uncover hidden issues.
- **Search for error messages**: JavaScript errors often contain helpful information.
- **Check browser compatibility**: Not all browsers behave identically.
- **Use linters**: Tools like ESLint can catch many common bugs before you run your code.

