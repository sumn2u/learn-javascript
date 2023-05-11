# लम्बाइ

एरेसँग `लम्बाइ (length)` भनिने गुण छ, र यो एरेको लम्बाइ हो।

```javascript
let array = [1, 2, 3];

let l = array.length;

// Result: l = 3
```

लम्बाइ गुणले एरेमा तत्वहरूको संख्या पनि सेट गर्दछ। उदाहरणका लागि:

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2;

console.log(fruits);
// Result: ['Banana', 'Orange']
```

तपाईँले अनुक्रमणिकाको रूपमा प्रयोग गरेर सरणीको अन्तिम तत्व प्राप्त गर्न `लम्बाइ` गुण पनि प्रयोग गर्न सक्नुहुन्छ। उदाहरणका लागि:

```c
console.log(fruits[fruits.length - 1]); // Result: Orange
```

सरणी ( एरे) को अन्त्यमा तत्वहरू थप्न तपाईँले `लम्बाइ` गुण पनि प्रयोग गर्न सक्नुहुन्छ । उदाहरणका लागि:

```c
fruits[fruits.length] = "Pineapple";
console.log(fruits); // Result: ['Banana', 'Orange', 'Pineapple']
```

{% hint style="info" %}

सरणीबाट तत्वहरू थप्दा वा हटाउँदा `लम्बाइ` गुण स्वचालित रूपमा अद्यावधिक हुन्छ।
{% endhint %}

यो पनि टिप्पण योग्य छ कि `लम्बाइ` गुण एक विधि होइन, त्यसैले तपाईं यसलाई पहुँच गर्दा कोष्ठक प्रयोग गर्न आवश्यक छैन।


