# Length

# लम्बाइ

जाभास्क्रिप्टमा गुण `.length` प्रयोग गरेर स्ट्रिङमा कति क्यारेक्टरहरू छन् भनेर जान्न सजिलो छ। `लम्बाइ` गुणले स्ट्रिङमा क्यारेक्टरहरूको संख्या फर्काउँछ, खाली स्थान हरू र विशेष क्यारेक्टरहरू सहित।


```javascript

let size = "Our lovely string".length;
console.log(size);
// size: 17

let emptyStringSize = "".length
console.log(emptyStringSize);
// emptyStringSize: 0

```

The length property of an empty string is `0`.

खाली स्ट्रिङको लम्बाइ गुण `०` हो ।

{% hint style="warning" %}


The `length` property is a read-only property, so you cannot assign a new value to it.

`लम्बाइ` गुण पढ्नका लागि मात्र प्रयोग गरिने गुण हो, त्यसैले तपाईँले यसमा नयाँ मान निर्दिष्ट गर्न सक्नुहुन्न ।
{% endhint %}
