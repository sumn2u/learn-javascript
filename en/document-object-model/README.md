---
layout: editorial
chapter: 28
pageNumber: 263
description: The Document Object Model (DOM) is a programming interface that represents the structure of a web document, such as HTML or XML, as a tree of objects. This hierarchical tree allows developers to access and manipulate elements, attributes, and content within the webpage using JavaScript. Each part of the document, including elements like headers, paragraphs, and links, is represented as a node in the DOM tree. 
---

# Document Object Model (DOM) {#dom}

The primary purpose of using JavaScript in a web page is to make that page **interactive**: the JavaScript language is used to program logical decisions that will effect what is shown on the page. It does this primarily by _changing the HTML rendered by the browser_. For example, JavaScript can be used to change the text inside a `<p>`, add addition `<li>` elements to a list, or to give a `<div>` a new CSS `class` attribute. 

The programmatic representation of the HTML elements currently being shown by the browser is known as the **Document Object Model (DOM)**. In web programming JavaScript code is used to modify the DOM (HTML elements currently being shown by the browser) in response to user input, thereby making the page interactive. This chapter introduces the Document Object Model and how to use JavaScript to manipulate it through user-driven interaction.

In this chapter, we will explore following topics:
* [DOM API](./dom-api.md)
* [DOM Manipulation](./dom-manipulation.md)
* [Listening of events](./listening-of-events.md)