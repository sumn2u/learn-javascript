---
chapter: अध्याय ६
pageNumber: ४७
titleIndex: ६.८
---
# पुश

अन्तिम अनुक्रमणिकालाई नयाँ थपिएको वस्तु बनाउने सरणीमा निश्चित वस्तुहरू धकेल्न सकिन्छ। यसले एरेको लम्बाइ परिवर्तन गर्दछ र नयाँ लम्बाइ फर्काउँछ।

यहाँ 'पुश' प्रयोग गर्नका लागि वाक्यरचना छ:

```javascript
array.push(element1[, ...[, elementN]]);
```

`element1, ..., elementN` तर्कहरूले एरेको अन्त्यमा थपिने तत्वहरूको प्रतिनिधित्व गर्दछ।

उदाहरण को लागी:

```javascript
let array = [1, 2, 3]; 
array.push(4); 

console.log(array); 

// Result: array = [1, 2, 3, 4]
```

तपाईँले एरे जस्तो वस्तु (जस्तै तर्क वस्तु वा नोडलिस्ट वस्तु) को अन्त्यमा तत्वहरू थप्न `push` पनि प्रयोग गर्न सक्नुहुन्छ, यसलाई `Array.prototype.slice()` विधि प्रयोग गरेर सरणीमा रूपान्तरण गरेर:

```javascript
function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push('d', 'e', 'f');
  console.log(args);
}

printArguments('a', 'b', 'c'); // Result: ["a", "b", "c", "d", "e", "f"]
```

नोट गर्नुहोस् कि `पुश` विधि विधिले मूल एर्रे परिमार्जन गर्दछ। यसले नयाँ एरे सिर्जना गर्दैन।
