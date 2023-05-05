# Join

The `join` method, makes an array turn into a string and joins it all together. It does not change the original array. Here's the syntax for using `join`:

`सामूनको विधि, एर्रेको मोडलाई स्ट्रि in मा परिवर्तन गर्दछ र सबै सँगै मिल्छ। यसले मूल एरे परिवर्तन गर्दैन। यहाँ सामिल "को उपयोग गर्न को लागी सिन्ट्याक्स छ:

```c
array.join([separator]);
```

The `separator` argument is optional and specifies the character to be used to separate the elements in the resulting string. If omitted, the array elements are separated with a comma (`,`).

`विभाजक` तर्क वैकल्पिक हो र परिणामस्वरूप परिणामहरूमा तत्वहरू अलग गर्न चरित्र निर्दिष्ट गर्दछ। यदि हटाइयो भने, ए्राई एर्रे तत्त्वहरू अल्पविरामसँग विभाजित गरिन्छ (`,`)।

For example:

उदाहरण को लागी:

```javascript
let array = ["one", "two", "three", "four"]; 

console.log(array.join(" ")); 

// Result: one two three four
```

{% hint style="warning" %}


Any separator can be specified but the default one is a comma `(,)`.

कुनै पनि विभाजक निर्दिष्ट गर्न सकिन्छ तर पूर्वनिर्धारित एक अल्पविराम हो (,) `।
{% endhint %}

In the above example, a space is used as a separator. You can also use `join` to convert an array-like object (such as an arguments object or a NodeList object) to a string by first converting it to an array using the `Array.prototype.slice()` method:

माथिको उदाहरणमा, एक ठाउँ एक विभाजकको रूपमा प्रयोग गरीन्छ। तपाईं `सामूहिक रूपमा एर्रे-जस्तै वस्तुहरू रूपान्तरण गर्न सक्नुहुनेछ (जस्तै तर्क वस्तुहरू वा एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु) को लागी` एर्रेपरोटिपिप .slise.slice () `विधि:

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(', '));
}

printArguments('a', 'b', 'c'); // Result: "a, b, c"
```
