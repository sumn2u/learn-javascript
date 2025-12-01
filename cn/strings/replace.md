---
chapter: 4
pageNumber: 33
---

# Replace

`replace` 方法允许我们用一个字符串替换某个字符、单词或句子。例如：

```javascript
let str = "Hello World!";
let new_str = str.replace("Hello", "Hi");

console.log(new_str);

// 结果：Hi World!
````

{% hint style="working" %}
要在所有匹配处进行替换，需要在 [正则表达式](../regular-expression.md) 中设置 `g` 修饰符。
{% endhint %}

它会在字符串中查找某个值或正则表达式，并返回一个替换了该值（或这些值）的新字符串。它不会改变原始字符串。我们来看一个全局且不区分大小写的替换示例。

```javascript
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red"); 

console.log(result); 
// 结果：Mr red has a red house and a red car 
```
