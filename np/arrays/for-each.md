# For Each

The `forEach` method executes a provided function once for each array element. Here's the syntax for using `forEach`:

`पूर्वनिर्देशन विधि प्रत्येक एर्रे तत्वको लागि एक प्रदान सम्पादन कार्यान्वयन गर्दछ। यहाँ sy fore `sy`` पूर्वानुमान `पूर्वको प्रयोगको लागि छ:

```javascript
array.forEach(function(element, index, array) {
  // element: current element being processed in the array
  // index: index of the current element being processed in the array
  // array: the array forEach was called upon
});
```

\
For example, let's say you have an array of numbers and you want to print the double of each number to the console. You could do this using `forEach` like this:

उदाहरण को लागी, भन्नुहोस् कि तपाइँसँग नम्बरहरूको एर्रे छ र तपाईं कन्सोलमा प्रत्येक नम्बरको डबल प्रिन्ट गर्न चाहानुहुन्छ। तपाईं यसलाई जस्तै `पूर्वको प्रयोग गरेर यो गर्न सक्नुहुन्छ:

```typescript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number * 2);
});
```

You can also use the arrow function syntax to define the function passed to `forEach`:

तपाईं एर्रो प्रकार्य ऑनन्ट्याक्स पनि प्रयोग गर्न सक्नुहुनेछ

```typescript
numbers.forEach((number) => {
  console.log(number * 2);
});
```

or

अथवा

```typescript
numbers.forEach(number => console.log(number * 2));
```

&#x20;`forEach` does not modify the original array. It simply iterates over the elements of the array and executes the provided function for each element.

& # X20; `अग्रिम" मूल एर्रे परिमार्जन गर्दैन। यो एर्रेका तत्वहरूमा मात्र पुनरावलोकन गर्दछ र प्रत्येक तत्वको लागि प्रदान गर्ने कार्य कार्यान्वयन गर्दछ।

{% hint style="warning" %}


The `forEach()` method is not executed for the empty statment.

`फोरच ()` विधि खाली कथनको लागि कार्यान्वयन गरिएको छैन।
{% endhint %}
