---
chapter: अध्याय ३
pageNumber: २३
titleIndex: ३.३
---
# उन्नत अपरेटरहरू

जब अपरेटरहरू कोष्ठक बिना एकसाथ राखिन्छ, तिनीहरूलाई लागू गर्ने क्रम अपरेटरहरूको _प्राथमिकता_ द्वारा निर्धारित गरिन्छ। गुणन `(*)` र विभाजन `(/)` को अतिरिक्त `(+)` र घटाउ `(-)` भन्दा बढी प्राथमिकता छ।

```javascript
// multiplication is done first, which is then followed by addition
let x = 100 + 50 * 3; // 250
// with parenthesis operations inside the parenthesis are computed first
let y = (100 + 50) * 3; // 450
// operations with the same precedences are computed from left to right
let z = 100 / 50 * 3;
```

धेरै उन्नत गणित अपरेटरहरू हाम्रो कोडमा प्रयोग गर्न सकिन्छ। यहाँ केही मुख्य उन्नत गणित अपरेटरहरूको सूची छ:

* **मोड्युलो अपरेटर (`%`)**: मोडुलो अपरेटरले विभाजन सञ्चालनको बाँकी भाग फर्काउँछ। उदाहरणका लागि:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

* **एक्सपेक्टेड अपरेटरेटर (\* *)**: एक्सपोनेन्टेसन अपरेटरले अर्को नम्बरको शक्तिमा एक नम्बर उठाउँछ। यो एक नयाँ अपरेटर हो र सबै ब्राउजरहरूमा समर्थित छैन, त्यसैले तपाईले यसको सट्टामा `Math.pow` प्रकार्य प्रयोग गर्न आवश्यक हुन सक्छ। उदाहरणका लागि:

```javascript
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
console.log(4 ** 3); // 64
```

* **इन्क्रिमेन्ट अपरेटर (`++`)**: इन्क्रिमेन्ट अपरेटरले एक-एक गरेर संख्या बढाउँछ। यसलाई उपसर्गको रूपमा प्रयोग गर्न सकिन्छ (ओपरेन्ड भन्दा पहिले) वा पोस्टफिक्स (ओपरेन्ड पछि)। उदाहरणका लागि:

```javascript
let x = 1;
x++; // x is now 2
++x; // x is now 3
```

* **घट्दो अपरेटर (`--`)**: घट्दो अपरेटरले एक-एक गरेर संख्या घटाउँछ। यसलाई उपसर्गको रूपमा प्रयोग गर्न सकिन्छ (ओपरेन्ड भन्दा पहिले) वा पोस्टफिक्स (ओपरेन्ड पछि)। उदाहरणका लागि::

```javascript
let y = 3;
y--; // y is now 2
--y; // y is now 1
```

* **गणित वस्तु**: `म्याथ` वस्तु जाभास्क्रिप्टमा निर्मित वस्तु हो जसले गणितीय प्रकार्यहरू र स्थिरांकहरू प्रदान गर्दछ। तपाईं उन्नत गणित सञ्चालनहरू प्रदर्शन गर्न 'गणित' वस्तुको विधिहरू प्रयोग गर्न सक्नुहुन्छ, जस्तै संख्याको वर्गमूल पत्ता लगाउने, संख्याको साइन गणना गर्ने, वा अनियमित संख्या सिर्जना गर्ने। उदाहरणका लागि:

```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sin(0)); // 0
console.log(Math.random()); // a random number between 0 and 1
```

यी जाभास्क्रिप्टमा उपलब्ध उन्नत गणित अपरेटरहरू र प्रकार्यहरूको केही उदाहरणहरू मात्र हुन्। त्यहाँ धेरै धेरै छन् जुन तपाईं आफ्नो कोडमा उन्नत गणित सञ्चालनहरू प्रदर्शन गर्न प्रयोग गर्न सक्नुहुनेछ।

{% exercise %}
`num1` र `num2` मा सञ्चालन गर्न निम्न उन्नत अपरेटरहरू प्रयोग गर्नुहोस्।

{% initial %}
let num1 = 10;
let num2 = 5;

// ++ operator to increment the value of num1.
const result1 =
// -- operator to decrement the value of num2.
const result2 =
//  += operator to add num2 to num1.
const result3 =
// -= operator to subtract num2 from num1.
const result4 =

{% solution %}
let num1 = 10;
let num2 = 5;

// ++ operator to increment the value of num1.

num1++;
const result1 = num1; // 11
// -- operator to decrement the value of num2.
num2--;
const result2 = num2; // 4
//  += operator to add num2 to num1.
num1 += num2;
const result3 = num1 // 15
// -= operator to subtract num2 from num1.
num1 -= num2;
const result4 = num1 // 11

{% validation %}
assert(result1 === 11 && result2 === 4 && result3 === 15 && result4 === 11 );

{% context %}
{% endexercise %}

## नलीश कोलेसिंग अपरेटर  '??'

नलीश कोलेसिंग अपरेटरले पहिलो तर्क फर्काउँछ यदि यो 'शून्य / अपरिभाषित' छैन भने, अन्यथा दोस्रो । यो दुई प्रश्न चिन्ह `??` को रूपमा लेखिएको छ । `x ?? y` को परिणाम निम्न हुनसकछन् :

* if `x` is defined, then `x`,
* यदि `x` परिभाषित छ भने `x`,

* if `y` isn’t defined, then `y`.
* यदि `y` परिभाषित छैन भने `y`।
{% hint style="info" %}

यो भाषामा भर्खरको थप हो र पुरानो ब्राउजरहरू समर्थन गर्न पोलिफिलको आवश्यकता हुन सक्छ।  

{% endhint %}
