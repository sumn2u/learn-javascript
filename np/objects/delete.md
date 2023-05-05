# Delete

A `delete` property can be used to **remove a property** from an object. When a property is deleted, it is removed from the object and cannot be accessed or enumerated (i.e., it does not show up in a for-in loop).

A `मेटाउने सम्पत्तीहरू ** एक वस्तुबाट एक सम्पत्ती ** एक वस्तु हटाउनुहोस्। जब एक सम्पत्ती हटाइएको छ, यो वस्तुबाट हटाइन्छ र पहुँच गर्न वा गणना गर्न सकिदैन (I.E., यसले-इन लूपमा देखा पर्दैन)।

Here's the syntax for using `delete`:

यहाँ anterax k `मेट्न को लागी kntax छ:

```javascript
delete object.property;
```

For example:

उदाहरण को लागी:

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

`मेट्नुहोस्" डिग्री अपरेटरले केवल एक वस्तुको आफ्नै सम्पत्तीमा काम गर्दछ, र विररित गुणहरूमा होइन। यो गुणमा पनि काम गर्दैन जुन `कन्फिगरेसनीय 'विशेषता` गलत "सेट गर्दछ।
{% endhint %}

The `delete` operator does not modify the object's prototype chain. It simply removes the specified property from the object and also it does not actually destroy the object or its properties. It simply makes the properties inaccessible. If you need to destroy an object and release its memory, you can set the object to `null` or use a garbage collector to reclaim the memory.

`मेट्नुहोस्" डिग्री अपरेटरले वस्तुको प्रोटोटाइप चेन परिमार्जन गर्दैन। यसले केवल वस्तुबाट निर्दिष्ट सम्पत्तिलाई हटाउँछ र यसले वास्तवमा वस्तु वा यसको गुणहरू नष्ट गर्दैन। यसले केवल गुणहरू पहुँचयोग्य बनाउँदछ। यदि तपाईंले वस्तुलाई नष्ट गर्न र यसको मेमोरी जारी गर्नु आवश्यक छ भने, तपाईं वस्तुलाई मेमोरी पुन: दाँया फिर्ता गर्न वा फोहोर कलेक्टर प्रयोग गर्न सक्नुहुनेछ।
