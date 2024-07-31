---
layout: editorial
title: Intermediate level JavaScript Interview Questions
description: 
chapter: 22
pageNumber: 175
---

# Intermediate Level JavaScript Interview Questions
## 1. Loops
### 1.1. What is the definition of an iteration in a JavaScript loop?

**Answer:** An iteration in a JavaScript loop refers to each individual execution of the loop's body, typically corresponding to one cycle of the loop.

### 1.2. What are all the looping structures in JavaScript?

**Answer:** Various looping structures are used in JavaScript. Some of them are as follows:

**While loop**: A [while](../loops/while.md) loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.

**For loop**: A [for](../loops/for.md) loop provides a concise way of writing the loop structure. Unlike a while loop, for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.

**Do while**: A [do-while](../loops/dowhile.md) loop is similar to while loop with the only difference that it checks the condition after executing the statements, and therefore is an example of Exit Control Loop.

### 1.3. How does the break statement work in a loop?

**Answer:** The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.

### 1.4. How does the continue statement work in a loop?

**Answer:** The continue directive is a "lighter version" of the break statement. It does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

## 2. Switch statement

### 2.1. What is a switch statement in JavaScript?

**Answer:** A switch statement in JavaScript is a control flow statement that evaluates an expression and executes a specific block of code based on the matched case.

### 2.2. What are the advantages of employing a Switch statement?

**Answer:** A [switch](../conditional/switch.md) statement can replace multiple checks, and it is more descriptive and easier to read. Switch statements improve code readability, provide better performance, simplify complex conditionals, enhance maintainability, and support cleaner syntax.

### 2.3. Is the order of case statements important in a switch statement?

**Answer:** The order of case statements is important in a switch statement, especially when employing fall-through behavior. Cases are evaluated sequentially, so a matching case found earlier will prevent subsequent cases from being tested, affecting execution and performance.

## 3. JavaScript cookies

### 3.1. What are JavaScript Cookies ?

**Answer:** [Cookies](../browser-object-model-bom/cookies.md) are small files that are stored on a user’s computer. They are used to hold a modest amount of data specific to a particular client and website and can be accessed either by the web server or by the client’s computer. When cookies were invented, they were basically little documents containing information about you and your preferences. For instance, when you select the language in which you want to view your website, the website would save the information in a document called a cookie on your computer, and the next time when you visit the website, it would be able to read a cookie saved earlier.

### 3.2.  How to create a cookie using JavaScript?

**Answer:** To create a cookie by using JavaScript you just need to assign a string value to the document.cookie object.
````javascript
document.cookie = "key1 = value1; key2 = value2; expires = date";
````

### 3.3. How to read a cookie using JavaScript?

**Answer:** The value of the document.cookie is used to create a cookie. Whenever you want to access the cookie you can use the string. The `document.cookie` string keep a list of `name = value` pairs separated by semicolons, where name is the name of a cookie and the value is its string value.

### 3.4. How to delete a cookie using JavaScript?

**Answer:** Deleting a cookie is much easier than creating or reading a cookie, you just need to set the expires = “past time” and make sure one thing defines the right cookie path unless few will not allow you to delete the cookie.

## 4. Pop-up boxes in JavaScript
 
### 4.1. What are the types of Pop up boxes available in JavaScript?

**Answer:** There are three types of pop boxes available in JavaScript:
`Alert`, `Confirm`, `Prompt`.

### 4.2. What is the difference between an alert box and a confirmation box?

**Answer:** An alert box will display only one button which is the OK button. It is used to inform the user about the agreement has to agree. But a Confirmation box displays two buttons OK and cancel, where the user can decide to agree or not.

## 5. Arrow Functions

### 5.1. What is the definition of an arrow function?

**Answer:** An arrow function is a concise syntax for defining anonymous functions in JavaScript, using the arrow notation. It offers shorter syntax, lexical scoping of "this", and can't be used as a constructor.

### 5.2. How do arrow functions differ from function expressions?

**Answer:** Arrow functions provide a shorter syntax, don't have their own this, arguments, super, or new.target, and can't be used as constructors, unlike function expressions.

### 5.3. What does lexical 'this' binding mean in arrow functions?

**Answer:** "Lexical this" binding in arrow functions means they don't create their own 'this' context; instead, they inherit 'this' from their surrounding, enclosing scope, reducing common 'this'-related issues.

### 5.4. What are the advantages of using arrow functions?

**Answer:** The advantages of using arrow functions in JavaScript include shorter syntax, implicit return, and lexical ‘this’ binding.

### 5.5. What are the common use cases for arrow functions?

**Answer:** Arrow functions are commonly used for object methods, event listeners, callbacks, and other functions that require shorter, more concise syntax.


## 6. Regular Expression

### 6.1. What is a Regular Expression ?

**Answer:** A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and textreplace operations. Let's see the syntax format now,
   
```js
 /pattern/modifiers;
```

For example, the regular expression or search pattern with case-insensitive username would be,

```js
/John/i;
```

### 6.2. What are the string methods available in Regular expression ?

**Answer:** Regular Expressions has two string methods: search() and replace(). The search() method uses an expression to search for a match, and returns the position of the match.

```js
var msg = "Hello John";
var n = msg.search(/John/i); // 6
```

The replace() method is used to return a modified string where the pattern is replaced.

```js
var msg = "Hello John";
var n = msg.replace(/John/i, "Buttler"); // Hello Buttler
```

### 6.3. What are modifiers in regular expression ?

**Answer:** Modifiers can be used to perform case-insensitive and global searches. Let's list down some of the modifiers:

| Modifier | Description                                      |
| -------- | ------------------------------------------------ |
| `i`      | Perform case-insensitive matching.               |
| `g`      | Perform a global match (find all matches).       |
| `m`      | Perform multiline matching.                      |

Let's take an example of global modifier,

```js
var text = "Learn JS one by one";
var pattern = /one/g;
var result = text.match(pattern); // one,one
```

### 6.4. What are regular expression patterns ?

**Answer:** Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,
  
  + i.Brackets: These are used to find a range of characters. For example, below are some use cases,
    - a. [abc]: Used to find any of the characters between the brackets(a,b,c).
    - b. [0-9]: Used to find any of the digits between the brackets.
    - c. (a|b): Used to find any of the alternatives separated with |
  + ii.Metacharacters: These are characters with a special meaning For example, below are some use cases 
    - a. \d: Used to find a digit 
    - b. \s: Used to find a whitespace character
    - c. \b: Used to find a match at the beginning or ending of a word
  + iii.Quantifiers: These are useful to define quantities For example, below are some use cases
    - a. n+: Used to find matches for any string that contains at least one n 
    - b. n*: Used to find matches for any string that contains zero or more occurrences of n 
    - c. n?: Used to find matches for any string that contains zero or one occurrences of n

### 6.5. What is a RegExp object ?

**Answer:** RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,

```js
var regexp = new RegExp("\\w+");
console.log(regexp);
// expected output: /\w+/
```

### 6.6. How do you search a string for a pattern ?

**Answer:**  You can use the `test()` method of regular expression in order to search a string for a pattern, and return true or false depending on the result.

```js
var pattern = /you/;
console.log(pattern.test("How are you?")); //true
```
### 6.7. What is Currying in Javascript?
 
**Answer:** Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

That is, when we turn a function call `sum(1,2,3)` into `sum(1)(2)(3)`. 

The number of arguments a function takes is also called arity.

```js
function sum(a, b) {
    // do something
}
function _sum(a, b, c) {
    // do something
}
```
The function sum takes two arguments (two-arity function) and _sum takes three arguments (three-arity function).

Curried functions are constructed by chaining closures and by defining and immediately returning their inner functions simultaneously.

## 7. Temporal Dead Zone

### 7.1. What is the Temporal Dead Zone in ES6?
 
**Answer:** In ES6 let and const are hoisted (like var , class and function ), but there is a period between entering scope 
and being declared where they cannot be accessed. This period is the temporal dead zone (TDZ)

```javascript
//console.log(aLet)  // would throw ReferenceError 
let aLet; 
console.log(aLet); // undefined 
aLet = 10; 
console.log(aLet); // 10
```


### 7.2. What are Truthy and Falsy Values in JavaScript?
 
**Answer:** In JavaScript, "truthy" and "falsy" are terms used to describe how values are evaluated in Boolean contexts, such as conditions in if statements and loops. Understanding truthy and falsy values is crucial when working with conditional logic.

#### Falsy Values:

- `false`: The Boolean value false.
- `0`: The numeric value zero.
- `""`: An empty string.
- `null`: A special value indicating the absence of an object.
- `undefined`: A variable that has not been assigned a value.
- `NaN`: Stands for "Not-a-Number" and represents an invalid number.
- When any of these values are used in a Boolean context, they are treated as "falsy," meaning they are considered equivalent to false.

Examples of falsy values:
```javascript
if (false) {
    // This code block won't execute because false is falsy.
}

if (0) {
    // This code block won't execute because 0 is falsy.
}

if ("" === false) {
    // This comparison is true because an empty string is falsy.
}

if (null) {
    // This code block won't execute because null is falsy.
}

if (undefined) {
    // This code block won't execute because undefined is falsy.
}

if (NaN) {
    // This code block won't execute because NaN is falsy.
}
```
#### Truthy Values:

Any value that is not explicitly "falsy" is considered "truthy" in JavaScript. These values are treated as equivalent to true in Boolean contexts.

Example of truth values:
```javascript
if (true) {
    // This code block will execute because true is truthy.
}

if (42) {
    // This code block will execute because 42 is truthy.
}

if ("Hello") {
    // This code block will execute because a non-empty string is truthy.
}

if ({} === true) {
    // This comparison is false because an empty object is truthy but not equal to true.
}

if ([] === true) {
    // This comparison is false because an empty array is truthy but not equal to true.
}
```

Understanding truthy and falsy values allows us to write more concise and expressive code, especially when dealing with conditional logic. We can use this behavior to write shorter and more readable code when evaluating conditions and choosing between two values or actions.

## 8. Classes

### 8.1. What are JavaScript classes?

**Answer:** Classes are templates for creating objects. They encapsulate data and logic that works with the data.

### 8.2. What are class members?

**Answer:** Class members refer to the methods and fields within a class.

  + i. Methods
    - Functions that are defined within the class.
    - They can operate on fields and perform actions with the data.
    - They define the behavior of the class.
  + ii. Fields
    - Variables that are defined within the class.
    - They hold data specific to the class instance.
    - They define the state of the class.

### 8.3. Explain the types of access modifiers and their purpose in JavaScript

**Answer:** There are three types of access modifiers which are used to encapsulate information.

  + Public
    - Can be accessed from anywhere.
  + Private
    - Indicated by prefixing members with the ```#``` symbol.
    - Cannot be accessed from instances or child classes.
    - Only available within the class itself.
    - Useful for information hiding.
  + Protected
    - Indicated by prefixing members with the ```_``` symbol.
    - Can be accessed from the within the class and any class that inherits from it.
    - Useful for sharing state between classes.


### 8.4. What are class properties?
**Answer:** Properties refer to the getter and setter within a class, which provide a way to control access to the fields of a class. The getter and setter are property bindings to a function that will be called when the property is accessed.

  + i. Getter
    - A getter is a method that gets the value of a field.
    - It must have exactly zero parameters.
    - It must return a value.
    - It is defined using the ```get``` keyword.
  + ii. Setter
    - A setter is a method that sets the value of a field.
    - It must have exactly one parameter.
    - It is defined using the ```set``` keyword.

They are used to encapsulate the data, ensuring only certain fields can be accessed or modified in a specific way.

Example of encapsulation using getters and setters:

```javascript
  class Task {
    #id;
    #description;

    constructor(id, description, ) {
      //  Use setters instead of directly modifying the private fields
      this.id = id;
      this.description = description;
    }

    //  Use getters to read the values
    get id() {
      return this.#id;
    }

    //  ...

    //  Use setters to validate data before writing
    set id(id) {
      //  ...validate new ID
      this.#id = id;
    }

    //  ...
  }
```

### 8.5. Explain class constructors

**Answer:** The constructor is a special method of a class called upon the initialization of that class. It is used to initialize the object's properties and perform any setup that is necessary when the object is created.

  + i. Declaration
    - The constructor method is declared using the ```constructor``` keyword within the class body.
    - Each class can only have one constructor method.
    - The constructor cannot be an async method.
    - The constructor cannot be a private method.
  + ii. Initialization
    - The constructor can accept parameters that are used to initialize the instance's properties.
    - It sets up the initial state by assigning values to properties.
  + iii. Inheritance
    - In derived classes (classes that extend another class), the ```super``` keyword is used within the child's constructor to call the constructor of the parent class.
    - The ```super``` call must be made before accessing any properties in the constructor of a derived class. Example of constructor inheritance:

    ```javascript
    class Animal {
        constructor(species) {
            this.species = species;
        }
    }

    class Person extends Animal {
        constructor(name) {
            super("Human"); //  Call the parent class constructor
            this.name = name;
        } 
    }
    ```
  + iv. Default constructor - If no constructor is explicitly declared, a default one will be given to the class.
    - Base class - If the class doesn't extend any other class, a default constructor will be assigned to it:
    ```javascript
      constructor() {}
    ```
    - Child class - If the class extends another class, it will inherit its constructor
    ```javascript
      class Vehicle {
        constructor(type) {
          this.type = type;
        }

        move() {
          return `The ${this.type} is moving`;
        }
      }

      class Car extends Vehicle {
        #model;

        set model(model) {
          this.#model = model;
        }
        
        drive() {
          `Driving ${this.#model}`;
        }
      }
    ```
    Even though the constructor is not explicitly declared, the class Car inherits it from the Vehicle class:
    ```javascript
      constructor(type) {
        super(type);
      }
    ``` 

### 8.6. Static members vs Instance members

**Answer:** By default, properties and methods which we define inside a class belong to each instance of the class that we create. We can also assign members to the class itself. Such members are called static and are declared using the ```static``` keyword. They cannot be directly accessed on instances of the class.