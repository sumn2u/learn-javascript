---
章节: 6
页码: 57
描述: `sort()` 方法按特定顺序对数组元素进行排序。默认情况下，它会将元素作为字符串进行升序排序。
---

# Sort

`sort()` 方法可以按特定顺序（升序或降序）对数组元素进行排序。  
默认情况下，`sort()` 会将元素作为字符串排序，并根据 UTF-16 编码值进行升序排列。

## 语法

```javascript
array.sort([compareFunction])
```

`compareFunction（可选）` ：用于定义排序顺序的函数。如果省略，元素将按字符串表示的升序排列。

## 示例 1：按字符串排序

```javascript
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedCity = city.sort();

console.log(sortedCity);
// 结果: ['Barcelona', 'California', 'Kathmandu', 'Paris']
```

{% hint style="info" %}
数字排序时可能会出现问题。例如，字符串 "35" 会被认为比 "100" 大，因为默认字符串比较按字符顺序进行，"3" 大于 "1"。
{% endhint %}

## 示例 2：使用比较函数进行数字排序
为了解决数字排序问题，可以提供一个比较函数。比较函数返回负值、零或正值来定义排序顺序：

返回负值：`a` 排在 `b` 前面

返回正值：`a` 排在 `b` 后面

返回 0：`a` 和 `b` 相等，顺序不重要

```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);

console.log(points);
// 结果: [1, 5, 10, 25, 40, 100]
```

{% hint style="working" %}
`sort()` 方法会修改原数组。
{% endhint %}