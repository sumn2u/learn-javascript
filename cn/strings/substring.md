---
chapter: 4
pageNumber: 38
---

# 子字符串

`string.substring()` 是 JavaScript 中的内置函数，用于返回给定字符串从起始索引到结束索引之间的部分。索引从零 `(0)` 开始。

语法:

`string.substring(StartIndex, EndIndex)`

### 语法:

* 使用 `str.substr(start , length)`
* 使用 `substr()` 方法
* 使用模板字面量 `(``)`（在 [ES6](../es6-concepts/template-literals.md) 中引入）

`substr()` 方法接收：

* **参数**：这里的 StartIndex 和 EndIndex 描述要作为子字符串取出的那一部分字符串。其中 EndIndex 是可选的。
* **返回值**：它返回一个新的字符串，该字符串是给定字符串的一部分。下面的 JavaScript 代码展示了 `string.substring()` 函数的工作方式：

```javascript
// 示例 1：
// 用 JavaScript 演示 substr() 方法

const str = "GeeksforGeeks";
const result = str.substring(8);
console.log(result);



// 输出
Geeks
```

```javascript

// 示例 2： 
// 将字符串作为变量
let string = "geeksforgeeks";
a = string.substring(-1)
b = string.substring(2.5)
c = string.substring(2.9)

// 打印作为新字符串的内容
// 它们是给定字符串的一部分
console.log(a);
console.log(b);
console.log(c);


// 输出
geeksforgeeks
eksforgeeks
eksforgeeks
```
