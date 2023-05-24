---
layout: editorial
chapter: 15
pageNumber: 74
---

# Chapter 15
# Classes

Classes are templates for creating an object. It encapsulates data with code to work on with data. The keyword `class` is used to create a class.  And a specific method called `constructor` is used for creating and initializing an object created with a `class`. An example of car class is shown below.

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Toyota", 2021);
console.log(myCar.age()) // 1
```

{% hint style="info" %}
Class must be defined before its usage.
{% endhint %}

In the class body, methods or constructors are defined and executed in `strict mode`. Syntax not adhering to the strict mode results in error.&#x20;
