---
chapter: 3
pageNumber: 19
description: >-
  The Math object allows performing mathematical operations in JavaScript. It is
  static and doesn't have a constructor. One can use method and properties of
  Math object without creating a Math object fi
---

# 数学

`Math` 对象用于在 JavaScript 中执行数学运算。它是静态的，没有构造函数。无需先创建一个 Math 对象即可使用其方法和属性。要访问它的属性，可以使用 _Math.property._。下面描述了一些数学属性：

```javascript
Math.E; // 返回欧拉常数
Math.PI; // 返回圆周率
Math.SQRT2; // 返回 2 的平方根
Math.SQRT1_2; // 返回 1/2 的平方根
Math.LN2; // 返回 2 的自然对数
Math.LN10; // 返回 10 的自然对数
Math.LOG2E; // 返回以 2 为底的 E 的对数
Math.LOG10E; // 返回以 10 为底的 E 的对数
```

一些数学方法的示例：

```javascript
Math.pow(8, 2); // 64
Math.round(4.6); // 5
Math.ceil(4.9); // 5
Math.floor(4.9); // 4
Math.trunc(4.9); // 4
Math.sign(-4); // -1
Math.sqrt(64); // 8
Math.abs(-4.7); // 4.7
Math.sin((90 * Math.PI) / 180); // 1（90 度的正弦）
Math.cos((0 * Math.PI) / 180); // 1（0 度的余弦）
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150
Math.random(); // 0.44763808380924375
Math.log(2); // 0.6931471805599453
Math.log2(8); // 3
Math.log10(1000); // 3
```

要使用数学方法，可以在需要的地方直接带上参数调用其方法。

| 方法                 | 描述                                         |
| ------------------ | ------------------------------------------ |
| `abs(x)`           | 返回 `x` 的绝对值                                |
| `acos(x)`          | 返回 `x` 的反余弦，单位为弧度                          |
| `acosh(x)`         | 返回 `x` 的反双曲余弦                              |
| `asin(x)`          | 返回 `x` 的反正弦，单位为弧度                          |
| `asinh(x)`         | 返回 `x` 的反双曲正弦                              |
| `atan(x)`          | 以数值形式返回 `x` 的反正切，范围在 `-PI/2` 到 `PI/2` 弧度之间 |
| `atan2(y,x)`       | 返回其参数商的反正切                                 |
| `atanh(x)`         | 返回 `x` 的反双曲正切                              |
| `crbt(x)`          | 返回 `x` 的立方根                                |
| `ceil(x)`          | 将 `x` 向上取整到最接近的整数                          |
| `cos(x)`           | 返回 `x` 的余弦，单位为弧度                           |
| `cosh(x)`          | 返回 `x` 的双曲余弦                               |
| `exp(x)`           | 返回 `x` 的指数值                                |
| `floor(x)`         | 将 `x` 向下取整到最接近的整数                          |
| `log(x)`           | 返回 `x` 的自然对数                               |
| `max(x,y,z,... n)` | 返回值最大的那个数                                  |
| `min(x,y,z,... n)` | 返回值最小的那个数                                  |
| `pow(x,y)`         | 返回 `x` 的 `y` 次幂                            |
| `random()`         | 返回 0 到 1 之间的数                              |
| `round(x)`         | 将数字四舍五入到最接近的值                              |
| `sign(x)`          | 返回 x 是负、`null` 还是正 (-1,0,1)                |
| `sin(x)`           | 返回 `x` 的正弦，单位为弧度                           |
| `sinh(x)`          | 返回 `x` 的双曲正弦                               |
| `sqrt(x)`          | 返回 `x` 的平方根                                |
| `tan(x)`           | 返回一个角的正切                                   |
| `tanh(x)`          | 返回 `x` 的双曲正切                               |
| `trunc(x)`         | 返回一个数（`x`）的整数部分                            |
