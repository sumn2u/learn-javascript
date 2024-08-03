---
chapter: 27
pageNumber: 260
description: Understanding Execution Context in JavaScript.
---

## Understanding Execution Context in JavaScript

In JavaScript, an execution context is an environment where the code is evaluated and executed. It is a fundamental concept that helps manage the scope and behavior of variables and functions.

### Types of Execution Context

There are three main types of execution contexts in JavaScript:

1. **Global Execution Context**: This is the default context where the code starts execution. It creates a global object (e.g., `window` in browsers) and sets up the global scope.
2. **Function Execution Context**: Created whenever a function is invoked. Each function has its own execution context.
3. **Eval Execution Context**: Created when code is executed inside the `eval` function.

### Phases of Execution Context

Each execution context goes through two phases:

1. **Creation Phase**: In this phase, the JavaScript engine sets up the environment for the code to be executed. It involves:
   - Creating the `this` binding.
   - Setting up the scope chain.
   - Creating the variable object (variables, functions, and arguments).

2. **Execution Phase**: In this phase, the JavaScript engine executes the code line by line.

### Example of Execution Context

Here's an example to illustrate how execution contexts work:

```javascript
var globalVar = "I am a global variable";

function outerFunction() {
    var outerVar = "I am an outer variable";

    function innerFunction() {
        var innerVar = "I am an inner variable";
        console.log(globalVar); // Accesses global variable
        console.log(outerVar);  // Accesses outer variable
        console.log(innerVar);  // Accesses inner variable
    }

    innerFunction();
}

outerFunction();
```

**Output:**
```
I am a global variable
I am an outer variable
I am an inner variable
```

### Explanation

1. **Global Execution Context**:
    - `globalVar` is created and assigned the value "I am a global variable".
    - `outerFunction` is created and stored in memory.

2. **Function Execution Context (outerFunction)**:
    - `outerVar` is created and assigned the value "I am an outer variable".
    - `innerFunction` is created and stored in memory.

3. **Function Execution Context (innerFunction)**:
    - `innerVar` is created and assigned the value "I am an inner variable".
    - The `console.log` statements access variables from their respective scopes.

### Scope Chain and Lexical Environment

The scope chain is a list of all the variable objects that the currently executing code has access to. The lexical environment is the environment in which the code is written, and it determines the scope chain.

### Example of Scope Chain

```javascript
var a = 10;

function foo() {
    var b = 20;

    function bar() {
        var c = 30;
        console.log(a + b + c); // Accesses variables from all scopes
    }

    bar();
}

foo();
```

**Output:**
```
60
```

### Explanation

1. **Global Scope**: Contains `a`.
2. **Function Scope (foo)**: Contains `b` and has access to `a`.
3. **Function Scope (bar)**: Contains `c` and has access to `a` and `b`.

### Hoisting

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the creation phase.

### Example of Hoisting

```javascript
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

hoistedFunction(); // Output: I am a hoisted function
function hoistedFunction() {
    console.log("I am a hoisted function");
}
```

### Explanation

- `hoistedVar` is declared but not initialized during the creation phase, so it is `undefined` when accessed.
- `hoistedFunction` is fully hoisted and can be called before its declaration.