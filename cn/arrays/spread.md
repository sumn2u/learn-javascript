---
chapter: 6
pageNumber: 50
description: Spread 操作符允许快速操作数组或对象。它提供了简洁的语法来复制、合并或提取数组元素，以及复制对象属性。
---

# 展开 (Spread)

可以使用 `Spread` 操作符 (`...`) 将一个数组或对象快速复制到另一个数组或对象中。
它允许在函数调用或数组字面量中展开可迭代对象（如数组），或在对象字面量中展开键值对。

## 示例

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(...arr);
// 结果: 1 2 3 4 5

let arr1;
arr1 = [...arr]; // 将 arr 复制到 arr1

console.log(arr1); 
// 结果: [1, 2, 3, 4, 5]

arr1 = [6, 7];
arr = [...arr, ...arr1];

console.log(arr); 
// 结果: [1, 2, 3, 4, 5, 6, 7]
```

{% hint style="working" %}
`Spread` 操作符仅在支持该特性的现代浏览器中有效。如果需要兼容旧浏览器，需要使用 Babel 等转译器将 `Spread` 语法转换为等效的 ES5 代码。
{% endhint %}