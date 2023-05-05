# Reference

# सन्दर्भ

Objects are **never copied**. They are passed around by reference. An object reference is a value that refers to an object. When you create an object using the `new` operator or object literal syntax, JavaScript creates an object and assigns a reference to it.

वस्तुहरू ** छैनन् * प्रतिलिपि गर्नुहोस् **। तिनीहरू सन्दर्भ द्वारा वरिपरि पारित हुन्छन्। एक वस्तु सन्दर्भ एक मान हो जुन वस्तुलाई जनाउँछ। जब तपाइँ एक वस्तु सिर्जना गर्नुहुन्छ `नयाँ" अपरेटर वा वस्तु शाब्दिक सिन्ट्याक्स प्रयोग गरेर जाभास्क्रिप्टले कुनै वस्तु सिर्जना गर्दछ र यसलाई सन्दर्भमा प्रदान गर्दछ।

Here's an example of creating an object using the object literal syntax:

यहाँ छवि शाब्दिक सिन्ट्याक्स प्रयोग गरेर वस्तु सिर्जना गर्ने एक उदाहरण छ:

```css
var object = {
  foo: 'bar'
};
```

Here's an example of creating an object using the `new` operator:

यहाँ 'नयाँ "अपरेटर प्रयोग गरेर वस्तु सिर्जना गर्ने एक उदाहरण छ:

```typescript
var object = new Object();
object.foo = 'bar';
```

When you assign an object reference to a variable, the variable simply holds a reference to the object, not the object itself. This means that if you assign the object reference to another variable, both variables will point to the same object.

जब तपाईं भ्यारीएबललाई एक वस्तु सन्दर्भ तोक्नुहुन्छ, भ्यारीएबलले वस्तुको सन्दर्भमा समावेश गर्दछ, वस्तु नै होईन। यसको मतलब यो हो कि यदि तपाईंले अर्को चरलाई वस्तु सन्दर्भ निर्दिष्ट गर्नुभयो भने, दुबै भेरिएबलले उही वस्तुलाई औंल्याउँछ।

For example:

उदाहरण को लागी:

```javascript
var object1 = {
  foo: 'bar'
};

var object2 = object1;

console.log(object1 === object2); // Output: true
```

In the example above, both `object1` and `object2` are variables that hold references to the same object. The `===` operator is used to compare the references, not the objects themselves, and it returns `true` because both variables hold references to the same object.

माथिको उदाहरणमा, दुबै `वस्तु 1 `````````` `वस्तु 2 ribles कि समान वस्तुहरूमा सन्दर्भहरू छन्। `===` `अपरेटर सन्दर्भहरू तुलना गर्न प्रयोग गरिन्छ, वस्तुहरू आफैं होइन, र यसले` साँचो "स्वीकार गर्दछ किनभने दुबै भेरिएबलले समान वस्तुमा सन्दर्भ गर्दछ।

{% hint style="info" %}


You can use the `Object.assign()` method to create a new object that is a copy of an existing object.&#x20;

तपाईं `वस्तु.SASEGENG ()` विधि प्रयोग गर्न सक्नुहुनेछ नयाँ वस्तु सिर्जना गर्न जुन अवस्थित वस्तुको प्रतिलिपि हो। & # X20;
{% endhint %}

Following is an example of an object by reference .

निम्न वस्तुको एक वस्तुको एक उदाहरण हो।

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
