---
layout: editorial
title: Basic JavaScript Interview Questions
description:
---

# Basic JavaScript Interview Questions

## 1. History and Defining Variables.

### 1.1. What is JavaScript?

**Answer:**
JavaScript is a high-level, interpreted programming language commonly used for web development to add interactivity and dynamic behavior to websites.

### 1.2. Who created/Developed JavaScript?

**Answer:**
JavaScript was created by _Brendan Eich_ while he was working at **Netscape Communications Corporation**. He developed the language in just ten days in May 1995. JavaScript was originally called "_Mocha_" but was later renamed "_LiveScript_" and eventually "_JavaScript_" as part of a marketing collaboration with **Sun Microsystems** (now **Oracle Corporation**), which had a programming language called **Java** that was gaining popularity at the time. Despite the name similarity, _JavaScript_ and _Java_ are entirely different programming languages with distinct purposes and characteristics.

### 1.3. How do you declare a variable in JavaScript?

**Answer:**
You can declare a variable using `var`, `let`, or `const`:

- `var` (function-scoped)
- `let` (block-scoped)
- `const` (block-scoped, for constants)

### 1.4. What is the difference between `let`, `var`, and `const`?

**Answer:**

- `var` is function-scoped, while `let` and `const` are block-scoped.
- `let` allows variable reassignment, while `const` is used for constants.
- Variables declared with `var` are hoisted, whereas `let` and `const` are not hoisted.

### 1.5. Is javascript a statically typed or a dynamically typed language?

**Answer:**
JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.

<!-- img from here "interview bit" -->
<img src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/407/original/static_vs_dynamic.png?1654852333" alt="static_vs_dynamic" />

Since javascript is a _loosely(dynamically)_ typed language, variables in JS are not associated with any type. A variable can hold the value of any data type.

For example, a variable that is assigned a number type can be converted to a string type:

```js
var a = 23;
var a = "Hello World!";
```

### 1.6. What are the types of errors in javascript?

**Answer:**
There are two types of errors in javascript.

1. **Syntax error**: Syntax errors are mistakes or spelling problems in the code that cause the program to not execute at all or to stop running halfway through. Error messages are usually supplied as well.

2. **Logical error**: Reasoning mistakes occur when the syntax is proper but the logic or program is incorrect. The application executes without problems in this case. However, the output findings are inaccurate. These are sometimes more difficult to correct than syntax issues since these applications do not display error signals for logic faults.

### 1.7. Mention some advantages of javascript.

**Answer:**
There are many advantages of javascript. Some of them are

- Javascript is executed on the client-side as well as server-side also. There are a variety of Frontend Frameworks that you may study and utilize. However, if you want to use JavaScript on the backend, you'll need to learn NodeJS. It is currently the only JavaScript framework that may be used on the backend.
- Javascript is a simple language to learn.
- Web pages now have more functionality because of Javascript.
- To the end-user, Javascript is quite quick.

## 2. Functions

### 2.1. How do you create a function in JavaScript?

**Answer:**

You can create a function using the `function` keyword or arrow functions (`=>`):
**Example**:

```js
function myFunction() {
  // Function body
}

const myArrowFunction = () => {
  // Function body
};
```

### 2.2. What are Callbacks?

**Answer:**
A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.

Functions that are used as an argument to another function are called callback functions. **Example**:

```js
function divideByHalf(sum) {
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum) {
  console.log(sum * 2);
}

function operationOnSum(num1, num2, operation) {
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20
```

- In the code above, we are performing mathematical operations on the sum of two numbers. The `operationOnSum` function takes 3 arguments, the first number, the second number, and the operation that is to be performed on their sum (callback).
- Both `divideByHalf` and `multiplyBy2` functions are used as callback functions in the code above.
- These callback functions will be executed only after the function `operationOnSum` is executed.
- Therefore, a callback is a function that will be executed after another function gets executed.

### 2.3. Explain Scope and Scope Chain in javascript.

**Answer:**
Scope in JS determines the accessibility of variables and functions at various parts of one’s code.

In general terms, the scope will let us know at a given part of code, what are variables and functions we can or cannot access.

There are three types of scopes in JS:

- Global Scope
- Local or Function Scope
- Block Scope

**Global Scope**: Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code.

```js
var globalVariable = "Hello world";

function sendMessage() {
  return globalVariable; // can access globalVariable since it's written in global space
}
function sendMessage2() {
  return sendMessage(); // Can access sendMessage function since it's written in global space
}
sendMessage2(); // Returns “Hello world”
```

**Function Scope**: Any variables or functions declared inside a function have `local/function scope`, which means that all the variables and functions declared inside a function, can be accessed from within the function and not outside of it.

```js
function awesomeFunction() {
  var a = 2;

  var multiplyBy2 = function () {
    console.log(a * 2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
  };
}
console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope
```

**Block Scope**: `Block scope` is related to the variables declared using let and const. Variables declared with var do not have block scope. Block scope tells us that any variable declared inside a block `{ }`, can be accessed only inside that block and cannot be accessed outside of it.

```js
{
  let x = 45;
}

console.log(x); // Gives reference error since x cannot be accessed outside of the block

for (let i = 0; i < 2; i++) {
  // do something
}

console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block
```

**Scope Chain**: JavaScript engine also uses Scope to find variables. Let’s understand that using an example:

```js
var y = 24;

function favFunction() {
  var x = 667;
  var anotherFavFunction = function () {
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  };

  var yetAnotherFavFunction = function () {
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  };

  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();
```

As you can see in the code above, if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.

If the variable is not found in the global space as well, a reference error is thrown.

### 2.4. Explain Higher Order Functions in javascript.

**Answer:**
Functions that operate on other functions, either by taking them as arguments or by returning them, are called _higher-order functions_.

Higher-order functions are a result of functions being **first-class citizens** in javascript.

Examples of higher-order functions:

```js
function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  console.log("Hello world");
});
function higherOrder2() {
  return function () {
    return "Do something";
  };
}
var x = higherOrder2();
x(); // Returns "Do something"
```

# 3. Data Types and Operator

### 3.1. What are the different data types present in javascript?

**Answer:**

1. **Primitive types**

   - `String` - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.

     **Example** :

     ```js
     var str = "Vivek Singh Bisht"; //using double quotes
     var str2 = "John Doe"; //using single quotes
     ```

   - `Number` - It represents a number and can be written with or without decimals.

     **Example** :

     ```js
     var x = 3; //without decimal
     var y = 3.6; //with decimal
     ```

   - `BigInt` - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.

     **Example** :

     ```js
     var bigInteger = 234567890123456789012345678901234567890;
     ```

   - `Boolean` - It represents a logical entity and can have only two values : true or false. Booleans are generally used for conditional testing.

     **Example** :

     ```js
     var a = 2;
     var b = 3;
     var c = 2;
     (a == b)(
       // returns false
       a == c
     ); //returns true
     ```

   - `Undefined` - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.

     **Example** :

     ```js
     var x; // value of x is undefined
     var y = undefined; // we can also set the value of a variable as undefined
     ```

   - `Null` - It represents a non-existent or a invalid value.

     **Example** :

     ```js
     var z = null;
     ```

   - `Symbol` - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.

     **Example:**

     ```js
     var symbol1 = Symbol('symbol');
     typeof of primitive types :
     typeof "John Doe" // Returns "string"
     typeof 3.14 // Returns "number"
     typeof true // Returns "boolean"
     typeof 234567890123456789012345678901234567890n // Returns bigint
     typeof undefined // Returns "undefined"
     typeof null // Returns "object" (kind of a bug in JavaScript)
     typeof Symbol('symbol') // Returns Symbol 2. Non-primitive types
     ```

Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.

2. **Non-Primitive types**

   - `Object` - Used to store collection of data.

     **Example**:

     ```js
     // Collection of data in key-value pairs
     var obj1 = {
       x: 43,
       y: "Hello world!",
       z: function () {
         return this.x;
       },
     };
     ```

   - `Array`

     **Example:**

     ```js
     // Collection of data as an ordered list

     var array1 = [5, "Hello", true, 4.1];
     ```

> **Note- It is important to remember that any data type that is not a primitive data type, is of `Object` type in javascript.**

### 3.2 Difference between `==` and `===` operators.

**Answer:**
Both are comparison operators. The difference between both the operators is that `==` is used to compare values whereas, `===` is used to compare both values and types.

**Example**:

```js
var x = 2;
var y = "2";
(x == y)(
  // Returns true since the value of both x and y is the same
  x === y
); // Returns false since the typeof x is "number" and typeof y is "string"
```

### 3.3. What is NaN property in JavaScript?

**Answer:**
`NaN` property represents the “**Not-a-Number**” value. It indicates a value that is not a legal number.

`typeof` of `NaN` will return a Number.

To check if a value is `NaN`, we use the `isNaN()` function,

> Note- `isNaN()` function converts the given value to a Number type, and then equates to NaN.

**Example:**

```js
isNaN("Hello"); // Returns true
isNaN(345); // Returns false
isNaN("1"); // Returns false, since '1' is converted to Number type which results in 0 ( a number)
isNaN(true); // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false); // Returns false
isNaN(undefined); // Returns true
```

### 3.4. Which method is used to retrieve a character from a certain index?

**Answer:**
The `charAt()` function of the JavaScript string finds a char element at the supplied index. The index number begins at `0` and continues up to `n-1`, Here `n` is the string length. The index value must be positive, higher than, or the same as the string length.
