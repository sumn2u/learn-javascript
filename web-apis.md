# Web APIs

Web APIs are interfaces provided by the browser that allow you to interact with the browser and the underlying operating system.

Some common Web APIs include:

- **DOM API**: Allows for dynamic manipulation of HTML and CSS.
- **Fetch API**: Enables network requests to retrieve resources from servers.
- **Geolocation API**: Provides the user's location.
- **Canvas API**: Used for drawing graphics via JavaScript.
- **Storage API**: Allows for storing data on the client-side.

### Why Use Web APIs?

Web APIs are essential for modern web development because they:
- **Enable Rich User Experiences**: They allow developers to create interactive and dynamic web applications.
- **Provide Access to Browser Capabilities**: Web APIs offer access to features like geolocation, notifications, and local storage.
- **Facilitate Communication with Servers**: They make it easy to fetch data from servers, submit forms, and interact with web services.

### How Web APIs Work?

Web APIs work by providing a set of functions and properties that developers can use to interact with the browser. These functions are exposed by the browser and can be called using JavaScript. When a function is called, the browser performs the corresponding action, such as fetching data from a server or updating the DOM.

#### Example Workflow

1.User Action: The user interacts with the web application, such as clicking a button.

2.API Call: JavaScript code in the web application makes a call to a Web API.

3.Browser Action: The browser performs the requested action, such as retrieving data or updating the display.

4.Response Handling: The web application handles the response from the API and updates the user interface accordingly.


## DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

### Example Code: Changing the Content of an Element


```javascript
document.getElementById("demo").innerHTML = "Hello, World!";
```
		
## Fetch API 


The Fetch API provides an interface for fetching resources (including across the network).

### Example Code: Simple Fetch Request


```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:'));
```

## Geolocation API

The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

### Example Code: Getting User Location

```javascript
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
```
## Canvas API

The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element.

###Example Code: Drawing Shapes on Canvas

```javascript
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

// Draw a rectangle
context.fillStyle = '#FF0000';
context.fillRect(10, 10, 150, 100);
```

## Storage API

The Web Storage API provides mechanisms by which browsers can store key-value pairs, in a much more intuitive fashion than using cookies.

### Example Code: Storing Data in localStorage


#### Local stoage
```javascript
// Save data to local storage
localStorage.setItem('key', 'value');

// Retrieve data from local storage
let value = localStorage.getItem('key');
console.log(value);
```
#### Session Storage

```javascript
// Save data to session storage
sessionStorage.setItem('key', 'value');

// Retrieve data from session storage
let value = sessionStorage.getItem('key');
console.log(value);
```

## Notification API

The Notification API allows web pages to control the display of system notifications to the end user.

### Example Code: Displaying a Notification

```javascript

if (Notification.permission === "granted") {
  new Notification("Hello, World!");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Hello, World!");
    }
  });
}
```
