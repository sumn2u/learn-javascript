---
chapter: 6
pageNumber: 44  
---
# Push

One can push certain items to an array making the last index the newly added item. It changes the length of an array and returns a new length.

Here's the syntax for using `push`:

```c
array.push(element1[, ...[, elementN]]);
```

The `element1, ..., elementN` arguments represent the elements to be added to the end of the array.

For example:

```javascript
let array = [1, 2, 3]; 
array.push(4); 

console.log(array); 

// Result: array = [1, 2, 3, 4]
```

You can also use `push` to add elements to the end of an array-like object (such as an arguments object or a NodeList object) by first converting it to an array using the `Array.prototype.slice()` method:

```javascript
function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push('d', 'e', 'f');
  console.log(args);
}

printArguments('a', 'b', 'c'); // Result: ["a", "b", "c", "d", "e", "f"]
```

> **Note**: The `push` method modifies the original array. It does not create a new array.
