---
layout: editorial
chapter: 17
pageNumber: 86
---

# Chapter 17
# Events

In programming, _events_ are actions or occurrences in a system that the system informs you about so you can respond to them. For example, when you click the reset button it clears the input.

Interactions from the keyboard such as keypresses need to be constantly read to catch the key’s state before it’s released again.  Performing other time-intensive computations might cause you to miss a key press. This used to be the input handling mechanism of some primitive machines. A further step up is to use a queue, i.e. a program that periodically checks the queue for new events and reacts to it. This approach is called _polling_.

The main drawback of this approach is that it has to look at the queue every now and then, causing disruption when an event is triggered. The better mechanism for this is to notify the code when an event occurs.  This is what modern browsers do by allowing us to register functions as _handlers_ for specific events.

```javascript
<p>Click me to activate the handler.</p>
<script>
  window.addEventListener("click", () => {
    console.log("clicked");
  });
</script>
```

Here, the `addEventListener` is called on the `window` object (built-in object provided by the browser) to register a handler for the whole `window`. Calling its `addEventListener` method registers the second argument to be called whenever the event described by its first argument occurs.

{% hint style="info" %}
Event listeners are called only when the event happens in the context of the object they are registered on.
{% endhint %}

Some of the common HTML events are mentioned here.

| Event         | Description                                               |
| ------------- | --------------------------------------------------------- |
| `onchange`    | When the user changes or modifies the value of form input |
| `onclick`     | When the user clicks on the element                       |
| `onmouseover` | When cursor of the mouse comes over the element           |
| `onmouseout`  | When cursor of the mouse comes leaves the element         |
| `onkeydown`   | When the user press and then releases the key             |
| `onload`      | When the browser has finished the loading                 |

It is common for handlers registered on nodes with children to also receive events from the children. For example, if a button inside a paragraph is clicked, handlers registered on the paragraph will also receive the click event. In case of the presence of handlers in both, the one at the bottom gets to go first. The event is said to _propagate_ outward, from the initiating node to its parent node and on the root of the document.

The event handler can call the `stopPropagation` method on the event object to prevent handlers further up from receiving the event. This is useful in cases like, you have a button inside a clickable element and you don’t want to trigger the outer element's clickable behavior from a button click.

```javascript
<p>A paragraph with a <button>button</button>.</p>
<script>
  let para = document.querySelector("p"),
      button = document.querySelector("button");
  para.addEventListener("mousedown", () => {
    console.log("Paragraph handler.");
  });
  button.addEventListener("mousedown", event => {
    console.log("Button handler.");
    event.stopPropagation();
  });
</script> 
```

Here, the _`mousedown`_ handlers are registered by both paragraph and button. Upon clicking the button, the handler for the button calls `stopPropagation`, which will prevent the handler on the paragraph from running.

Events can have a default behavior. For example, links navigate to the link’s target upon click, you get navigated to the bottom of a page upon clicking the down arrow, and so on. These default behaviors can be prevented by calling a `preventDefault` method on the event object.

```javascript
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  let link = document.querySelector("a");
  link.addEventListener("click", event => {
    console.log("Nope.");
    event.preventDefault();
  });
</script>
```

Here, the default behavior of the link upon click is prevented, i.e. navigating towards the link's target.

