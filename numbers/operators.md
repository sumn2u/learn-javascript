# Basic Operators

Mathematic operations to numbers can be performed using some basic operators like:

* **Addition operator (`+`)**: The addition operator adds two numbers together. For example:

```javascript
console.log(1 + 2); // 3
console.log(1 + (-2)); // -1
```

* **Subtraction operator (`-`)**: The subtraction operator subtracts one number from another. For example:

```javascript
console.log(3 - 2); // 1
console.log(3 - (-2)); // 5
```

* **Multiplication operator (`*`)**: The multiplication operator multiplies two numbers. For example:

```javascript
console.log(2 * 3); // 6
console.log(2 * (-3)); // -6
```

* **Division operator (`/`)**: The division operator divides one number by another. For example:

```javascript
console.log(6 / 2); // 3
console.log(6 / (-2)); // -3
```

* **Remainder operator (`%`)**: The remainder operator returns the remainder of a division operation. For example:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

The JavaScript interpreter works from left to right. One can use parentheses just like in math to separate and group expressions: `c = (a / b) + d`

{% hint style="warning" %}
JavaScript uses the `+` operator for both addition and concatenation. Numbers are added whereas strings are concatenated.
{% endhint %}

`NaN` is a reserved word indicating that a number is not a legal number, this arises when we perform arithmetic with a non-numeric string will result in `NaN` (Not a Number).

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

In JavaScript, if we calculate a number outside the largest possible number it returns `Infinity` .

```javascript
let x =  2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```
{% exercise %}
Use the math operators +, -, *, /, and % to perform the following operations on `num1` and `num2`.

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
assert(addResult === 15 && subtractResult === 5 && multiplyResult === 50 && divideResult === 2 && reminderResult === 0  );

{% context %}
{% endexercise %}
