# Map

The `map` method iterates over an array and modifies its elements using a callback function. The callback function will then be applied to each element of the array.

```javascript
const numbers = [2, 4, 6, 8];

const numbersTimesTwo = numbers.map(number => number * 2);

console.log(numbersTimesTwo);

// Result: [4, 8, 12, 16]
```

Here, the `map` method returns a new array with the results and preserves the old one. To assign this, a new variable is used.

{% hint style="info" %}
The `map()` method doesn't execute function for empty elements and doesn't change the original array.
{% endhint %}
