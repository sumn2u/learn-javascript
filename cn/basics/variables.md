---
chapter: 2
pageNumber: 13
description: Variables are used to store and hold data. It can hold various types of values, such as numbers, strings, booleans, objects, arrays, functions and more.
---

# 变量

真正理解编程的第一步是回到代数。如果你还记得在学校学的内容，代数从书写如下项开始。

```javascript
3 + 5 = 8
```

当你引入一个未知数时就开始进行计算，例如下面的 `x`：

```javascript
3 + x = 8
```

通过移项，你可以确定 `x`：

```javascript
x = 8 - 3
-> x = 5
```

当你引入不止一个未知数时，你的式子会更灵活——这就是在使用变量：

```javascript
x + y = 8
```

你可以改变 `x` 和 `y` 的值，而这个公式仍然可以成立：

```javascript
x = 4
y = 4
```

或者

```javascript
x = 3
y = 5
```

编程语言也是如此。在编程中，变量是装载会变化的值的容器。变量可以保存各种值，也可以保存计算的结果。变量有一个用等号 `(=)` 连接的 `名称` 和 `值`。不过，要牢记不同的编程语言对变量名各自有一定的限制与约束，因为语言中的某些词可能被保留用于特定的函数或操作。

来看一下在 JavaScript 中它是如何工作的。下面的代码定义了两个变量，计算它们相加的结果，并将该结果作为第三个变量的值。

```javascript
let x = 5;
let y = 6;
let result = x + y;
```

命名变量时需要遵循一些准则：

* 变量名必须以字母、下划线 `(_)` 或美元符号 `($)` 开头。
* 在首字符之后，可以使用*字母*、*数字*、*下划线*或*美元符号*。
* JavaScript 区分大小写，因此 `myVariable`、`MyVariable` 和 `MYVARIABLE` 是三个不同的变量。
* 为了让代码易于阅读和维护，建议使用能准确反映用途的描述性变量名。

{% exercise %}
将变量 `x` 定义为 20。

{% initial %}
let x =

{% solution %}
let x = 20;

{% validation %}
assert(x == 20);

{% context %}
{% endexercise %}
**ES6 版本**

[ECMAScript 2015 或 ES2015](https://262.ecma-international.org/6.0/)，也称为 E6，是自 2009 年以来对 JavaScript 的一次重要更新。在 ES6 中，我们有三种声明变量的方式。 

```javascript
var x = 5;
const y = 'Test';
let z = true;
```

声明方式的差异体现在作用域上。与不考虑块级作用域、在全局或整个函数内声明变量的 `var` 不同，`let` 允许你将变量的作用域限制在其所处的代码块、语句或表达式中。例如：

```javascript
function varTest(){
    var x=1;
    if(true){
        var x=2; // 同一个变量
        console.log(x); //2
    }
    console.log(x); //2
}

function letTest(){
    let x=1;
    if(true){
        let x=2;
        console.log(x); // 2
    }
    console.log(x); // 1
}
```

`const` 变量是不可变的，这意味着它们不允许被重新赋值。

```javascript
const x = "hi!";
x = "bye"; // 这将导致错误
```
