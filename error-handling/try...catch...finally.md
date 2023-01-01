# try...catch...finally

We can add one more construct to `try...catch` called `finally`, this code executes in all cases. i.e. after `try` when there is no error and after a `catch` in case of error. The syntax for `try ...catch...finally` is shown below.

```javascript
try {
   // try to execute the code
} catch (err) {
    // handle errors 
} finally {
   // execute always
}
```

Running real-world example code.

```javascript
try {
  alert( 'try' );
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
```

In the above example, the `try` block is executed first which is then followed by `finally` as there are no errors.
