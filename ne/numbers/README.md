# Numbers (संख्याहरू)

JavaScript has **only one type of number** – 64-bit float point. It's the same as Java's `double`. Unlike most other programming languages, there is no separate integer type, so 1 and 1.0 are the same value. Creating a number is easy, it can be done just like for any other variable type using the `var` keyword.

जाभास्क्रिप्टमा **केवल एक प्रकारको नम्बर** - 64-बिट फ्लोट पोइन्ट छ। यो जाभाको `डबल` जस्तै हो। अधिकांश अन्य प्रोग्रामिंग भाषाहरूको विपरीत, त्यहाँ कुनै अलग पूर्णांक प्रकार छैन, त्यसैले १ र १.० समान मान हो। संख्या सिर्जना गर्न सजिलो छ, यो `var (वर)` कुञ्जीशब्द प्रयोग गरेर कुनै पनि अन्य चर प्रकारको लागि जस्तै गर्न सकिन्छ।

Numbers can be created from a constant value:

संख्याहरू स्थिर मानबाट सिर्जना गर्न सकिन्छ।

```javascript
// This is a float:
let a = 1.2;

// This is an integer:
let b = 10;
```

Or from the value of another variable:

वा अर्को भ्यारीएबलको मानबाट।

```javascript
let a = 2;
let b = a;
```

The precision of integers is accurate up to 15 digits and the maximum number is 17.

पूर्णांकको परिशुद्धता १५ अंकसम्म सही हुन्छ र अधिकतम संख्या १७ हुन्छ ।

```javascript
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```

It interprets numeric constants as hexadecimal if they are preceded by `0x`.

यसले संख्यात्मक स्थिरांकलाई हेक्साडेसिमलको रूपमा व्याख्या गर्दछ यदि तिनीहरू `0x` भन्दा पहिले छन्।

```javascript
let z = 0xFF; // 255
```
