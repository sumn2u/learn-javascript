# Push

One can push certain items to an array making the last index the newly added item. It changes the length of an array and returns a new length.

एकले नयाँ थपिएको आईटम बनाउनको लागि अन्तिम सूचकांक बनाउने एर्रेलाई केही वस्तुहरूमा धकेल्न सक्छ। यसले एर्रेको लम्बाई परिवर्तन गर्दछ र नयाँ लम्बाइ फिर्ता गर्दछ।

Here's the syntax for using `push`:

यहाँ anterax k `धक्का को उपयोग गर्न को लागी:

```c
array.push(element1[, ...[, elementN]]);
```

The `element1, ..., elementN` arguments represent the elements to be added to the end of the array.

`तत्त्व 1, ..., एलिमेन्टका तर्कहरू एर्रेको अन्त्यमा तत्वहरू प्रतिनिधित्व गर्दछ।

For example:

उदाहरण को लागी:

```javascript
let array = [1, 2, 3]; 
array.push(4); 

console.log(array); 

// Result: array = [1, 2, 3, 4]
```

You can also use `push` to add elements to the end of an array-like object (such as an arguments object or a NodeList object) by first converting it to an array using the `Array.prototype.slice()` method:

तपाईं एर्रे-जस्तो वस्तुको अन्त्यमा तत्वहरू थप्न `धकेल्दै` धकेल्ने वस्तुहरू (जस्तै एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु वा एक तर्क वस्तु) मा रूपान्तरण गर्नुहोस्

```javascript
function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push('d', 'e', 'f');
  console.log(args);
}

printArguments('a', 'b', 'c'); // Result: ["a", "b", "c", "d", "e", "f"]
```

Note that the `push` method modifies the original array. It does not create a new array.

नोट गर्नुहोस् कि `पुश` विधि विधिले मूल एर्रे परिमार्जन गर्दछ। यसले नयाँ एरे सिर्जना गर्दैन।
