---
chapter: 6
pageNumber: 58
description: 数组是元素的集合，每个元素都被分配了一个称为索引的数字位置。索引是从零开始的，这意味着数组的第一个元素索引为 0，第二个元素索引为 1，依此类推。
---

# 索引 (indices)

现在你已经有了一个数据元素数组，那么如果你想访问其中的某一个特定元素，该怎么办呢？这正是**索引（index）**的作用。索引指的是数组中的一个位置。索引在逻辑上是依次递增的，但需要注意的是，在大多数编程语言中，数组的第一个索引都是 `0`。方括号 `[]` 用于表示你正在引用数组中的某个索引位置。

```javascript
// 这是一个字符串数组
let fruits = ["apple", "banana", "pineapple", "strawberry"];

// 我们将变量 banana 设置为 fruits 数组中第二个元素的值。
// 请记住，索引从 0 开始，因此 1 表示第二个元素。
// 结果：banana = "banana"
let banana = fruits[1];
```

你也可以使用数组索引来设置或修改数组中某个元素的值：

```javascript
let array = ['a', 'b', 'c', 'd', 'e'];
//  索引：     0    1    2    3    4
array[4] = 'f';
console.log(array); // 结果：['a', 'b', 'c', 'd', 'f']
```

请注意，如果你尝试使用超出数组范围的索引来访问或设置元素（即索引小于 `0`，或大于等于数组的长度），将会得到 `undefined` 值。

```javascript
console.log(array[5]); // 输出：undefined
array[5] = 'g';
console.log(array); // 结果：['a', 'b', 'c', 'd', 'f', 'g']
```