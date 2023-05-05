# Pop

The `pop` method removes the last element from an array and returns that element. This method changes the length of the array.

`पप`` विधिले एर्रेटबाट अन्तिम तत्व हटाउँछ र त्यो तत्व फिर्ता गर्दछ। यस विधिले एर्रेको लम्बाई परिवर्तन गर्दछ।

Here's the syntax for using `pop`:

यहाँ पत्री प्रयोगको लागि anttax छ:

```c
array.pop();
```

For example:

उदाहरण को लागी:

```javascript
let arr = ["one", "two", "three", "four", "five"]; 
arr.pop(); 

console.log(arr); 

// Result: ['one', 'two', 'three', 'four']
```

You can also use the `pop` method in conjunction with a loop to remove all elements from an array. Here's an example of how you might do this:

तपाईं एर्रेबाट सबै तत्वहरू हटाउन एक लुपको साथ पप`` विधि प्रयोग गर्न सक्नुहुनेछ। यहाँ कसरी तपाईं यो गर्न सक्नुहुन्छ को एक उदाहरण छ:

```c
while (array.length > 0) {
  array.pop();
}

console.log(array); // Result: []
```

{% hint style="warning" %}


The `pop` method only works on arrays, and not on other objects that are similar to arrays such as arguments objects or NodeList objects. If you need to pop elements from one of these types of objects, you will need to convert it to an array first using the `Array.prototype.slice()` method.\

`पप`` विधिले केवल एर्रेसमा काम गर्दछ, र अन्य वस्तुहरूमा काम गर्दैन जुन आरोपमा समान तर्कहरू वा नाडलिस्ट वस्तुहरू। यदि तपाईंलाई यी मध्ये कुनै प्रकारको वस्तुहरूबाट पोप तत्वहरू आवश्यक छ भने, तपाईंले यसलाई एर्रेलाई पहिलो पटक "एर्रेग्राटोटिपिपलिपेडिप ()` विधि प्रयोग गर्न आवश्यक पर्दछ। `विधि।`

{% endhint %}
