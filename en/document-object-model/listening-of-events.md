---
chapter: 28
description: Understanding Listening of events in JavaScript.
---

## Listening for Events

In order to make a page **interactive** (that is, able to change in response to user actions), you need to be able to respond to _user events_. Whenever a user interacts with a computer, the operating system announces that interaction as an **event**&mdash;the _event_ of a button being clicked, the _event_ of the mouse being moved, the _event_ of a keyboard key being pressed, etc. These events are **broadcast** to the entire system, allowing any application (including the browser) to "respond" the occurrence of the event, such as by executing a particular JavaScript function.

Thus in order to respond to user actions (and the _events_ those actions generate), we need to define a function that will be executed **when the event occurs**. You will define a function as normal, but the function will not get called by you as a particular step in your script. Instead, the function you specify will be executed _by the system_ when an event occurs, which will be at some indeterminate time in the future. This process is known as [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming). It is also an example of <a href="https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)">**asynchronous programming**</a>: in which statements are not executed in a single order one after another ("synchronously"), but may occur "out of order" or even at the same time! (For more about working with asynchronous programming, see [Chapter 14](#ajax)).

In order for your script to respond to user events, you need to _register an event listener_. This is a bit like following someone on social media: you specify that you want to "listen" for updates from that person, as well as what you want to do when you "hear" some news from that person.

- Specifying that you want Slack to notify you when your name is mentioned is another good analogy!

The DOM API allows you to register an event listener by call the **`.addEventListener()`** on a selected element (e.g., on the element that you want to listen to). This method takes two arguments: a string representing what kind of event you want to listen for, and a _callback function_ to execute when you hear that event:

```js
//a (named) callback function
function onClickCallback() {
  console.log("You clicked me!");
}

//get a reference to the element we want to "listen" to
let button = document.querySelector("button");

//register a listener for 'click' events
button.addEventListener("click", onClickCallback);
```

- When the button is clicked by the user, it will "shout" out a `'click'` event ("I was clicked! I was clicked!"). Because you have set up a listener (an alert/notification) for such an occurrence, your script will be able to do something&mdash;and that something that it will do is run the specified callback function.

  It's like you handed someone a recipe and told them "when I call you, bake this cake!"

- It is **much** more common to use an _anonymous function_ as the callback:

  ```js
  let button = document.querySelect.select("button");
  button.addEventListener("click", function () {
    console.log("You clicked me!");
  });
  ```

- Note that this listener _only_ applies to that particular button&mdash;if you wanted to respond to a different button, you'd need to register a separate listener! Also, as the method name implies, it is possible to add multiple listeners (callbacks) to the same element for the same event: all of them will be executed "at once".

The event callback will be passed in a single argument: an object representing the _"event"_ that occurred. (Since all parameters are optional in JavaScript, and it wasn't used in the above example, it wasn't included in the callback definition). This event includes information such as where the event occurred (in x,y coordinates), what DOM element caused the event, and more:

```js
elem.addEventListener("click", function (event) {
  //get who was clicked;
  let clickedElem = event.target; //target property of the event
  console.log(clickedElem);
});
```

Also note that sometimes you want to stop the "normal" results of an event from occurring. For example, perhaps you don't want a button to do it's normal button thing (such as submitting a form), and instead want to provide your own custom behavior. To support this, you can "interrupt the event" by calling the following methods on the event:

```js
submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); //don't do normal behavior
  event.stopPropagation(); //don't pass the event to parents

  //..do custom behavior here

  return false; //don't do normal behavior OR propagate! (for IE)
});
```

### Types of Events

There are [numerous different events](https://developer.mozilla.org/en-US/docs/Web/Events) that you can listen for, including:

- [Mouse Events](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) such as **`'click'`**. The `event.offsetX` and `event.offsetY` will provide (x,y) coordinates for the clicks location _relative to the target element_; you can use `clientX/Y` for coordinates relative to the browser window, or `pageX/Y` for coordinates relative to the document (regardless of scrolling). See [this post](http://www.quirksmode.org/mobile/viewports.html) for details, and [this page](http://www.quirksmode.org/m/tests/mouseprops.html) for an example.

  Other mouse events include `'dblclick'` (double-click), `'mousedown'` (mouse button is pressed down, may be held), `'hover'` (mouse hover), `'mouseenter'` (mouse moves over element), `'mousemove'` (mouse moves over element), and `'mouseleave'` (mouse moves of of element).

- [Keyboard Events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) such as **`'keydown'`**. The `event.key` property is used to determine _which key_ was pressed, giving a [predefined key value](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) you can check:

  ```js
  elem.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      console.log("Going up!");
    }
    //...
  });
  ```

  The `event` object also has properties to check if any "modifier keys" such as shift, control, or meta (Windows/command) are held when the event occurs.

  Note that you almost always want to respond to the `'keydown'` and `'keyup'` events; the `'keypressed'` event is sent later and only applies to non-modifier keys.

- [Window Events](https://developer.mozilla.org/en-US/docs/Web/API/Window#Event_handlers) are event created by the `window` global, which we are also able to register event listeners on! For example, the `'resize'` event can be used to identify when the window has changed size (e.g., if you want to make the content responsive as well as the CSS):

  ```js
  window.addEventListener("resize", function () {
    //...
  });
  ```

  (See [the documentation](https://developer.mozilla.org/en-US/docs/Web/Events/resize) for advise on using this callback)

  Additionally, the `window` global defines a special event callback that occurs when the web page has finished loading. You can assign your own function to this callback to run code only _after_ the webpage has loaded (e.g., for scripts specified in the `<head>`):

  ```js
  window.onload = function () {
    //...do stuff once page is ready (e.g., run the rest of your code)
  };
  ```

<p class="alert alert-warning">**Style guideline**: always register event listeners in the JavaScript&mdash;do _not_ utilize the HTML attributes such as `onclick`. This is to help keep concerns separated: the HTML should not need to know anything about the JavaScript that is utilized (since the browser may not even support JavaScript!), but it's okay for the JavaScript to rely on and modify the HTML.</p>

### Event-Driven Programming

In a typical web program event callback functions can occur repeatedly, over and over again (e.g., every time the user clicks a button). This makes them potentially act a bit like the body of a `while` loop. However, because these callbacks are _functions_, any variables defined within them are **scoped** to that function, and will not be available on subsequent executions. Thus if you want to keep track of some additional information (e.g., how many times the button was clicked), you will need to use a variable declared _outside_ of the function (e.g., a **global** ). Such variables can be used to represent the **state** (situation) of the program, which can then be used to determine what behavior to perform when an event occurs, following the below pattern:

```
//pseudocode
WHEN an event occurs {
   check the STATE of the program;
   DECIDE what to do based on that state;
   UPDATE the state as necessary for the next event;
}
```

For example:

```js
let clickCount = 0; //keep track of the "state" (global)
document.querySelector("button").addEventListener("click", function () {
  if (clickCount > 10) {
    //decide what to do
    console.log("I think you've had enough");
  } else {
    clickCount++; //change state (+1)
    console.log("You clicked me!");
  }
});
```

- These "state" variables can be global, or can simply be declared within a containing function as a closure. State variables are often objects, with individual values stored as the properties. This provides a name-spacing feature, and helps to keep the code from being cluttered with many variables.
