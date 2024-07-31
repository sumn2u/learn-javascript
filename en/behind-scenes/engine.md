---
chapter: 27
pageNumber: 258
description: Understanding JavaScript Engines and how they execute JavaScript code. 
---

## Understanding JavaScript Engines

A JavaScript engine is a program or an interpreter that executes JavaScript code. The most well-known JavaScript engines are V8 (used in Google Chrome and Node.js), SpiderMonkey (used in Firefox), and JavaScriptCore (used in Safari).

### How JavaScript Engines Work

JavaScript engines perform several key tasks to execute JavaScript code efficiently:

1. **Parsing**: The engine parses the JavaScript code into an Abstract Syntax Tree (AST).
2. **Compilation**: The AST is then compiled into bytecode or machine code.
3. **Execution**: The compiled code is executed by the engine.

### Example of JavaScript Engine Workflow

Here's a simple example to illustrate the workflow of a JavaScript engine:

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
```

### Parsing

The engine first parses the code into an AST. For the above code, the AST might look something like this:

```
Program
 ├── FunctionDeclaration (add)
 │   ├── Identifier (a)
 │   ├── Identifier (b)
 │   └── BlockStatement
 │       └── ReturnStatement
 │           └── BinaryExpression (+)
 │               ├── Identifier (a)
 │               └── Identifier (b)
 └── ExpressionStatement
     └── CallExpression (console.log)
         └── CallExpression (add)
             ├── Literal (2)
             └── Literal (3)
```

### Compilation

The AST is then compiled into bytecode or machine code. This step involves optimizations to improve performance.

### Execution

The compiled code is executed by the engine. In this case, the `add` function is called with arguments `2` and `3`, and the result `5` is logged to the console.

### Just-In-Time (JIT) Compilation

Modern JavaScript engines use Just-In-Time (JIT) compilation to improve performance. JIT compilation involves compiling code at runtime, rather than before execution. This allows the engine to optimize the code based on actual usage patterns.

### Example of JIT Compilation

```javascript
function multiply(a, b) {
    return a * b;
}

for (let i = 0; i < 1000000; i++) {
    multiply(2, 3);
}
```

In this example, the `multiply` function is called repeatedly. A JIT compiler can optimize the function after detecting that it is a hot function (i.e., frequently called).

### Garbage Collection

JavaScript engines also include garbage collectors to manage memory. The garbage collector automatically frees up memory that is no longer in use, preventing memory leaks.

### Example of Garbage Collection

```javascript
function createObject() {
    return { name: "Object" };
}

let obj = createObject();
obj = null; // The object is now eligible for garbage collection
```
In this example, the object created by `createObject` is eligible for garbage collection after `obj` is set to `null`.
