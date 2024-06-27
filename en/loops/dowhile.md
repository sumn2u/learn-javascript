---
chapter: 7
pageNumber: 67
description: The do...while statement creates a loop that executes specified bloc statement until the test condition evaluates to be false. The condition is evaluated after executing the block.
---
# Do...While

The `do...while` statement creates a loop that executes specified bloc statement until the test condition evaluates to be false. The condition is evaluated after executing the block. The syntax for `do... while` is

```javascript
do {
  // statement
} while (expression);
```

Lets for example see how to print numbers less than 10 using `do...while` loop:

```javascript
var i = 0;
do {
  document.write(i + " ");
  i++; // incrementing i by 1
} while (i < 10);
```

> _**Note**_: `i = i + 1` can be written `i++`.

