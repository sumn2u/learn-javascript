---
layout: editorial
chapter: 3
pageNumber: 18
description: Numbers refer to the data type used to represent numeric values. Numbers in JavaScript can be either integers (whole numbers) or floating-point numbers (decimal numbers)
---

# 第3章

# 数字

JavaScript 只有**一种数值类型**——64 位浮点数。这与 Java 的 `double` 相同。不同于大多数其他编程语言，它没有单独的整数类型，所以 1 和 1.0 是相同的值。创建一个数值很容易，就像为其他变量类型那样使用 `var` 关键字即可。

数值可以由常量创建：

```javascript
// 这是一个浮点数：
let a = 1.2;

// 这是一个整数：
let b = 10;
```

也可以由另一个变量的值创建：

```javascript
let a = 2;
let b = a;
```

整数的精度可精确到 15 位，且最大可表示的有效数字约为 17 位。

```javascript
let x = 999999999999999;   // x 将是 999999999999999
let y = 9999999999999999;  // y 将是 10000000000000000
```

如果数值常量以前缀 `0x` 开头，则会被解释为十六进制。

```javascript
let z = 0xFF; // 255
```

在本章中，我们将探讨以下主题：

* [数学](./math.md)
* [基本运算符](./operators.md)
* [高级运算符](./advanced.md)
