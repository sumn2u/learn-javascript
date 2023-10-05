---
chapter: 9
pageNumber: 59
description: A reference to an object is a value that points to the memory location where the object is stored. When an object is created, a memory space is allocated to store its properties and values. When we assign this object to a variable, that variable holds a reference to the memory location where the object is stored.
---
# Reference

Objects are **never copied**. They are passed around by reference. An object's reference is a value that refers to an object. When you create an object using the `new` operator or object literal syntax, JavaScript creates an object and assigns a reference to it.

Here's an example of creating an object using the object literal syntax:

```javascript
var object = {
  foo: 'bar'
};
```

Here's an example of creating an object using the `new` operator:

```javascript
var object = new Object();
object.foo = 'bar';
```

When you assign an object reference to a variable, the variable simply holds a reference to the object, not the object itself. This means that if you assign the object reference to another variable, both variables will point to the same object.

For example:

```javascript
var object1 = {
  foo: 'bar'
};

var object2 = object1;

console.log(object1 === object2); // Output: true
```

In the example above, both `object1` and `object2` are variables that hold references to the same object. The `===` operator is used to compare the references, not the objects themselves, and it returns `true` because both variables hold references to the same object.

{% hint style="info" %}
You can use the `Object.assign()` method to create a new object that is a copy of an existing object.&#x20;
{% endhint %}

Following is an example of creating an object by reference.

```javascript
// Imagine I had a pizza
let myPizza = { slices: 5 };
// And I shared it with You
let yourPizza = myPizza;
// I eat another slice
myPizza.slices = myPizza.slices - 1;
let numberOfSlicesLeft = yourPizza.slices;
// Now We have 4 slices because myPizza and yourPizza
// reference to the same pizza object.
let a = {},
  b = {},
  c = {};
// a, b, and c each refer to a
// different empty object
a = b = c = {};
// a, b, and c all refer to
// the same empty object
```
