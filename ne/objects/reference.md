---
chapter: अध्याय ९
pageNumber: ६१
titleIndex: ९.३
---
# सन्दर्भ

वस्तुहरू प्रतिलिपि गर्न सकिँदैन । तिनीहरू सन्दर्भ द्वारा वरिपरि पारित छन्। वस्तु सन्दर्भ एउटा मान हो जसले वस्तुलाई बुझाउँछ। जब तपाईं `new` अपरेटर वा वस्तु शाब्दिक वाक्यरचना प्रयोग गरेर वस्तु सिर्जना गर्नुहुन्छ, जाभास्क्रिप्टले वस्तु सिर्जना गर्दछ र यसलाई सन्दर्भ प्रदान गर्दछ।

वस्तुको शाब्दिक वाक्यविन्यास प्रयोग गरेर वस्तु सिर्जना गर्ने उदाहरण यहाँ छ:

```css
var object = {
  foo: 'bar'
};
```

यहाँ `new` अपरेटर प्रयोग गरेर वस्तु सिर्जना गर्ने उदाहरण छ:

```typescript
var object = new Object();
object.foo = 'bar';
```

जब तपाईँले एउटा चललाई वस्तु सन्दर्भ निर्दिष्ट गर्नुहुन्छ, चरले वस्तुको सन्दर्भ मात्र राख्छ, वस्तुलाई होइन। यसको अर्थ यो हो कि यदि तपाईँले वस्तु सन्दर्भलाई अर्को चरमा निर्दिष्ट गर्नुभयो भने, दुवै चलहरूले एउटै वस्तुलाई इंगित गर्नेछन्।

उदाहरणको लागी:

```javascript
var object1 = {
  foo: 'bar'
};

var object2 = object1;

console.log(object1 === object2); // Output: true
```

माथिको उदाहरणमा, `object1` र `object2` दुवै चरहरू हुन् जसले एउटै वस्तुको सन्दर्भ राख्छन्। `===` अपरेटर सन्दर्भहरू तुलना गर्न प्रयोग गरिन्छ, वस्तुहरू आफैलाई होइन, र यसले `सत्य` फर्काउँछ किनकि दुवै चरहरूले एउटै वस्तुमा सन्दर्भहरू राख्छन्।

{% hint style="info" %}

तपाईँले अवस्थित वस्तुको प्रतिलिपि भएको नयाँ वस्तु सिर्जना गर्न `Object.assign()` विधि प्रयोग गर्न सक्नुहुन्छ ।

{% endhint %}

सन्दर्भद्वारा वस्तुको उदाहरण तल दिइएको छ ।

```javascript
// Imagine I had a pizza
let myPizza = { slices: 5 };
// And I shared it with You
let yourPizza = myPizza;
// I eat another slice
myPizza.slices = myPizza.slices - 1;
let numberOfSlicesLeft = yourPizza.slices;
// Now We have 4 slices because myPizza and yourPizza
// reference to the same pizza object.
let a = {},
  b = {},
  c = {};
// a, b, and c each refer to a
// different empty object
a = b = c = {};
// a, b, and c all refer to
// the same empty object
```
