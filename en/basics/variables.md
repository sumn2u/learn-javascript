# Variables

The first step towards really understanding programming is looking back at algebra. If you remember it from school, algebra starts with writing terms such as the following.

```
3 + 5 = 8
```

You start performing calculations when you introduce an unknown, for example, x below:

```
3 + x = 8
```

Shifting those around you can determine x:

```
x = 8 - 3
-> x = 5
```

When you introduce more than one you make your terms more flexible - you are using variables:

```
x + y = 8
```

You can change the values of x and y and the formula can still be true:

```
x = 4
y = 4
```

or

```
x = 3
y = 5
```

The same is true for programming languages. In programming, variables are containers for values that change. Variables can hold all kinds of values and also the results of computations. Variables have a name and a value separated by an equals sign (=). Variable names can be any letter or word but bear in mind that there are restrictions from language to language of what you can use, as some words are reserved for other functionality.

Let's check out how it works in Javascript, The following code defines two variables, computes the result of adding the two, and defines this result as a value of a third variable.

```javascript
let x = 5;
let y = 6;
let result = x + y;
```

{% exercise %}
Define a variable `x` equal to 20.

{% initial %}
let x =

{% solution %}
let x = 20;

{% validation %}
assert(x == 20);

{% context %}
{% endexercise %}
**ES6 Version**

ECMAScript 2015 or ES2015 also known as E6  is a significant update to the JavaScript programming language since 2009. In ES6 we have three ways of declaring variables.&#x20;

```javascript
var x = 5;
const y = 'Test';
let z = true;
```

The types of declaration depend upon the scope. Unlike the `var` keyword, which defines a variable globally or locally to an entire function regardless of block scope, `let` allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used. For example.

```javascript
function varTest(){
    var x=1;
    if(true){
        var x=2; // same variable
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

`const` variables are immutable - they are not allowed to be re-assigned.

```javascript
const x = "hi!";
x = "bye"; // this will occurs an error 
```
