# Length

# लम्बाइ

It's easy in Javascript to know how many characters are in a string using the property `.length`. The `length` property returns the number of characters in the string, including spaces and special characters.

जाभास्क्रिप्टमा सजिलो छ कि कति वर्णहरू सम्पत्तीको प्रयोग गरेर कति वर्णहरूमा स्ट्रि in मा छन्। `लम्बाईको सम्पत्तीले स्ट्रिंगमा क्यारेक्टरहरूको संख्या फिर्ता गर्दछ, रिक्त स्थान र विशेष वर्णहरू सहित।

```javascript

let size = "Our lovely string".length;
console.log(size);
// size: 17

let emptyStringSize = "".length
console.log(emptyStringSize);
// emptyStringSize: 0

```

The length property of an empty string is `0`.&#x20;

खाली स्ट्रि of को लम्बाई सम्पत्ती `0` हो र # X20;

{% hint style="warning" %}


The `length` property is a read-only property, so you cannot assign a new value to it.

`लम्बाइको सम्पत्ति एक पढ्ने-मात्र सम्पत्ति हो, त्यसैले तपाईं यसलाई नयाँ मान प्रदान गर्न सक्नुहुन्न।
{% endhint %}
