# Map

The `Array.prototype.map()` method iterates over an array and modifies its elements using a callback function. The callback function will then be applied to each element of the array.

`एर्रे .प्रोटोतिटायपिप। Mage` विधि एक एरेमा पुनरावृत्ति गर्दछ र यसको तत्वहरूलाई कलब्याक कार्य प्रयोग गरेर परिमार्जन गर्दछ। कलब्याक प्रकार्य त्यसपछि एर्रेको प्रत्येक तत्वमा लागू हुनेछ।

Here's the syntax for using `map`:

यहाँ anterax k` नक्शा प्रयोगको लागि छ:

```javascript
let newArray = oldArray.map(function(element, index, array) {
  // element: current element being processed in the array
  // index: index of the current element being processed in the array
  // array: the array map was called upon
  // Return element to be added to newArray
});
```

For example, let's say you have an array of numbers and you want to create a new array that doubles the values of the numbers in the original array. You could do this using `map` like this:

उदाहरणका लागि, मानौं कि तपाईसँग नम्बरहरूको एर्रे छ र तपाइँ नयाँ एर्रे सिर्जना गर्न चाहानुहुन्छ जुन मूल एर्रेको मानहरूको मान डबल्स गर्दछ। तपाईं यसलाई जस्तै `नक्शाको जस्तै प्रयोग गर्न सक्नुहुन्छ:

```javascript
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// Result: [4, 8, 12, 16]
```

You can also use the arrow function syntax to define the function passed to `map`:

तपाईं एर्रो प्रकार्य सिन्ट्याक्स पनि प्रयोग गर्न सक्नुहुनेछ प्रकार्य परिभाषित गर्न `नक्शाको लागि:

<pre class="language-typescript"><code class="lang-typescript"><strong>let doubledNumbers = numbers.map((number) => {

<पूर्व वर्ग = "भाषा-टाइपस्क्रिप्ट"> <कोड क्लास = "ले ang-प्रकार"> Dotherdumbumers = संख्या (संख्या) =>
</strong>  return number * 2;

</ hely> रिटर्न नम्बर * 2;});
</code></pre>

or

अथवा

```typescript
let doubledNumbers = numbers.map(number => number * 2);
```

{% hint style="info" %}


The `map()` method doesn't execute function for empty elements and doesn't change the original array.

`नक्शा ()` विधि खाली तत्वहरूको लागि कार्यान्वयन गर्दैन र मूल एर्रे परिवर्तन हुँदैन।
{% endhint %}
