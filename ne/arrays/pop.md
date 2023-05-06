# Pop (पप)

The `pop` method removes the last element from an array and returns that element. This method changes the length of the array.

'पप' विधिले एरेबाट अन्तिम तत्व हटाउँदछ र त्यो तत्व फर्काउँछ। यो विधिले सरणीको लम्बाइ परिवर्तन गर्दछ ।

Here's the syntax for using `pop`:

यहाँ 'पप' प्रयोग गर्नका लागि वाक्यरचना छ:

```c
array.pop();
```

For example:

उदाहरणको लागी:

```javascript
let arr = ["one", "two", "three", "four", "five"]; 
arr.pop(); 

console.log(arr); 

// Result: ['one', 'two', 'three', 'four']
```

You can also use the `pop` method in conjunction with a loop to remove all elements from an array. Here's an example of how you might do this:

तपाईं एरेबाट सबै तत्वहरू हटाउन लूपको संयोजनमा 'पप' विधि पनि प्रयोग गर्न सक्नुहुन्छ। तपाईं यो कसरी गर्न सक्नुहुन्छ को एक उदाहरण यहाँ छ:

```c
while (array.length > 0) {
  array.pop();
}

console.log(array); // Result: []
```

{% hint style="warning" %}


The `pop` method only works on arrays, and not on other objects that are similar to arrays such as arguments objects or NodeList objects. If you need to pop elements from one of these types of objects, you will need to convert it to an array first using the `Array.prototype.slice()` method.

`पप` विधिले एरेहरूमा मात्र काम गर्दछ, न कि अन्य वस्तुहरूमा जुन एरेहरू जस्तै तर्क वस्तुहरू वा नोडलिस्ट वस्तुहरूसँग मिल्दोजुल्दो छ। यदि तपाईंलाई यी प्रकारका वस्तुहरूमध्ये कुनै एकबाट तत्वहरू पप गर्न आवश्यक छ भने, तपाईंले यसलाई पहिले `Array.prototype.slice()` विधि प्रयोग गरेर सरणीमा रूपान्तरण गर्न आवश्यक छ।

{% endhint %}
