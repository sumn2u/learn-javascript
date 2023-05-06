# Shift

# सिफ्ट

`shift` deletes the first index of that array and moves all indexes to the left. It changes the original array. Here's the syntax for using `shift`:

`सिफ्ट` ले त्यो एरेको पहिलो अनुक्रमणिका मेट्दछ र सबै अनुक्रमणिकाहरू बायाँतिर सार्दछ। यसले मूल सरणी परिवर्तन गर्दछ। यहाँ 'शिफ्ट' प्रयोग गर्नका लागि वाक्यरचना छ:

```c
array.shift();
```

For example:&#x20;
उदाहरणका लागि:
```javascript
let array = [1, 2, 3]; 
array.shift(); 

// Result: array = [2,3]
```

You can also use the `shift` method in conjunction with a loop to remove all elements from an array. Here's an example of how you might do this:

एर्रेबाट सबै तत्वहरू हटाउन तपाईं लूपको संयोजनमा `सिफ्ट` विधि पनि प्रयोग गर्न सक्नुहुन्छ। तपाईं यो कसरी गर्न सक्नुहुन्छ को एक उदाहरण यहाँ छ:


```c
while (array.length > 0) {
  array.shift();
}

console.log(array); // Result: []
```

{% hint style="warning" %}


The `shift` method only works on arrays, and not on other objects that are similar to arrays such as arguments objects or NodeList objects. If you need to shift elements from one of these types of objects, you will need to convert it to an array first using the `Array.prototype.slice()` method.

`shift` विधिले एरेहरूमा मात्र काम गर्दछ, न कि अन्य वस्तुहरूमा जुन एरेहरू जस्तै तर्क वस्तुहरू वा नोडलिस्ट वस्तुहरूसँग मिल्दोजुल्दो छ। यदि तपाईंलाई यी प्रकारका वस्तुहरूमध्ये कुनै एकबाट तत्वहरू स्थानान्तरण गर्न आवश्यक छ भने, तपाईंले यसलाई पहिले `Array.prototype.slice()` विधि प्रयोग गरेर एरेमा रूपान्तरण गर्न आवश्यक छ।
{% endhint %}
