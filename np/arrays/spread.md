# Spread

# फैलने

An array or object can be quickly copied into another array or object by using the Spread Operator `(...)`. It allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

एक एर्रे वा वस्तुलाई चाँडै अर्को एर्रे वा वस्तुमा विस्तृत अपरेटर प्रयोग गरेर प्रतिलिपि गर्न सकिन्छ `(...)`। यसले एर्रोलाई एक एर्रोले विस्तार गर्न अनुमति दिन्छ जहाँ शून्य वा अधिक तर्कहरू (प्रकार्य कलहरूको लागि) वा एर्रे शाब्दिकहरूको लागि) अपेक्षित छ, वा शून्य वा अधिक कुञ्जी मूल्यहरू (वस्तु शाब्दिकहरूको लागि) अपेक्षित छ।

Here are some  examples of it:

यहाँ केहि उदाहरणहरू छन्:

```javascript
let arr = [1, 2, 3, 4, 5]; 

console.log(...arr); 
// Result: 1 2 3 4 5

let arr1;
arr1 = [...arr]; //copies the arr into arr1 

console.log(arr1);    //Result: [1, 2, 3, 4, 5]

arr1 = [6,7];
arr = [...arr,...arr1];

console.log(arr);   //Result: [1, 2, 3, 4, 5, 6, 7]

```

{% hint style="warning" %}


The spread operator only works in modern browsers that support the feature. If you need to support older browsers, you will need to use a transpiler like Babel to convert the spread operator syntax to equivalent ES5 code.

स्प्रेड अपरेटरले मात्र आधुनिक ब्राउजरमा काम गर्दछ जुन सुविधा समर्थन गर्दछ। यदि तपाईंले बुढा ब्राउजरहरूलाई समर्थन गर्न आवश्यक छ भने, बाबेल जस्तै तपाईंले प्रसारण अपरेटरेटर सिन्ट्याक्सलाई रूपान्तरण गर्न रूपान्तरित रूपमा एसपीओ कोडमा रूपान्तरण गर्नको लागि तपाईंले ट्रान्सपेलर प्रयोग गर्नुपर्नेछ।
{% endhint %}
