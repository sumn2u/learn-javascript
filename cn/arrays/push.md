---
chapter: 6
pageNumber: 55
description: push 方法用于向数组末尾添加一个或多个元素，并返回数组的新长度。
---

# 推入 (Push)

`push()` 方法用于向数组的**末尾**添加一个或多个元素。
该方法会**修改原数组**，并返回数组的**新长度**。

## 语法`
```javascript
array.push(element1[, ...[, elementN]]);
```

其中 element1, ..., elementN 表示要添加到数组末尾的一个或多个元素。

## 示例
```javascript
let array = [1, 2, 3];

array.push(4);

console.log(array);
// 结果：[1, 2, 3, 4]
```

你也可以一次性向数组中添加多个元素：

```javascript
array.push(5, 6);
console.log(array);
// 结果：[1, 2, 3, 4, 5, 6]
```

你也可以将 `push()` 用于类数组对象（如 arguments），但需要先将其转换为真正的数组：

```javascript
function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push('d', 'e', 'f');
  console.log(args);
}

printArguments('a', 'b', 'c');
// 结果：["a", "b", "c", "d", "e", "f"]
```

{% hint style="info" %}
`push()` 方法会修改原数组，而不会创建一个新的数组。
{% endhint %}