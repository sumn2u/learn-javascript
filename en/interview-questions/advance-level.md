---
layout: editorial
title: Advanced JavaScript Interview Questions
description: Delve into intricate advanced-level interview questions on JavaScript to assess the depth of knowledge and expertise of potential candidates.
---

# Advanced JavaScript Interview Questions

## 1. Closures and Scoping

### 1.1. What is a closure in JavaScript? Provide an example where using closures can be beneficial.

**Answer:**

A closure in JavaScript is a function that has access to its enclosing scope's variables, even after the outer function has finished executing. This mechanism allows functions to maintain state between executions.

**Example:**
One common use of closures is to create factory functions or private variables. For instance, if we wanted to generate unique ID values for elements:

### 1.2. How do closures relate to variables' scope and lifetime?

**Answer:**

Closures allow a function to access all the variables, as well as functions, that are in its lexical scope, even after the outer function has completed. This results in the variables being preserved in memory, effectively allowing for variables to have a prolonged lifetime compared to standard local variables which would typically be garbage collected after their parent function has executed.

### 1.3. Give some examples of uses of closures in javascript?

**Answer:**

Here are some example of closures.
- Module Design Pattern.
- Currying.
- Memoize

## 2. Prototypal Inheritance

### 2.1. Explain the difference between classical inheritance and prototypal inheritance.

**Answer:**

Classical inheritance is a concept most often found in traditional Object-Oriented Programming languages like Java or C++, where a class can inherit properties and methods from a parent class. Prototypal inheritance, on the other hand, is unique to JavaScript. In JavaScript, each object can have another object as its prototype, and it can inherit properties from its prototype.

The primary difference is that classical inheritance is class-based, whereas prototypal inheritance is object-based. Although ES6 introduced the `class` keyword to JavaScript, it's syntactical sugar over the existing prototypal inheritance.

### 2.2. How can you extend built-in JavaScript objects?

**Answer:**

To extend built-in JavaScript objects, we can add methods or properties to their prototype. However, it's generally discouraged to modify native prototypes because it can lead to compatibility issues and unexpected behavior, especially if there are future changes to the JavaScript specification.

## 3. Asynchronous JavaScript

### 3.1. Explain the event loop in JavaScript. How does it relate to the call stack?

**Answer:**

The event loop is a fundamental concept in JavaScript and is responsible for handling the execution of multiple chunks of program over time, each run to completion. It works as a continuous loop that checks if there are tasks waiting in the message queue. If there are tasks and the main thread (call stack) is empty, it dequeues the task and executes it.

The call stack, on the other hand, is a data structure that tracks the execution of functions in a program. When a function is called, it is added to the call stack, and when it finishes executing, it is removed from the stack.

In the context of JavaScript, the event loop continuously checks the call stack to determine if it is empty. If it is empty and there are callback functions waiting in the message queue, those callbacks are executed.

### 3.2. What are promises, and how do they differ from callbacks in managing asynchronous operations?

**Answer:**

Promises are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A `Promise` is in one of these states:

- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning the promised operation has completed and the promise has a resulting value.
- `rejected`: meaning the operation failed, and the promise will never be fulfilled.

Callbacks are functions that are passed into another function as arguments and are executed after the outer function has completed. While both promises and callbacks can handle asynchronous operations, promises provide a more robust way of handling them.

The key differences include:

- Promises allow for better chaining of asynchronous operations.
- Callbacks can lead to callback hell or pyramid of doom, where the code becomes hard to read and manage due to nested callbacks.
- Promises have a standardized error handling mechanism using `.then` and `.catch`.

### 3.3. Describe async/await. How does it simplify working with asynchronous code?

**Answer:**

`async/await` is a syntactic feature introduced in ES8 (or ES2017) to work with asynchronous code in a more synchronous-like fashion. It allows for writing asynchronous operations in a linear manner without callbacks, leading to cleaner, more readable code.

The `async` keyword is used to declare an asynchronous function, which ensures that the function returns a promise. The `await` keyword is used inside an `async` function to pause the execution until the promise is resolved or rejected.

Using `async/await` simplifies error handling, as we can use traditional try/catch blocks instead of `.catch` with promises.

## 4. Advanced Array Methods

### 4.1. Describe the functions of `map`, `reduce`, and `filter`. Provide an example of a practical use case for each.

**Answer:**

- `map`: It transforms each element of an array based on a function, returning a new array of the same length.
  **Example:** Doubling each number in an array.
  ````javascript
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8] ```
  ````

### 4.2. What are some limitations or pitfalls when using arrow functions?

**Answer:**
Arrow functions introduce a concise way to write functions in JavaScript, but they come with certain limitations:

1. **No `this` Binding**: Arrow functions do not bind their own `this`. They inherit the `this` binding of the surrounding scope. This can be problematic, especially when using them as methods in objects or as event handlers.

2. **No `arguments` Object**: Arrow functions do not have the `arguments` object of their own. If we need to access the arguments object, we'd have to use traditional function expressions.

3. **Cannot be Used as Constructors**: Arrow functions cannot be used as constructors with the `new` keyword because they don't have the `[[Construct]]` internal method.

4. **No `prototype` Property**: Unlike regular functions, arrow functions do not have a `prototype` property.

5. **Less Readable for Complex Logic**: For simple operations, the concise syntax is beneficial. However, for functions containing complex logic, the concise syntax might make the code less readable.

## 5. "this" Keyword

### 5.1. Explain the behavior of the `this` keyword in different contexts, such as in a method, a standalone function, an arrow function, and an event handler.
**Answer:** The `this` word can vary on depending upon the context it's used. Some of them are explored below:

- In Method: It refers to the object that the method is called on.

```js
const person = {
  name: "Alice",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello(); // Output: Hello, my name is Alice
```
- In Standalone Function:  Here, the `this` behavior depends on how function is called. If the function is called in the global scope, `this` refer to the global object.

```js
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const name = "Alice";
greet(); // Output: Hello, my name is Alice
```
- In Arrow Function: Arrow functions capture the this value from their surrounding lexical scope, unlike regular functions. This means they lack their own this context.

```js
const person = {
  name: "Bob",
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello(); // Output: Hello, my name is undefined
```

### 5.2. How can you ensure a function uses a specific object as its `this` value?
**Answer:**
We can ensure a function uses a specific object as its this value in JavaScript using methods like bind, arrow functions, call, apply, or by defining methods within ES6 classes. These techniques allow us to control the context in which the function operates and ensure it accesses the desired object's properties and methods.

## 6. Memory Management

### 6.1. What are memory leaks in JavaScript? Discuss potential causes and how to prevent them.
**Answer:**
Memory leaks in JavaScript occur when the program unintentionally retains references to objects that are no longer needed, leading to increased memory usage and potential application issues. Common causes include unused variables, closures, event listeners, and circular references. To prevent memory leaks, developers should explicitly remove references, manage event listeners, avoid circular dependencies, use weak references, employ memory profiling tools, conduct testing and code reviews, and utilize linters and static analysis tools to detect potential issues early in the development process.

### 6.2. Describe the difference between shallow copy and deep copy. How can you achieve each in JavaScript?
**Answer:**
Shallow copy and deep copy are methods for duplicating objects or arrays in JavaScript.

Shallow copy duplicates the top-level structure and values of an object or array but retains references to nested objects or arrays. Changes to nested structures affect both the original and the copy.
Deep copy creates a new object or array and recursively duplicates all levels of nested structures, ensuring changes in the copy do not affect the original.
To achieve a shallow copy, we can use methods like the spread operator or slice(). For a deep copy, custom logic or libraries like lodash's cloneDeep are necessary due to the lack of built-in deep copy methods in JavaScript.

## 7. ES6 and Beyond

### 7.1. Explain the purpose and usage of JavaScript's destructuring assignment.
**Answer:**
JavaScript's destructuring assignment is a feature that simplifies the extraction of values from objects and arrays, making code more concise and readable. It allows us to assign values to variables based on property names (object destructuring) or position (array destructuring). Destructuring can also be used in function parameters and supports the rest syntax to capture remaining elements. It's a powerful tool for working with complex data structures.

### 7.2. Describe the significance of JavaScript modules and the ES6 `import/export` syntax.
**Answer:**
JavaScript modules, along with the ES6 import/export syntax, are crucial for modern JavaScript development. They enable developers to organize, reuse, and maintain code effectively. Modules encapsulate related code, promote code reusability, manage dependencies, and improve code scalability. The ES6 import/export syntax provides a standardized way to declare and use modules, making it easier to structure and share code in a clean and maintainable manner. These features have become essential for building modular and maintainable JavaScript applications, both on the client and server sides.
### 7.3. How do template literals enhance string manipulation in ES6? Provide examples.
**Answer:**
Template literals in ES6 enhance string manipulation by allowing developers to create strings with embedded expressions and multiline content in a more readable and flexible way. They support variable interpolation, multiline strings, expression evaluation, function calls, and even advanced use cases like tagged templates. This feature improves code readability and maintainability when working with complex strings that involve dynamic content or expressions.

## 8. Functional Programming

### 8.1. How does functional programming differ from imperative programming in JavaScript?

**Answer:**

Functional programming and imperative programming are two predominant programming paradigms.

- **Imperative Programming**: This paradigm is about telling the computer "how" to do something and relies on statements that change a programs state. In essence, it focuses on describing the steps to achieve a particular task. This often involves loops, conditionals, and statements that modify variables.

  ````javascript
  let total = 0;
  for(let i = 0; i < array.length; i++) {
      total += array[i];
  }```
  ````

### Functional Programming (FP)

FP is more about instructing the computer "what" to achieve, rather than detailing "how" to achieve it. It treats computational tasks as evaluations of mathematical functions and steers clear of mutable data and state alterations. In the context of JavaScript and most FP languages:

- **Pure Functions**: These are functions where the output value is determined solely by its input values, without observable side effects. This means, for the same input, the function will always produce the same output.

- **Immutable Data**: Once data is created, it can never change. Instead of altering existing data, functional programming practices involve creating new data structures.

- **First-Class and Higher-Order Functions**: In FP, functions are first-class citizens. This means they can be assigned to variables, passed into other functions as parameters, and returned as values. A higher-order function is a function that receives another function as an argument, returns a function, or both.

### 8.2. Explain first-class functions and their importance in functional programming.

**Answer:**

In JavaScript and many other programming languages, functions are considered as "first-class citizens." This means that functions can be:

- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions as values.
- Stored in data structures like arrays and objects.

Here's a simple example demonstrating these properties:

````javascript
// Assigning a function to a variable
const greet = function(name) {
  return "Hello, " + name;
}
// Passing a function as an argument to another function
function runFunction(fn, value) {
  return fn(value);
}
runFunction(greet, 'John'); // Returns: "Hello, John"
// Returning a function from another function
function multiplier(factor) {
  return function(number) {
    return number \* factor;
  }
}
const double = multiplier(2);
double(5); // Returns: 10
// Storing function in an array
const functions = [greet, double];
````

### 8.3. What is Execution Context and Lexical Environment?

**Answer:**

Generally, a function has its imaginary container or we can say some sort of context API. It provides the function with 3 things: 
- Variables declared in the function
- The functions defined in the function
- Lexical environment
This is known as Execution Context of a function.

AND

The lexical environment is a type of information source which provides the parent function with the scope of variables it can use. For ex:

````javascript
// Assigning a function to a variable
function parent() {
  var a;
  var b;

  function child() {
    var x;
    var y;
    {rest code}
  }
}
````
Here, the lexical environment will have the information that parent function can use the variable a and b but not x and y (provides scope to the parent).

---

## 9. Storing data in browser

### A. Local storage and Session storage

### 9.1 what are the key differences between Local Storage and Session Storage?

**Answer:**

Web Storage is a web API that provides two mechanisms for storing data in a web browser: Local Storage and Session Storage. The key differences are:

* Lifetime: Local Storage data persists even after the browser is closed, while Session Storage data is only available for the duration of the page session.
* Scope: Local Storage data is accessible across multiple windows and tabs from the same origin, whereas Session Storage data is limited to the current page or tab.
* Storage Limit: Local Storage typically has a larger storage limit (around 5-10 MB) compared to Session Storage (about 5-10 MB as well).

### 9.2 How do you store data in Local Storage and Session Storage using JavaScript?

**Answer:** 

You can use the localStorage and sessionStorage objects to store data. Here's an example of storing data in Local Storage:

`localStorage.setItem('username', 'JohnDoe');`

To store data in Session Storage, replace localStorage with `sessionStorage.`


### 9.3 How can you clear or remove data from Local Storage and Session Storage?

**Answer:**

You can remove an item from storage using the removeItem method. To clear all items, you can use the clear method. For example:

Remove an item : 
`localStorage.removeItem('username');`

Clear all items : 
`localStorage.clear();`

### 9.4 Explain the security concerns associated with Web Storage.

**Answer:**

Web Storage is domain-specific, meaning that data is accessible only from the same domain that stored it. However, there are security concerns related to storing sensitive information in Web Storage. Data is not encrypted, and it's vulnerable to cross-site scripting (XSS) attacks, where malicious scripts can access and modify the stored data.

### B. IndexDB

IndexedDB can be thought of as a “localStorage on steroids”. It’s a simple key-value database, powerful enough for offline apps, yet simple to use.

### 9.5 What is IndexDB, and how does it differ from Web Storage (Local Storage and Session Storage)?

**Answer:**

IndexDB is a low-level JavaScript-based database for storing large amounts of structured data. It differs from Web Storage in several ways:
* Data Structure: IndexedDB stores structured data, while Web Storage stores key-value pairs.
* Storage Limit: IndexedDB typically offers a larger storage limit (often in megabytes) compared to the limited storage of Web Storage.
* API Complexity: IndexedDB has a more complex API, requiring developers to define a database schema and work with transactions.

### 9.6 How do you open a database and create an object store in IndexedDB using JavaScript?

**Answer:**

You can open a database and create an object store like this:

Open a database (or create if it doesn't exist) :  

`const request = indexedDB.open('myDatabase', 1);`

Create an object store : 
```sh
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore('myStore', { keyPath: 'id' });
};
```

## 10. Code Optimization

### 10.1. What is tree shaking ?

**Answer:**

Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler rollup.

### 10.2. What is the need of tree shaking ?

**Answer:**

Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a “Hello World” Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.

### 10.3. Explain the role of the static structure of ES2015 module syntax in tree shaking. How does tree shaking leverage this structure to eliminate dead code?

**Answer:** 

Tree shaking relies on the static structure of ES2015 module syntax, which means that the import and export statements have a clear and static structure at compile time. During the build process, the bundler (e.g., Rollup or Webpack) analyzes the import statements to determine which modules are being used and which are not. It then eliminates the unused modules from the final bundle, resulting in smaller and more efficient code.

### 10.4. What steps can you take to optimize tree shaking in a complex JavaScript project with multiple dependencies and deep module hierarchies?

**Answer:** 

To optimize tree shaking in a complex project:

- Ensure all dependencies use ES2015 module syntax.
- Configure your bundler to perform tree shaking.
- Use the "sideEffects" property in your package.json to mark files or directories as side-effect free.
- Minimize the use of dynamic imports.
- Regularly audit and update your code to remove unused exports and functions.
