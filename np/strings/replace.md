# Replace

The `replace` method allows us to replace a character, word, or sentence with a string. For example.

`बदल्नुहोस् विधिले हामीलाई चरित्र, शब्द, वा वाक्यको साथ बदल्न अनुमति दिन्छ। उदाहरण को लागी।

```javascript
let str = "Hello World!";
let new_str = str.replace("Hello", "Hi");

console.log(new_str);

// Result: Hi World!
```

{% hint style="warning" %}


To replace a value on all instances of a [regular expression](../regular-expression.md) with a `g` modifier is set.

[नियमित अभिव्यक्तिको सबै उदाहरणहरूमा मान बदल्न (./ नियमित अभिव्यक्ति] (नियमित -EXPIPPYS.MD.MD) एक `g` परिमार्जनकर्ता सेट गरिएको छ।
{% endhint %}

It searches for a string for a value or a regular expression and returns a new string with the value(s) replaced. It doesn't change the original string. Let's see the global case-insensitive replacement example.

यसले मान वा नियमित अभिव्यक्तिको लागि स्ट्रिको लागि खोजी गर्दछ र मान (हरू) प्रतिस्थापित गर्दछ। यसले मूल स्ट्रिलाई परिवर्तन गर्दैन। विश्वव्यापी केस-असंवेदनशील प्रतिस्थापन उदाहरण हेरौं।

```javascript
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red"); 

console.log(result); 
//Result: Mr red has a red house and a red car 
```

