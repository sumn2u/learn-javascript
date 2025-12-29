---
chapter: 6
pageNumber: 60
description: JavaScript 的 `arr.slice()` 方法返回一个包含原数组部分元素的新数组，原数组保持不变。
---

# 切片 (Slice)

`slice()` 方法用于从数组中提取一部分元素，并返回一个新的数组，原数组不会被修改。

## 语法

```javascript
arr.slice([begin[, end]])
```

`begin`：定义要提取的起始索引。如果省略，默认从索引 0 开始。

`end`：定义要提取的结束索引（不包括该索引）。如果省略，默认提取到数组末尾。如果 `end` 大于数组长度，则自动取数组长度。

## 示例 1：复制整个数组
```javascript
function func() {
  // 原数组
  let arr = [23, 56, 87, 32, 75, 13];

  // 提取的新数组
  let new_arr = arr.slice();

  console.log(arr);
  console.log(new_arr);
}

func();
// 结果:
// [23, 56, 87, 32, 75, 13]
// [23, 56, 87, 32, 75, 13]
```

## 示例 2：引用对象

`slice()` 方法会复制对象引用到新数组（例如嵌套数组或对象）。如果修改引用对象，这些修改会在新数组中可见。

```javascript
let human = {
  name: "David",
  age: 23,
};

let arr = [human, "Nepal", "Manager"];
let new_arr = arr.slice();

// 原始对象
console.log(arr[0]); // { name: 'David', age: 23 }

// 修改新数组中的对象
new_arr[0].name = "Levy";

// 修改在原数组中也可见
console.log(arr[0]); // { name: 'Levy', age: 23 }
```