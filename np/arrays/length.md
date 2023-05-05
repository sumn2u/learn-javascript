# Length

# लम्बाइ

Arrays have a property called `length`, and it's pretty much exactly as it sounds, it's the length of the array.

एरेन्सको एक सम्पत्ती छ `लम्बाईको एक सम्पत्ती छ, र यो धेरै राम्रो लाग्छ, यो एर्रेको लम्बाई हो।

```javascript
let array = [1, 2, 3];

let l = array.length;

// Result: l = 3
```

The length property also sets the number of elements in an array. For example.

लम्बाई सम्पत्तीले एर्रेमा तत्वहरूको संख्या पनि सेट गर्दछ। उदाहरण को लागी।

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2;

console.log(fruits);
// Result: ['Banana', 'Orange']
```

You can also use the `length` property to get the last element of an array by using it as an index. For example:

तपाईं `लम्बाइको सम्पत्तीलाई अनुक्रमणिकाको रूपमा प्रयोग गरेर एर्रेको अन्तिम तत्व प्राप्त गर्न सक्नुहुनेछ। उदाहरण को लागी:

```c
console.log(fruits[fruits.length - 1]); // Result: Orange
```

You can also use the `length` property to add elements to the end of an array. For example:

तपाईं एर्रेको अन्त्यमा तत्वहरू थप्न `लम्बाइको सम्पत्ति प्रयोग गर्न सक्नुहुनेछ। उदाहरण को लागी:

```c
fruits[fruits.length] = "Pineapple";
console.log(fruits); // Result: ['Banana', 'Orange', 'Pineapple']
```

{% hint style="info" %}


The `length` property is automatically updated when elements are added or removed from the array.

`लम्बाइको सम्पत्ति स्वचालित रूपमा अपडेट हुन्छ जब तत्वहरू थपियो वा एर्रेबाट हटाइन्छ।
{% endhint %}

It's also worth noting that the `length` property is not a method, so you don't need to use parentheses when accessing it. It's simply a property of the array object that you can access like any other object property.

यो पनि याद गर्न लायकको छ कि `लम्बाईको सम्पत्ति एक विधि हो, त्यसैले यसको पहुँच गर्दा तपाईले कोष्ठता प्रयोग गर्नुपर्दैन। यो केवल एर्रेको वस्तुको सम्पत्ती हो जुन तपाईं कुनै अन्य वस्तु सम्पत्ती जस्तो पहुँच गर्न सक्नुहुनेछ।
