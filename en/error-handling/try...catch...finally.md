---
chapter: 12
pageNumber: 69
---
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

{% exercise %}
Write a function `divideNumbers()` that takes two arguments numerator and denominator and returns the result of dividing numerator by denominator using following settings.

{% initial %}
function divideNumbers(numerator, denominator) {
    try {
      // try statement to divide numerator by denominator.
    } catch (error) {
      // print error message
    } finally {
      // print execution has finished
    }
   // return result
  }
  let answer = divideNumbers(10, 2);

{% solution %}
function divideNumbers(numerator, denominator) {
  let result;
    try {
      result = numerator / denominator;
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      console.log('Function finished executing');
    }
    return result;
  }
let answer = divideNumbers(10, 2);
{% validation %}
assert(answer == 5);

{% context %}
{% endexercise %}
