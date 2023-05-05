# Shift

`shift` deletes the first index of that array and moves all indexes to the left. It changes the original array. Here's the syntax for using `shift`:

`शिफ्टको पहिलो सूचकांक हटाउँछ र सबै अनुक्रमणिकाहरूलाई बाँयामा सार्दछ। यसले मूल एर्रे परिवर्तन गर्दछ। यहाँ सिफ्टनको प्रयोगको लागि anttance छ:

```c
array.shift();
```

For example:&#x20;

```javascript
let array = [1, 2, 3]; 
array.shift(); 

// Result: array = [2,3]
```

You can also use the `shift` method in conjunction with a loop to remove all elements from an array. Here's an example of how you might do this:

तपाईं एर्रेकोबाट सबै तत्वहरू हटाउन `शिफ्टको संयोजनको साथ प्रयोग गर्न सक्नुहुनेछ। यहाँ कसरी तपाईं यो गर्न सक्नुहुन्छ को एक उदाहरण छ:

```c
while (array.length > 0) {
  array.shift();
}

console.log(array); // Result: []
```

{% hint style="warning" %}


The `shift` method only works on arrays, and not on other objects that are similar to arrays such as arguments objects or NodeList objects. If you need to shift elements from one of these types of objects, you will need to convert it to an array first using the `Array.prototype.slice()` method.

`शिफ्टको विधिले केवल एर्रेसमा काम गर्दछ, र अन्य वस्तुहरूमा होइन जुन आरोपमा समान छन् जस्तै तर्कहरू वा नाडिलिस्ट वस्तुहरू। यदि तपाईंलाई यी मध्ये कुनै प्रकारको वस्तुहरूबाट तत्त्वहरू सार्नु आवश्यक छ भने, तपाईंले यसलाई एर्रेलाई पहिलो पटक एर्रे। एर्रोटोटिपेटाकोटिपेटिप () `विधि प्रयोग गर्न आवश्यक पर्दछ।
{% endhint %}
