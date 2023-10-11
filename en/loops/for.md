---
chapter: 7
pageNumber: 50
description:  A for loop is a powerful control structure used to execute a block of code multiple times, either for a specific number of iterations or over a defined range. It is highly versatile and commonly used for iterating through arrays, strings, and other iterable objects 
---
# For

The easiest form of a loop is the for statement. This one has a syntax that is similar to an if statement, but with more options:

```javascript
for (initialization; end condition; change) {
    // do it, do it now
}
```

## Explanation:

* In the `initialization` part, executed before the first iteration, initialize your loop variable
* In the `end codition` part, put a condition that may be checked before each iteration. The moment the condition becomes `false`, the loop ends.
* In the `change` part, tell the program how to update the loop variable.
Let's see how to execute the same code ten-times using a `for` loop:

```javascript
for (let i = 0; i < 10; i = i + 1) {
  // do this code ten-times
}
```

> _**Note**_: `i = i + 1` can be written `i++`.

To loop through the properties of an object or an array `for in` loop can also be used.

```javascript
for (key in object) {
  // code block to be executed
}
```

Examples of `for in` loop for an object and array is shown below:

```javascript
const person = {fname:"John", lname:"Doe", age:25};
let info = "";
for (let x in person) {
  info += person[x];
}

// Result: info = "JohnDoe25"

const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

// Result: txt = '45491625'
```

The value of iterable objects such as `Arrays`, `Strings`, `Maps`, `NodeLists` can be looped using `for of` statement.&#x20;

```javascript
let language = "JavaScript";
let text = "";
for (let x of language) {
  text += x;
}

// Result: language = 'JavaScript'
```
