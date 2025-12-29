---
chapter: 6
pageNumber: 51
description: shift 方法用于删除数组的第一个元素，并将剩余元素的索引依次左移。它会修改原数组。
---

# Shift

`shift()` 方法会删除数组的**第一个元素**，并将所有元素的索引左移。  
此方法会**直接修改原数组**，并返回被删除的元素。

## 语法

```javascript
array.shift();
```

示例:

```javascript
let array = [1, 2, 3];

array.shift();

console.log(array);
// 结果：[2, 3]
```

你也可以结合循环使用 `shift()` 方法来移除数组中的所有元素：

```javascript
let array = [1, 2, 3];

while (array.length > 0) {
  array.shift();
}

console.log(array);
// 结果：[]
```

{% hint style="working" %}
`shift()` 方法只适用于数组，而不适用于类数组对象（如 arguments 或 NodeList）。
如果需要操作这些对象，可以先使用 `Array.prototype.slice()` 将它们转换为真正的数组。
{% endhint %}