---
chapter: 28
description: Understanding DOM API in JavaScript.
---

## The DOM API

HTML elements can be nested, allowing us to consider a webpage as a <a href="https://en.wikipedia.org/wiki/Tree_(data_structure)">**"tree"**</a> of elements:

- A **tree** is a hierarchical data structure, where each element (called a _node_) contains references to _child_ elements. Following the arboreal metaphor, the "start" of the tree is called the _root note_, hierarchical sequences of nodes are called _branches_, and a _node_ that does not have any children is called a _leaf_.

Considering a web page's content to be a tree of HTML elements is one way to _model_ (represent) the structure of that information. This particular model of a web _document_ (as a tree of _object_ nodes) is called the **Document Object Model**, or **DOM** for short. In many ways the DOM _is_ the HTML (though the HTML rendered in the browser, not the `.html` source code you've written)! Thus we can refer to the web page's content as "the DOM", and an HTML element as a "DOM element".

- Note that even "plain text" content (e.g., what is inside a `<p>` tag) are considered nodes in the DOM tree&mdash;they are "text content" nodes (instead of "element nodes").

Moreover, the DOM also provides an **Application Programming Interface (API)** which allows computer _applications_ to _programmatically_ (e.g., through JavaScript code) _interact_ with it: accessing and manipulating the tree of elements. An API is often a set of _functions_ and _variables_ that can be used give instructions to a program. The DOM API is no different: it is a group of functions you can call and variables (usually Object properties) you can adjust to change the rendered web content. You write code to call these functions in order to make a page interactive.

### Global Variables

You can programmatically access the API in JavaScript by utilizing a set of global variables. **Global variables** are variables that are "globally" scoped: they are available anywhere in the program (not just within a particular function).

<p class="alert alert-warning">An important programming style rule is to **minimize** the use of global variables. Try to avoid creating too many new globals yourself!</p>

Global variables in JavaScript are almost always _Objects_ that have methods as their values. For example, the JavaScript language itself provides a global [**`Math`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object that has includes a number of function properties (e.g., `sqrt()`, `floor()`, etc.).

```js
console.log(typeof Math); //=> 'object'
console.log(typeof Math.sqrt); //=> 'function'
console.log(Math.sqrt(25)); //=> 5
```

- In fact, the `console` object is _another_ global variable provided by the JavaScript runtime (whether inside the browser or inside Node.js)!

The _web browser_ also provides a number of global variables that you can use. For example [**`window`**](https://developer.mozilla.org/en-US/docs/Web/API/Window) is a global object that represents the browser itself. You can use this object to get information about the browser:

```js
/* example properties */
let width = window.innerWidth; //viewport width
let height = window.innerHeight; //viewport height
var url = window.location.href; //url for this page

/* example functions */
window.alert("Boo!"); //show a popup alert. Do not use this.
window.scrollTo(0, 1000); //scroll to a position
window.setTimeout(callback, 1000); //execute callback after an delay
window.setInterval(callback, 1000); //execute callback repeatedly after interval
```

<p class="alert alert-warning">While these examples are included for completeness, most `window` functions are rarely used and should be avoided. Popups with the `window.alert()` function are inelegant, interrupt the user's actions, and produce a bad user experience&mdash;you should instead use in-window alerting options instead (such as showing a  `class="alert-class" `). Browser control functions such as `scrollTo()` are non-standard and can vary drastically across systems and platforms. Proceed with caution when using `window` functions!</p>
