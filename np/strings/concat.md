# Concatenation

# Concomethation

Concatenation involves adding two or more strings together, creating a larger string containing the combined data of those original strings.  The concatenation of a string appends one or more strings to another string.  This is done in JavaScript using the following ways.

CONCOMBENTITINE दुई वा अधिक तारहरू सँगै जोडिएको छ, ती मूल तारहरूको संयुक्त चरण समावेश गर्दै ठूलो स्ट्रिंग सिर्जना गर्दछ। एक स्ट्रि of को सहकर्मी एक वा बढी तारहरू अर्को स्ट्रि to को लागि थप्दछ। यो निम्न तरिकाहरू प्रयोग गरेर जाभास्क्रिप्टमा गरिन्छ।

* using the  **`+`** operator

* ** `` `` ** अपरेटर
* using the `concat()` method

* `concat ()` विधि प्रयोग गर्दै
* using the array `join()` method

* एर्रे `सामिल ()` विधि प्रयोग गर्दै
* using the template literal (introduced in ES6)

* टेम्प्लेट शाब्दिक प्रयोग गर्दै (ES6 मा परिचय)

The string `concat()` method accepts the list of strings as parameters and returns a new string after concatenation i.e. combination of all the strings. Whereas the array `join()` method is used to concatenate all the elements present in an array by converting them into a single string.&#x20;

स्ट्रिंग `concat ()` विधि प्यारामिटरको सूचीमा राख्दछ र कथितीकरण I.E. को संयोजन पछि एक नयाँ स्ट्रि from हटाउनुहुन्छ। जबकि एरे `" सामेल () `विधिलाई एक एर्रेमा उपस्थित सबै तत्वहरूमा रूपान्तरण गर्नको लागि प्रयोग गरिन्छ। & # X20;

The template literal  uses backtick `(``)` and provides an easy way to create multiline strings and perform string interpolation. An expression can be used inside the backtick using `$` sign and curly braces `$(expression}`.

टेम्पलेट शाब्दिक पृष्ठभूमि ब्याकटिक `(` `)` (``) `` र बहुआउट तारहरू सिर्जना गर्न सजिलो तरीका प्रदान गर्दछ र स्ट्रिंग डिस्पोलेसन प्रदर्शन गर्दछ। एक अभिव्यक्ति ब्याकटिक भित्र प्रयोग गर्न सकिन्छ `$` `` `clind र घुमाउरो ब्रेस` $ (अभिव्यक्ति}}

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
