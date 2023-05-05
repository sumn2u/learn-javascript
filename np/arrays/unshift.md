# Unshift

# Anashift

The `unshift` method adds new elements sequentially to the start, or front of the array. It modifies the original array and returns the new length of the array. For example.

`अनश्मेफ्ट विधिले सुरूवात रूपमा सुरू, वा एर्रेको अगाडि उल्लेखनीय रूपमा थप गर्दछ। यो मूल एरे परिमार्जन गर्दछ र एर्रेको नयाँ लम्बाइ फर्काउँछ। उदाहरण को लागी।

```javascript
let array = [0, 5, 10];
array.unshift(-5);  // 4

// RESULT: array = [-5 , 0, 5, 10];
```

{% hint style="warning" %}


The `unshift()` method overwrites the original array.

`Unashift ()` विधिले मूल एर्रेलाई ओभरराइट गर्दछ।
{% endhint %}

The `unshift` method takes one or more arguments, which represent the elements to be added to the beginning of the array. It adds the elements in the order they are provided, so the first element will be the first element of the array.

`अनश्मेफ्ट विधिले एक वा बढी तर्क लिन्छ, जसले तत्वहरूको प्रतिनिधित्वको सुरूमा जोड्नको लागि प्रतिनिधित्व गर्दछ। यसले तत्वहरू आदेशमा प्रदान गर्दछ तिनीहरू प्रदान गरिएको छ, त्यसैले पहिलो तत्व एर्रेको पहिलो तत्व हुनेछ।

Here is an example of using `unshift` to add multiple elements to an array:

यहाँ एर्रेमा बहुमूल्य तत्वहरू थप्नको लागि यहाँ `अनश्क्षिक प्रयोगको उदाहरण हो:

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.unshift(-1, 0);
console.log(numbers); // [-1, 0, 1, 2, 3]
console.log(newLength); // 5
```
