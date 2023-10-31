---
chapter: 6
pageNumber: 59 
description:  To add an element at the beginning of an array we can use the reverse method. It modifies the original array and return the new array length.
---
# Reverse

The `reverse` method can be used on any type of array, including arrays of strings, arrays of numbers, and arrays of objects. For example.

```javascript
let users = [{
  name: "John Smith",
  age: 30
}, {
  name: "Jane Doe",
  age: 25
}];

users.reverse();

console.log(users);

// RESULT: 
[{
  name: "Jane Doe",
  age: 25
}, {
  name: "John Smith",
  age: 30
}];
```

The `reverse` method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.
Here is an example of using `reverse` of an array:

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.reverse();
console.log(numbers); // [3, 2, 1]
```
