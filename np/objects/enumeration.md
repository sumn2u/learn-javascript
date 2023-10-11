---
chapter: अध्याय ९
pageNumber: ६४
titleIndex: ९.६
---
# गणना (सम्पादन गर्ने)

गणनाले वस्तुको गुणहरू माथि पुनरावृत्ति गर्ने र प्रत्येक गुणको लागि निश्चित कार्य गर्ने प्रक्रियालाई बुझाउँछ। जाभास्क्रिप्टमा वस्तुको गुणहरू गणना गर्ने धेरै तरिकाहरू छन्।

वस्तुको गुणहरू गणना गर्ने एउटा तरिका भनेको 'फोर-इन' लूप प्रयोग गर्नु हो। 'फर-इन' लूपले वस्तुको गणना योग्य गुणहरू माथि स्वेच्छाचारी क्रममा पुनरावृत्ति गर्दछ, र प्रत्येक गुणको लागि यसले कोडको दिइएको ब्लक कार्यान्वयन गर्दछ।

'फोर-इनका लागि' कथनले वस्तुमा सबै सम्पत्ति नामहरू लुप गर्न सक्छ। गणनामा प्रकार्यहरू र प्रोटोटाइप गुणहरू समावेश हुनेछन्।

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

वस्तुको गुणहरू गणना गर्ने अर्को तरिका `Object.keys()` विधि प्रयोग गर्नु हो, जसले वस्तुको आफ्नै गणना योग्य गुण नामहरूको सरणी फर्काउँछ।

उदाहरणको लागी:

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
