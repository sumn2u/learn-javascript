---
chapter: 9
description: Understanding Factory Functions for Objects in JavaScript.
---

## Understanding Factory Functions for Objects in JavaScript

Factory functions are functions that create and return objects. They provide a flexible way to create multiple instances of objects without using the `new` keyword or constructor functions.

### Defining a Factory Function

A factory function is a regular function that returns an object. It can include parameters to customize the properties of the created object.

### Example of a Factory Function

Here's a basic example of a factory function:

```javascript
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
}

const person1 = createPerson("John", "Doe");
const person2 = createPerson("Jane", "Smith");

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith
```

In this example, the `createPerson` function returns a new object with `firstName`, `lastName`, and `getFullName` properties.

### Advantages of Factory Functions

1. **No `new` Keyword**: Factory functions do not require the `new` keyword, making them simpler and less error-prone.
2. **Encapsulation**: Factory functions can encapsulate private variables and methods.
3. **Flexibility**: They can return different types of objects based on conditions.

### Encapsulation with Factory Functions

Factory functions can encapsulate private data by defining variables inside the function scope and returning an object with methods that access those variables.

```javascript
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.getCount()); // Output: 1
console.log(counter.decrement()); // Output: 0
```

### Returning Different Objects

Factory functions can return different objects based on conditions, providing flexibility in object creation.

```javascript
function createShape(type) {
    if (type === "circle") {
        return {
            type: "circle",
            radius: 10,
            getArea: function() {
                return Math.PI * this.radius * this.radius;
            }
        };
    } else if (type === "square") {
        return {
            type: "square",
            side: 10,
            getArea: function() {
                return this.side * this.side;
            }
        };
    }
}

const circle = createShape("circle");
const square = createShape("square");

console.log(circle.getArea()); // Output: 314.1592653589793
console.log(square.getArea()); // Output: 100
```

### Conclusion

Factory functions are a powerful and flexible way to create objects in JavaScript. They provide advantages such as avoiding the `new` keyword, encapsulating private data, and returning different types of objects based on conditions. By using factory functions, you can write more modular and maintainable code.
