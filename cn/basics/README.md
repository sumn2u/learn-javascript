---
layout: editorial
chapter: 2
pageNumber: 11
description: Programming means writing code. A book is made up of chapters, paragraphs, sentences, phrases, words, and finally punctuation and letters, likewise a program can be broken down into smaller and smaller components.
---


# 第2章

# 基础

在本章的开头，我们将学习编程与 JavaScript 语言的基础知识。

编程就是编写代码。就像一本书由章、段落、句子、词组、单词，最终到标点符号与字母构成一样，程序也可以被拆分为越来越小的组成部分。当前最重要的部分是“语句”。语句类似于书中的句子。它自身有结构与目的，但如果脱离周围其他语句的上下文，它的意义就不那么充分。

语句在口语中（也是更常见的说法）被称为一 *行代码*。这是因为语句通常写在单独的行上。因此，程序是自上而下、从左到右阅读的。你也许会好奇，什么是代码（也称源代码）。这是一个很宽泛的术语，既可以指整个程序，也可以指最小的部分。因此，一行代码就是你程序中的一行。

下面是一个简单示例：

```javascript
let hello = "Hello";
let world = "World";

// message等于 "Hello World"
let message = hello + " " + world;
```

这段代码可以由另一个称为 *解释器* 的程序来执行，它会读取代码并以正确的顺序执行所有语句。

在本章中，我们将探讨以下主题：

* [注释](./comments.md)
* [相等性](./equality.md)
* [类型](./types.md)
* [变量](./variables.md)