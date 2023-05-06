# Basic Operators (आधारभूत अपरेटरहरू)

Mathematic operations to numbers can be performed using some basic operators like:

गणितीय अपरेशनहरू नम्बरहरू केहि आधारभूत अपरेटरहरू प्रयोग गरेर गर्न सकिन्छ:

* **Addition operator (`+`)**: The addition operator adds two numbers together. For example:

* **अतिरिक्त अपरेटर (`+`)**:: यअतिरिक्त अपरेटरले दुई नम्बरहरू एकसाथ थप्दछ। उदाहरणका लागि:

```javascript
console.log(1 + 2); // 3
console.log(1 + (-2)); // -1
```

* **Subtraction operator (`-`)**: The subtraction operator subtracts one number from another. For example:

* **घटाउ अपरेटर (`-`)**: घटाउ अपरेटरले एउटा नम्बरलाई अर्कोबाट घटाउँदछ। उदाहरणका लागि:

```javascript
console.log(3 - 2); // 1
console.log(3 - (-2)); // 5
```

* **Multiplication operator (`*`)**: The multiplication operator multiplies two numbers. For example:

* **गुणन अपरेटर (`*` )**: गुणन अपरेटरलाई दुई नम्बर गुणा गर्दछ। उदाहरण को लागी:

```javascript
console.log(2 * 3); // 6
console.log(2 * (-3)); // -6
```

* **Division operator (`/`)**: The division operator divides one number by another. For example:

* **डिभिजन अपरेटर (`/`)**: डिभिजन अपरेटरले एक नम्बरलाई अर्कोले विभाजन गर्दछ। उदाहरणका लागि:

```javascript
console.log(6 / 2); // 3
console.log(6 / (-2)); // -3
```

* **Remainder operator (`%`)**: The remainder operator returns the remainder of a division operation. For example:

* **बाँकी अपरेटर (`%`)**: बाँकी अपरेटरले डिभिजन अपरेशनका बाँकी भाग फिर्ता गर्दछ। उदाहरण को लागी:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

The JavaScript interpreter works from left to right. One can use parentheses just like in math to separate and group expressions: `c = (a / b) + d`

जाभास्क्रिप्ट दोभाषे बायाँबाट दायाँ काम गर्दछ। एकजनाले माईन्ट्स भन्दा अलग र ग्रुप अभिव्यक्तिहरू जस्तै कोष्ठकहरू प्रयोग गर्न सक्दछ: `c = (a / b) + d`

{% hint style="warning" %}

JavaScript uses the `+` operator for both addition and concatenation. Numbers are added whereas strings are concatenated.

जाभास्क्रिप्टले दुबै थपिएको र अनुरूपको लागि `+` अपरेटर प्रयोग गर्दछ। नम्बरहरू थपिन्छन् जबकि तारहरू अनुगमन गरिन्छ।
{% endhint %}

`NaN` is a reserved word indicating that a number is not a legal number, this arises when we perform arithmetic with a non-numeric string will result in `NaN` (Not a Number).

`NaN` एक नम्बर कानूनी संख्या होइन, यो कानूनी संख्या होइन, यो उठ्छ जब हामी एक गैर-संख्यात्मक स्ट्रिङको साथ अंकगणित गर्छौं परिणाम `NaN` (Not a Number)।

```javascript
let x = 100 / "10";
```

The `parseInt` method parses a value as a string and returns the first integer.

पार्सन्ट्र्यान्ट `parseInt` विधिले स्ट्रिंगको रूपमा मान पार्स गर्दछ र पहिलो पूर्णांक फर्काउँछ।

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); //40 
parseInt("He was 40"); //NaN
```

In JavaScript, if we calculate a number outside the largest possible number it returns `Infinity` .

जाभास्क्रिप्टमा, यदि हामी सबैभन्दा ठूलो सम्भावित संख्या बाहिर नम्बर गणना गर्दछौं यो `अनन्तको" फिर्ता गर्दछ।

```javascript
let x =  2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```
{% exercise %}
Use the math operators +, -, *, /, and % to perform the following operations on `num1` and `num2`.

गणित अपरेटरहरू +, -, *,*,, *, / र% प्रयोग गर्नुहोस् `num1` र `num2`" मा निम्न अपरेशनहरू प्रदर्शन गर्न।

{% initial %}
let num1 = 10;
let num2 = 5;

// Add num1 and num2.
let addResult =
// Subtract num2 from num1.
let subtractResult =
// Multiply num1 and num2.
let multiplyResult =
// Divide num1 by num2.
let divideResult =
// Find the remainder num1 is divided by num2.
let reminderResult =

{% solution %}
let num1 = 10;
let num2 = 5;

// Add num1 and num2.
let addResult = (num1 + num2);
// Subtract num2 from num1.
let subtractResult = (num1 - num2);
// Multiply num1 and num2.
let multiplyResult = (num1 * num2);
// Divide num1 by num2.
let divideResult = (num1 / num2);
// Find the remainder num1 is divided by num2.
let reminderResult = (num1 % num2);

{% validation %}
assert(addResult === 15 && subtractResult === 5 && multiplyResult === 50 && divideResult === 2 && reminderResult === 0  );

{% context %}
{% endexercise %}
