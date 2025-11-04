---
chapter: 2
pageNumber: 17
description: The equality operator is used for comparision. It can to determine if two variables are equal, even if they are not of the same type.
---

# 相等性

在编写程序时，我们经常需要判断变量与其他变量是否相等。这通过相等运算符来完成。最基本的相等运算符是 `==`。该运算符会尽其所能判断两个变量是否相等，即使它们的类型并不相同。

例如，假设：

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```

`foo == bar` 的结果为 `true`，`baz == qux` 的结果为 `false`，这与直觉一致。然而，尽管 `foo` 和 `baz` 的类型不同，`foo == baz` 也会得到 `true`。在幕后，`==` 相等运算符会在判断是否相等之前，尝试将其操作数强制转换为同一类型。这与 `===` 相等运算符形成对比。

`===` 相等运算符只有在两个变量类型相同 *并且* 值也相同时才认为它们相等。沿用上面的假设，这意味着 `foo === bar` 仍然为 `true`，但 `foo === baz` 现在为 `false`。`baz === qux` 依然为 `false`。

{% exercise %}
使用 `==` 和 `===` 运算符比较 `str1` 和 `str2` 的值。

{% initial %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// 使用 == 比较
let stringResult1 =
let boolResult1 =
// 使用 === 比较
let stringResult1 =
let boolResult2 =
{% solution %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// 使用 == 比较
let stringResult1 = str1 == str2 // false
let boolResult1 =  bool1 == bool2 // true

// 使用 === 比较
let stringResult2 = str1 === str2 // false
let boolResult2 = bool1 === bool2 // false

{% validation %}
assert(stringResult1 === false && stringResult2 === false && boolResult1 ==true &&  boolResult2 === false );

{% context %}
{% endexercise %}
