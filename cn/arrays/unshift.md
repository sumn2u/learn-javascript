---
chapter: 6
pageNumber: 48
description: unshift 方法可以向数组开头添加一个或多个元素，并返回数组的新长度。
---

# Unshift

`unshift()` 方法会将一个或多个新元素添加到数组的**开头**。  
它会**修改原数组**，并返回数组的**新长度**。

## 语法

```javascript
array.unshift(element1[, element2[, ...[, elementN]]])
```

`element1, ..., elementN` 表示要添加到数组开头的一个或多个元素。

## 示例 1：向数组开头添加单个元素
```javascript
let array = [0, 5, 10];
let newLength = array.unshift(-5);  // 返回 4

console.log(array);
// 结果: [-5, 0, 5, 10]
console.log(newLength); 
// 结果: 4
```

## 示例 2：向数组开头添加多个元素
```javascript
const numbers = [1, 2, 3];
const newLength = numbers.unshift(-1, 0);

console.log(numbers);    
// 结果: [-1, 0, 1, 2, 3]
console.log(newLength);  
// 结果: 5
```

{% hint style="working" %}
`unshift()` 方法会修改原数组，不会创建新数组。
{% endhint %}