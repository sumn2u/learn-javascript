# Strings

# स्ट्रिंग्स 

JavaScript strings share many similarities with string implementations from other high-level languages. They represent text-based messages and data.

जाभास्क्रिप्ट स्ट्रिङहरूले अन्य उच्च-स्तरीय भाषाहरूबाट स्ट्रिङ कार्यान्वयनहरूसँग धेरै समानताहरू साझेदारी गर्दछ। तिनीहरूले पाठ-आधारित सन्देशहरू र डेटा प्रतिनिधित्व गर्छन्।

In this course, we will cover the basics. How to create new strings and perform common operations on them.

यस कोर्समा, हामी आधारभूत कुराहरू समावेश गर्नेछौं। नयाँ स्ट्रिङहरू कसरी सिर्जना गर्ने र तिनीहरूमा सामान्य सञ्चालनहरू कसरी प्रदर्शन गर्ने।

Here is an example of a string:

यहाँ एक स्ट्रिंगको उदाहरण छ:

```
"Hello World"
```

String indexes are zero-based, meaning that starting position of the first character at `0` followed by others in incremental order. &#x20;

स्ट्रिङ अनुक्रमणिकाहरू शून्य-आधारित हुन्छन्, जसको अर्थ `०` मा पहिलो क्यारेक्टरको प्रारम्भिक स्थिति र त्यसपछि वृद्धिशील क्रममा अरूहरू हुन्छन्।

Various methods are supported by string and return a new value. These methods are described below.

| Name                 | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| `charAt()`           | Returns character at specified index                                                   |
| `charCodeAt()`       | Returns Unicode character at specified index                                           |
| `concat()`           | Returns two or more combined strings                                                   |
| `constructor`        | Returns string's constructor function                                                  |
| `endsWith()`         | Checks if a string ends with a specified value                                         |
| `fromCharCode()`     | Returns Unicode values as characters                                                   |
| `includes()`         | Checks if a string contains with a specified value                                     |
| `indexOf()`          | Returns the index of its first occurance                                               |
| `lastIndexOf()`      | Returns the index of its last occurance                                                |
| `length`             | Returns the length of the string                                                       |
| `localeCompare()`    | Compares two strings with locale                                                       |
| `match()`            | Matches a string against a value or regular expression                                 |
| `prototype`          | Used to add properties and method of an object                                         |
| `repeat()`           | Returns new string with number of copies specified                                     |
| `replace()`          | Returns a string with values replaced by a regular expression or a string with a value |
| `search()`           | Returns an index based on a string's match against a value or regular expression       |
| `slice()`            | Returns a string containing part of a string                                           |
| `split()`            | Splits string into array of substrings                                                 |
| `startsWith()`       | Checks strings begining against specifed character                                     |
| `substr()`           | Extracts part of string, from start index                                              |
| `substring()`        | Extracts part of string, between two indices                                           |
| `toLocalLowerCase()` | Returns string with lowercase characters using host's locale                           |
| `toLocalUpperCase()` | Returns string with uppercase characters using host's locale                           |
| `toLowerCase()`      | Returns string with lowercase characters                                               |
| `toString()`         | Returns string or string object as string                                              |
| `toUpperCase()`      | Returns string with uppercase characters                                               |
| `trim()`             | Returns string with removed whitespaces                                                |
| `trimEnd()`          | Returns string with removed whitespaces from end                                       |
| `trimStart()`        | Returns string with removed whitespaces from start                                     |
| `valueOf()`          | Returns primitive value of string or string object                                     |


विभिन्न विधिहरू स्ट्रिंग द्वारा समर्थित छन् र नयाँ मान फिर्ता गर्नुहोस्। यी विधिहरू तल वर्णन गरिएको छ।


| नाम | वर्णन |
| -------------------- | -------------------------------------------------------------------------------------- |
| `charAt()`           | निर्दिष्ट गरिएको अनुक्रमणिकामा क्यारेक्टर फर्काउँछ                                                   |
| `charCodeAt()`       | निर्दिष्ट गरिएको अनुक्रमणिकामा युनिकोड क्यारेक्टर फर्काउँछ                                           |
| `concat()`           | दुई वा दुईभन्दा बढी संयुक्त स्ट्रिङ फर्काउँछ                                                   |
| `constructor`        | स्ट्रिङको कन्स्ट्रक्टर प्रकार्य फर्काउँछ                                                  |
| `endsWith()`         | निर्दिष्ट गरिएको मानसँग स्ट्रिङ समाप्त भएमा जाँच गर्दछ                                         |
| `fromCharCode()`     | क्यारेक्टरको रूपमा युनिकोड मान फर्काउँछ                                                   |
| `includes()`         | स्ट्रिङले निर्दिष्ट गरिएको मानसँग समावेश गरेको छ कि छैन जाँच गर्दछ                                     |
| `indexOf()`          | यसको पहिलो घटनाको अनुक्रमणिका फर्काउँछ                                               |
| `lastIndexOf()`      | यसको अन्तिम घटनाको अनुक्रमणिका फर्काउँछ                                                |
| `length`             | स्ट्रिङको लम्बाइ फर्काउँछ                                                       |
| `localeCompare()`    | लोकेलसँग दुई स्ट्रिङ तुलना गर्दछ                                                       |
| `match()`            | मान वा नियमित अभिव्यक्तिसँग स्ट्रिङ मिलान गर्दछ                                 |
| `prototype`          | वस्तुको गुण र विधि थप्न प्रयोग गरियो                                         |
| `repeat()`           | निर्दिष्ट गरिएका प्रतिलिपिहरूको सङ्ख्यासँग नयाँ स्ट्रिङ फर्काउँछ                                     |
| `replace()`          | नियमित अभिव्यक्ति वा मानसँग स्ट्रिङले प्रतिस्थापन गरेको मानसँग स्ट्रिङ फर्काउँछ  |
| `search()`           | मान वा नियमित अभिव्यक्तिविरुद्ध स्ट्रिङको मिलानमा आधारित अनुक्रमणिका फर्काउँछ       |
| `slice()`            | स्ट्रिङको भाग समाविष्ट स्ट्रिङ फर्काउँछ                                           |
| `split()`            | सबस्ट्रिङहरूको सरणीमा स्ट्रिङ विभाजन गर्दछ                                                 |
| `startsWith()`       | निर्दिष्ट क्यारेक्टरविरुद्ध सुरु हुने स्ट्रिङ जाँच गर्दछ                                     |
| `substr()`           | सुरुआत अनुक्रमणिकाबाट स्ट्रिङको भाग निकाल्छ                                              |
| `substring()`        | स्ट्रिङको भाग निकाल्छ, दुई सूचकको बीचमा                                           |
| `toLocalLowerCase()` | होस्टको लोकेल प्रयोग गरेर लोअरकेस क्यारेक्टरसँग स्ट्रिङ फर्काउँछ                           |
| `toLocalUpperCase()` | होस्टको लोकेल प्रयोग गरेर अपरकेस क्यारेक्टरसँग स्ट्रिङ फर्काउँछ                           |
| `toLowerCase()`      | सानो अक्षर क्यारेक्टरसँग स्ट्रिङ फर्काउँछ                                               |
| `toString()`         | स्ट्रिङ वा स्ट्रिङ वस्तुलाई स्ट्रिङको रूपमा फर्काउँछ                                              |
| `toUpperCase()`      | ठूलो अक्षरका साथ स्ट्रिङ फर्काउँछ                                               |
| `trim()`             | हटाइएका सेतो खाली स्थानसँग स्ट्रिङ फर्काउँछ                                                |
| `trimEnd()`          | अन्त्यबाट हटाइएका सेतो खाली स्थानसँग स्ट्रिङ फर्काउँछ                                       |
| `trimStart()`        | सुरुदेखि हटाइएका सेतो खाली स्थानसँग स्ट्रिङ फर्काउँछ                                     |
| `valueOf()`          | स्ट्रिङ वा स्ट्रिङ वस्तुको आदिम मान फर्काउँछ                                     |
