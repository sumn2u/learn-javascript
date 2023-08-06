---
chapter: 19
pageNumber: 94
description: Hosting is a default behavior in JavaScript of moving declarations at the top.  While executing a code, it creates a global execution context  creation and execution.  In the creation phase, JavaScript moves the variable and function declaration to the top of the page, which is known as hoisting.
---
# Hoisting

Hosting is a default behavior in JavaScript of moving declarations at the top.  While executing a code, it creates a global execution context:  creation and execution.  In the creation phase, JavaScript moves the variable and function declaration to the top of the page, which is known as hoisting.&#x20;

```javascript
// variable hoisting
console.log(counter);
let counter = 1; // throws ReferenceError: Cannot access 'counter' before initialization
```

Although the `counter` is present in the heap memory but hasn't been initialized so, it throws an error. This happens because of hoisting, the `counter` variable is hoisted here.&#x20;

<pre class="language-javascript"><code class="lang-javascript"><strong>// function hoisting
</strong><strong>const x = 20,
</strong>    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = (x, y) => x + y; 
</code></pre>

Here, the `add` function is hoisted and initialized with `undefined` in heap memory in the creation phase of the global execution context. Thus, throwing an error.&#x20;



