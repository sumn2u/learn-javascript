# Prototype (प्रोटोटाइप)

Every object is linked to a prototype object from which it inherits properties.

प्रत्येक वस्तु एक प्रोटोटाइप वस्तुसँग जोडिएको छ जसबाट यसले गुणहरू प्राप्त गर्दछ।

All objects created from object literals (`{}`) are automatically linked to `Object.prototype`, which is an object that comes standard with JavaScript.

वस्तु शाब्दिक (`{}`) बाट सिर्जना गरिएका सबै वस्तुहरू स्वचालित रूपमा `Object.prototype` सँग लिङ्क हुन्छन्, जुन जाभास्क्रिप्टको साथ मानक आउने वस्तु हो।

When a JavaScript interpreter (a module in your browser) tries to find a property, which You want to retrieve, like in the following code:

जब जाभास्क्रिप्ट दुभाषिया (तपाईंको ब्राउजरमा एक मोड्युल) ले एउटा गुण फेला पार्ने प्रयास गर्दछ, जुन तपाईं पुन: प्राप्त गर्न चाहनुहुन्छ, जस्तै निम्न कोडमा:

```javascript
let adult = { age: 26 },
  retrievedProperty = adult.age;
// The line above
```

First, the interpreter looks through every property the object itself has. For example, `adult` has only one own property — `age`. But besides that one, it actually has a few more properties, which were inherited from `Object.prototype.`

पहिलो, दुभाषियाले वस्तुसँग भएका हरेक सम्पत्तिलाई हेर्छ। उदाहरणका लागि, `adult` को आफ्नै सम्पत्ति छ- `age`। तर त्यो बाहेक, यसमा वास्तवमा केहि अन्य गुणहरू छन्, जुन `Object.prototype` बाट विरासतमा प्राप्त भएको थियो।

```javascript
let stringRepresentation = adult.toString();
// the variable has value of '[object Object]'
```

`toString` is an Object.prototype's property, which was inherited. It has a value of a function, which returns a string representation of the object. If you want it to return a more meaningful representation, then you can override it. Simply add a new property to the adult object.

`toString` एक `Object.prototype's` प्रोपर्टी हो, जुन विरासतमा प्राप्त भएको थियो। यसमा प्रकार्यको मान छ, जसले वस्तुको स्ट्रिङ प्रतिनिधित्व फर्काउँछ। यदि तपाईं यसलाई अझ अर्थपूर्ण प्रतिनिधित्व फिर्ता गर्न चाहनुहुन्छ भने, तपाईं यसलाई ओभरराइड गर्न सक्नुहुन्छ। बस वयस्क वस्तुमा नयाँ गुण थप्नुहोस्।

```javascript
adult.toString = function () {
  return "I'm " + this.age;
};
```

If you call the `toString` function now, the interpreter will find the new property in the object itself and stop.

यदि तपाईंले अहिले `toString` प्रकार्यलाई कल गर्नुभयो भने, दुभाषियाले वस्तुमा नै नयाँ गुण फेला पार्नेछ र रोक्नेछ।

Thus the interpreter retrieves the first property it will find on the way from the object itself and further through its prototype.

यसैले दुभाषियाले पहिलो सम्पत्ति पुन: प्राप्त गर्दछ जुन यसले वस्तुबाट नै बाटोमा फेला पार्नेछ र यसको प्रोटोटाइपमार्फत थप।

To set your own object as a prototype instead of the default Object.prototype, you can invoke `Object.create` as follows:

पूर्वनिर्धारित वस्तु.प्रोटोटाइपको सट्टाप्रोटोटाइपको रूपमा तपाईँको आफ्नै वस्तु सेट गर्न, तपाईँले निम्नानुसार `Object.create` आह्वान गर्न सक्नुहुन्छ:

```javascript
let child = Object.create(adult);
/* This way of creating objects lets us easily replace the default Object.prototype with the one we want. In this case, the child's prototype is the adult object. */
child.age = 8;
/* Previously, child didn't have its own age property, and the interpreter had to look further to the child's prototype to find it.
 Now, when we set the child's own age, the interpreter will not go further.
 Note: adult's age is still 26. */
let stringRepresentation = child.toString();
// The value is "I'm 8".
/* Note: we have not overridden the child's toString property, thus the adult's method will be invoked. If adult did not have toString property, then Object.prototype's toString method would be invoked, and we would get "[object Object]" instead of "I'm 8" */
```

`child`'s prototype is `adult`, whose prototype is `Object.prototype`. This sequence of prototypes is called a  **prototype chain**.

'बच्चाको' प्रोटोटाइप 'वयस्क' हो, जसको प्रोटोटाइप 'वस्तु.प्रोटोटाइप' हो। प्रोटोटाइपको यस अनुक्रमलाई **प्रोटोटाइप चेन** भनिन्छ।
