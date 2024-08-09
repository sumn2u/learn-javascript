---
chapter: 9
description: Understanding the `constructor` Property in JavaScript.
---

## Understanding the `constructor` Property in JavaScript

The `constructor` property in JavaScript is a reference to the function that created an instance's prototype. It is a property of all objects that points to the function that was used to create the object.

### What is the `constructor` Property?

The `constructor` property returns a reference to the constructor function that created the instance. This is useful for identifying the type of an object.

### Example of the `constructor` Property

Here's a basic example to illustrate the `constructor` property:

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new Person("John", "Doe");
console.log(person1.constructor); // Output: [Function: Person]
```

In this example, the `constructor` property of `person1` points to the `Person` function.

### Using the `constructor` Property to Create New Instances

You can use the `constructor` property to create new instances of the same type:

```javascript
const person2 = new person1.constructor("Jane", "Smith");
console.log(person2.firstName); // Output: Jane
```

### `constructor` Property in Built-in Objects

The `constructor` property is also available in built-in JavaScript objects:

```javascript
const arr = [];
console.log(arr.constructor); // Output: [Function: Array]

const obj = {};
console.log(obj.constructor); // Output: [Function: Object]
```

### Modifying the `constructor` Property

You can modify the `constructor` property, but it is generally not recommended as it can lead to unexpected behavior:

```javascript
function Animal(name) {
    this.name = name;
}

const dog = new Animal("Rex");
dog.constructor = Person;
console.log(dog.constructor); // Output: [Function: Person]
```

### Conclusion

The `constructor` property is a useful feature in JavaScript that allows you to reference the function that created an instance's prototype. It can be used to identify the type of an object and create new instances of the same type. However, modifying the `constructor` property should be done with caution.