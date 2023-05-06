# Join (सामेल)

The `join` method, makes an array turn into a string and joins it all together. It does not change the original array. Here's the syntax for using `join`:

`सामेल` विधि, एक सरणी एक स्ट्रिंग मा बारी बनाउँछ र यो सबै एक साथ जोडिन्छ। यसले मूल सरणी परिवर्तन गर्दैन । यहाँ 'सामेल' प्रयोग गर्नका लागि वाक्यरचना छ:

```c
array.join([separator]);
```

The `separator` argument is optional and specifies the character to be used to separate the elements in the resulting string. If omitted, the array elements are separated with a comma (`,`).

`विभाजक (separator)` तर्क वैकल्पिक छ र परिणामी स्ट्रिङमा तत्वहरू अलग गर्न प्रयोग गरिने क्यारेक्टर निर्दिष्ट गर्दछ। यदि छोडियो भने, सरणी तत्वहरू अल्पविराम `(',')` सँग अलग हुन्छन्।

For example:

उदाहरणको लागी:

```javascript
let array = ["one", "two", "three", "four"]; 

console.log(array.join(" ")); 

// Result: one two three four
```

{% hint style="warning" %}


Any separator can be specified but the default one is a comma `(,)`.

कुनै पनि विभाजक निर्दिष्ट गर्न सकिन्छ तर पूर्वनिर्धारित अल्पविराम `(,)` हो।
{% endhint %}

In the above example, a space is used as a separator. You can also use `join` to convert an array-like object (such as an arguments object or a NodeList object) to a string by first converting it to an array using the `Array.prototype.slice()` method:

माथिको उदाहरणमा, एक स्थान विभाजकको रूपमा प्रयोग गरिन्छ। तपाईँले एरे जस्तो वस्तु (जस्तै तर्क वस्तु वा नोडसूची वस्तु) लाई स्ट्रिङमा रूपान्तरण गर्न `सामेल` पनि प्रयोग गर्न सक्नुहुन्छ, यसलाई `Array.prototype.slice()` विधि प्रयोग गरेर सरणीमा रूपान्तरण गरेर:

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(', '));
}

printArguments('a', 'b', 'c'); // Result: "a, b, c"
```
