---
chapter: 7
pageNumber: 50
---
# For

The easiest form of a loop is the for statement. This one has a syntax that is similar to an if statement, but with more options:

```javascript
for (condition; end condition; change) {
    // do it, do it now
}
```

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
```
