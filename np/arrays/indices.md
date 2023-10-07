---
chapter: अध्याय ६
pageNumber: ५०
titleIndex: ६.११
---
# सूचकांक

तपाइँसँग डेटा तत्वहरूको तपाईंको एरे छ, तर यदि तपाईं एक विशिष्ट तत्व पहुँच गर्न चाहनुहुन्छ भने के हुन्छ? यहीँबाट इन्डेक्स आउँछ । एक **अनुक्रमणिका** ले सरणीमा एक स्थानलाई बुझाउँछ। सूचकांकहरू तार्किक रूपमा एक-एक गरेर प्रगति गर्छन्, तर यो ध्यान दिनुपर्दछ कि एरेमा पहिलो अनुक्रमणिका ० हो, किनकि यो अधिकांश भाषाहरूमा छ। तपाईँले सरणीको अनुक्रमणिकालाई सङ्केत गर्दै हुनुहुन्छ भन्ने सङ्केत गर्न कोष्ठक `[]` प्रयोग गरिन्छ ।

```javascript
// This is an array of strings
let fruits = ["apple", "banana", "pineapple", "strawberry"];

// We set the variable banana to the value of the second element of
// the fruits array. Remember that indices start at 0, so 1 is the
// second element. Result: banana = "banana"
let banana = fruits[1];
```

तपाईँले सरणीमा तत्वको मान सेट गर्न सरणी अनुक्रमणिका पनि प्रयोग गर्न सक्नुहुन्छ ।

```javascript
let array = ['a', 'b', 'c', 'd', 'e'];
//  indices:  0    1    2    3    4
array[4] = 'f';
console.log(array); // Result: ['a', 'b', 'c', 'd', 'f']
```

याद गर्नुहोस् कि यदि तपाईँले सरणीको सीमा भन्दा बाहिरको अनुक्रमणिका प्रयोग गरेर तत्व पहुँच गर्न वा सेट गर्न प्रयास गर्नुभयो भने (जस्तै, ० भन्दा कम वा सरणीको लम्बाइभन्दा बढी वा बराबर अनुक्रमणिका), तपाईँले `अपरिभाषित` मान प्राप्त गर्नुहुनेछ।

```javascript
console.log(array[5]); // Output: undefined
array[5] = 'g';
console.log(array); // Result: ['a', 'b', 'c', 'd', 'f', undefined, 'g']
```
