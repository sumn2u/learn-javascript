---
chapter: 9
description: Understanding Constructor Functions in JavaScript.
---

## Understanding Constructor Functions in JavaScript

Constructor functions in JavaScript are special functions used to create and initialize objects. They provide a way to define a blueprint for creating multiple objects with similar properties and methods.

### Defining a Constructor Function

A constructor function is defined like a regular function but is typically named with an initial capital letter to distinguish it from regular functions.

### Example of a Constructor Function

Here's a basic example of a constructor function:

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

console.log(person1.firstName); // Output: John
console.log(person2.lastName); // Output: Smith
```

In this example, the `Person` constructor function initializes the `firstName` and `lastName` properties for each new object created.

### Adding Methods to Constructor Functions

You can add methods to the objects created by a constructor function by defining them on the constructor's prototype.

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");
console.log(person1.getFullName()); // Output: John Doe
```

### Using `new` Keyword

The `new` keyword is used to create an instance of an object from a constructor function. It performs the following steps:
1. Creates a new empty object.
2. Sets the `this` keyword to the new object.
3. Executes the constructor function.
4. Returns the new object.

### Example with `new` Keyword

```javascript
function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car1 = new Car("Toyota", "Corolla");
console.log(car1.make); // Output: Toyota
```

### Constructor Functions vs. Classes

ES6 introduced the `class` syntax, which provides a more concise and readable way to define constructor functions and methods.

### Example with Classes

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("John", "Doe");
console.log(person1.getFullName()); // Output: John Doe
```

### Conclusion

Constructor functions are a fundamental feature in JavaScript for creating and initializing objects. They allow you to define a blueprint for objects and add methods to their prototype. With the introduction of ES6, the `class` syntax provides a more modern and readable way to achieve the same functionality.
