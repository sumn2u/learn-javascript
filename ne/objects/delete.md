# Delete (डिलिट)

A `delete` property can be used to **remove a property** from an object. When a property is deleted, it is removed from the object and cannot be accessed or enumerated (i.e., it does not show up in a for-in loop).

'डिलिट(मेट्नुहोस्)' गुण वस्तुबाट **गुण** हटाउन प्रयोग गर्न सकिन्छ। जब कुनै गुण मेटिन्छ, यसलाई वस्तुबाट हटाइन्छ र पहुँच गर्न वा गणना गर्न सकिँदैन (जस्तै, यो फोर-इन लूपमा देखा पर्दैन)।

Here's the syntax for using `delete`:

यहाँ 'मेट्नुहोस्' प्रयोग गर्नका लागि वाक्यरचना छ:

```javascript
delete object.property;
```

For example:

उदाहरणको लागी:

```javascript
let adult = { age: 26 },
  child = Object.create(adult);
  
child.age = 8;

delete child.age;

/* Remove age property from child, revealing the age of the prototype, because then it is not overriden. */

let prototypeAge = child.age;
// 26, because child does not have its own age property.
```

{% hint style="warning" %}


The `delete` operator only works on own properties of an object, and not on inherited properties. It also does not work on properties that have the `configurable` attribute set to `false`.

'मेट्नुहोस्' अपरेटरले वस्तुको आफ्नै गुणहरूमा मात्र काम गर्दछ, र वंशानुगत गुणहरूमा होइन। यसले 'कन्फिगरेसन योग्य' विशेषता 'गलत' मा सेट गरिएको गुणहरूमा पनि काम गर्दैन।

{% endhint %}

The `delete` operator does not modify the object's prototype chain. It simply removes the specified property from the object and also it does not actually destroy the object or its properties. It simply makes the properties inaccessible. If you need to destroy an object and release its memory, you can set the object to `null` or use a garbage collector to reclaim the memory.

'मेट्नुहोस्' अपरेटरले वस्तुको प्रोटोटाइप श्रृंखला परिमार्जन गर्दैन। यसले केवल वस्तुबाट निर्दिष्ट गुण हटाउँदछ र यसले वास्तवमा वस्तु वा यसको गुणहरू नष्ट गर्दैन। यसले केवल गुणहरू पहुँच योग्य बनाउँदछ। यदि तपाईंलाई कुनै वस्तुलाई नष्ट गर्न र यसको मेमोरी छोड्न आवश्यक छ भने, तपाईं वस्तुलाई 'शून्य' मा सेट गर्न सक्नुहुन्छ वा मेमोरी पुनः प्राप्त गर्न फोहोर संकलक प्रयोग गर्न सक्नुहुन्छ।
