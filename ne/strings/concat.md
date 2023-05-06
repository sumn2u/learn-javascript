# Concatenation
# संयोजन

Concatenation involves adding two or more strings together, creating a larger string containing the combined data of those original strings.  The concatenation of a string appends one or more strings to another string.  This is done in JavaScript using the following ways.

संयोजनमा दुई वा दुई भन्दा बढी स्ट्रिङहरू एकसाथ थप्नु समावेश छ, ती मूल स्ट्रिङहरूको संयुक्त डेटा समावेश गर्ने ठूलो स्ट्रिङ सिर्जना गर्दछ।  स्ट्रिङको संयोजनले एक वा एकभन्दा बढी स्ट्रिङलाई अर्को स्ट्रिङमा जोड्दछ।  यो जाभास्क्रिप्टमा निम्न तरिकाहरू प्रयोग गरेर गरिन्छ।

* using the  **`+`** operator
* **'+'** अपरेटर प्रयोग गर्दै
* using the `concat()` method
* `concat()` विधि प्रयोग गर्दै
* using the array `join()` method
* सरणी `join()` विधि प्रयोग गर्दै
* using the template literal (introduced in ES6)
* टेम्प्लेट शाब्दिक प्रयोग गर्दै (ईएस 6 मा प्रस्तुत)


The string `concat()` method accepts the list of strings as parameters and returns a new string after concatenation i.e. combination of all the strings. Whereas the array `join()` method is used to concatenate all the elements present in an array by converting them into a single string.

स्ट्रिङ `concat()` विधिले स्ट्रिङको सूचीलाई प्यारामिटरको रूपमा स्वीकार गर्दछ र संयोजन पछि नयाँ स्ट्रिङ फर्काउँछ अर्थात् सबै स्ट्रिङहरूको संयोजन। जबकि एरे `join()` विधि एरेमा उपस्थित सबै तत्वहरूलाई एकल स्ट्रिङमा रूपान्तरण गरेर संयोजन गर्न प्रयोग गरिन्छ।

The template literal  uses backtick `(``)` and provides an easy way to create multiline strings and perform string interpolation. An expression can be used inside the backtick using `$` sign and curly braces `$(expression}`.

टेम्प्लेट शाब्दिक रूपमा ब्याकटिक `(``)` प्रयोग गर्दछ र मल्टिलाइन स्ट्रिङहरू सिर्जना गर्न र स्ट्रिङ इन्टरपोलेसन प्रदर्शन गर्न सजिलो तरिका प्रदान गर्दछ।`$`चिन्ह र घुंघराले ब्रेसेस`$(अभिव्यक्ति}` प्रयोग गरेर ब्याकटिक भित्र अभिव्यक्ति प्रयोग गर्न सकिन्छ।

```javascript
const icon = '👋';
// using template Strings
`hi ${icon}`;

// using join() Method
['hi', icon].join(' ');

// using concat() Method
''.concat('hi ', icon);

//  using + operator
'hi ' + icon;
// hi 👋
```
