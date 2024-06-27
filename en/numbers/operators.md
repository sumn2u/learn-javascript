---
chapter: 3
pageNumber: 21
description: Operators are symbols or keywords used to perform operations on data, such as variables, values, or expressions. They are an essential part of the language and allow developers to perform arithmetic, comparison, logical, assignment, and other operations.
---

# Basic Operators

In JavaScript, an operator is a symbol or keyword user to perform operations on operands (values and variables). For example:

```javascript
2 + 3; //5
```

Here `+` is an operator that performs addition, and `2` and `3` are operands.

## Types of Operators

There are various operators supported by JavaScript. They are as follows:

- [Arithmetic Operators](#arithmetic-operators)
- [Assignment Operators](#assignment-operators)
- [Comparison Operators](#Comparison-operators)
- [Logical Operators](#logical-operators)
- [Ternary Operators](#ternary-operators)
- [Bitwise Operators](#bitwise-operators)
- [`typeof`` Operators](#typeof-operators)

### Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on values. They include

- [Addition (`+`) operator](#addition-operator)
- [Subtraction (`-`) operator](#subtraction-operator)
- [Multiplication (`*`) operator](#multiplication-operator)
- [Division (`/`) operator ](#multiplication-operator)
- [Remainder (`%`) operator](#remainder-operator)

#### Addition Operator (`+`)

The addition operator adds two numbers together. For example:

```javascript
console.log(1 + 2); // 3
console.log(1 + -2); // -1
```

#### Subtraction operator (`-`)

The subtraction operator subtracts one number from another. For example:

```javascript
console.log(3 - 2); // 1
console.log(3 - -2); // 5
```

#### Multiplication operator (`*`)

The multiplication operator multiplies two numbers. For example:

```javascript
console.log(2 * 3); // 6
console.log(2 * -3); // -6
```

#### Division operator (`/`)

The division operator divides one number by another. For example:

```javascript
console.log(6 / 2); // 3
console.log(6 / -2); // -3
```

#### Remainder operator (`%`)

The remainder operator returns the remainder of a division operation. For example:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

The JavaScript interpreter works from left to right. One can use parentheses just like in math to separate and group expressions: `c = (a / b) + d`

{% hint style="warning" %}
JavaScript uses the `+` operator for both addition and concatenation. Numbers are added whereas strings are concatenated.
{% endhint %}

The term `NaN` is a reserved word indicating that a number is not a legal number, this arises when we perform arithmetic with a non-numeric string will result in `NaN` (Not a Number).

```javascript
let x = 100 / "10";
```

The `parseInt` method parses a value as a string and returns the first integer.

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); //40
parseInt("He was 40"); //NaN
```

In JavaScript, if we calculate a number outside the largest possible number it returns `Infinity`.

```javascript
let x = 2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```

{% exercise %}
Use the math operators +, -, \*, /, and % to perform the following operations on `num1` and `num2`.

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
let multiplyResult = (num1 \* num2);
// Divide num1 by num2.
let divideResult = (num1 / num2);
// Find the remainder num1 is divided by num2.
let reminderResult = (num1 % num2);

{% validation %}
assert(addResult === 15 && subtractResult === 5 && multiplyResult === 50 && divideResult === 2 && reminderResult === 0 );

{% context %}
{% endexercise %}

### Assignment Operators

Assignment operators are used to assign values to variables or evaluates the assigned value. _Chaining the assignmentoperator is possible in order to assign a single value to multiple values._ They includes the assignment(`=`) operator and compound assignment operators like `+=`, `-=`, `*=` and `/=`.

#### `=` (Assignment Operator)

This operator is used to assign the value on the right side to the variable on the left side.
For examples:

```javascript
let x = 10; //Assigns the value 10 to the variable x.
```

#### Compound Assignment Operators

These operator combine the arithmetic operation with the assignment operation. They are shortcuts for performing an operation and then assigning the result back to the variable.
For example:

##### `+=` (Addition Assignment)

It adds the value on the right side to the variable and assigns the result back to the variable.

##### `-=` (Subtraction Assignment)

It subtracts the value on the right side from the variable and assigns the result back to the variable.

##### `*=-` (Multiplication Assignment)

It multiplies the variable by the value on the right side and assigns the result back to the variable.

##### `/=` (Division Assignment)

It divides the variable by the value on the right side and assigns the result back to the variable.

##### `%=` (Modules/Remainder Assignment)

It computes the remainder when the variable is divided by the value on the right side and assigns the result back to the variable.

```javascript
let a = 10;
a += 5; // Equivalent to a = a + 5; (a becomes 15)
a -= 3; // Equivalent to a = a - 3; (a becomes 12)
a *= 2; // Equivalent to a = a * 2; (a becomes 24)
a /= 4; // Equivalent to a = a / 4; (a becomes 6)
a %= 5; // Equivalent to a = a % 5; (a becomes 1)
```

### Comparison Operators

Comparison operators are used to compare two values or expressions and return a `boolean` result, which is either `true` or `false`. These operators are commonly used in conditional statements to make decision or evaluate conditions.

#### Equal to (`==`)

This operator checks if the values on the left and right sides are equal. If they are equal, it returns `true` otherwise, it returns false. It does not consider data types.

```javascript
5 == 5; // true
"5" == 5; // true (implicit type conversion)
```

#### Not equal to (`!=`)

This operator checks if the values on the left and right sides are not equal. If they are not equal, it returns `true` otherwise, it returns `false`.

```javascript
5 != 3; // true
"5" != 5; // false (implicit type conversion)
```

#### Strict Equal to (`===`)

This operator checks if the values on the left and right sides are equal and have the same data type. If both the value and data type match, it returns `true` otherwise, it returns `false`.

```javascript
5 === 5; // true
"5" === 5; // false (different data types)
```

#### Strict Not equal to (`!==`)

This operator checks if the values on the left and right sides are not equal or have different data types. If they are not equal or have different data types, it returns `true` otherwise, it returns `false`.

```javascript
5 !== "5"; // true (different data types)
5 !== 5; // false
```

#### Greater than (`>`)

This operator checks if the value on the left is greater than the value on the right. If the left value is greater, it returns `true` otherwise, it returns `false`.

```javascript
8 > 5; // true
3 > 10; // false
```

#### Less than (`<`)

This operator checks if the value on the left is less than the value on the right. If the left value is less, it returns `true` otherwise, it returns `false`.

```javascript
3 < 5; // true
8 < 2; // false
```

#### Greater than or equal to(`>=`)

This operator checks if the value on the left is greater than or equal to the value on the right. If the left value is greater or equal, it returns `true` otherwise, it returns `false`.

```javascript
8 >= 5; // true
3 >= 8; // false
```

#### Less than or equal to (`>=`)

This operator checks if the value on the left is less than or equal to the value on the right. If the left value is less or equal, it returns `true` otherwise, it returns `false`.

```javascript
3 <= 5; // true
8 <= 2; // false
```

### Logical Operators

Logical operators are used to perform logical operations on Boolean values or expressions. These operators allow you to combine or manipulate Boolean values to make decisions or evaluate complex conditions.

#### Logical AND (`&&`)

The logical AND operator returns `true` if both operands are `true`. If at least one of the operands is `false`, it returns `false`.

```javascript
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

#### Logical OR (`||`)

The logical OR operator returns `true` if at least one of the operands is `true`. It returns `false` only if both operands are `false`.

```javascript
true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

#### Logical NOT (`!`)

The logical NOT operator negates the value of an operand. It returns `true` if the operand is `false`, and it returns `false` if the operand is `true`.

```javascript
!true; // false
!false; // true
```

### Ternary Operators

Ternary operator has three operands. It is the simplified operator of if/else.

It is the short form of the `if-else` condition.

**Syntax**

```js
Y =  ? A : B
If the condition is true then Y = A otherwise Y = B
```

```javascript
let isEven = 8 % 2 === 0 ? "Even" : "Odd";
console.log(isEven); // "Even"
```

### Bitwise Operators

Bitwise operators are used to manipulate individual bits of binary numbers. They perform operations at the bit level, which is especially useful in situations where you need to control or analyze low-level data.

#### Bitwise AND (`&`)

This operator compares each bit of two numbers and returns 1 for each bit that is 1 in both numbers. All other bits are set to 0.

```javascript
1010 & 1100; // 1000
```

#### Bitwise OR (`|`)

This operator compares each bit of two numbers and returns 1 for each bit that is 1 in at least one of the numbers.

```javascript
1010 | 1100; // 1110
```

#### Bitwise XOR (`^`)

This operator compares each bit of two numbers and returns 1 for each bit that is 1 in one number but not in both.

```javascript
1010 ^ 1100; // 0110
```

#### Bitwise NOT (`-`)

This operator inverts (flips) all the bits of a number. It changes each 0 to 1 and each 1 to 0.

```javascript
~1010; // 0101
```

#### Left Shift (`<<`)

This operator shifts the bits of a number to the left by a specified number of positions, filling the shifted-in positions with 0.

```javascript
1010 << 2; // 101000 (shifted left by 2 positions)
```

#### Right Shift (`>>`)

This operator shifts the bits of a number to the right by a specified number of positions. The shifted-in positions are filled based on the leftmost bit (sign bit).

```javascript
1010 >> 2; // 0010 (shifted right by 2 positions)
```

### `typeof` Operators

It returns the operand type, The possible types that exist in javascript are undefined, Object, boolean, number, string, symbol, and function.

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
