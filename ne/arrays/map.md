# Map (म्याप)

The `Array.prototype.map()` method iterates over an array and modifies its elements using a callback function. The callback function will then be applied to each element of the array.

`Array.prototype.map()` विधिले एरेमा पुनरावृत्ति गर्दछ र कलब्याक प्रकार्य प्रयोग गरेर यसको तत्वहरू परिमार्जन गर्दछ। कलब्याक प्रकार्य त्यसपछि सरणीको प्रत्येक तत्वमा लागू हुनेछ।

Here's the syntax for using `map`:

यहाँ `म्याप` प्रयोग गर्नका लागि वाक्यरचना छ:

```javascript
let newArray = oldArray.map(function(element, index, array) {
  // element: current element being processed in the array
  // index: index of the current element being processed in the array
  // array: the array map was called upon
  // Return element to be added to newArray
});
```

For example, let's say you have an array of numbers and you want to create a new array that doubles the values of the numbers in the original array. You could do this using `map` like this:

उदाहरणका लागि, मानौँ कि तपाईंसँग संख्याहरूको सरणी छ र तपाईं नयाँ सरणी सिर्जना गर्न चाहनुहुन्छ जसले मूल सरणीमा संख्याहरूको मानहरू डबल गर्दछ। तपाईं यो `म्याप` प्रयोग गरेर यो गर्न सक्नुहुन्छ:

```javascript
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// Result: [4, 8, 12, 16]
```

You can also use the arrow function syntax to define the function passed to `map`:

तपाईँले `map()` मा पास गरिएको प्रकार्य परिभाषित गर्न बाण प्रकार्य वाक्यविन्यास पनि प्रयोग गर्न सक्नुहुन्छ ।

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

`map()` विधिले खाली तत्वहरूका लागि प्रकार्य कार्यान्वयन गर्दैन र मौलिक एरे परिवर्तन गर्दैन ।
{% endhint %}
