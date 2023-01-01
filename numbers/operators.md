# Basic Operators

&#x20;Mathematic operations to numbers can be performed using some basic operators like:

* **Addition**: `c = a + b`
* **Subtraction**: `c = a - b`
* **Multiplication**: `c = a * b`
* **Division**: `c = a / b`

The JavaScript interpreter works from left to right. One can use parentheses just like in math to separate and group expressions: `c = (a / b) + d`

{% hint style="warning" %}
JavaScript uses the `+` operator for both addition and concatenation. Numbers are added whereas strings are concatenated.
{% endhint %}

`NaN` is a  reserved word indicating that a number is not a legal number, this arises when we perform  arithmetic with a non-numeric string will result in `NaN` (Not a Number).

```javascript
let x = 100 / "10";
```

The `parseInt` method parses a value as a string and returns the first integer.&#x20;

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); //40 
parseInt("He was 40"); //NaN
```

In JavaScript, if we calculate a number outside the largest possible number it returns `Infinity` .&#x20;

```javascript
let x =  2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```
