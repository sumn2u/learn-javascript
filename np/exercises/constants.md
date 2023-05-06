# Constants

Constants were introduced in ES6(2015), and use a `const` keyword. Variables that are declared with `const` cannot be reassigned or redeclared.

स्थिरहरू ईएस ६  (2015) मा प्रस्तुत गरिएको थियो, र `कन्स्ट` कीवर्ड प्रयोग गर्दछ। `कन्स्ट` सँग घोषणा गरिएका भेरिएबलहरू पुन: असाइन गर्न वा पुन: परिभाषित गर्न सकिँदैन।

### Example:

```javascript
const VERSION = '1.2';
```

### 📝 Task:

* [ ] Run the program mentioned below and fix the error that you see in the console. Make sure that the code result is `0.9` when it is fixed in the console.

* [ ] तल उल्लिखित कार्यक्रम चलाउनुहोस् र तपाईँले कन्सोलमा देख्नुभएको त्रुटि ठीक पार्नुहोस् । निश्चित गर्नुहोस् कि कोड परिणाम `०.९` हो जब यो कन्सोलमा फिक्स गरिएको छ।

```javascript
const VERSION = '0.7';
VERSION = '0.9';
console.log(VERSION);
```

### 💡 Hints:

* Visit the  [Variables](../basics/variables.md) chapter for more info about const and also look for "_TypeError assignment to constant variable_" in search engines to learn a fix.&#x20;

* कन्स्टको बारेमा थप जानकारीको लागि [भेरिएबल्स](../basics/variables.md) अध्यायमा जानुहोस् र फिक्स सिक्नका लागि खोजी इन्जिनमा "स्थिर चरमा टाइपइरर असाइनमेन्ट" पनि हेर्नुहोस्।
