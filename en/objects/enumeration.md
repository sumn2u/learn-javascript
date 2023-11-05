---
chapter: 9
pageNumber: 78
description: Enumeration refers to the process of iterating over the properties of an object and performing a certain action for each property. One way to enumerate the properties of an object is to use the `for-in` loop. The `for-in` loop iterates over the enumerable properties of an object in an arbitrary order, and for each property it executes a given block of code.
---
# Enumeration

_Enumeration_ refers to the process of iterating over the properties of an object and performing a certain action for each property. There are several ways to enumerate the properties of an object in JavaScript.

One way to enumerate the properties of an object is to use the `for-in` loop. The `for-in` loop iterates over the enumerable properties of an object in an arbitrary order, and for each property it executes a given block of code.

The `for in` statement can loop over all of the property names in an object. The enumeration will include functions and prototype properties.

```javascript
let fruit = {
    apple: 2,
    orange: 5,
    pear: 1,
  },
  sentence = "I have ",
  quantity;
for (kind in fruit) {
  quantity = fruit[kind];
  sentence += quantity + " " + kind + (quantity === 1 ? "" : "s") + ", ";
}
// The following line removes the trailing comma.
sentence = sentence.substr(0, sentence.length - 2) + ".";
// I have 2 apples, 5 oranges, 1 pear.
```

Another way to enumerate the properties of an object is to use the `Object.keys()` method, which returns an array of the object's own enumerable property names.

For example:

```typescript
let object = {
  foo: 'bar',
  baz: 'qux'
};

let properties = Object.keys(object);
properties.forEach(function(property) {
  console.log(property + ': ' + object[property]);
});

// foo: bar
// baz: qux
```
