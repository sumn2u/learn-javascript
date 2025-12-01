---
chapter: 4
pageNumber: 32
---

# 创建

字符串可以通过将文本放在单引号或双引号中来定义：

```javascript
// 可以使用单引号
let str = 'Our lovely string';

// 也可以使用双引号
let otherStr = "Another nice string";
```

在 Javascript 中，字符串可以包含 UTF-8 字符：

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

你也可以使用 `String` 构造函数来创建一个字符串对象：

```javascript
const stringObject = new String('This is a string');
```

然而，一般并不推荐使用 `String` 构造函数来创建字符串，因为这可能会导致对字符串原始值与字符串对象的混淆。通常更好的做法是使用字符串字面量来创建字符串。

你也可以使用模板字面量来创建字符串。模板字面量是用反引号 `(``)` 括起来的字符串，并且可以包含值的占位符。占位符使用 `` `${}` `` 语法来表示。

```javascript
const name = 'John';
const message = `Hello, ${name}!`;
```

模板字面量还可以包含多行，并且可以在占位符中放入任意表达式。

{% hint style="working" %}
字符串不能被相减、相乘或相除。
{% endhint %}

{% exercise %}
使用模板字面量创建一个字符串，其中包含 `name` 和 `age` 的值。该字符串应满足以下格式："My name is John and I am 25 years old."。

{% initial %}
let name = "John";
let age = 25;

// My name is John and I am 25 years old.
let result =
{% solution %}
let name = "John";
let age = 25;

// My name is John and I am 25 years old.
let result = `My name is ${name} and I am ${age} years old.`

{% validation %}
assert(result == "My name is John and I am 25 years old.");

{% context %}
{% endexercise %}
