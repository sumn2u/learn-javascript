---
chapter: 3
pageNumber: 28
description: >-
  There are several advanced operators that provide powerful functionality and
  allow us to perform various operations beyond basic arithmetic and logical
  operations. These advanced operators can be very
---

# 高级运算符

当多个运算符在没有使用括号的情况下连在一起时，它们的执行顺序由运算符的 _优先级_ 决定。乘法 `(*)` 与除法 `(/)` 的优先级高于加法 `(+)` 与减法 `(-)`。

```javascript
// 先进行乘法运算，然后再进行加法
let x = 100 + 50 * 3; // 250
// 使用括号时，括号中的运算会优先计算
let y = (100 + 50) * 3; // 450
// 拥有相同优先级的运算会从左到右依次计算
let z = 100 / 50 * 3;
```

在编写程序时，可以使用若干高级数学运算符。下面列出了一些主要的高级数学运算符：

* **取模运算符 (`%`)**：取模运算符返回除法运算的余数。例如：

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

* \*_幂运算符 (_ \*)\*\*：幂运算符将一个数字提升为另一个数字的幂。它是一个较新的运算符，并未被所有浏览器支持，因此你可能需要使用 `Math.pow` 函数来代替。例如：

```javascript
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
console.log(4 ** 3); // 64
```

* **自增运算符 (`++`)**：自增运算符将数字加一。它可以作为前缀（在操作数前）或后缀（在操作数后）使用。例如：

```javascript
let x = 1;
x++; // x 现在是 2
++x; // x 现在是 3
```

* **自减运算符 (`--`)**：自减运算符将数字减一。它可以作为前缀（在操作数前）或后缀（在操作数后）使用。例如：

```javascript
let y = 3;
y--; // y 现在是 2
--y; // y 现在是 1
```

* **Math 对象**：`Math` 对象是 JavaScript 中的内置对象，提供了数学函数和常量。你可以使用 `Math` 对象的方法来执行高级数学运算，例如求一个数的平方根、计算一个数的正弦值或生成一个随机数。例如：

```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sin(0)); // 0
console.log(Math.random()); // 0 到 1 之间的随机数
```

这些只是 JavaScript 中可用的高级数学运算符和函数的一些例子。还有很多其它的运算符和函数可以在编写程序时用于执行更复杂的数学运算。

## 空值合并运算符 '??'

`nullish` 合并运算符会在第一个参数不是 `null/undefined` 时返回第一个参数，否则返回第二个参数。它写作连续两个问号 `??`。表达式 `x ?? y` 的结果是：

* 如果 `x` 已被定义，则结果为 `x`；
* 否则结果为 `y`。

{% hint style="info" %}
这是对该语言的一个较新的扩展，为了在旧浏览器中支持它，可能需要使用 polyfill。
{% endhint %}
