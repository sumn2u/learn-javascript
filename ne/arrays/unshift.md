# Unshift (अनशिफ्ट)

The `unshift` method adds new elements sequentially to the start, or front of the array. It modifies the original array and returns the new length of the array. For example.

`अनशिफ्ट` विधिले एरेको सुरुमा, वा अगाडि क्रमिक रूपमा नयाँ तत्वहरू थप्दछ। यसले मूल सरणीलाई परिमार्जन गर्दछ र सरणीको नयाँ लम्बाइ फर्काउँछ। उदाहरणका लागि.

```javascript
let array = [0, 5, 10];
array.unshift(-5);  // 4

// RESULT: array = [-5 , 0, 5, 10];
```

{% hint style="warning" %}


The `unshift()` method overwrites the original array.

`unshift()` विधिले मूल सरणीलाई अधिलेखन गर्दछ।

{% endhint %}

The `unshift` method takes one or more arguments, which represent the elements to be added to the beginning of the array. It adds the elements in the order they are provided, so the first element will be the first element of the array.

`अनशिफ्ट` विधिले एक वा बढी तर्कहरू लिन्छ, जसले सरणीको सुरुमा थपिने तत्वहरूको प्रतिनिधित्व गर्दछ। यसले तत्वहरू प्रदान गरिएको क्रममा थप्दछ, त्यसैले पहिलो तत्व सरणीको पहिलो तत्व हुनेछ।

Here is an example of using `unshift` to add multiple elements to an array:

एरेमा बहुविध तत्वहरू थप्न `अनशिफ्ट` प्रयोग गर्ने उदाहरण यहाँ छ:

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.unshift(-1, 0);
console.log(numbers); // [-1, 0, 1, 2, 3]
console.log(newLength); // 5
```
