# Spread

# फैलने

An array or object can be quickly copied into another array or object by using the Spread Operator `(...)`. It allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

स्प्रेड अपरेटर `(...)` प्रयोग गरेर एरे वा वस्तुलाई अर्को सरणी वा वस्तुमा छिटो प्रतिलिपि गर्न सकिन्छ । यसले पुनरावृत्ति योग्य जस्तै सरणीलाई शून्य वा बढी तर्कहरू (प्रकार्य कलहरूका लागि) वा तत्वहरू (एरे शाब्दिकहरूका लागि) अपेक्षित स्थानहरूमा विस्तार गर्न अनुमति दिन्छ, वा वस्तु अभिव्यक्ति शून्य वा अधिक कुञ्जी-मान जोडीहरू (वस्तु शाब्दिकहरूका लागि) अपेक्षित स्थानहरूमा विस्तार गर्न अनुमति दिन्छ।

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

स्प्रेड अपरेटरले केवल आधुनिक ब्राउजरहरूमा काम गर्दछ जुन सुविधालाई समर्थन गर्दछ। यदि तपाईंलाई पुरानो ब्राउजरहरू समर्थन गर्न आवश्यक छ भने, तपाईंले स्प्रेड अपरेटर वाक्यविन्यासलाई समकक्ष ईएस 5 कोडमा रूपान्तरण गर्न बाबेल जस्तो ट्रान्सपिलर प्रयोग गर्न आवश्यक हुनेछ।
{% endhint %}
