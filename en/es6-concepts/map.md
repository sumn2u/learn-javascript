---
chapter: 25
pageNumber: 247
description: Certainly! Let's discuss the `let` and `const` declarations in the context of ES6 (ECMAScript 2015) and compare them to their ES5 counterparts.
---

## Map

Map is a collection of keyed data items, just like an `Object`. But the main difference is that `Map` allows keys of any type.


| Method/Property         | Description                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `new Map()`             | Creates a new Map object.                                                                           |
| `map.set(key, value)`   | Stores the `value` in the `map` object under the `key`.                                             |
| `map.get(key)`          | Returns the `value` associated with the `key`, or `undefined` if the `key` doesn't exist.          |
| `map.has(key)`          | Returns `true` if the `map` contains the `key`, otherwise returns `false`.                          |
| `map.delete(key)`       | Removes the element (key/value pair) from the `map` specified by the `key`.                         |
| `map.clear()`           | Removes all elements from the `map`.                                                                |
| `map.size`              | Returns the number of elements (key/value pairs) in the `map`.                                       |


An example of `Map()` with its various methods and properties is shown below.
```sh
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

The differences from a regular `Object`:

* Any keys, objects can be keys.

* Additional convenient methods, the size property.


Maps are a versatile and powerful data structure that provides key-value pairs for efficient data management.
Maps are often a preferred choice over plain objects for tasks involving key-value associations, as they provide better control and performance.
