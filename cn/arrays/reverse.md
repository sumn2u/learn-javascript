---
chapter: 6
pageNumber: 59
description: reverse 方法用于反转数组中元素的顺序。它会修改原数组，并返回对该数组的引用。
---

# Reverse

`reverse()` 方法可以用于任何类型的数组，包括字符串数组、数字数组以及对象数组。  
该方法会**原地反转数组**，也就是说，它会直接修改原数组。

## 示例：对象数组

```javascript
let users = [
  { name: "约翰·史密斯", age: 30 },
  { name: "简·多", age: 25 }
];

users.reverse();

console.log(users);
// 结果: [
//   { name: "简·多", age: 25 },
//   { name: "约翰·史密斯", age: 30 }
// ]
```

`reverse()` 方法会原地调换调用数组对象的元素，修改原数组，并返回对数组的引用。

示例：数字数组
```javascript
const numbers = [1, 2, 3];
const reversedArray = numbers.reverse();
console.log(reversedArray); // [3, 2, 1]
```