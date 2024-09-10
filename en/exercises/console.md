---
chapter: 21
pageNumber: 147
---
# Console

In JavaScript, we use `console.log()` to write a message (the content of a variable, a given string, etc.) in `console`. It is mainly used for debugging purposes, ideally to leave a trace of the content of variables during the execution of a program.

### Example:

```javascript
console.log("Welcome to Learn JavaScript Beginners Edition");
let age = 30;
console.log(age);
```

## Math with console
You can also write math equation in `console` in order to know the answer to an expression.

### Example:
```js
console.log("What's the age a decade later?");
let age = 30;
console.log(age + 10);
//returns 40 in the console
```

## Booleans in console
Another useful way developers use console is to check wether something is true or false. For instance in the example below you can check wether the age of a person being equal to 45 is true or false. 

### Example:
```js
console.log("Are they 50 years old?");
let age = 30;
console.log(age === 50);
//result: false
```

### 📝 Tasks:

*  Write a program to print `Hello World` on the console. Feel free to try other things as well!
* Write a program to print variables to the `console`.&#x20;
  1. Declare a variable  `animal` and assign the dragon value to it.
  2. Print the `animal` variable to the `console`.
* Write a program to print the number `45` with a math expression of your choice. (Bonus if one of the numbers is a variable!)

* Write a program in the console that checks if the amounts of eggs is more than `12`.
  1. Declare a variable `eggs` and assign a number of your choice to it
  2. Call the `eggs` variable in the `console` and use the correct operator to see if the number assigned to `eggs` is greater that 12
      * If the number of eggs is greater, it should print `true`, if not then it should print `false`





### 💡 Hints:

* Visit the [variable](../basics/variables.md) chapter to understand more about variables.
* Visit the [operators](https://javascript.sumankunwar.com.np/en/numbers/operators.html) page to know the possible operators you can use.

{% if output.name == "website" %}
{% aceeditor compilerTitle="Try it!" %}
{% endaceeditor %}
{% endif %}