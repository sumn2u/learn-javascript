---
chapter: अध्याय ६
pageNumber: ४८
titleIndex: ६.९
---
# प्रत्येकको लागि

`फोरएच` विधिले प्रत्येक सरणी तत्वका लागि एक पटक प्रदान गरिएको प्रकार्य कार्यान्वयन गर्दछ । यहाँ 'फोरएच' प्रयोग गर्नका लागि वाक्यरचना छ।

```javascript
array.forEach(function(element, index, array) {
  // element: current element being processed in the array
  // index: index of the current element being processed in the array
  // array: the array forEach was called upon
});
```

उदाहरणका लागि, मानौँ कि तपाईंसँग संख्याहरूको सरणी छ र तपाईं कन्सोलमा प्रत्येक नम्बरको डबल मुद्रण गर्न चाहनुहुन्छ। तपाईं 'फोरएच' प्रयोग गरेर यो गर्न सक्नुहुनेछ:

```typescript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number * 2);
});
```

तपाईँले `फोरएच` मा पास गरिएको प्रकार्य परिभाषित गर्न बाण प्रकार्य वाक्यरचना पनि प्रयोग गर्न सक्नुहुन्छ ।

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

`फोरएच` ले मूल एर्रे परिमार्जन गर्दैन । यो केवल एर्रेको तत्वहरूमा पुनरावृत्ति गर्दछ र प्रत्येक तत्वको लागि प्रदान गरिएको प्रकार्य कार्यान्वयन गर्दछ।

{% hint style="warning" %}

खाली कथनका लागि `forEach()` विधि कार्यान्वयन गरिएको छैन ।
{% endhint %}
