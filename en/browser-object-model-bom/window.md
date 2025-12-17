---
chapter: 16
pageNumber: 99
description: window is a global object that represents the browser window or tab in which the current web page is loaded. The window object acts as the global object for client-side JavaScript, meaning that variables and functions declared without the var, let, or const keywords become properties and methods of the window object.
---
# Window

The `window` object represents the browser window and is supported by the browsers. Global variables, objects, and functions are also part of the window object. 

Global **variables** are **properties** and **functions** are **methods** of the window object.

Let's take an example of the screen properties. It is used to determine the size of the browser window and is measured in pixels.    

* `window.innerHeight` - the inner height of the browser window
* `window.innerWidth` - the inner width of the browser window

> _**Note**_:  `window.document` is same as   `document.location` as  the document object model\(DOM\) is part of window object.

Few examples of the window methods

* `window.open()` - open a new window
* `window.close()` - close the current window
* `window.moveTo()` - move the current window
* `window.resizeTo()` - resize the current window

 



