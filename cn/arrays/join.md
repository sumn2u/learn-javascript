---
chapter: 6
pageNumber: 53
description: join 方法会将数组转换为一个字符串，并把所有元素连接在一起，而不会修改原始数组。
---

# 连接（Join）

`join` 方法会将数组转换为一个字符串，并将所有元素连接在一起。它**不会改变原始数组**。以下是使用 `join` 的语法：

```javascript
array.join([separator]);
```

`separator` 参数是可选的，用于指定在结果字符串中分隔各个元素所使用的字符。如果省略该参数，数组元素将使用逗号（`,`）进行分隔。

例如：

```javascript
let array = ["one", "two", "three", "four"]; 

console.log(array.join(" ")); 

// 结果：one two three four
```

{% hint style="working" %}
可以指定任意分隔符，但默认分隔符是逗号 `(,)`。
{% endhint %}

在上述示例中，使用了空格作为分隔符。你还可以使用 `join` 将**类数组对象**（例如 `arguments` 对象或 `NodeList` 对象）转换为字符串，方法是先使用 `Array.prototype.slice()` 将其转换为真正的数组：

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(', '));
}

printArguments('a', 'b', 'c'); // 结果：a, b, c
```