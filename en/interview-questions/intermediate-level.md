---
layout: editorial
title: Intermediate level JavaScript Interview Questions
description: 
---

# Intermediate Level JavaScript Interview Questions
## 1. Loops
### 1.1. What is the definition of an iteration in a JavaScript loop?

**Answer:**

An iteration in a JavaScript loop refers to each individual execution of the loop's body, typically corresponding to one cycle of the loop.

### 1.2. What are all the looping structures in JavaScript?

**Answer:**

While loop: A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.

For loop: A for loop provides a concise way of writing the loop structure. Unlike a while loop, for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.

Do while: A do-while loop is similar to while loop with the only difference that it checks the condition after executing the statements, and therefore is an example of Exit Control Loop.

### 1.3. How does the break statement work in a loop?

**Answer:**

The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.

### 1.4. How does the continue statement work in a loop?

**Answer:**

 The continue directive is a "lighter version" of the break statement. It does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

## 2. Switch statement

### 2.1. What is a switch statement in JavaScript?

**Answer:**

A switch statement in JavaScript is a control flow statement that evaluates an expression and executes a specific block of code based on the matched case.

### 2.2. What are the advantages of employing a Switch statement?

**Answer:**

A switch statement can replace multiple checks, and it is more descriptive and easier to read. Switch statements improve code readability, provide better performance, simplify complex conditionals, enhance maintainability, and support cleaner syntax.

### 2.3. Is the order of case statements important in a switch statement?

**Answer:**

The order of case statements is important in a switch statement, especially when employing fall-through behavior. Cases are evaluated sequentially, so a matching case found earlier will prevent subsequent cases from being tested, affecting execution and performance.

## 3. JavaScript cookies

### 3.1. What are JavaScript Cookies ?

**Answer:**

Cookies are small files that are stored on a user’s computer. They are used to hold a modest amount of data specific to a particular client and website and can be accessed either by the web server or by the client’s computer. When cookies were invented, they were basically little documents containing information about you and your preferences. For instance, when you select the language in which you want to view your website, the website would save the information in a document called a cookie on your computer, and the next time when you visit the website, it would be able to read a cookie saved earlier.

### 3.2.  How to create a cookie using JavaScript?

**Answer:**

To create a cookie by using JavaScript you just need to assign a string value to the document.cookie object.
````javascript
document.cookie = "key1 = value1; key2 = value2; expires = date";
````

### 3.3. How to read a cookie using JavaScript?

**Answer:**

The value of the document.cookie is used to create a cookie. Whenever you want to access the cookie you can use the string. The document.cookie string keep a list of name = value pairs separated by semicolons, where name is the name of a cookie and the value is its string value.

### 3.4. How to delete a cookie using JavaScript?

**Answer:**

Deleting a cookie is much easier than creating or reading a cookie, you just need to set the expires = “past time” and make sure one thing defines the right cookie path unless few will not allow you to delete the cookie.

## 4. Pop-up boxes in JavaScript
 
### 4.1. What are the types of Pop up boxes available in JavaScript?

**Answer:**

There are three types of pop boxes available in JavaScript:
Alert, Confirm, Prompt.

### 4.2. What is the difference between an alert box and a confirmation box?

**Answer:**

An alert box will display only one button which is the OK button. It is used to inform the user about the agreement has to agree. But a Confirmation box displays two buttons OK and cancel, where the user can decide to agree or not.

## 5. Arrow Functions

### 5.1. What is the definition of an arrow function?

**Answer:**

An arrow function is a concise syntax for defining anonymous functions in JavaScript, using the arrow notation. It offers shorter syntax, lexical scoping of "this", and can't be used as a constructor.

### 5.2. How do arrow functions differ from function expressions?

**Answer:**

Arrow functions provide a shorter syntax, don't have their own this, arguments, super, or new.target, and can't be used as constructors, unlike function expressions.

### 5.3. What does lexical 'this' binding mean in arrow functions?

**Answer:**

"Lexical this" binding in arrow functions means they don't create their own 'this' context; instead, they inherit 'this' from their surrounding, enclosing scope, reducing common 'this'-related issues.

### 5.4. What are the advantages of using arrow functions?

**Answer:**

The advantages of using arrow functions in JavaScript include shorter syntax, implicit return, and lexical ‘this’ binding.

### 5.5. What are the common use cases for arrow functions?

**Answer:**

Arrow functions are commonly used for Object methods, event listeners, callbacks, and other functions that require shorter, more concise syntax.



