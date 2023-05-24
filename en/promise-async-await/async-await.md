---
chapter: 18
pageNumber: 90
---
# Async/Await

With promises, one can use a `async` keyword to declare an asynchronous function that returns a promise whereas the `await`  syntax makes JavaScript wait until that promise settles and returns its value. These keywords make promises easier to write.  An example of async is shown below.

```javascript
//async function f
async function f() {
  return 1;
}
// promise being resolved
f().then(alert); // 1
```

The above example can be written as follows:

```javascript
function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

`async` ensures that the function returns a promise, and wraps non-promises in it. With `await`, we can make JavaScript wait until the promise is settled with its value returned.&#x20;

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Welcome to Learn JavaScript!"), 1000)
  });
  
  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "Welcome to Learn JavaScript!"
}

f();
```

{% hint style="warning" %}
The `await` keyword can only be used inside an `async` function.
{% endhint %}
