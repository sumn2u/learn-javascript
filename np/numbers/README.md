# Numbers

JavaScript has **only one type of number** – 64-bit float point. It's the same as Java's `double`. Unlike most other programming languages, there is no separate integer type, so 1 and 1.0 are the same value. Creating a number is easy, it can be done just like for any other variable type using the `var` keyword.

जाभास्क्रिप्ट छ ** नम्बर केवल एक प्रकारको संख्या ** --64-बिट फ्लोट पोइन्ट। यो जाभाको `डबल` को जस्तै हो। धेरै अन्य प्रोग्रामिंग भाषाहरू विपरीत, त्यहाँ कुनै छुट्टै पूर्णांक प्रकार छैन, त्यसैले 1 र 1.0 समान मूल्य हो। नम्बर सिर्जना गर्न सजिलो छ, यो केवल कुनै पनि अन्य भेरिएबल प्रकारका लागि `-BAM` CORDWord प्रयोग गरेर यस्तै गर्न सकिन्छ।

Numbers can be created from a constant value:

नम्बरहरू स्थिर मानबाट सिर्जना गर्न सकिन्छ:

```javascript
// This is a float:
let a = 1.2;

// This is an integer:
let b = 10;
```

Or from the value of another variable:

वा अर्को भ्यारीएबलको मानबाट:

```javascript
let a = 2;
let b = a;
```

The precision of integers is accurate up to 15 digits and the maximum number is 17.

पूर्णांकहरूको सटीकता 1 15 अंकमा सही छ र अधिकतम संख्या 1 17 हो।

```javascript
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```

It interprets numeric constants as hexadecimal if they are preceded by `0x`.&#x20;

यसले संख्यात्मक घोडर्सहरूलाई हेक्साडेडिमलको रूपमा व्याख्या गर्दछ यदि तिनीहरू `0x` द्वारा पहिले छन्। & # X20;

```javascript
let z = 0xFF; // 255
```
