---
chapter: 1
pageNumber: 9
description: >-
  JavaScript is a high-level, interpreted, and dynamically-typed programming
  language primarily used for web development. It is one of the core
  technologies used to create interactive and dynamic websit
---

# cn

## 第一章

## 简介

在当今世界中，计算机无处不在，因为它们可以快速、准确地执行各种任务。计算机广泛应用于商业、医疗、教育和娱乐等多个行业，已成为许多人日常生活中不可或缺的一部分。此外，它们还被用于执行复杂的科学和数学计算，存储和处理海量数据，以及与世界各地的人进行通信。

编程是为计算机编写一系列指令（称为程序）的过程。编写程序有时可能很繁琐且令人沮丧，因为计算机非常精确，需要明确的指令才能完成任务。

![介绍页面](<../.gitbook/assets/intro (1).png>)

编程语言是一种人为设计的语言，用于向计算机下达指令。它们用于大多数编程任务，并基于人类之间的交流方式。就像人类语言一样，编程语言也允许通过词语和短语的组合来表达新的概念。有趣的是，与计算机进行最有效沟通的方式往往是使用一种类似人类语言的编程语言。

过去，人们主要通过语言界面（如 BASIC 和 DOS 命令行）与计算机互动。这些方式已被更易于学习但功能更受限的图形界面所取代。然而，像 _JavaScript_ 这样的计算机语言至今仍在使用，在现代网页浏览器和大多数设备中都可以找到它们的身影。

JavaScript（简称 _JS_）是一种用于创建网页、游戏、应用程序乃至服务器中动态交互的编程语言。JavaScript 起源于上世纪 90 年代由 Netscape 浏览器开发，现在已成为最知名、使用最广泛的编程语言之一。

最初，JavaScript 是为让网页“活起来”而创建的，并且只能在浏览器中运行。而现在，任何支持 JavaScript 引擎的设备都可以运行它。JavaScript 提供了如 [Array](arrays/)、[Date](date-and-time.md) 和 [Math](numbers/math.md) 等标准对象，以及运算符、控制结构和语句。核心 JavaScript 的扩展版本包括 _客户端 JavaScript_ 和 _服务器端 JavaScript_。

* _客户端 JavaScript_ 用于增强和操作网页及客户端浏览器。例如响应用户事件，如鼠标点击、表单输入、页面导航等。
* [_服务器端 JavaScript_](server-side/) 则可用于访问服务器、数据库和文件系统。

JavaScript 是一种解释型语言。运行 JavaScript 时，解释器会逐行解释并执行代码。现代浏览器采用 [即时编译（JIT）](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/) 的方式，将 JavaScript 编译为可执行的字节码。

{% hint style="info" %}
JavaScript 最初的名字是 “LiveScript”。
{% endhint %}

#### 代码及其使用方式与排版惯例

_代码_ 是构成程序的书面指令。本书的许多章节都包含大量代码，学习编程时务必认真阅读和编写代码。不要只是匆匆浏览示例代码，而应仔细阅读并尝试理解。刚开始可能会有些困难，但通过练习你会逐渐进步。练习题也一样——在认为自己掌握之前，一定要动手写出解决方案。建议在 JavaScript 解释器中运行自己的答案，这不仅能验证代码是否正确，还会激励你进行更多尝试并超越练习本身。

本书中使用等宽字体的文本表示程序元素。这些可以是独立的代码片段，也可以是对程序中附近部分的引用。程序像下面这样写成：

```javascript
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

有时，程序的预期输出会写在其后，并以双斜杠开头，带有 _结果_ 说明，例如：

```javascript
console.log(txt);

// 结果: txt = '45491625'
```
