---
chapter: 16
pageNumber: 102
description:  The navigator is a built-in object that provides information about the user's web browser and the user's system. It contains various properties and methods that give access to information about the user's environment, such as the browser's name, version, user agent, language preferences, and more.
---
# Navigator

The `window.navigator`  or `navigator`   is a **read-only** property and contains different methods and functions related to the browser.&#x20;

Let's look at a  few examples of navigation.

1.  **navigator.appName**: It gives the name of the browser application

    ```javascript
    navigator.appName; 
    // "Netscape"
    ```

    > _**Note:**_ "Netscape" is the application name for IE11, Chrome, Firefox, and Safari.
2.  **navigator.cookieEnabled**: Returns a boolean value based on the cookie value in the browser.

    ```javascript
    navigator.cookieEnabled;
    //true
    ```
3.  **navigator.platform**: Provides information about the browser operating system.

    ```javascript
    navigator.platform;
    "MacIntel"
    ```



