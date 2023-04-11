# Cookies

Cookies are pieces of information that are store on a computer and can be accessed by the browser.

Communication between a web browser and the server is stateless meaning that it treats each request independently. There are cases where we need to store user information and make that information available to the browser. With cookies, information can be fetched from the computer whenever it is required.

Cookies are saved in name-value pair
```javascript
book = Learn Javascript
```

`document.cookie` property is used to create, read and delete cookies.Creating cookie is pretty easy you need to provide the name and value 

```javascript
document.cookie = "book=Learn Javacript";
```
By default,  a cookie gets deleted when the browser is closed. To make it persistent, we need to specify the expiry date(in UTC time).

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC";
```

We can add a parameter to tell which path the cookie belongs to. By default, the cookie belongs to the current page.

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
```

Here is a simple example of a cookie.

```javascript
var cookies = document.cookie;
// a simple way to reterive all cookie.

document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
// setting up a cookie
```