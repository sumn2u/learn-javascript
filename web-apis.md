# Web APIs

## Introduction to Web APIs

Web APIs are interfaces provided by the browser that allow you to interact with the browser and the underlying operating system.

## DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

### Example Code: Changing the Content of an Element

```document.getElementById("demo").innerHTML = "Hello, World!";```

##Fetch API 

The Fetch API provides an interface for fetching resources (including across the network).

###Example Code: Simple Fetch Request

```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:'));```

##Geolocation API

The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

###Example Code: Getting User Location

```if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}```

##Canvas API

The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element.

###Example Code: Drawing Shapes on Canvas

```var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// Draw a rectangle
context.fillStyle = '#FF0000';
context.fillRect(10, 10, 150, 100);```

##Storage API

The Web Storage API provides mechanisms by which browsers can store key-value pairs, in a much more intuitive fashion than using cookies.

###Example Code: Storing Data in localStorage

####Local stoage
```// Save data to local storage
localStorage.setItem('key', 'value');

// Retrieve data from local storage
let value = localStorage.getItem('key');
console.log(value);```

####Session Storage

```// Save data to session storage
sessionStorage.setItem('key', 'value');

// Retrieve data from session storage
let value = sessionStorage.getItem('key');
console.log(value);```

##Notification API

The Notification API allows web pages to control the display of system notifications to the end user.

###Example Code: Displaying a Notification

```if (Notification.permission === "granted") {
  new Notification("Hello, World!");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Hello, World!");
    }
  });
}```
