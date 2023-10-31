---
layout: editorial
title: Basic JavaScript Interview Questions
chapter: 22
pageNumber: 158
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
There are seven types of errors in javascript.

1. **Syntax error** - The error occurs when you use a predefined syntax incorrectly.
```js
const func = () =>
console.log(hello)
}
```
2. **Reference Error** - In a case where a variable reference can't be found or hasn't been declared, then a Reference error occurs.
```js
console.log(x);
```
3. **Type Error** - An error occurs when a value is used outside the scope of its data type.
```js
let num = 15;
console.log(num.split(""));
```
4. **Evaluation Error** - Current JavaScript engines and EcmaScript specifications do not throw this error. However, it is still available for backward compatibility. The error is called when the eval() backward function is used, as shown in the following code block

```js
try{
  throw new EvalError("'Throws an error'")
}catch(error){
  console.log(error.name, error.message)
}
```
5. **RangeError** - There is an error when a range of expected values is required.

```js
const checkRange = (num)=>{
  if (num < 30) throw new RangeError("Wrong number");
  return true
}

checkRange(20);
```
6. **URI Error** - When the wrong character(s) are used in a URI function, the error is called uri error
```js
console.log(decodeURI("https://www.educative.io/shoteditor"))
console.log(decodeURI("%sdfk"));
```
7. **Internal Error** - In the JS engine, this error occurs most often when there is too much data and the stack exceeds its critical size. When there are too many recursion patterns, switch cases, etc., the JS engine gets overwhelmed.
```js
switch(condition) {
 case 1:
 ...
 break
 case 2:
 ...
 break
 case 3:
 ...
 break
 case 4:
 ...
 break
 case 5:
 ...
 break
 case 6:
 ...
 break
 case 7:
 ...
 break
 ... up to 500 cases
 }
```

### 1.7. Mention some advantages of javascript.

**Answer:**
There are many advantages of javascript. Some of them are

- Javascript is executed on the client-side as well as server-side also. There are a variety of Frontend Frameworks that you may study and utilize. However, if you want to use JavaScript on the backend, you'll need to learn NodeJS. It is currently the only JavaScript framework that may be used on the backend.
- Javascript is a simple language to learn.
- Web pages now have more functionality because of Javascript.
- To the end-user, Javascript is quite quick.

### 1.8. What is the ‘this’ keyword in JavaScript? 

**Answer:**

The Keyword ‘this’ in JavaScript is used to call the current object as a constructor to assign values to object properties.

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

### 2.5. What do you mean by Self Invoking Functions in javascript?

**Answer:** Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.

Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again. And there is no name for these kinds of functions.


### 2.6. What is the difference between exec () and test () methods in javascript?

**Answer:**

- test () and exec () are RegExp expression methods used in javascript.

- We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
- We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'

### 2.7.  What is the difference between Function declaration and Function expression?

**Answer:**

**Function declaration**:
<ol style="list-style-type: upper-alpha">
<li> Declared as a separate statement within the main JavaScript code.</li>
<li> Can be called before the function is defined.</li>
<li> Offers better code readability and better code organization.</li>

</ol>

Example:

```js
function abc() {
    return 5;
}
```


**Function expression**:
<ol style="list-style-type: upper-alpha">
<li>Created inside an expression or some other construct.</li>
<li>Created when the execution point reaches it; can be used only after that.</li>
<li>Used when there is a need for a conditional declaration of a function.</li>

</ol>

Example:

```js
var a = function abc() {
    return 5;
}
```


### 2.8. What are the arrow functions in JavaScript?

**Answer**: Arrow functions are a short and concise way of writing functions in JavaScript. The general syntax of an arrow function is as below:
const helloWorld = () => {
  console.log("hello world!");
};

### 2.9. Passed by value and passed by reference :

**Answer:** 
- Passed By Values Are Primitive Data Types.  
Consider the following example:

Here, the a=432 is a primitive data type i.e. a number type that has an assigned value by the operator.  When the var b=a code gets executed, the value of ‘var a’ returns a new address for ‘var b’ by allocating a new space in the memory, so that ‘var b’ will be operated at a new location. 

Example:
```js
var a = 432;
var b = a;
```


Passed_by_values_new

- Passed by References Are Non-primitive Data Types.

Consider the following example:

The reference of the 1st variable object i.e. ‘var obj’ is passed through the location of another variable i.e. ‘var obj2’ with the help of an assigned operator.

Example: 
```js
var obj = { name: "Raj", surname: "Sharma" };
var obj2 = obj;
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

# 4. Some important concepts

### 4.1. What is Hoisting in JavaScript?

**Answer:**
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

**Example 1:** Hoisting of variable
  
  ```js 
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;
```

**Example 2:** Hoisting of function
```js 
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 
```
**Example 3:** Hoisting of function expression
```js 
// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope

/* Note - Variable initializations are not hoisted, only variable declarations are hoisted: */
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

/* Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code: */
"use strict";
x = 23; // Gives an error since 'x' is not declared
var x;
```
### 4.2. Why do we use the word “debugger” in javascript?

**Answer:**

The `debugger` keyword is used to create breakpoints in the code. When the browser finds the debugger keyword in the code, it stops executing the code and opens the debugging tool of the browser.

### 4.3. What is currying in JavaScript?

**Answer:**

Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

*Example of a curried function:*
``` js
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 
```
For Example, if we have a function `f(a,b)`, then the function after currying, will be transformed to `f(a)(b)`.

By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.

Let’s see currying in action:

``` js
function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12
```


As one can see in the code above, we have transformed the function multiply(a,b) to a function curriedMultiply , which takes in one parameter at a time.

### 4.4. What are some advantages of using External JavaScript?

**Answer:**

External JavaScript is the JavaScript Code (script) written in a separate file with the extension.js, and then we link that file inside the <head> or <body> element of the HTML file where the code is to be placed. 

Some advantages of external javascript are

- It allows web designers and developers to collaborate on HTML and javascript files.
- We can reuse the code.
- Code readability is simple in external javascript.

### 4.5. What is a closure in JavaScript?

**Answer:**

A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.
In Short- A closure is a function that has access to variables from its outer (enclosing) function scope, even after the outer function has finished executing.

### 4.6. What is the DOM in JavaScript?

**Answer:**

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

### 4.7. What is event delegation?

**Answer:**

Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it. The events are handled by the callback function of the parent element.

### 4.8. How can you make an AJAX request in JavaScript?

**Answer:**

AJAX stands for Asynchronous JavaScript and XML. It is a set of web development techniques using many web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behavior of the existing page.

You can make AJAX requests using the XMLHttpRequest object or by using the fetch API. Here's an example using fetch:
  
```js
  fetch('https://example.com/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```
### 4.9. What is a promise in JavaScript?

**Answer:**

A promise is an object that may produce a single value sometime in the future: either a resolved value or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

### 4.10. Why do you need a promise in JavaScript ?

**Answer:**

Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

### 4.11. Explain equality in JavaScript ?

**Answer:**

JavaScript provides two types of equality operators: strict equality (===) and loose equality (==)

- Strict Equality (===): This operator compares two values without performing any type conversion. If the values have different types, they are considered unequal. If the values have the same type, are not numbers, and have the same value, they are considered equal. For numbers, they are considered equal if they are both not NaN and have the same value, or if one is +0 and the other is -0

- Loose Equality (==): This operator performs type conversion when comparing the operands. If the operands have the same type, they are compared in the same way as the strict equality operator. If the operands have different types, JavaScript attempts to convert them to a common type and then compare them. The rules for type conversion can sometimes lead to unexpected results, so it's generally recommended to use the strict equality operator to avoid potential issues


## 5. Object

### 5.1. What are the possible ways to create objects in JavaScript?

 
**Answer:**

There are many ways to create objects in javascript as below

Object constructor:

i. The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.
``` js
var object = new Object();
```
The Object() is a built-in constructor function so "new" keyword is not required. the above can be written as:
``` js
var object = Object();
```
ii. Object's create method:

The create method of Object creates a new object by passing the prototype object as a parameter

```js
var object = Object.create(null);
```
iii. Object literal syntax:


The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

```js
var object = {
     name: "Sudheer",
     age: 34
};

Object literal property values can be of any data type, including array, function, and nested object.
```
Note: This is an easiest way to create an object

iv. Function constructor:

Create any function and apply the new operator to create object instances,

```js
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("Sudheer");
```
v. Function constructor with prototype:

This is similar to function constructor but it uses prototype for their properties and methods,
```js
function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();
```
This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.
```js
function func() {}

new func(x, y, z);
```
(OR)
```js
// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype)

// Call the function
var result = func.call(newInstance, x, y, z),

// If the result is a non-null object then use it otherwise just use the new instance.
console.log(result && typeof result === 'object' ? result : newInstance);
```
vi. ES6 Class syntax:

ES6 introduces class feature to create the objects
```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");
```

## 6.Miscellaneous

### 6.1. What is a strict mode in JavaScript ?

**Answer:**

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the Strict mode.

### 6.2. What is null value in JavaScript ?

**Answer:**

The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.

```js
var user = null;
console.log(typeof user); //object
```

### 6.3. What is eval in JavaScript ?

**Answer:**

The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

```js
console.log(eval("1 + 2")); //  3
```

### 6.4. Is JavaScript a compiled or interpreted language ?

**Answer:**

JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

### 6.5. Is JavaScript a case-sensitive language ?

**Answer:**

Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

## 6.Miscellaneous

### 6.1. What is a strict mode in JavaScript ?

**Answer:**

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the Strict mode.

### 6.2. What is null value in JavaScript ?

**Answer:**

The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.

```js
var user = null;
console.log(typeof user); //object
```

### 6.3. What is eval in JavaScript ?

**Answer:**

The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

```js
console.log(eval("1 + 2")); //  3
```

### 6.4. Is JavaScript a compiled or interpreted language ?

**Answer:**

JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

### 6.5. difference between exec () and test () methods

**Answer**

-> exec():
1) It is an expression method in JavaScript that is used to search a string with a specific pattern. 
2) Once it has been found, the pattern will be returned directly, otherwise, it returns an “empty” result.

-> test ()
1) It is an expression method in JavaScript that is also used to search a string with a specific pattern or text. 
2) Once it has been found, the pattern will return the Boolean value 'true', else it returns ‘false’. 


## 7.JSON

### 7.1. What is JSON ?

**Answer:**

JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

### 7.2. What are the syntax rules of JSON ?

**Answer:** 

Below are the list of syntax rules of JSON

*  The data is in name/value pairs
*  The data is separated by commas
*  Curly braces hold objects
*  Square brackets hold arrays

### 7.3. What is the purpose JSON stringify ?

**Answer:** 

When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

```js
var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString); //"{"name":"John","age":31}"
```

### 7.4. How do you parse JSON string ?

**Answer:** 

When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

```js
var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}
```

### 7.5. Why do you need JSON ?

**Answer:** 

When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

### 7.6. How do you define JSON arrays ?

**Answer:** 

JSON arrays are written inside square brackets and arrays contain javascript objects. For example, the JSON array of users would be as below,

```js
"users":[
  {"firstName":"John", "lastName":"Abrahm"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Shane", "lastName":"Warn"}
]
```

### 7.6. In JSON, what is the purpose of square brackets, and how are they used?

**Answer:** 

In JSON, square brackets `[ ]` are used to encapsulate and define arrays within JSON data structures. JSON arrays can contain a collection of values, which can be of various data types, including objects, strings, numbers, and other JSON arrays.
