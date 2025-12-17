---
chapter: 4
pageNumber: 34
---

# 长度

在 JavaScript 中，使用 `.length` 属性就可以很容易地知道一个字符串中有多少个字符。`length` 属性返回字符串中的字符数，包括空格和特殊字符。

```javascript

let size = "Our lovely string".length;
console.log(size);
// size: 17

let emptyStringSize = "".length
console.log(emptyStringSize);
// emptyStringSize: 0

```

空字符串的 `length` 属性是 `0`。

\{% hint style="working" %\} \`

length\` 属性是只读属性，因此你不能为它赋予新的值。
