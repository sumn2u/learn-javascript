---
layout: editorial
chapter: 15
pageNumber: 94
description: Classes are templates for creating an object. It encapsulates data with code to work on with data. The keyword class is used to create a class. 
---

# Chapter 15
# Classes

Classes are templates for creating an object. It encapsulates data with code to work on with data. For example if we want to make a family tree of birds, we can make a bird class and every bird object we make will have the methods and data from the bird class. 

 The keyword `class` is used to create a class.  And a specific method called `constructor` is used for creating and initializing an object created with a `class`. An example of car class is shown below.

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

Every time we create an object from a class we’re creating an **instance** of that class, for example the `myCar` variable above us with the `new` keyword is an instance. Instances are *independant* meaning it doesn’t affect any other instance. This is why classes are thought to be templates for objects. Since once you make that instance object it'll have the same methods as the original class.


In this chapter, we will explore following topics:
* [Access Modifiers](./access-modifiers.md)
* [Composition](./composition.md)
* [Inheritance](./inheritance.md)
* [Static](./static.md)