---
chapter: 6
pageNumber: 42 
description: The pop methods remove the last element of an array and returns the result. This method changes the array length.
---
# Pop

The `pop` method removes the last element from an array and returns that element. This method changes the length of the array.

Here's the syntax for using `pop`:

```c
array.pop();
```

For example:

```javascript
let arr = ["one", "two", "three", "four", "five"]; 
arr.pop(); 

console.log(arr); 

// Result: ['one', 'two', 'three', 'four']
```

You can also use the `pop` method in conjunction with a loop to remove all elements from an array. Here's an example of how you might do this:

```c
while (array.length > 0) {
  array.pop();
}

console.log(array); // Result: []
```

{% hint style="warning" %}
The `pop` method only works on arrays, and not on other objects that are similar to arrays such as arguments objects or NodeList objects. If you need to pop elements from one of these types of objects, you will need to convert it to an array first using the `Array.prototype.slice()` method.

{% endhint %}
