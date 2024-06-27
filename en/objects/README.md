---
layout: editorial
chapter: 9
pageNumber: 71
description: An object is a composite data type that allows you to store and organize multiple values (properties) as key-value pairs. It is a fundamental data structure in the language and is widely used for representing complex data and creating structured entities.
---

# Chapter 9
# Objects

In javascript the objects are **mutable** because we change the values pointed by the reference object, instead, when we change a primitive value we are changing its reference which now is pointing to the new value and so primitive are **immutable**. The primitive types of JavaScript are `true`, `false`, `numbers`, `strings`, `null` and `undefined`. Every other value is an `object`. Objects contain `propertyName`: `propertyValue` pairs. There are three ways to create an `object` in JavaScript:

1.  **literal**

    ```javascript
    let object = {};
    // Yes, simply a pair of curly braces!
    ```

    > _**Note:**_ this is the **recommended** way.
2.  **object-oriented**

    ```javascript
    let object = new Object();
    ```

    > _**Note:**_ it's almost like Java.
3.  **and using `object.create`**

    ```javascript
    let object = Object.create(proto[, propertiesObject]);
    ```

    > _**Note:**_ it creates a new object with the specified prototype object and properties.
