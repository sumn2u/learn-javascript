---
layout: editorial
chapter: 8
pageNumber: 68
description: Functions are blocks of code that perform a specific task or a set of tasks. They are reusable units of code that can be called and executed at any point in a program. 
---

# Chapter 8
# Functions

Functions are one of the most powerful and essential notions in programming. Functions like mathematical functions perform transformations, they take input values called **arguments** and **return** an output value. &#x20;

Functions can be created in two ways: using `function declaration` or `function expression` . The _function name_ can be omitted in `function expression` making it an `anonymous function`.  Functions, like variables, must be declared. Let's declare a function `double` that accepts an _argument_ called `x` and **returns** the double of x :

```javascript
// an example of a function declaration
function double(x) {
  return 2 * x;
}
```

> _Note:_ the function above **may** be referenced before it has been defined.

Functions are also values in JavaScript; they can be stored in variables (just like numbers, strings, etc ...) and given to other functions as arguments :

```javascript
// an example of a function expression
let double = function (x) {
  return 2 * x;
};
```

> _Note:_ the function above **may not** be referenced before it is defined, just like any other variable.

{% hint style="info" %}
&#x20;A callback is a function passed as an argument to another function.
{% endhint %}

An arrow function is a compact alternative to traditional functions which has some semantic differences with some limitations. These function doesn't have their own bindings to `this`, `arguments` and `super`, and cannot be used as constructors. An example of an arrow function:

```javascript
const double =  (x) =>  2 * x;
```

{% hint style="warning" %}
The `this` keyword in the arrow function represents the object that defined the arrow function.&#x20;
{% endhint %}

In this chapter, we will explore following topics:
* [Closures](./for-each.md)
* [High Order Functions](./higher-order.md)
* [Recursive Functions](./recursive-functions.md)
* [Set Interval](./set-interval.md)
* [Set Timeout](./set-timeout.md)