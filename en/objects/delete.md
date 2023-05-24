---
chapter: 9
pageNumber: 61
---
# Delete

A `delete` property can be used to **remove a property** from an object. When a property is deleted, it is removed from the object and cannot be accessed or enumerated (i.e., it does not show up in a for-in loop).

Here's the syntax for using `delete`:

```javascript
delete object.property;
```

For example:

```javascript
let adult = { age: 26 },
  child = Object.create(adult);
  
child.age = 8;

delete child.age;

/* Remove age property from child, revealing the age of the prototype, because then it is not overriden. */

let prototypeAge = child.age;
// 26, because child does not have its own age property.
```

{% hint style="warning" %}
The `delete` operator only works on own properties of an object, and not on inherited properties. It also does not work on properties that have the `configurable` attribute set to `false`.
{% endhint %}

The `delete` operator does not modify the object's prototype chain. It simply removes the specified property from the object and also it does not actually destroy the object or its properties. It simply makes the properties inaccessible. If you need to destroy an object and release its memory, you can set the object to `null` or use a garbage collector to reclaim the memory.
