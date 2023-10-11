---
chapter: अध्याय ४
pageNumber: २८
titleIndex: ४.२
---
# प्रतिस्थापन

`प्रतिस्थापन` विधिले हामीलाई क्यारेक्टर, शब्द वा वाक्यलाई स्ट्रिङले प्रतिस्थापन गर्न अनुमति दिन्छ। उदाहरणका लागि:

```javascript
let str = "Hello World!";
let new_str = str.replace("Hello", "Hi");

console.log(new_str);

// Result: Hi World!
```

{% hint style="warning" %}

[परिमार्जकसँग](../regular-expression.md) नियमित अभिव्यक्तिको सबै उदाहरणहरूमा मान प्रतिस्थापन गर्न सेट गरिएको छ।

{% endhint %}

यसले मान वा नियमित अभिव्यक्तिका लागि स्ट्रिङ खोजी गर्दछ र मान(हरू) प्रतिस्थापन गरिएको नयाँ स्ट्रिङ फर्काउँछ । यसले मूल स्ट्रिङ परिवर्तन गर्दैन। आउनुहोस् विश्वव्यापी केस-असंवेदनशील प्रतिस्थापन उदाहरण हेरौं।

```javascript
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red"); 

console.log(result); 
//Result: Mr red has a red house and a red car 
```

