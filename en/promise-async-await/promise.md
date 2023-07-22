---
chapter: 18
pageNumber: 89
description: Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more structured and organized way to handle asynchronous operations, such as making network requests, reading files, or interacting with databases.
---

# Chapter 18
# Promise, async/await

Imagine you are a popular book writer, and you are planning to release a new book on a certain day. Readers who have an interest in this book are adding this book to their wishlist and are notified when published or even if the release day got postponed too. On the release day, everyone gets notified and can buy the book making all parties happy. This is a real-life analogy that happens in programming.

1. A "_producing code_" is something that takes time and accomplishes something. Here it's a book writer.
2. A "_consuming code_" is someone who consumes the "producing code" once it's ready. In this case, it's a "reader".
3. The linkage between the "_producing code_" and the "_consuming code_" can be called a _promise_ as it assures getting the results from the "_producing code_" to the "_consuming code_".

# Promise

The analogy that we made is also true for the JavaScript `promise` object. The constructor syntax for the `promise` object is:

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "writer")
});
```

Here, a function is passed to `new Promise` also known as the _executor_, and runs automatically upon creation. It contains the producing code that gives the result. `resolve` and `rejects` are the arguments provided by the JavaScript itself and are called one of these upon results.

* `resolve(value):` a callback function that returns `value` upon result
* `reject(error)`: a callback function that returns `error` upon error, it returns an error object

![Promise with resolve and reject callbacks](../../.gitbook/assets/async_await.png)

The internal properties of `promise` object returned by the `new Promise` constructor are as follows:

* `state` - initially `pending,` then changes to either `fulfill` upon resolve or `rejected` when `reject` is called
* result - initially `undefined`, then changes to `value` upon `resolve` or `error` when `reject` is called

{% hint style="warning" %}
One cannot access promise properties: `state` and `result`. Promise methods are needed to handle promises.
{% endhint %}

Example of a promise.

```javascript
let promiseOne = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1-second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
})

let promiseTwo = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1-second signal that the job is done with the result "error"
  setTimeout(() => reject(new Error("Whoops!")), 1000);
})
```

Here, the `promiseOne` is an example of a "_fulfilled promise_" as it successfully resolves the values, whereas the `promiseTwo` is a "_rejected promise_" as it gets rejected. A promise that is either rejected or resolved is called a _settled_ promise, as opposed to an initially _pending_ promise. Consuming function from the promise can be registered using the `.then` and `.catch` methods. We can also add `.finally` method for performing cleanup or finalizing after previous methods have been completed.

```javascript
let promiseOne = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promiseOne.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

let promiseTwo = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promiseTwo.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);

let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promiseThree.catch(alert); // shows "Error: Whoops!" after 1 second
```

{% hint style="warning" %}
In the `Promise.then()` method, both callback arguments are optional.
{% endhint %}
