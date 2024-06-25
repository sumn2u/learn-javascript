---
layout: editorial
chapter: 6
pageNumber: 47
description: Array is a  list of data and are fundamental part of programming. Here, we can store a lot of data of different types.
---

# Chapter 6
# Arrays

Arrays are a fundamental part of programming. An array is a list of data. We can store a lot of data in one variable, which makes our code more readable and easier to understand. It also makes it much easier to perform functions on related data.

The data in arrays are called **elements**.

Here is a simple array:

```javascript
// 1, 1, 2, 3, 5, and 8 are the elements in this array
let numbers = [1, 1, 2, 3, 5, 8];
```

Arrays can be created easily using array literals or with a `new` keyword.&#x20;

```javascript
const cars = ["Saab", "Volvo", "BMW"]; // using array literals
const cars = new Array("Saab", "Volvo", "BMW"); // using the new keyword
```

An index number is used to access the values of an array.  The index of the first element in an array is always `0` as array indexes start with `0`. The index number can also be used to change the elements of an array.

```javascript
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); 
// Result: Saab

cars[0] = "Opel"; // changing the first element of an array
console.log(cars);
// Result: ['Opel', 'Volvo', 'BMW']
```

{% hint style="warning" %}
Arrays are a special type of object.  One can have [objects](../objects/) in an array.
{% endhint %}

&#x20;The `length` property of an array returns the count of numbers elements.  Methods supported by Arrays are shown below:

| Name              | Description                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at()`            | Returns element at the specified index or `undefined`                                                                                             |
| `concat()`        | Returns two or more combined arrays                                                                                                               |
| `every()`         | Returns `true` if `callback` returns `true` for every item in the array                                                                           |
| `filter()`        | Returns a new array containing the items for which `callback` returned `true`                                                                     |
| `find()`          | Returns the first item for which `callback` returned `true`                                                                                       |
| `findIndex()`     | Returns the index of the first item for which `callback` returned `true`                                                                          |
| `findLast()`      | Returns the last item for which `callback` returned `true`                                                                                        |
| `findLastIndex()` | Returns the index of the last item for which `callback` returned `true`                                                                           |
| `flat()`          | Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth                                        |
| `flatMap()`       | Runs `map()` followed by `flat()` of depth 1                                                                                                      |
| `forEach()`       | Executes a callback in each element of an array and returns undefined                                                                             |
| `indexOf()`       | Returns the index of the first match of the search element                                                                                        |
| `join()`          | Joins all elements in an array into a string                                                                                                      |
| `lastIndexOf()`   | Returns the index of the last match of the search element                                                                                         |
| `map()`           | Returns a new array with a return value from executing `callback` on every array item.                                                            |
| `pop()`           | Removes the last element of an array and returns that element                                                                                     |
| `push()`          | Adds one or more elements at the end of the array and returns the length                                                                          |
| `reduce()`        | Uses `callback(accumulator, currentValue, currentIndex, array)` for reducing purpose and returns the final value returned by `callback` function  |
| `reduceRight()`   | Works similarly like `reduce()` but starts with the last element                                                                                   |
| `reverse()`       | Transposes the elements of an array and returns a reference to an array                                                                           |
| `shift()`         | Removes the first element of an array and returns that element                                                                                    |
| `slice()`         | Extracts the section of an array and returns the new array                                                                                        |
| `some()`          | Returns `true` if `callback` returns `true` for at least one item in the array                                                                    |
| `sort()`          | Sorts the elements of an array in place, and returns a reference to the array                                                                     |
| `splice()`        | Removes elements from an array and (optionally) replaces them, and returns the array                                                              |
| `unshift()`       | Adds one or more elements at the front of an array and returns the length                                                                         |


