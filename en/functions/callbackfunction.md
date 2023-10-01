---
chapter: 8
pageNumber: 5
description: Higher-order functions, in the realm of JavaScript, wield significant power. They offer an avenue to manipulate other functions, enabling functional composition, abstraction, and the ability to craft code that exudes versatility and reusability.
---

# Higher-Order Functions

JavaScript boasts a feature where functions can operate on other functions, either by accepting them as arguments or by returning them. Such functions are termed as higher-order functions. They serve as powerful tools, particularly in modern web development scenarios involving asynchronous operations, array manipulations, and event handling.

Let's commence our journey into this domain with a simple illustration:

```javascript
// Simple functions
let add_2 = function (x) {
  return x + 2;
};
let double = function (x) {
  return 2 * x;
};

// Our higher-order function: map
let map = function (func, list) {
  let output = [];
  for (let idx of list) {
    output.push(func(idx));
  }
  return output;
};

// Applying the map function
console.log(map(add_2, [5, 6, 7])); // Outputs: [7, 8, 9]
console.log(map(double, [5, 6, 7])); // Outputs: [10, 12, 14]
```
