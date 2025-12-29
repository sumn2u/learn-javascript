---
章节: 6
页码: 49
描述: map 方法会遍历数组，并使用回调函数处理数组中的每一个元素，从而生成一个新的数组。
---

# Map

`Array.prototype.map()` 方法会遍历数组，并对数组中的每一个元素执行一次回调函数。
回调函数的返回值会组成一个新的数组，而原数组不会被修改。

```javascript
let newArray = oldArray.map(function (element, index, array) {
  // element：当前正在处理的数组元素
  // index：当前元素的索引
  // array：调用 map 方法的原数组
  // return 的值会被添加到 newArray 中
});
```

例如，假设你有一个数字数组，并希望创建一个新数组，使其元素是原数组中每个数字的两倍：

```javascript
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);
// 结果：[4, 8, 12, 16]
```

你也可以使用完整的箭头函数写法：

```javascript
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
```

或者更简洁地写成：

```javascript
const doubledNumbers = numbers.map(number => number * 2);
```

{% hint style="info" %}
`map()` 方法不会对空元素执行回调函数，并且不会改变原数组，它始终返回一个新数组。
{% endhint %}