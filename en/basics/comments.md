---
chapter: 2
pageNumber: 10
description: Comments are used to mark annotations for other programmers or small descriptions about the code that helps others to understand it. These statement are not executed by the interpreter.
---

# Comments

Comments are statements that will not be executed by the interpreter, comments are used to mark annotations for other programmers or small descriptions of what code does, thus making it easier for others to understand what your code does. They are also used to temporarily disable code without affecting the program control flow.

In JavaScript, comments can be written in 2 different ways:

* _Single-line comments_: It starts with two forward slashes (`//`) and continue until the end of the line. Anything following the slashes is ignored by the JavaScript interpreter. For example:

```javascript
// This is a comment, it will be ignored by the interpreter
let a = "this is a variable defined in a statement";
```

* _Multi-line comments_: It starts with a forward slash and an asterisk (`/*`) and end with an asterisk and a forward slash (`*/`). Anything between the opening and closing markers is ignored by the JavaScript interpreter. For example:

```javascript
/*
This is a multi-line comment,
it will be ignored by the interpreter
*/
let a = "this is a variable defined in a statement";
```

Including comments in code is essential for maintaining code quality, enabling collaboration, and simplifying the debugging process. By providing context and explanations for various parts of the program, comments make it easier to understand the code in the future. Therefore, it is considered a beneficial practice to include comments in code.