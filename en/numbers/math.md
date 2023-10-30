---
chapter: 3
pageNumber: 18
description: The Math object allows performing mathematical operations in JavaScript. It is static and doesn't have a constructor. One can use method and properties of Math object without creating a Math object first.
---

# Math

The `Math` object allows performing mathematical operations in JavaScript. It is static and doesn't have a constructor. One can use method and properties of Math object without creating a Math object first. For accessing its property one can use _Math.property._ Some of the math properties are described below:

```javascript
Math.E; // returns Euler's number
Math.PI; // returns PI
Math.SQRT2; // returns the square root of 2
Math.SQRT1_2; // returns the square root of 1/2
Math.LN2; // returns the natural logarithm of 2
Math.LN10; // returns the natural logarithm of 10
Math.LOG2E; // returns base 2 logarithm of E
Math.LOG10E; // returns base 10 logarithm of E
```

Examples of some of the math methods are:

```javascript
Math.pow(8, 2); // 64
Math.round(4.6); // 5
Math.ceil(4.9); // 5
Math.floor(4.9); // 4
Math.trunc(4.9); // 4
Math.sign(-4); // -1
Math.sqrt(64); // 8
Math.abs(-4.7); // 4.7
Math.sin((90 * Math.PI) / 180); // 1 (the sine of 90 degrees)
Math.cos((0 * Math.PI) / 180); // 1 (the cos of 0 degrees)
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150
Math.random(); // 0.44763808380924375
Math.log(2); // 0.6931471805599453
Math.log2(8); // 3
Math.log10(1000); // 3
```

To access maths method, one can call its methods directly with arguments wherever necessary.

| Method             | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| `abs(x)`           | Returns absolute value of `x`                                                   |
| `acos(x)`          | Returns arccosine of `x`, in radians                                            |
| `acosh(x)`         | Returns hyperbolic arccosine of `x`                                             |
| `asin(x)`          | Returns arcsine of `x`, in radians                                              |
| `asinh(x)`         | Returns hyperbolic arcsine of `x`                                               |
| `atan(x)`          | Returns arctangent of `x` as a numeric value between `-PI/2` and `PI/2` radians |
| `atan2(y,x)`       | Returns arctangent of the quotient of its arguments                             |
| `atanh(x)`         | Returns hyperbolic arctangent of `x`                                            |
| `crbt(x)`          | Returns cubic root of `x`                                                       |
| `ceil(x)`          | Returns rounded upwards to the nearest integer of `x`                           |
| `cos(x)`           | Returns consine of `x`, in radians                                              |
| `cosh(x)`          | Returns hyperbolic cosine of `x`                                                |
| `exp(x)`           | Returns exponential value of `x`                                                |
| `floor(x)`         | Returns round downwards to the nearest integer of `x`                          |
| `log(x)`           | Returns natural logarithmetic of `x`                                            |
| `max(x,y,z,... n)` | Returns number with the highest value                                           |
| `min(x,y,z,... n)` | Returns number with the lowest value                                            |
| `pow(x,y)`         | Returns value of `x` to the power of `y`                                        |
| `random()`         | Returns number between 0 and 1                                                  |
| `round(x)`         | Rounds number to the nearest `x`                                                 |
| `sign(x)`          | Returns if x is negative, `null` or positive (-1,0,1)                           |
| `sin(x)`           | Returns sine of `x`, in radians                                                   |
| `sinh(x)`          | Returns hyperbolic sine of `x`                                                    |
| `sqrt(x)`          | Returns square root of `x`                                                        |
| `tan(x)`           | Returns tangent of an angle                                                     |
| `tanh(x)`          | Returns hyperbolic tangent of `x`                                                 |
| `trunc(x)`         | Returns integer part of a number (`x`)                                            |
