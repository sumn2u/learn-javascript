# Advanced Operators

# उन्नत अपरेटरहरू

When operators are put together without parenthesis, the order in which they are applied is determined by the _precedence_ of the operators. Multiplication `(*)` and division `(/)` has higher precedence than addition `(+)` and subtraction `(-)`.

अपरेटरहरू कोष्ठक बिना सँगै राखिन्छन्, क्रमबद्ध गरिएको क्रमबद्ध गरिएको क्रमबद्ध गर्नुहोस् अपरेटरहरूको _precedence_ द्वारा निर्धारित गरिन्छ। गुणन `(*)` र डिभिजन `(/)` थप `(-)` (-) `को उच्च प्राथमिकता (-) मा उच्च प्राथमिकता (-)

```javascript
// multiplication is done first, which is then followed by addition
let x = 100 + 50 * 3; // 250
// with parenthesis operations inside the parenthesis are computed first
let y = (100 + 50) * 3; // 450
// operations with the same precedences are computed from left to right
let z = 100 / 50 * 3;
```

Some advanced operators can be used, such as:

केही उन्नत अपरेटर्स प्रयोग गर्न सकिन्छ, जस्तै:

there are several advanced math operators that you can use in your code. Here is a list of some of the main advanced math operators:

त्यहाँ धेरै उन्नत गणित गणनाहरू छन् जुन तपाईं आफ्नो कोडमा प्रयोग गर्न सक्नुहुनेछ। यहाँ केहि मुख्य उन्नत गणना अपरेटरहरू को एक सूची छ:

* **Modulo operator (`%`)**: The modulo operator returns the remainder of a division operation. For example:

* **मोड्युलो अपरेटर (`%`)**: Modulo अपरेटरले एक डिभिजन अपरेशन को बाँकी भाग फिर्ता गर्दछ। उदाहरण को लागी:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

* **Exponentiation operator (\* *)**: The exponentiation operator raises a number to the power of another number. It is a newer operator and is not supported in all browsers, so you may need to use the `Math.pow` function instead. For example:

* **एक्सपेक्टेड अपरेटरेटर (\* *)**: एक्सपोनेशन अपरेटकले अर्को नम्बरको शक्तिलाई एक नम्बर बढाउँदछ। यो एक नयाँ अपरेटर हो र सबै ब्राउजरहरूमा समर्थित छैन, त्यसैले यसको सट्टामा तपाईंले `माथी.पी ,p'pa-'page-p્ર thep प्रकार्य प्रयोग गर्न आवश्यक पर्दछ। उदाहरण को लागी:

```javascript
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
console.log(4 ** 3); // 64
```

* **Increment operator (`++`)**: The increment operator increments a number by one. It can be used as a prefix (before the operand) or a postfix (after the operand). For example:

* **वृद्धि अपरेटर (+ + ``)**: वृद्धि अपरेटरले एक नम्बर बढाउँछ। यो उपसर्ग (अपरेन्डको अघि उपसर्ग) वा पोष्टफिक्स (अपरेन्ड पछि) प्रयोग गर्न सकिन्छ। उदाहरण को लागी:

```javascript
let x = 1;
x++; // x is now 2
++x; // x is now 3
```

* **Decrement operator (`--`)**: The decrement operator decrements a number by one. It can be used as a prefix (before the operand) or a postfix (after the operand). For example:

* **व्यर्थ अपरेटर (`--`)**: डिरेक्स अपरेटरले एक नम्बरले संख्यामा कवच गर्दछ। यो उपसर्ग (अपरेन्डको अघि उपसर्ग) वा पोष्टफिक्स (अपरेन्ड पछि) प्रयोग गर्न सकिन्छ। उदाहरण को लागी:

```javascript
let y = 3;
y--; // y is now 2
--y; // y is now 1
```

* **Math object**: The `Math` object is a built-in object in JavaScript that provides mathematical functions and constants. You can use the methods of the `Math` object to perform advanced math operations, such as finding the square root of a number, calculating the sine of a number, or generating a random number. For example:

* **गणित वस्तु**: जाभास्क्रिप्टमा माथ (`Math`) वस्तु एक निर्मित वस्तु हो जुन गणितीय कार्यहरू र निर्माताहरू प्रदान गर्दछ। तपाईं `मंथन मंथन वस्तुको विधिहरू प्रयोग गर्न सक्नुहुनेछ, जस्तै संख्याको वर्गमूल फेला पार्न, संख्याको साइन, वा अनियमित संख्याको गणना गर्दै। उदाहरण को लागी:

```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sin(0)); // 0
console.log(Math.random()); // a random number between 0 and 1
```

These are just a few examples of the advanced math operators and functions available in JavaScript. There are many more that you can use to perform advanced math operations in your code.

यी केवल उन्नत गणना अपरेटरहरू र जाभास्क्रिप्टमा उपलब्ध कार्यहरू छन्। त्यहाँ धेरै धेरै छन् जुन तपाईं आफ्नो कोडमा उन्नत गणित कार्यहरू गर्न प्रयोग गर्न सक्नुहुनेछ।

{% exercise %}
Use the following advanced operators to perform operations on `num1` and `num2`.

निम्न उन्नत अपरेटरहरू प्रयोग गर्नुहोस् `num nc` र` num23 मा अपरेशनहरू प्रदर्शन गर्न।

{% initial %}
let num1 = 10;
let num2 = 5;

// ++ operator to increment the value of num1.

// ++ अपरेटर ओन्क्शन को मूल्य वृद्धि गर्न।
const result1 =
// -- operator to decrement the value of num2.

// - अपरेटरले एनएमएमएनको मानलाई अस्वीकार गर्न।
const result2 =
//  += operator to add num2 to num1.
const result3 =
// -= operator to subtract num2 from num1.

// - = = अपरेटर NUM1 बाट Number on2 घटाउन।
const result4 =

{% solution %}
let num1 = 10;
let num2 = 5;

// ++ operator to increment the value of num1.

// ++ अपरेटर ओन्क्शन को मूल्य वृद्धि गर्न।

num1++;
const result1 = num1; // 11
// -- operator to decrement the value of num2.

// - अपरेटरले एनएमएमएनको मानलाई अस्वीकार गर्न।
num2--;
const result2 = num2; // 4
//  += operator to add num2 to num1.
num1 += num2;
const result3 = num1 // 15
// -= operator to subtract num2 from num1.

// - = = अपरेटर NUM1 बाट Number on2 घटाउन।
num1 -= num2;
const result4 = num1 // 11

{% validation %}
assert(result1 === 11 && result2 === 4 && result3 === 15 && result4 === 11 );

{% context %}
{% endexercise %}

## Nullish coalescing operator '??'

## nululish coakeing अपरेटरेटर '??'

The `nullish` coalescing operator returns the first argument if it's not `null/undefined`, else the second one. It is written as two question marks `??`. The result of `x ?? y` is:

`nullish` को आयरिंग अपरेटरले पहिलो तर्क फिर्ता गर्दछ यदि यो `null/undefined` को, अन्य एक। यो दुई प्रश्न मार्कको रूपमा लेखिएको छ । `x ?? y` को नतीजा:

* if `x` is defined, then `x`,

* यदि `x` परिभाषित गरिएको छ, त्यसपछि `x`,
* if `y` isn’t defined, then `y`.

{% hint style="info" %}

It's a recent addition to the language and might need polyfills to support old browsers

यो भाषामा भर्खरको थप छ र पुरानो ब्राउजरहरू समर्थन गर्न पोलीफ्लहरू आवश्यक हुन सक्छ
{% endhint %}
