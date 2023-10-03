---
chapter: 1
pageNumber: 7
description: JavaScript es un lenguaje de programación de alto nivel, interpretado y de tipo dinámico que se utiliza principalmente para el desarrollo web. Es una de las tecnologías centrales utilizadas para crear sitios web y aplicaciones web interactivos y dinámicos.
---
# Capítulo 1

## Introducción

Las computadoras son comunes en el mundo actual porque pueden realizar una amplia variedad de tareas de manera rápida y precisa. Se utilizan en muchas industrias diferentes, como los negocios, la atención médica, la educación y el entretenimiento, y se han convertido en una parte esencial de la vida diaria de muchas personas. Además de esto, también se utilizan para realizar cálculos científicos y matemáticos complejos, almacenar y procesar grandes cantidades de datos y comunicarse con personas de todo el mundo.

La programación implica crear un conjunto de instrucciones, llamado programa, para que las siga una computadora. Escribir un programa puede resultar tedioso y frustrante en ocasiones porque las computadoras son muy precisas y necesitan instrucciones específicas para completar las tareas.

![Página de introducción](../.gitbook/assets/intro.png)

Programming languages are artificial languages used to give instructions to computers. They are used in most programming tasks and are based on the way humans communicate with each other. Like human languages, programming languages allow words and phrases to be combined to express new concepts. It is interesting to note that the most effective way to communicate with computers involves using a language that is similar to human language.

In the past, the primary way to interact with computers was through language-based interfaces like BASIC and DOS prompts. These have been largely replaced by visual interfaces, which are easier to learn but offer less flexibility. However, computer languages like _JavaScript_ are still in use and can be found in modern web browsers and on most devices.

JavaScript (_JS for short_) is the programming language that is used to create dynamic interaction while developing webpages, games, applications, and even servers. JavaScript started at Netscape, a web browser developed in the 1990s, and is today one of the most famous and used programming languages.

Initially, it was created for making webpages alive and was able to run only on a browser. Now, it runs on any device that supports the JavaScript engine. Standard objects such as [Array](./arrays/README.md), [Date](./date-and-time.md), and [Math](./numbers/math.md) are available in JavaScript, as well as operators, control structures, and statements. _Client-side JavaScript_ and _Server-side JavaScript_ are the extended versions of core JavaScript.

* _Client-side JavaScript_ enables the enhancement and manipulation of web pages, and client browsers. Responses to user events such as mouse clicks, form input, and page navigation are some of its examples.
* _Server-side JavaScript_ enables access to servers, databases, and file systems.

JavaScript is an interpreted language. While running Javascript an interpreter interprets each line and runs it. The modern browser uses Just In Time (JIT) technology for compilation, which compiles JavaScript into executable bytecode.

{% hint style="info" %}
"LiveScript" was the initial name given to JavaScript.
{% endhint %}

### Code, and what to do with it

_Code_ is the written instructions that make up a program. Here, many chapters contain a lot of code, and it is important to read and write code as part of learning how to program. You should not just quickly scan the examples - read them carefully and try to understand them. This may be difficult at first, but with practice, you will improve. The same goes for the exercises - make sure you actually try to write a solution before assuming you understand them. It is also helpful to try running your solutions to the exercises in a JavaScript interpreter, as this will allow you to see if your code is working correctly and may encourage you to experiment and go beyond the exercises.

### Typographic conventions

Here, text is written in a monospaced font represents elements of a program. This can be a self-contained fragment or a reference to part of a nearby program. Programs, like the one shown below, are written in this way:

```javascript
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

Sometimes, the expected output of a program is written after it, preceded by two slashes with a _Result_, like this:

```javascript
console.log(txt);

// Result: txt = '45491625'
```
