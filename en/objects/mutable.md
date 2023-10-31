---
chapter: 9
pageNumber: 73
description: Mutable means an object or data type can be changed after creation, while "immutable" means it cannot be changed. Mutable objects allow modifying their internal state, while immutable objects return new instances with changes, leaving the original unchanged.
---
# Mutable

The difference between objects and primitive values is that we can **change objects**, whereas primitive values are **immutable**.

For example:

```javascript
let myPrimitive = "first value";
myPrimitive = "another value";
// myPrimitive now points to another string.
let myObject = { key: "first value" };
myObject.key = "another value";
// myObject points to the same object.
```

You can add, modify, or delete properties of an object using the dot notation or the square bracket notation.

```javascript
let object = {};
object.foo = 'bar'; // Add property 'foo'
object['baz'] = 'qux'; // Add property 'baz'
object.foo = 'quux'; // Modify property 'foo'
delete object.baz; // Delete property 'baz'
```

{% hint style="warning" %}
Primitive values (such as numbers and strings) are immutable, while objects (such as arrays and objects) are mutable.
{% endhint %}
