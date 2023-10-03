---
chapter: 6
pageNumber: 40  
description: Spread operator allows array or object to quickly manipulate arrays and objects. It provides a concise syntax for copying, merging, or extracting elements from arrays, and for copying properties from objects. 
---
# Spread

An array or object can be quickly copied into another array or object by using the Spread Operator `(...)`. It allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

Here are some  examples of it:

```javascript
let arr = [1, 2, 3, 4, 5]; 

console.log(...arr); 
// Result: 1 2 3 4 5

let arr1;
arr1 = [...arr]; //copies the arr into arr1 

console.log(arr1);    //Result: [1, 2, 3, 4, 5]

arr1 = [6,7];
arr = [...arr,...arr1];

console.log(arr);   //Result: [1, 2, 3, 4, 5, 6, 7]

```

{% hint style="warning" %}
The spread operator only works in modern browsers that support the feature. If you need to support older browsers, you will need to use a transpiler like Babel to convert the spread operator syntax to equivalent ES5 code.
{% endhint %}
