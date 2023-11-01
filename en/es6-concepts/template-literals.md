---
chapter: 25
pageNumber: 251
description: Template literals, introduced in ES6 (ECMAScript 2015), offer a powerful way to create dynamic strings in JavaScript. They allow you to embed expressions directly within strings, making your code more readable and expressive. Template literals are commonly used for generating dynamic content, such as HTML, and for simplifying string manipulation in JavaScript.
---

## Template Literals in ES6: Creating Dynamic Strings

Template literals, introduced in ES6 (ECMAScript 2015), provide a powerful way to create dynamic strings in JavaScript. These literals are enclosed in backticks (\` \`) instead of single or double quotes and allow for seamless embedding of expressions directly within the string.

**Syntax:**

```javascript
const dynamicString = `This is a dynamic string with ${expression}`;
```

- `dynamicString`: This is where you store the dynamic string.

- `${expression}`: This is where you embed JavaScript expressions, variables, or functions, which are evaluated and included within the string.

**Example:**

Here's a simple example of using template literals to create dynamic strings:

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```

**Use Cases:**

Template literals are commonly used for various purposes, including:

1. **String Interpolation:** Inserting variables or expressions within strings.

2. **Multi-line Strings:** Creating multi-line strings without needing line breaks and concatenation.

3. **Dynamic HTML:** Generating HTML content dynamically for web applications.

4. **Tagged Templates:** Allowing for custom processing of template literals through template tag functions.

By using template literals, you can simplify string concatenation, enhance the readability of your code, and make dynamic string creation a breeze in JavaScript.