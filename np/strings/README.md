# Strings

JavaScript strings share many similarities with string implementations from other high-level languages. They represent text-based messages and data.

जाभास्क्रिप्ट स्ट्रिंगले अन्य उच्च-स्तर भाषाहरूबाट स्ट्रिआर कार्यान्वयनको साथ धेरै समानताहरू साझेदारी गर्दछ। तिनीहरू पाठ-आधारित सन्देशहरू र डाटा प्रतिनिधित्व गर्दछ।

In this course, we will cover the basics. How to create new strings and perform common operations on them.

यस पाठ्यक्रममा हामी आधारभूतहरू छोप्नेछौं। कसरी नयाँ तारहरू सिर्जना गर्ने र उनीहरूमा साझा अपरेशनहरू प्रदर्शन गर्ने।

Here is an example of a string:

यहाँ स्ट्रि of को एक उदाहरण छ:

```
"Hello World"
```

String indexes are zero-based, meaning that starting position of the first character at `0` followed by others in incremental order. &#x20;

स्ट्रिंग अनुक्रमणिका शून्य-आधारित हो, यसको अर्थ बढाउने क्रममा पहिलो चरित्रको सुरूवात गर्नुहोस्। & # X20;

Various methods are supported by string and return a new value. These methods are described below.

विभिन्न विधिहरू स्ट्रिंग द्वारा समर्थित छन् र नयाँ मान फिर्ता गर्नुहोस्। यी विधिहरू तल वर्णन गरिएको छ।

| Name                 | Description                                                                            |

| नाम | वर्णन |
| -------------------- | -------------------------------------------------------------------------------------- |
| `charAt()`           | Returns character at specified index                                                   |

| `trate () | निर्दिष्ट अनुक्रमणिकामा चरित्र फर्काउँछ |
| `charCodeAt()`       | Returns Unicode character at specified index                                           |

| `ChiCodatat () | निर्दिष्ट सूचकांकमा युनिकोड चरित्र फर्काउँछ
| `concat()`           | Returns two or more combined strings                                                   |

| `concat () | दुई वा बढी संयुक्त स्ट्रिंगहरू फर्काउँछ
| `constructor`        | Returns string's constructor function                                                  |

| `निर्माता` | स्ट्रिंगको कन्स्ट्रक्टर प्रकार्य फिर्ता गर्दछ
| `endsWith()`         | Checks if a string ends with a specified value                                         |

| `alsswith () | एक निर्दिष्ट मान संग एक स्ट्रिंग जाँच गर्दछ भने जाँच गर्दछ
| `fromCharCode()`     | Returns Unicode values as characters                                                   |

| `Sawhrchrcode () | चरित्रको रूपमा युनिकोड मानहरू फर्काउँछ
| `includes()`         | Checks if a string contains with a specified value                                     |

| `समावेश () | स्ट्रिंगले निर्दिष्ट मानको साथ समावेश गर्दछ भने जाँच गर्दछ
| `indexOf()`          | Returns the index of its first occurance                                               |

| `अनुक्रमणिका () | यसको पहिलो वास्तविक वास्तविकताको सूचकांक फिर्ता गर्दछ |
| `lastIndexOf()`      | Returns the index of its last occurance                                                |

| `LOWNINEEXOF () | यसको अन्तिम घटनाहरूको सूचकांक फर्काउँछ |
| `length`             | Returns the length of the string                                                       |

| `लम्बाई` | स्ट्रि of को लम्बाई फर्काउँछ |
| `localeCompare()`    | Compares two strings with locale                                                       |

| `लोकेल कम्पनीहरू () | स्थानीय दुई तारहरू लोकेलसँग तुलना गर्दछ |
| `match()`            | Matches a string against a value or regular expression                                 |

| `मिलाउनुहोस् () | मान वा नियमित अभिव्यक्तिको बिरूद्ध स्ट्रि acks मेल खान्छ
| `prototype`          | Used to add properties and method of an object                                         |

| `प्रोटोटाइप` | वस्तुको गुण र विधि थप्न प्रयोग गरियो
| `repeat()`           | Returns new string with number of copies specified                                     |

| `दोहोर्याउनुहोस् () | निर्दिष्ट प्रतिलिपिहरूको संख्याको साथ नयाँ स्ट्रि> फर्काउँछ
| `replace()`          | Returns a string with values replaced by a regular expression or a string with a value |

| `बदल्नुहोस् () | एक नियमित अभिव्यक्ति वा मानको साथ एक स्ट्रिंग को साथ एक स्ट्रि returns फर्काउँछ
| `search()`           | Returns an index based on a string's match against a value or regular expression       |

| `खोजी () | मान वा नियमित अभिव्यक्तिको बिरूद्ध स्ट्रिंगको खेलमा आधारित अनुक्रमणिका फर्काउँछ
| `slice()`            | Returns a string containing part of a string                                           |

| `स्लाइस () | स्ट्रि of को भाग समावेश भएको स्ट्रिमा फर्काउँछ |
| `split()`            | Splits string into array of substrings                                                 |

| `विभाजित () | सब्स्रिंग्स को एर्रे मा स्ट्रिट विभाजित
| `startsWith()`       | Checks strings begining against specifed character                                     |

| `सुरूवात () | निर्दिष्ट चरित्रको बिरूद्ध सुरुवात स्ट्रिंगहरू जाँच गर्दछ
| `substr()`           | Extracts part of string, from start index                                              |

| `सब्सटर () | स्ट्रि of को भाग निकाल्नुहुन्छ, सुरू सूचकांकबाट |
| `substring()`        | Extracts part of string, between two indices                                           |

| `प्रतिस्थापन () | दुई सूचका बीच स्ट्रि of को भाग निकाल्नुहुन्छ,
| `toLocalLowerCase()` | Returns string with lowercase characters using host's locale                           |

| `Tolocolletlaks () | होस्टको लोकेल प्रयोग गरेर लोअरकेस वर्णहरूको साथ स्ट्रिंग फर्काउँछ |
| `toLocalUpperCase()` | Returns string with uppercase characters using host's locale                           |

| `talocaluluplapeap () | होस्टको लोकेल प्रयोग गरेर अपरकेस वर्णहरूको साथ स्ट्रिआर फर्काउँछ
| `toLowerCase()`      | Returns string with lowercase characters                                               |

| `tolvercep () | लोअरकेस क्यारेक्टरहरूको साथ स्ट्रि |
| `toString()`         | Returns string or string object as string                                              |

| `tosting () | स्ट्रिंग वा स्ट्रिंग वस्तु स्ट्रिंगको रूपमा फर्काउनुहोस्
| `toUpperCase()`      | Returns string with uppercase characters                                               |

| `गिचहरू () | अपरकेस वर्णहरूको साथ स्ट्रिआर फर्काउँछ
| `trim()`             | Returns string with removed whitespaces                                                |

| `trim () | हटाएर हटाइएको फ्लासस्पेसहरूको साथ स्ट्रिंग
| `trimEnd()`          | Returns string with removed whitespaces from end                                       |

| `प्रोमोर्न्ड () | अन्त्यदेखि हटाईएको सेतो ज्लासस्पेसहरूको साथ स्ट्रिंग फर्काउँछ
| `trimStart()`        | Returns string with removed whitespaces from start                                     |

| `trimstart () | सुरूबाट हटाइएको व्हाट्सस्पेसहरूको साथ स्ट्रिंग फर्काउँछ |
| `valueOf()`          | Returns primitive value of string or string object                                     |

| `कन्ट्रोफ () | स्ट्रिंग वा स्ट्रिंग वस्तुको आदिम मान फिर्ता गर्दछ

