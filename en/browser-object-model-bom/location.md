---
chapter: 16
pageNumber: 105
description: The location is a built-in object that represents the current URL of the web page being displayed in the browser. It provides current web page's location and allows to perform various operations related to URLs.
---
# Location

The `location` object is used to retrieve the current location (URL) of the document and provides different methods to manipulate document location. One can access the current location by

```javascript
window.location
//or
document.location
//or
location
```

> _**Note**_: `window.location` and `document.location` references the same location object.

Let's take an example of the following URL and explore the different properties of `location`

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing\&page=2#title)

```javascript
location.href //prints current document URL
location.protocol //prints protocol like http: or https:
location.host //prints hostname with port like localhost or localhost:3000
location.hostname //prints hostname like localhost or www.example.com
location.port //prints port number like 3000
location.pathname //prints pathname like /js/index.html
location.search //prints query string like ?type=listing&page=2
location.hash //prints fragment identifier like #title
```
