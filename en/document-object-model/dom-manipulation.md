---
chapter: 28
description: Understanding DOM Manipulation in JavaScript.
---

## DOM Manipulation

While `window` represents the Browser, the **DOM** itself is represented by the [**`document`**](https://developer.mozilla.org/en-US/docs/Web/API/Document) global object&mdash;`document` _is_ the DOM (the _current_ HTML rendered in the browser). You access properties and call methods of this object in order to manipulate the content displayed in the browser!

### Referencing HTML Elements

In order to manipulate the DOM elements in a page, you first need to get a _reference_ to the element you want to change&mdash;that is, you need a variable that refers to that element. You can get these variable references by using one of the `document` "selector" functions:

```js
//element with id="foo"
let fooElem = document.getElementById("foo");

//elements with class="row"
let rowElems = document.getElementsByClassName("row"); //note the plural!

//<li> elements
let liElems = document.getElementsByTagName("li"); //note the plural!

/*easiest to select by reusing CSS selectors! */
let cssSelector = "header p, .title > p"; //a string of a CSS selector

//selects FIRST element that matches css selector
let elem = document.querySelector(cssSelector);

//matches ALL elements that match css selector
let elems = document.querySelectorAll(cssSelector);
```

- The `document.querySelector()` is _by far_ the most flexible and easy to use of these methods: it can easily do the same as all the other methods (just put in an id, class, or element selector). **You should always use `querySelector()`**.

- Note that the methods that return multiple nodes (e.g., `querySelectorAll`) return a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) object. While this is like an array (you can access elements via index through bracket notation and it has a `.length` property), it is **not** an array: meaning it doesn't support methods like `forEach()` and `map()` across all browsers. If you need to iterate through a `NodeList`, you should use a regular `for` loop. But in practice, you're much more likely to only work with single elements at a time.

### Modifying HTML Elements

Once you have a reference to an element, you access properties and call methods on that object in order to modify its state in the DOM&mdash;which will in turn modify how it _currently_ is displayed on the page. Thus by modifying these objects, you are dynamically changing the web page's content!

<p class="alert alert-warning">**Important**: setting these properties do not change the `.html` source code file! Instead, they just change the _rendered DOM elements_ (think: the content stored in the computer's memory rather than in a file). If you refresh the page, the content will go back to how the `.html` source code file specifies it should appear&mdash;unless that also loads the script that modifies the DOM. What is shown on the page is the HTML with the JavaScript modifications added in.</p>

#### Changing Content

You can use JavaScript to access and modify the **content** of a DOM element (e.g., the stuff between the start and close tags):

```js
//get a reference to the FIRST <p> element
let elem = document.querySelector("p");

console.log(elem); //to demonstrate

let text = elem.textContent; //the text content of the elem
elem.textContent = "This is different content!"; //change the content

let html = elem.innerHTML; //content including HTML
elem.innerHTML = "This is <em>different</em> content!"; //interpreted as HTML
```

The `textContent` property of the element refers to _all_ of the content, but considered as "plain text" this means that it is considered a "safe" property: you can assign strings that contain's HTML code (e.g., `<em>Hello</em>`), but that code will be escaped and not interpreted as HTML (instead the `<` and `>` will be written out as if you had used [HTML entities](https://www.w3schools.com/html/html_entities.asp)). The `.innerHTML` property, on the other hand, is "not safe": any HTML included in the String you assign to it will be converted into DOM elements. This makes it not a great property to use unless unless you are absolutely certain the content came from a trusted source.

- The `innerHTML` property should be used primarily for including _inline_ elements such as `<em>` or `<strong>`. For more complex HTML content, it is cleaner code (separation of concerns!) to explicitly create new elements&mdash;see below for details.

- You can "clear" the content of an element by setting it's content to be an empty string (`''`):

  ```js
  let alertElem = document.querySelector(".alert");
  alertElem.textContent = ""; //no more alert!
  ```

#### Changing Attributes

You can also change the **attributes** of individual elements. Each attribute defined in the HTML specification is typically exposed as a _property_ of the element object:

```js
//get a reference to the `#picture` element
let imgElem = document.querySelector("#picture");

//access the attribute
console.log(imgElem.src); //logs the source of the image

//modify the attribute
imgElem.src = "my-picture.png";
```

<p class="alert alert-warning">You **cannot** access `element.class` or `element.style` attributes directly in this way; see below for specifics on changing the CSS of an element.</p>

You can alternatively modify element attributes by using the methods `getAttribute()` (passing it which attribute to access) and `setAttribute()` (passing it which attribute to modify and what value to assign to that attribute):

```js
let imgElem = document.querySelector("#picture");
imgElement.setAttribute("src", "my-other-picture.png"); //set the src

console.log(imgElem.getAttribute("src")); //=> 'my-other-picture.png'

//the `hasAttribute()` method returns a boolean.
let isThick = document.querySelector("svg rect").hasAttribute("stroke-width"); //chained anonymous variables
```

These methods will let you interact with attributes that are _not_ defined by the HTML spec, such as `data-` attribute. However, they _don't_ work with certain element attributes (such as the `value` attribute of an `<input>` element). Other elements may have their own special DOM properties: see the [DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) for a list of [HTML interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#HTML_interfaces).

#### Changing Element CSS

It is possible to modify the **CSS classes** (and even inline styling) of an element. But rather than using the `class` property like with other attributes, you instead access the **`classList`** property. On modern browsers (IE 10 or later), this property supports methods `.add()` and `.remove()` for adding and removing classes from the list:

```js
//access list of classes
let classList = elem.classList;

//add a class
elem.classList.add("small"); //add a single class
elem.classList.add("alert", "alert-warning"); //add multiples classes (not on IE)

//remove a class
elem.classList.remove("small");

//"toggle" (add if missing, remove if present)
elem.classList.toggle("small");
```

- While IE 10+ does support these methods, it doesn't support _multiple arguments_ for them (so you can't add multiple classes in a single method call). If you need to support older browsers (including any version of IE), you can instead modify the `.className` property as if it were a String:

  ```js
  //fallback for IE (all)
  var classes = elem.className;
  classes += " " + "sweet sour"; //modify the string (append!)
  elem.className = classes; //reassign
  ```

  The `classList` methods work perfectly on Microsoft Edge.

It is also possible to access and modify individual CSS properties of elements through the DOM element's `style` property. `.style` references an Object whose keys are the CSS property names (but written in _camelCase_ instead of _kabob-case_)

```js
let h1 = document.querySelector("h1");
h1.style.color = "green";
h1.style.backgroundColor = "black"; //not `.background-color`
```

<p class="alert alert-info">In general, you should modify element CSS by changing the class of the element, rather than specific style properties.</p>

### Modifying the DOM Tree

In addition to modifying the individual DOM elements, it is also possible to access and modify the _DOM tree itself!_ That is, you can create new elements and add them to the tree (read: webpage), remove elements from the tree, or pluck them out of the tree and insert them somewhere else!

First, note that each JavaScript DOM element has [ _read-only_ properties](https://www.w3schools.com/js/js_htmldom_navigation.asp) referring to its parent, children, and sibling elements:

```html
<main>
  <section id="first-section">
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
  <section id="second-section"></section>
  <main></main>
</main>
```

```js
//get reference to the first section
let firstSection = document.querySelector("#first-section");

//get reference to the "parent" node
let main = firstSection.parentElement;
console.log(main); //<main>...</main>

//get reference to the child elements (2 paragraphs)
let paragraphs = firstSection.children;
console.log(paragraphs.length); //2
console.log(paragraphs[0]); //<p>First paragraph</p>

//get reference to the the next sibling
let sectionSection = firstSection.nextElementSibling;
console.log(secondSection); //<section id="second-section"></section>
```

- Note that these properties only deal with _HTML elements_&mdash;text content nodes are ignored. You can instead use equivalent properties `parentNode` and `childNodes` to also consider text content nodes.

  SVG content doesn't support `parentElement`, but does support `parentNode`.

You can also call methods to create and add new HTML DOM elements to the tree. The `document.createElement()` function is used to create a new HTML element. However this element is _not_ created as a part of the tree (after all, you haven't specified where it would put into the page)! Thus you need to also use a method such as `appendChild` to add that new element as a child of another element:

```js
//create a new <p> (not yet in the tree)
let newP = document.createElement("p");
newP.textContent = "I'm new!";

//create Node of textContent only (not an HTML element, just text)
let newText = document.createTextNode("I'm blank");

let main = document.querySelector("main");
main.appendChild(newP); //add element INSIDE (at end)
main.appendChild(newText); //add the text inside, AFTER the <p>

//add anonymous new node BEFORE element. Parameters are: (new, old)
main.insertBefore(document.createTextNode("First!"), newP);

//replace node. Parameters are: (new, old)
main.replaceChild(document.createTextNode("boo"), newText);

//remove node
main.removeChild(main.querySelector("p"));
```

The `appendChild()` method is considered a cleaner approach than just modifying the `innerHTML` property, as it allows you to adjust the DOM tree without erasing what was previously there. A common practice is to use `document.createElement()` to create a _block_ element, then set the `innerHTML` of that element to its content (which can include _inline_ elements), and then use `appendChild` to add the new block element to the tree at the desired location.

### Accessibility

Whenever you learn a new technology, you should ask: **how does this affect accessibility?** With the JavaScript code modifying the rendered DOM, it is possible that the content of a page will change _after_ it has been read by a screen reader. And while a sighted user will likely be able to see the change visually, a screen reader has no way of knowing that something on the page is different unless you tell it.

You can let screen readers know that an element in a page may have its content change _in the future_ by making that element into an [ARIA Live Region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Live regions are "watched" by assistive technologies, and whenever the content changes they will speak the new content to the reader as if it were being read for the first time.

You make an element into a live region by giving it the `aria-live` attribute:

```html
<div aria-live="polite">This content can change!</div>
```

The value assigned to the `aria-live` attribute is the "politeness level", which specifies the priority by which the screen reader should read the change. The most common option (that you should almost always use) is `"polite"`, which indicates that the changed text will be read only once the user has _paused_ whatever is currently being read. A `"polite"` alert doesn't interrupt the currently being read text or description, but instead will be injected when there is a break (if the current reading goes on for too long, then the new content will not be spoken).

- The other option is `"assertive"`, which indicates that the new content should be spoken as soon as it changes, possibly interrupting other content. This should only be used for important information (like alerts, warnings, or errors), as it can interrupt the user's flow in ways that are very disorienting. In short: _always be polite!_
