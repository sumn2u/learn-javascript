---
chapter: अध्याय ९
pageNumber: ६०
titleIndex: ९.२
---
# परिवर्तनीय

वस्तुहरू र आदिम मानहरू बीचको भिन्नता यो हो कि **हामी वस्तुहरू** परिवर्तन गर्न सक्छौं, जबकि आदिम मानहरू **अपरिवर्तनीय** हुन्।

उदाहरणको लागी:

```javascript
let myPrimitive = "first value";
myPrimitive = "another value";
// myPrimitive now points to another string.
let myObject = { key: "first value" };
myObject.key = "another value";
// myObject points to the same object.
```

तपाईँले डट नोटेसन वा स्क्वायर कोष्ठक नोटेसन प्रयोग गरेर वस्तुको गुण थप्न, परिमार्जन गर्न वा मेट्न सक्नुहुन्छ ।

```javascript
let object = {};
object.foo = 'bar'; // Add property 'foo'
object['baz'] = 'qux'; // Add property 'baz'
object.foo = 'quux'; // Modify property 'foo'
delete object.baz; // Delete property 'baz'
```

{% hint style="warning" %}

आदिम मानहरू (जस्तै संख्या र स्ट्रिङहरू) अपरिवर्तनीय छन्, जबकि वस्तुहरू (जस्तै एरे र वस्तुहरू) परिवर्तनशील छन्।
{% endhint %}
