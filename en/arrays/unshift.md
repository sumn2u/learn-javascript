---
chapter: 6
pageNumber: 38  
---
# Unshift

The `unshift` method adds new elements sequentially to the start, or front of the array. It modifies the original array and returns the new length of the array. For example.

```javascript
let array = [0, 5, 10];
array.unshift(-5);  // 4

// RESULT: array = [-5 , 0, 5, 10];
```

{% hint style="warning" %}
The `unshift()` method overwrites the original array.
{% endhint %}

The `unshift` method takes one or more arguments, which represent the elements to be added to the beginning of the array. It adds the elements in the order they are provided, so the first element will be the first element of the array.

Here is an example of using `unshift` to add multiple elements to an array:

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.unshift(-1, 0);
console.log(numbers); // [-1, 0, 1, 2, 3]
console.log(newLength); // 5
```
