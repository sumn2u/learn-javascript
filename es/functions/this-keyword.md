---
chapter: 8
description: Understanding the `this` Keyword in JavaScript.
---

## Understanding the `this` Keyword in JavaScript

The `this` keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used: in a method, alone, in a function, in an event, etc.

### `this` in Global Context

In the global execution context (outside of any function), `this` refers to the global object, which is `window` in browsers.

```javascript
console.log(this); // Output: Window {...}
```

### `this` in Object Methods

When used in an object method, `this` refers to the object the method belongs to.

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName()); // Output: John Doe
```

### `this` in Constructor Functions

In a constructor function, `this` refers to the newly created instance.

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new Person("Jane", "Smith");
console.log(person1.firstName); // Output: Jane
```

### `this` in Arrow Functions

Arrow functions do not have their own `this`. Instead, `this` is lexically inherited from the outer function where the arrow function is defined.

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        const getFullName = () => `${this.firstName} ${this.lastName}`;
        return getFullName();
    }
};

console.log(person.fullName()); // Output: John Doe
```

### `this` in Event Handlers

In event handlers, `this` refers to the element that received the event.

```html
<button id="myButton">Click me</button>
<script>
    document.getElementById("myButton").addEventListener("click", function() {
        console.log(this); // Output: <button id="myButton">Click me</button>
    });
</script>
```

### Changing `this` with `call`, `apply`, and `bind`

You can explicitly set the value of `this` using `call`, `apply`, and `bind`.

#### `call` Method

The `call` method calls a function with a given `this` value and arguments provided individually.

```javascript
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "Alice" };
greet.call(person); // Output: Hello, Alice
```

#### `apply` Method

The `apply` method calls a function with a given `this` value and arguments provided as an array.

```javascript
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Bob" };
greet.apply(person, ["Hi"]); // Output: Hi, Bob
```

#### `bind` Method

The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.

```javascript
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "Charlie" };
const greetPerson = greet.bind(person);
greetPerson(); // Output: Hello, Charlie
```

### Conclusion

Understanding the `this` keyword is crucial for writing effective JavaScript code. Its value depends on the context in which it is used, and it can be explicitly set using `call`, `apply`, and `bind`.