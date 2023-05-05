# Enumeration

# गणना

_Enumeration_ refers to the process of iterating over the properties of an object and performing a certain action for each property. There are several ways to enumerate the properties of an object in JavaScript.

_Enemarration_ एक वस्तुको गुणहरू सम्बोधन गर्न र प्रत्येक सम्पत्तीको लागि निश्चित कार्य प्रदर्शन गर्ने प्रक्रियालाई जनाउँछ। जाभास्क्रिप्टमा एक वस्तुको गुणहरूको गुणहरू गणना गर्ने धेरै तरिकाहरू छन्।

One way to enumerate the properties of an object is to use the `for-in` loop. The `for-in` loop iterates over the enumerable properties of an object in an arbitrary order, and for each property it executes a given block of code.

एक वस्तु को गुणहरु को गुणहरु गणना गर्न को लागी एक तरीका भनेको `को लागि-इन-इनको लागि प्रयोग गर्नु हो। ``-इन-इन-इनको लागि एक वस्तुको असमानजन्य गुणहरूमा मनमानी क्रममा एक वस्तुको असुरक्षित सम्पत्तिहरू, र प्रत्येक सम्पत्तीको लागि यसले कोडको दिईएको ब्लक कार्यान्वयन गर्दछ।

The `for in` statement can loop over all of the property names in an object. The enumeration will include functions and prototype properties.

`` को लागी एक वस्तु मा सबै सम्पत्ती नामहरु मा hops मा `` को लागी। इन्फ्युजनरीमा कार्य र प्रोटोटाइपे गुणहरू समावेश हुनेछ।

```javascript
let fruit = {
    apple: 2,
    orange: 5,
    pear: 1,
  },
  sentence = "I have ",
  quantity;
for (kind in fruit) {
  quantity = fruit[kind];
  sentence += quantity + " " + kind + (quantity === 1 ? "" : "s") + ", ";
}
// The following line removes the trailing comma.
sentence = sentence.substr(0, sentence.length - 2) + ".";
// I have 2 apples, 5 oranges, 1 pear.
```

Another way to enumerate the properties of an object is to use the `Object.keys()` method, which returns an array of the object's own enumerable property names.

एक वस्तुको गुणहरूको गुणना गणना गर्न अर्को तरीका भनेको `वस्तु। किफाई ()` विधि प्रयोग गर्नु हो, जसले वस्तुको आफ्नै असमान सम्पत्ति नामहरूको एर्रे फर्काउँछ।

For example:

उदाहरण को लागी:

```typescript
let object = {
  foo: 'bar',
  baz: 'qux'
};

let properties = Object.keys(object);
properties.forEach(function(property) {
  console.log(property + ': ' + object[property]);
});

// foo: bar
// baz: qux
```
