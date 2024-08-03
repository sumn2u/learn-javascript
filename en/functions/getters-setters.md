---
chapter: 8
description: Understanding Getters and Setters in JavaScript.
---

## Understanding Getters and Setters in JavaScript

Getters and setters in JavaScript are special methods that provide a way to access and update the properties of an object. They allow you to control how a property is accessed and modified, adding a layer of abstraction and encapsulation.

### What are Getters and Setters?

- **Getters**: Methods that get the value of a specific property.
- **Setters**: Methods that set the value of a specific property.

### Defining Getters and Setters

You can define getters and setters using the `get` and `set` keywords within an object literal or a class.

### Example with Object Literals

Here's an example of defining getters and setters in an object literal:

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
};

console.log(person.fullName); // Output: John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
```

### Example with Classes

Here's an example of defining getters and setters in a class:

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
}

let person = new Person("John", "Doe");
console.log(person.fullName); // Output: John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
```

### Benefits of Using Getters and Setters

1. **Encapsulation**: Control how properties are accessed and modified.
2. **Validation**: Add validation logic when setting a property.
3. **Computed Properties**: Create properties that are computed based on other properties.

### Example of Validation

Here's an example of adding validation logic in a setter:

```javascript
class User {
    constructor(username) {
        this._username = username;
    }

    get username() {
        return this._username;
    }

    set username(name) {
        if (name.length < 3) {
            console.error("Username must be at least 3 characters long.");
        } else {
            this._username = name;
        }
    }
}

let user = new User("jsmith");
console.log(user.username); // Output: jsmith
user.username = "jo"; // Output: Username must be at least 3 characters long.
console.log(user.username); // Output: jsmith
```

### Conclusion

Getters and setters provide a powerful way to manage object properties in JavaScript. By using them, you can add validation, encapsulation, and computed properties, making your code more robust and maintainable.
