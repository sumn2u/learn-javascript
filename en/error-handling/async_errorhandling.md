---
chapter: 12
pageNumber: 87
description: Handling asynchronous errors is a bit more complex than synchronous errors. The issue is that the code that generates the error is not directly responsible for handling the error. Instead, the error will be handled by the callback function that is executed when the asynchronous operation is complete.
---

# Asynchronous Error Handling

Handling asynchronous errors is a bit more complex than synchronous errors. The issue is that the code that generates the error is not directly responsible for handling the error. Instead, the error will be handled by the callback function that is executed when the asynchronous operation is complete.

The example below shows how you can handle asynchronous errors:
## Examples

A common example is when using the `fetch` API to download some data from a server. The `fetch` API returns a promise that resolves with the server response. If the server returns an error, the promise will reject with the error.

#### Using `try...catch` with `async/await`

Using `async/await` makes asynchronous code look and behave more like synchronous code, which can make it easier to read and understand. Here's how you can handle errors using `try...catch`:

```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
```


#### Handling errors with `.catch()` in Promises
When using Promises directly, you can handle errors using the `.catch()` method:

```javascript

fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

```


### Best Practices

Always Handle Errors: Ensure that every asynchronous operation has error handling.


```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
```


Use `try...catch` with `async/await:` This makes the code more readable and easier to maintain.

```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
```


#### Graceful Degradation: Provide fallback behavior or user-friendly error messages.

```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { fallbackData: true }; // Fallback behavior
    }
}
```


#### Logging: Log errors for debugging and monitoring purposes.

```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Log error to monitoring service
        logErrorToService(error);
    }
}

function logErrorToService(error) {
    // Implementation for logging error to a monitoring service
}
```


#### Avoid Silent Failures: Ensure that errors are not swallowed silently; always log or handle them.


```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
```



#### Centralized Error Handling: Consider using a centralized error handling mechanism for larger applications.


```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    console.error('Error:', error);
    // Centralized error handling logic
}
```


Proper error handling in asynchronous operations is crucial for building resilient JavaScript applications. By following the examples and best practices outlined in this guide, you can ensure that your code gracefully handles errors, provides meaningful feedback to users, and maintains overall application stability. Always remember to handle errors in every asynchronous operation, use try...catch with async/await for readability, and implement centralized error handling for larger applications. With these strategies, you can effectively manage asynchronous errors and create more reliable and user-friendly applications.


