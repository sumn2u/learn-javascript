# Length

# लम्बाइ

Arrays have a property called `length`, and it's pretty much exactly as it sounds, it's the length of the array.

एरेसँग `लम्बा` भनिने गुण छ, र यो एरेको लम्बाइ हो।

```javascript
let array = [1, 2, 3];

let l = array.length;

// Result: l = 3
```

The length property also sets the number of elements in an array. For example.

लम्बाइ गुणले एरेमा तत्वहरूको संख्या पनि सेट गर्दछ। उदाहरणका लागि:

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2;

console.log(fruits);
// Result: ['Banana', 'Orange']
```

You can also use the `length` property to get the last element of an array by using it as an index. For example:

तपाईँले अनुक्रमणिकाको रूपमा प्रयोग गरेर सरणीको अन्तिम तत्व प्राप्त गर्न `लम्बाइ` गुण पनि प्रयोग गर्न सक्नुहुन्छ। उदाहरणका लागि:

```c
console.log(fruits[fruits.length - 1]); // Result: Orange
```

You can also use the `length` property to add elements to the end of an array. For example:

सरणीको अन्त्यमा तत्वहरू थप्न तपाईँले `लम्बाइ` गुण पनि प्रयोग गर्न सक्नुहुन्छ । उदाहरणका लागि:

```c
fruits[fruits.length] = "Pineapple";
console.log(fruits); // Result: ['Banana', 'Orange', 'Pineapple']
```

{% hint style="info" %}


The `length` property is automatically updated when elements are added or removed from the array.

सरणीबाट तत्वहरू थप्दा वा हटाउँदा `लम्बाइ` गुण स्वचालित रूपमा अद्यावधिक हुन्छ।
{% endhint %}

It's also worth noting that the `length` property is not a method, so you don't need to use parentheses when accessing it. It's simply a property of the array object that you can access like any other object property.

यो पनि टिप्पण योग्य छ कि `लम्बाइ` गुण एक विधि होइन, त्यसैले तपाईं यसलाई पहुँच गर्दा कोष्ठक प्रयोग गर्न आवश्यक छैन।


