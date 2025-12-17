---
chapter: 19
pageNumber: 124
description: In this chapter, we will learn about JavaScript getters and setters. JavaScript getters and setters are special methods that provide access to object properties. Getters are used to read values of properties, while setters are used to write values to properties.

---

## Getters and Setters

ECMAScript 5 (ES5 2009) introduced Getter and Setters.

In JavaScript, getters and setters are the methods that are used to get or set the value for properties. When using getters and setters, you can ensure higher data quality. Getters and Setters provide a simplified syntax for an object's properties and methods. Getters and Setters are used for Data Encapsulation.

Why Using Getters and Setters?

- It gives simpler syntax
- It allows equal syntax for properties and methods.
- It can secure better data quality.
- It is useful for doing things behind-the-scenes. 

## JavaScript Getter (The get Keyword)
This example uses a lang property to get the value of the language property.

```sh

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
```

## JavaScript Setter (The set Keyword)
This example uses a lang property to set the value of the language property.

```sh
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
```

`getters` and `setters` in JavaScript are powerful tools that enable us to control access to object properties and provide additional functionality. Getters allow us to retrieve property values with custom logic, while setters enable us to validate and modify incoming values. By using getters and setters, we can maintain data encapsulation, enhance security, and ensure the integrity of our objects.
