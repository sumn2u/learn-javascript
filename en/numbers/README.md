---
layout: editorial
chapter: 3
pageNumber: 18
description: Numbers refer to the data type used to represent numeric values. Numbers in JavaScript can be either integers (whole numbers) or floating-point numbers (decimal numbers)
---

# Chapter 3
# Numbers

JavaScript has **only one type of number** – 64 bit float point. It's the same as Java's `double`. Unlike most other programming languages, there is no separate integer type, so 1 and 1.0 are the same value. Creating a number is easy, it can be done just like for any other variable type using the `var` keyword.

Numbers can be created from a constant value:

```javascript
// This is a float:
let a = 1.2;

// This is an integer:
let b = 10;
```

Or, from the value of another variable:

```javascript
let a = 2;
let b = a;
```

The precision of integers is accurate up to 15 digits and the maximum number is 17.

```javascript
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```

The numeric constants are interpreted as hexadecimal if they are preceded by an `0x`.

```javascript
let z = 0xFF; // 255
```

In this chapter, we will explore following topics:
* [Math](./math.md)
* [Basic Operators](./operators.md)
* [Advanced Operators](./advanced.md)