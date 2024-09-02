---
chapter: 8
description: Understanding Hoisting for Functions in JavaScript.
---

## Understanding Hoisting for Functions in JavaScript

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use functions and variables before they are declared in the code.

### Function Hoisting

In JavaScript, function declarations are hoisted to the top of their containing scope. This allows you to call a function before it is defined in the code.

### Example of Function Hoisting

Here's an example to illustrate function hoisting:

```javascript
console.log(greet()); // Output: Hello, World!

function greet() {
    return "Hello, World!";
}
```

In this example, the `greet` function is called before it is defined, but it works because the function declaration is hoisted to the top of the scope.

### Function Expressions and Hoisting

Unlike function declarations, function expressions are not hoisted. This means that you cannot call a function expression before it is defined.

### Example of Function Expression

Here's an example to illustrate the difference:

```javascript
console.log(greet()); // Output: TypeError: greet is not a function

var greet = function() {
    return "Hello, World!";
};
```

In this example, the `greet` function is defined as a function expression, and calling it before the definition results in an error because the variable `greet` is hoisted, but its assignment is not.

### Hoisting with `let` and `const`

Variables declared with `let` and `const` are also hoisted, but they are not initialized. This means that accessing them before their declaration results in a `ReferenceError`.

### Example with `let` and `const`

```javascript
console.log(greet); // Output: ReferenceError: Cannot access 'greet' before initialization

let greet = function() {
    return "Hello, World!";
};
```

In this example, the `greet` variable is hoisted, but it is not initialized, resulting in a `ReferenceError` when accessed before its declaration.

### Conclusion

Understanding hoisting is crucial for writing predictable and bug-free JavaScript code. Function declarations are hoisted, allowing them to be called before they are defined, while function expressions are not hoisted, leading to potential errors if called before their definition. Variables declared with `let` and `const` are hoisted but not initialized, resulting in `ReferenceError` if accessed before their declaration.
