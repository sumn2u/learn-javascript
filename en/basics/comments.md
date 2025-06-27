---
chapter: 2
pageNumber: 12
description: Comments are used to mark annotations for other programmers or small descriptions about the code that helps others to understand it. These statement are not executed by the interpreter.
---

# Comments

Comments are statements that will not be executed by the interpreter. They are used to mark annotations for other programmers or small descriptions of what code does, thus making it easier for others to understand what your code does. They are also used to temporarily disable code without affecting the program control flow.

## Types of Comments

### Single Line Comments

Single-line comments start with two forward slashes (`//`) and continue until the end of the line. Anything following the slashes is ignored by the JavaScript interpreter.

```javascript
// This is a comment, it will be ignored by the interpreter
let a = "This is a variable";
```

You can also use them at the end of a line:

```javascript
let b = 5; // This is also a valid single-line comment
```

### Multi-line Comments
Multi-line comments start with `/*` and end with `*/`. Everything in between is ignored.

```javascript
/*
  This is a multi-line comment.
  You can use it to explain more complex logic
  or block out code temporarily.
*/
let x = 10;
```

### Real-life Examples of Comments
```javascript
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
```

```javascript
/*
  Temporarily disabled welcome message while testing new UI flow.
*/
 
/*
document.getElementById("myH").innerHTML = "Welcome back!";
document.getElementById("myP").innerHTML = "We're glad to see you again.";
*/
```

They are also useful for debugging purposes:

```javascript
let total = 0;
// total = calculateTotal(items); // Temporarily disabled during testing
```

```javascript
/*
  Debugging logs for login issue
  Commented out after issue was resolved
*/

/*
console.log("User data:", user);
console.log("Auth token:", token);
console.log("Response from API:", response);
*/
```

Including comments in code is essential for maintaining code quality, enabling collaboration, and simplifying the debugging process. By providing context and explanations for various parts of the program, comments make it easier to understand the code in the future. Therefore, it is considered a beneficial practice to include comments in code.