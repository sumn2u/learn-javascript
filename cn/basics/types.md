---
chapter: 2
pageNumber: 15
description: Types are the kinds of data that can be represented and manipulated in the language. 
---

# 变量类型

计算机足够复杂，能使用比数字更复杂的变量。这就是变量类型的作用所在。变量有多种类型，不同语言支持的类型也不尽相同。

最常见的类型有：

* **Number**：数字可以是整数（如 `1`、`-5`、`100`）或浮点数（如 `3.14`、`-2.5`、`0.01`）。JavaScript 不区分整数与浮点数；两者都被视为数字。
* **String**：字符串是由字符组成的序列，可以用单引号（如 `'hello'`）或双引号（如 `"world"`）表示。
* **Boolean**：布尔值表示真或假，可写为 `true` 或 `false`（不加引号）。
* **Null**：null 类型表示空值，含义是“没有值”。写作 `null`（不加引号）。
* **Undefined**：undefined 类型表示尚未被赋值的值。如果一个变量已声明但未被赋值，它就是 `undefined`。
* **Object**：对象是属性的集合，每个属性都有名称和对应的值。可以使用花括号（`{}`）创建对象，并以“名称-值”对的方式为其赋予属性。
* **Array**：数组是一种特殊的对象类型，用来保存一组条目。可以使用方括号（`[]`）创建数组，并为其赋予一个值列表。
* **Function**：函数是一段可以定义并通过名称调用的代码。[函数](../functions/README.md)可以接收参数（输入）并返回一个值（输出）。可以使用 `function` 关键字创建函数。

JavaScript 是一种“*弱类型*”语言，这意味着你不必显式声明变量的数据类型。只需使用 `var` 关键字表明你在声明变量，解释器会根据上下文与是否使用引号推断你所使用的数据类型。

{% exercise %}
声明三个变量并用以下值初始化：将 `age` 设为数字、`name` 设为字符串、`isMarried` 设为布尔值。

{% initial %}
let age =
let name =
let isMarried =
{% solution %}
let age = 30
let name = "Cecilia"
let isMarried = true

{% validation %}
assert(typeof age === "number" && typeof name === "string" && typeof isMarried === "boolean");

{% context %}
{% endexercise %}

`typeof` 运算符用于检查变量的数据类型。

```javascript
typeof "John"                 // 返回 "string"
typeof 3.14                   // 返回 "number"
typeof NaN                    // 返回 "number"
typeof false                  // 返回 "boolean"
typeof [1,2,3,4]              // 返回 "object"
typeof {name:'John', age:34}  // 返回 "object"
typeof new Date()             // 返回 "object"
typeof function () {}         // 返回 "function"
typeof myCar                  // 返回 "undefined" *
typeof null                   // 返回 "object
```

JavaScript 中使用的数据类型可以按“是否能包含值”分为两类。

可以包含值的数据类型：

* `string`
* `number`
* `boolean`
* `object`
* `function`

{% hint style="info" %}
`Object`、`Date`、`Array`、`String`、`Number` 与 `Boolean` 是 JavaScript 中可用的对象类型。
{% endhint %}

不能包含值的数据类型：

* `null`
* `undefined`

原始（primitive）数据值是没有附加属性与方法、且不是对象的简单数据值。它们是不可变的，也就是不能被就地修改。共有 7 种原始数据类型：

* string
* number
* bigint
* boolean
* undefined
* symbol
* null

{% exercise %}
声明一个名为 `person` 的变量，并用一个对象初始化它。该对象包含以下属性：`age` 为数字、`name` 为字符串、`isMarried` 为布尔值。

{% initial %}
let person =

{% solution %}
let person = {
name: "Mary",
age: 25,
isMarried: false
};

{% validation %}
assert(typeof person.age === "number" && typeof person.name === "string" && typeof person.isMarried === "boolean");

{% context %}
{% endexercise %}
