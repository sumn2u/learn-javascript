---
chapter: 6
pageNumber: 38  
---
# Map

The `Array.prototype.map()` method iterates over an array and modifies its elements using a callback function. The callback function will then be applied to each element of the array.

Here's the syntax for using `map`.

```javascript
let newArray = oldArray.map(function(element, index, array) {
  // element: current element being processed in the array
  // index: index of the current element being processed in the array
  // array: the array map was called upon
  // Return element to be added to newArray
});
```

For example, let's say you have an array of numbers and you want to create a new array that doubles the values of the numbers in the original array. You could do this using `map` like this.

```javascript
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// Result: [4, 8, 12, 16]
```

You can also use the arrow function syntax to define the function passed to `map`.

<pre class="language-typescript"><code class="lang-typescript"><strong>let doubledNumbers = numbers.map((number) => {
</strong>  return number * 2;
});
</code></pre>

or

```typescript
let doubledNumbers = numbers.map(number => number * 2);
```

{% hint style="info" %}
The `map()` method doesn't execute function for empty elements and doesn't change the original array.
{% endhint %}
