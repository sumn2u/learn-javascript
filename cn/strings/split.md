---
chapter: 4
pageNumber: 36
---

# Split

`split()` 方法会将字符串分割成若干子字符串，并以数组形式返回。
* 使用 `split()` 方法
* 使用模板字符串（在 ES6 中引入）

`split()` 方法接收以下参数：

* **separator（可选）**： 描述每次分割应在何处发生的模式（字符串或正则表达式）。
* **limit（可选）**： 一个非负整数，用于限制要将给定字符串分割成多少部分。

```javascript
console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const text = "Java is awesome. Java is fun.";

let pattern = ".";
let newText = text.split(pattern);
console.log(newText); // [ 'Java is awesome', ' Java is fun', '' ]

let pattern1 = ".";
// 只将字符串最多分割成两部分
let newText1 = text.split(pattern1, 2);
console.log(newText1); // [ 'Java is awesome', ' Java is fun' ]

const text2 = "JavaScript ;  Python ;C;C++";
let pattern2 = ";";
let newText2 = text2.split(pattern2);
console.log(newText2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// 使用正则表达式
let pattern3 = /\s*(?:;|$)\s*/;
let newText3 = text2.split(pattern3);
console.log(newText3); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// 输出
[ 'A', 'B', 'C', 'D', 'E', 'F' ]
[ 'Java is awesome', ' Java is fun', '' ]
[ 'Java is awesome', ' Java is fun' ]
[ 'JavaScript ', '  Python ', 'C', 'C++' ]
[ 'JavaScript', 'Python', 'C', 'C++' ]
```