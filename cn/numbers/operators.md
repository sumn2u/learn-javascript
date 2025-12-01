---
chapter: 3
pageNumber: 21
description: Operators are symbols or keywords used to perform operations on data, such as variables, values, or expressions. They are an essential part of the language and allow developers to perform arithmetic, comparison, logical, assignment, and other operations.
---

# 基本运算符

在 JavaScript 中，运算符是用于对操作数（值和变量）执行运算的符号或关键词。例如：

```javascript
2 + 3; //5
```

这里的 `+` 是执行加法运算的运算符，而 `2` 和 `3` 是操作数。

## 运算符的类型

JavaScript 支持多种运算符，包括：

* [算术运算符](#arithmetic-operators)
* [赋值运算符](#assignment-operators)
* [比较运算符](#Comparison-operators)
* [逻辑运算符](#logical-operators)
* [三元运算符](#ternary-operators)
* [按位运算符](#bitwise-operators)
* [`typeof` 运算符](#typeof-operators)

### 算术运算符 {#arithmetic-operators}

算术运算符用于对值执行数学运算。包括：

* [加法 (`+`) 运算符](#addition-operator)
* [减法 (`-`) 运算符](#subtraction-operator)
* [乘法 (`*`) 运算符](#multiplication-operator)
* [除法 (`/`) 运算符 ](#multiplication-operator)
* [取余 (`%`) 运算符](#remainder-operator)

#### 加法运算符（`+`） {#addition-operator}

加法运算符用于将两个数字相加。例如：

```javascript
console.log(1 + 2); // 3
console.log(1 + -2); // -1
```

#### 减法运算符（`-`） {#subtraction-operator}

减法运算符用于用一个数减去另一个数。例如：

```javascript
console.log(3 - 2); // 1
console.log(3 - -2); // 5
```

#### 乘法运算符（`*`） {#multiplication-operator}

乘法运算符用于将两个数字相乘。例如：

```javascript
console.log(2 * 3); // 6
console.log(2 * -3); // -6
```

#### 除法运算符（`/`） {#division-operator}

除法运算符用于用一个数除以另一个数。例如：

```javascript
console.log(6 / 2); // 3
console.log(6 / -2); // -3
```

#### 取余运算符（`%`） {#remainder-operator}

取余运算符返回一次除法运算的余数。例如：

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

JavaScript 解释器自左向右执行。可以像数学中那样使用括号来分隔和分组表达式：`c = (a / b) + d`

{% hint style="working" %}
JavaScript 使用 `+` 运算符同时完成加法和字符串拼接。对数字执行时是加法，对字符串执行时是拼接。
{% endhint %}

术语 `NaN` 是一个保留字，用来表示一个数不是合法的数字。当我们对非数值字符串做算术运算时，就会产生 `NaN`（Not a Number，非数字）。

```javascript
let x = 100 / "10";
```

`parseInt` 方法会将一个值按字符串解析，并返回首个整数部分。

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); //40
parseInt("He was 40"); //NaN
```

在 JavaScript 中，如果我们计算得到的数字超过了可能的最大数值，它会返回 `Infinity`。

```javascript
let x = 2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```

{% exercise %}
使用数学运算符 +、-、*、/ 和 % 对 `num1` 和 `num2` 执行下列运算。

{% initial %}
let num1 = 10;
let num2 = 5;

// Add num1 and num2.
let addResult =
// Subtract num2 from num1.
let subtractResult =
// Multiply num1 and num2.
let multiplyResult =
// Divide num1 by num2.
let divideResult =
// Find the remainder num1 is divided by num2.
let reminderResult =

{% solution %}
let num1 = 10;
let num2 = 5;

// Add num1 and num2.
let addResult = (num1 + num2);
// Subtract num2 from num1.
let subtractResult = (num1 - num2);
// Multiply num1 and num2.
let multiplyResult = (num1 * num2);
// Divide num1 by num2.
let divideResult = (num1 / num2);
// Find the remainder num1 is divided by num2.
let reminderResult = (num1 % num2);

{% validation %}
assert(addResult === 15 && subtractResult === 5 && multiplyResult === 50 && divideResult === 2 && reminderResult === 0 );

{% context %}
{% endexercise %}

### 赋值运算符 {#assignment-operators}

赋值运算符用于给变量赋值，或者对赋值的结果进行求值。*也可以将赋值运算符串联，以便把同一个值赋给多个变量。* 它们包括赋值（`=`）运算符以及诸如 `+=`、`-=`、`*=` 和 `/=` 等复合赋值运算符。

#### `=`（赋值运算符）

该运算符用于将右侧的值赋给左侧的变量。
例如：

```javascript
let x = 10; //Assigns the value 10 to the variable x.
```

#### 复合赋值运算符

这些运算符把算术运算与赋值运算结合在一起。它们是“先运算再把结果重新赋值给变量”的快捷写法。
例如：

##### `+=`（加法赋值）

将右侧的值加到变量上，并把结果重新赋值给该变量。

##### `-=`（减法赋值）

从变量中减去右侧的值，并把结果重新赋值给该变量。

##### `*=-`（乘法赋值）

将变量与右侧的值相乘，并把结果重新赋值给该变量。

##### `/=`（除法赋值）

用变量除以右侧的值，并把结果重新赋值给该变量。

##### `%=`（取模/取余赋值）

计算变量被右侧的值除时的余数，并把结果重新赋值给该变量。

```javascript
let a = 10;
a += 5; // Equivalent to a = a + 5; (a becomes 15)
a -= 3; // Equivalent to a = a - 3; (a becomes 12)
a *= 2; // Equivalent to a = a * 2; (a becomes 24)
a /= 4; // Equivalent to a = a / 4; (a becomes 6)
a %= 5; // Equivalent to a = a % 5; (a becomes 1)
```

### 比较运算符 {#Comparison-operators}

比较运算符用于比较两个值或表达式，并返回一个 `boolean` 结果，即 `true` 或 `false`。这些运算符通常用于条件语句中，用来做出决策或判断条件。

#### 等于（`==`）

该运算符检查左右两侧的值是否相等。如果相等，返回 `true`，否则返回 `false`。它不考虑数据类型。

```javascript
5 == 5; // true
"5" == 5; // true (implicit type conversion)
```

#### 不等于（`!=`）

该运算符检查左右两侧的值是否不相等。如果不相等，返回 `true`，否则返回 `false`。

```javascript
5 != 3; // true
"5" != 5; // false (implicit type conversion)
```

#### 全等于（`===`）

该运算符检查左右两侧的值是否相等且数据类型是否相同。如果值与数据类型都匹配，返回 `true`，否则返回 `false`。

```javascript
5 === 5; // true
"5" === 5; // false (different data types)
```

#### 全不等于（`!==`）

该运算符检查左右两侧的值是否不相等，或者数据类型是否不同。如果值不相等或数据类型不同，则返回 `true`，否则返回 `false`。

```javascript
5 !== "5"; // true (different data types)
5 !== 5; // false
```

#### 大于（`>`）

该运算符检查左侧值是否大于右侧值。如果左侧值更大，则返回 `true`，否则返回 `false`。

```javascript
8 > 5; // true
3 > 10; // false
```

#### 小于（`<`）

该运算符检查左侧值是否小于右侧值。如果左侧值更小，则返回 `true`，否则返回 `false`。

```javascript
3 < 5; // true
8 < 2; // false
```

#### 大于等于（`>=`）

该运算符检查左侧值是否大于或等于右侧值。如果左侧值大于或等于右侧值，则返回 `true`，否则返回 `false`。

```javascript
8 >= 5; // true
3 >= 8; // false
```

#### 小于等于（`>=`）

该运算符检查左侧值是否小于或等于右侧值。如果左侧值小于或等于右侧值，则返回 `true`，否则返回 `false`。

```javascript
3 <= 5; // true
8 <= 2; // false
```

### 逻辑运算符 {#logical-operators}

逻辑运算符用于对布尔值或表达式执行逻辑运算。它们允许你组合或处理布尔值，从而做出决策或判断更复杂的条件。

#### 逻辑与（`&&`）

逻辑与运算符在两个操作数都为 `true` 时返回 `true`。只要有一个操作数为 `false`，就返回 `false`。

```javascript
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

#### 逻辑或（`||`）

逻辑或运算符只要至少有一个操作数为 `true` 就返回 `true`。只有当两个操作数都为 `false` 时才返回 `false`。

```javascript
true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

#### 逻辑非（`!`）

逻辑非运算符会对操作数的值取反。当操作数为 `false` 时返回 `true`，当操作数为 `true` 时返回 `false`。

```javascript
!true; // false
!false; // true
```

### 三元运算符 {#ternary-operators}

三元运算符有三个操作数。它是 `if/else` 的简写形式。

它是 `if-else` 条件语句的简写形式。

**语法**
**Syntax**

```js
Y =  ? A : B
If the condition is true then Y = A otherwise Y = B
```

```javascript
let isEven = 8 % 2 === 0 ? "Even" : "Odd";
console.log(isEven); // "Even"
```

### 按位运算符 {#bitwise-operators}

按位运算符用于操作二进制数的各个位。它们在位级别上执行运算，在需要控制或分析底层数据的场景中尤其有用。

#### 按位与（`&`）

该运算符比较两个数的每一位，如果在两个数中对应位都为 1，则该位结果为 1；其它情况结果为 0。

```javascript
1010 & 1100; // 1000
```

#### 按位或（`|`）

该运算符比较两个数的每一位，只要在任意一个数中该位为 1，则该位结果为 1。

```javascript
1010 | 1100; // 1110
```

#### 按位异或（`^`）

该运算符比较两个数的每一位，如果在两个数中该位有且只有一个为 1，则该位结果为 1。

```javascript
1010 ^ 1100; // 0110
```

#### 按位非（`-`）

该运算符会对一个数的所有位取反：把 0 变成 1，把 1 变成 0。

```javascript
~1010; // 0101
```

#### 左移（`<<`）

该运算符将一个数的二进制位向左移动指定的位数，右侧移入的位置用 0 填充。

```javascript
1010 << 2; // 101000 (shifted left by 2 positions)
```

#### 右移（`>>`）

该运算符将一个数的二进制位向右移动指定的位数。左侧移入的位置会根据最左边的位（符号位）进行填充。

```javascript
1010 >> 2; // 0010 (shifted right by 2 positions)
```

### `typeof` 运算符 {#typeof-operators}

它返回操作数的类型。JavaScript 中可能的类型包括：undefined、Object、boolean、number、string、symbol 和 function。

```javascript
let value1 = 42;
let value2 = "Hello, World!";
let value3 = true;
let value4 = null;

console.log(typeof value1); // "number"
console.log(typeof value2); // "string"
console.log(typeof value3); // "boolean"
console.log(typeof value4); // "object" (Note: `typeof null` returns "object" due to historical reasons)
```
